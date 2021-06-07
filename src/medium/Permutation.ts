export type Permutation<U, K = U> = [U] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<U, K>>] : never;
