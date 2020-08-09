
import cheerio from 'cheerio';
import * as fs from 'fs';

export const getFile = (pathToFile: string): Promise<Buffer> => {
  return new Promise<Buffer>(resolve => {
    fs.readFile(pathToFile, (_, buffer) => resolve(buffer));
  });
};

export const saveFile = (fileName: string, data: any): Promise<void> => {
  return new Promise<void>(resolve => {
    fs.writeFile(fileName, data, _ => resolve());
  });
};

export const getCheerio = (buffer: Buffer): CheerioStatic => cheerio.load(buffer, {decodeEntities: false});

export const getCheerioFromFs = async (pathToFile: string): Promise<CheerioStatic> => {
  const buffer = await getFile(pathToFile);
  return getCheerio(buffer);
};
