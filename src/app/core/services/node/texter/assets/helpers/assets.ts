import cheerio from 'cheerio';
import * as path from 'path';
import { getCheerioFromFs } from '@app/core/services/node/texter/assets';

export interface TextExtract {
  strings: string[];
  html: string;
}

const setWrapper = (index: number): string => (
  `<span data-translate="${index}"></span>`
);

export function extractBodyText(cheerioEl: CheerioElement, count: number = 0): string[] {

  let strings: string[] = [];

  searchText(cheerioEl);

  function searchText(cheerioEl: CheerioElement): void {
    cheerio(cheerioEl.children).each((i, item) => {
      if (cheerio(item)[0].type === 'text') {
        if (['script', 'style'].includes(cheerio(item)[0].parent.name)) {
          return;
        }

        if (item.data?.trim()) {
          count += 1;
          cheerio(item).wrap(setWrapper(count));
          const text = cheerio(item).text().replace(/[\s\t ]{2,}/g, ' ');
          strings.push(text);
        }
      } else {
        searchText(cheerio(item)[0]);
      }
    });
  }

  return strings;
}

export function extractPlaceholders(cheerio: CheerioStatic, count: number = 0): string[] {
  const strings: string[] = [];
  cheerio('[placeholder]').each((i, item) => {
    const placeholderName = cheerio(item).attr('placeholder');
    count++;
    cheerio(item).attr('data-placeholder', count.toString());
    cheerio(item).attr('data-placeholder-translate', placeholderName);
    strings.push(placeholderName);
  });
  return strings;
}

export function extractDescription(cheerio: CheerioStatic, count: number = 0): string[] {
  let strings: string[] = [];
  const description = cheerio('[name="description"]');
  count++;
  description.attr('data-description-index', count.toString());
  description.attr('data-description', description.attr('content'));
  strings.push(description.attr('content'));
  return strings;
}

export async function textExtract(folder: string, file: string = 'index.html'): Promise<TextExtract> {
  if (!folder) {
    return;
  }

  const cheerio: CheerioStatic = await getCheerioFromFs(path.resolve(folder, file));

  const html: CheerioElement = cheerio('html')[0];
  let strings: string[];

  strings = extractBodyText(html);
  strings = strings.concat(extractPlaceholders(cheerio, strings.length));
  strings = strings.concat(extractDescription(cheerio, strings.length));

  return {strings, html: cheerio.html()};
}
