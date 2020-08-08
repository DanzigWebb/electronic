import { Pipe, PipeTransform } from '@angular/core';
import { IFile } from '../../../core/services/folder/helpers/types';

@Pipe({
  name: 'folderSearch'
})
export class FolderSearchPipe implements PipeTransform {

  transform(folders: IFile[], search: string): unknown {
    if (!search) {
      return folders;
    }

    return folders.filter(folder => folder.name.toLowerCase().includes(search.toLowerCase()));
  }

}
