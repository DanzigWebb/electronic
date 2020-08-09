import xlsx from 'node-xlsx';

const splicedHtml = (html: string[], output = []) => {
  const spliced = html;
  const interval = 3000;
  output.push([spliced.splice(0, interval).join('')]);

  if (spliced.length > 0) {
    splicedHtml(spliced, output);
  }

  return output;
};

export function createExcelBuffer(strings: string[], html: string): ArrayBuffer {
  const excelData = strings.map(str => [str]);
  const htmlData = splicedHtml(html.split(''));

  return xlsx.build([
    {name: 'strings', data: excelData},
    {name: 'html', data: htmlData}
  ]);
}
