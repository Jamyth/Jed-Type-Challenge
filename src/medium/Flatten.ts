export type Flatten<Array extends any[]> = Array extends [infer Start, ...infer Rest]
    ? Start extends any[]
        ? Flatten<[...Start, ...Rest]>
        : [Start, ...Flatten<Rest>]
    : Array;
