type StorageKey = 'todos' | 'darkMode';

export default class Generator {
  private readonly key: string;

  constructor(key: StorageKey) {
    this.key = key
    !this.load() && this.save();
  }

  save<T>(data: T | null = null) {
    return localStorage.setItem(this.key, JSON.stringify(data));
  }

  load() {
    return JSON.parse(localStorage.getItem(this.key) as string);
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}