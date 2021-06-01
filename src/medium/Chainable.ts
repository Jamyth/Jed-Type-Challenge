export type Chainable<T = object> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>;
    get(): T;
};
