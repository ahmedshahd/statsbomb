export function convertToValidUrlPath(text: string): string {
  
  const lowercaseText: string = text.toLowerCase();

  const urlPath: string = lowercaseText.replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

  return urlPath;
}
