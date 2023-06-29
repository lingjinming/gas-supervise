export const createStorage = ({
  keyPrefix = '',
}) => {
  class Storage {
    private keyPrefix?: string;

    constructor() {
      this.keyPrefix = keyPrefix;
    }

    private formateKey(key: string) {
      return `${this.keyPrefix}${key}`.toUpperCase();
    }

    public set(key: string, value: any) {
      try {

        uni.setStorageSync(this.formateKey(key), value);

      } catch (err) {
        throw new Error(`setStorageSync error: ${err}`);
      }
    }


    get<T = any>(key: string, def: any = null): T {
      const val = uni.getStorageSync(this.formateKey(key));
      return val || def;
    }

    /**
    * Delete cache based on key
    * @param {string} key
    * @memberof Cache
    */
    remove(key: string) {
      uni.removeStorageSync(this.formateKey(key));
    }

    /**
    * Delete all caches of this instance
    */
    clear(): void {
      uni.clearStorageSync();
    }

  }

  return new Storage();
}