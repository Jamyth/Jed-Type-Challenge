export type FirstOfArray<T extends any[]> = T extends [infer First, ...infer _] ? First : never;
