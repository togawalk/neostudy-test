const defaultBaseName = '/neostudy-test';

export function addBaseName(url: string, baseName: string = defaultBaseName) {
  return `${baseName}${url}`;
}
