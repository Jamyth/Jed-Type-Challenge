export type Absolute<T extends number | string | bigint> = `${T}` extends `${infer U}`
    ? U extends `-${infer Abs}`
        ? Abs
        : U
    : never;
