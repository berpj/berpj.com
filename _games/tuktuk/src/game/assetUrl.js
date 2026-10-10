/** Resolve public assets under the Vite deployment base, including /tuktuk/. */
export function assetUrl(path) {
  return `${import.meta.env?.BASE_URL || '/'}${path.replace(/^\/+/, '')}`;
}
