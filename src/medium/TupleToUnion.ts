type Recur<Tuple extends readonly any[], Union = never> = Tuple extends [infer K, ...infer Rest]
    ? Recur<Rest, Union | K>
    : Union;

export type TupleToUnion<T extends readonly any[]> = Recur<T>;

// Cleanest Solution
// export type TupleToUnion<T extends readonly any[]> = T[number]
