export type Merge<F extends object, S extends object> = {
    [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[Exclude<K, keyof S>];
};
