// This implementation has limit, as ts type recursion has limit count

export enum Comparison {
    Greater,
    Equal,
    Lower,
}

type isNegative<N extends number> = `${N}` extends `-${infer _}` ? true : false;

type Absolute<N extends number> = `${N}` extends `-${infer U}` ? U : `${N}`;

type Recursion<A extends string, B extends string, Accumulated extends any[] = []> =
    `${Accumulated['length']}` extends `${A}`
        ? Comparison.Lower
        : `${Accumulated['length']}` extends `${B}`
        ? Comparison.Greater
        : Recursion<A, B, [...Accumulated, any]>;

export type Comparator<A extends number, B extends number> = A extends B
    ? Comparison.Equal
    : isNegative<A> extends true
    ? isNegative<B> extends true
        ? Recursion<Absolute<B>, Absolute<A>>
        : Comparison.Lower
    : isNegative<B> extends true
    ? Comparison.Greater
    : Recursion<`${A}`, `${B}`>;
