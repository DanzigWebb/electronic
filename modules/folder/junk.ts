const blacklist = [

  '^npm-debug\\.log$',
  '^\\..*\\.swp$',

  '^\\.git$',
  '^\\.gitignore$',

  '^\\.DS_Store$',
  '^\\.AppleDouble$',
  '^\\.LSOverride$',
  '^Icon\\r$',
  '^\\._.*',
  '^\\.Spotlight-V100(?:$|\\/)',
  '\\.Trashes',
  '^__MACOSX$',

  '~$',

  '^Thumbs\\.db$',
  '^ehthumbs\\.db$',
  '^Desktop\\.ini$',
  '@eaDir$'
];

const regex = new RegExp(blacklist.join('|'));
export const junk = {
  is:  (filename) => regex.test(filename),
  not: (filename) => !junk.is(filename)
};


