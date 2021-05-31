export type Readonly<T> = T extends object ? { readonly [K in keyof T]: T[K] } : T;
