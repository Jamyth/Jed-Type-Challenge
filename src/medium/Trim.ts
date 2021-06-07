export type Trim<Str extends string> = Str extends `${infer Start}${infer String}`
    ? Start extends ' ' | '\n' | '\t'
        ? Trim<String>
        : Str extends `${infer Rest} ` | `${infer Rest}\n` | `${infer Rest}\t`
        ? Trim<Rest>
        : Str
    : Str;
