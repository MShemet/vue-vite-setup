export function emailValidation(email: string): boolean {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

  return emailPattern.test(email);
}

export function urlValidation(string: string): boolean {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}

type SimpleDataObject = {
  [K: string]: string | Blob;
};

export function toFormData(obj: SimpleDataObject): FormData {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, val]) => formData.append(key, val));

  return formData;
}

export enum BROWSER_TYPE {
  chrome = 'chrome',
  firefox = 'firefox',
  safari = 'safari',
  opera = 'opera',
  edge = 'edge',
}

export function detectBrowser(): BROWSER_TYPE | null {
  const { userAgent } = navigator;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    return BROWSER_TYPE.chrome;
  }

  if (userAgent.match(/firefox|fxios/i)) {
    return BROWSER_TYPE.firefox;
  }

  if (userAgent.match(/safari/i)) {
    return BROWSER_TYPE.safari;
  }

  if (userAgent.match(/opr\//i)) {
    return BROWSER_TYPE.opera;
  }

  if (userAgent.match(/edg/i)) {
    return BROWSER_TYPE.edge;
  }

  return null;
}

export function createCustomList<T>(
  itemsCount: number,
  cb: (n: number) => T
): T[] {
  return [...Array(itemsCount)].map((_, i) => cb(i));
}
