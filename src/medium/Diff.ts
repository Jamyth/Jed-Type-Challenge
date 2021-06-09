export type Diff<A extends object, B extends object> = {
    [K in Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>]: K extends keyof A
        ? A[K]
        : K extends keyof B
        ? B[K]
        : never;
};
