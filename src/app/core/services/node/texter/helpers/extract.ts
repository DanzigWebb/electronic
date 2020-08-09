import * as path from 'path';
import { TextExtract, textExtract } from '@app/core/services/node/texter/helpers/assets';
import { createExcelBuffer } from '@app/core/services/node/texter/helpers/excel';
import { saveFile } from '@app/core/services/node/texter/assets';

export async function extractTextFromHtml(pathToHtml: string): Promise<any> {
  const folder = path.dirname(pathToHtml);
  const folderName = path.basename(folder);
  const fileName = path.basename(pathToHtml);

  const {strings, html}: TextExtract = await textExtract(folder, fileName);
  await saveFile(path.resolve(folder, `${folderName}.xlsx`), createExcelBuffer(strings, html));
}
