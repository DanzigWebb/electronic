import * as path from 'path';
import * as fs from 'fs';
import { ipcMain } from 'electron';
import { junk } from './junk';
import { fileTypes } from './types';
import { FileType, IFile } from './folder';

export const ipcFolder = () => {
  ipcMain.on('landingSearch', (event, pathToFolder: string) => {
    event.reply('folderCheck', checkFolderFiles(pathToFolder));
  });
};

function checkFolderFiles(pathToLand: string): IFile[] {
  const folderPath: string = path.join(pathToLand);
  const filesInPath: string[] = fs.readdirSync(folderPath).filter(junk.not);

  const defaultType = {icon: 'file-question', type: 'undefined'};
  const getFilType = (extname: string): FileType => fileTypes.find(type => type.trigger.includes(extname)) || defaultType;

  const allFiles: IFile[] = filesInPath.map((item) => {
    const fileExtname = path.extname(item);
    const absolutePath = path.join(folderPath, item);
    const lastModifier = fs.statSync(path.resolve(folderPath, item)).mtime;
    const type = getFilType(fileExtname);
    const sort = type.type === 'folder' ? 0 : 1;

    return {name: item, absolutePath, lastModifier, sort, ...type};
  });

  return allFiles.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  }).sort(function (a, b) {
    if (a.sort > b.sort) {
      return 1;
    }
    if (a.sort < b.sort) {
      return -1;
    }
    return 0;
  });
}
