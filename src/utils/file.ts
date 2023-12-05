const readFile = async (path: string): Promise<string> => {
  return Bun.file(path).text();
};

const readMultilineFile = async (path: string): Promise<string[]> =>
  (await readFile(path))
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

export { readFile, readMultilineFile };
