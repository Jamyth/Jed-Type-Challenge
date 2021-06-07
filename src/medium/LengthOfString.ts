type ToArray<S extends string, Array extends string[] = []> = S extends `${infer Start}${infer Rest}`
    ? ToArray<Rest, [...Array, Start]>
    : Array;

export type LengthOfString<S extends string> = ToArray<S>['length'];
