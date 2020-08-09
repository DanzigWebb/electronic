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

const typeOfFiles = {
  default: [''],
  img:     ['.jpg', '.png', '.svg', '.ico'],
  video:   ['.mov', '.jpeg', '.mp4'],
  html:    ['.html'],
  php:     ['.php'],
  js:      ['.js'],
  table:   ['.xlsx'],
  zip:     ['.zip', '.rar'],
  css:     ['.css', '.sass', '.scss'],
  font:    ['.woff', '.woff2', '.eot', '.ttf']
};

export const fileTypes: FileType[] = [
  {trigger: typeOfFiles.default, icon: 'folder',             type: 'folder'},
  {trigger: typeOfFiles.img,     icon: 'file-image-outline', type: 'image'},
  {trigger: typeOfFiles.video,   icon: 'file-video',         type: 'video'},
  {trigger: typeOfFiles.html,    icon: 'language-html5',     type: 'html'},
  {trigger: typeOfFiles.php,     icon: 'language-php',       type: 'php'},
  {trigger: typeOfFiles.js,      icon: 'nodejs',             type: 'js'},
  {trigger: typeOfFiles.css,     icon: 'language-css3',      type: 'css'},
  {trigger: typeOfFiles.zip,     icon: 'folder-zip',         type: 'zip'},
  {trigger: typeOfFiles.table,   icon: 'file-table-box',     type: 'table'},
  {trigger: typeOfFiles.font,    icon: 'font-awesome',       type: 'font'}
];

