type Equal<X, Y> = (<T>() => T extends X ? true : false) extends <T>() => T extends Y ? true : false ? true : false;

type NonReadonly<T extends object> = { -readonly [K in keyof T]: T[K] };

export type GetReadonlyKeys<T> = T extends object
    ? { [K in keyof T]-?: Equal<{ [k in K]: T[K] }, NonReadonly<{ [k in K]: T[K] }>> extends true ? never : K }[keyof T]
    : T;
