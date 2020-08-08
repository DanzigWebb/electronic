import { FileType, fileTypes, IFile } from './types';
import { junk } from './junk';
import * as fs from 'fs';
import * as path from 'path';

export const checkFolderFiles = (pathToLand: string): IFile[] => {
  const folderPath: string = path.join(pathToLand);
  const filesInPath: string[] = fs.readdirSync(folderPath).filter(junk.not);
  const defaultType = {icon: 'file-question', type: 'undefined'};
  const getFilType = (extname: string): FileType => fileTypes.find(type => type.trigger.includes(extname)) || defaultType;

  return filesInPath.map((item) => {
    const fileExtname = path.extname(item);
    const absolutePath = path.join(folderPath, item);
    const lastModifier = fs.statSync(path.resolve(folderPath, item)).mtime;
    const type = getFilType(fileExtname);
    const sort = type.type === 'folder' ? 0 : 1;

    return {name: item, absolutePath, lastModifier, sort, ...type};
  });
}
