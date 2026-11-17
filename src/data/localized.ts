export type Locale = "es" | "en";

export type Localized<T> = Record<Locale, T>;

export function localized<T>(es: T, en: T): Localized<T> {
  return { es, en };
}
