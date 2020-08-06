export interface FileType {
  trigger?: string[];
  icon: string;
  type: string;
}

export interface IFile extends FileType {
  name: string;
  absolutePath: string;
  lastModifier: Date;
  sort: number
}
