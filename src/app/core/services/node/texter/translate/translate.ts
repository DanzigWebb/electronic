import * as path from 'path';
import xlsx from 'node-xlsx';
import { getCheerio, saveFile } from '@app/core/services/node/texter/assets';

let errorRows: number = 0;

export async function translateTextFromExel(pathToHtml) {
  errorRows = 0;

  const html: string = xlsx.parse(pathToHtml)[1].data.join('');

  const textArr: string[][] = xlsx.parse(pathToHtml)[0].data;
  const strings: string[] = textArr
    .map(([str]) => str)
    .filter(str => str);

  const cheerio = getCheerio(html);

  cheerio('title').text(strings[0]);
  translateBody(cheerio, strings);
  translateDescription(cheerio, strings);
  translatePlaceholders(cheerio, strings);

  await saveFile(setOutputName(pathToHtml), cheerio.html());
}

function setOutputName(pathToHtml: string): string {
  const Store = require('electron-store');
  const store = new Store({name: 'settings'});

  function getOutputName() {
    return store.get('settings.outputName')
      ? store.get('settings.outputName')
      : 'translation.html';
  }

  const getDir = path.dirname(pathToHtml);

  return path.resolve(getDir, getOutputName());
}

function translateBody($: CheerioStatic, strings: string[]) {
  $('[data-translate]').each((index, item) => {
    const num: number = +$(item).attr('data-translate');
    const row = ` ${strings[num - 1]}`;
    if (!row) {
      errorRows += 1;
    }
    $(item).replaceWith(row);
  });
}

function translateDescription($: CheerioStatic, strings: string[]) {
  const description = $('[name="description"]');
  const descriptionIndex: number = +description.attr('data-description-index');
  const row = strings[descriptionIndex - 1];
  description.attr('content', row);
  if (!row) {
    errorRows += 1;
  }
  description.removeAttr('data-description-index');
  description.removeAttr('data-description');
}

function translatePlaceholders($: CheerioStatic, strings: string[]) {
  $('[data-placeholder]').each(function () {
    const num = +$(this).attr('data-placeholder');
    const row = strings[num - 1];
    if (!row) {
      errorRows++;
    }
    $(this).attr('placeholder', row);
    $(this).removeAttr('data-placeholder');
    $(this).removeAttr('data-placeholder-translate');
  });
}
