export type LastOfArray<T extends any[]> = T extends [...infer _, infer R] ? R : never;
