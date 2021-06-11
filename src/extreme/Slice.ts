type GenerateAnyArray<Length extends number, Accumulated extends any[] = []> = Accumulated['length'] extends Length
    ? Accumulated
    : GenerateAnyArray<Length, [...Accumulated, any]>;

type GenerateNegativeArray<
    Length extends number,
    N extends number,
    AccumulatedArray extends any[] = GenerateAnyArray<Length>,
    NegativeArray extends any[] = [],
> = `${N}` extends `-${NegativeArray['length']}`
    ? AccumulatedArray
    : AccumulatedArray extends [infer _, ...infer Rest]
    ? GenerateNegativeArray<Length, N, Rest, [any, ...NegativeArray]>
    : [];

type isNegative<N extends number> = `${N}` extends `-${infer _}` ? true : false;

type Recursion<Target extends any[], StartArray extends any[], EndArray extends any[]> = Target extends [
    infer First,
    ...infer Rest
]
    ? StartArray extends [infer _, ...infer Start]
        ? EndArray extends [infer _, ...infer End]
            ? Recursion<Rest, Start, End>
            : []
        : EndArray extends [infer _, ...infer RestEnd]
        ? [First, ...Recursion<Rest, [], RestEnd>]
        : []
    : [];

export type Slice<Array extends any[], StartIndex extends number = 0, EndIndex extends number = Array['length']> =
    Recursion<
        Array,
        isNegative<StartIndex> extends true
            ? GenerateNegativeArray<Array['length'], StartIndex>
            : GenerateAnyArray<StartIndex>,
        isNegative<EndIndex> extends true
            ? GenerateNegativeArray<Array['length'], EndIndex>
            : GenerateAnyArray<EndIndex>
    >;

type Arr = [1, 2, 3, 4, 5];
type R = Slice<Arr, 0, 4>;
