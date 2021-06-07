export type AppendToObject<T extends object, U extends string, V> = {
    [K in keyof T | U]: K extends U ? V : T[Exclude<K, U>];
};
