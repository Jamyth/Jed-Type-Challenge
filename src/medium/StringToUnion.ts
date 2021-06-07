type StringToArray<S extends string, Array extends string[] = []> = S extends `${infer Start}${infer Rest}`
    ? StringToArray<Rest, [...Array, Start]>
    : Array;

export type StringToUnion<T extends string> = StringToArray<T>[number];
