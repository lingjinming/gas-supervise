import { createStorage } from './storageCache'

export const storage = createStorage({});


export const setCache = (key: string, value: any): void => {
  storage.set(key,value);
}

export function getCache<T = any>(key: string): T {
  return storage.get<T>(key);
}

export function removeCache(key: string): void {
  return storage.remove(key);
}

export function clearCache(): void {
  return storage.clear();
}
