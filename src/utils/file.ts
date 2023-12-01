const readMultilineFile = async (path: string): Promise<string[]> => {
  const file = await Bun.file(path).text();

  return file
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
};

export { readMultilineFile };
