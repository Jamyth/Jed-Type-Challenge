export type Readonly<T, K extends keyof T = keyof T> = Omit<T, K> & { readonly [Key in K]: T[Key] };
