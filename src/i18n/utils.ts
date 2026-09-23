import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'zh') {
    return 'zh';
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang], params?: Record<string, string | number>): string {
    const dict = ui[lang] || ui[defaultLang];
    let text: string = dict[key] || ui[defaultLang][key] || key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return text;
  };
}

export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  // Normalize pathname to ensure leading slash and no trailing slash unless root
  let cleanPath = pathname.trim();
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  // Remove trailing slash if not root
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const isZh = cleanPath === '/zh' || cleanPath.startsWith('/zh/');
  const basePath = isZh ? (cleanPath === '/zh' ? '/' : cleanPath.slice(3)) : cleanPath;

  if (targetLang === 'zh') {
    return basePath === '/' ? '/zh' : `/zh${basePath}`;
  }

  // targetLang === 'en'
  return basePath;
}

export function formatDate(date: Date | string, lang: Lang, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
  const defaultOptions: Intl.DateTimeFormatOptions =
    lang === 'zh'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: 'short', day: 'numeric' };

  return new Intl.DateTimeFormat(locale, options || defaultOptions).format(d);
}
