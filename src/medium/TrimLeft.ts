export type TrimLeft<Str extends string> = Str extends `${infer Start}${infer String}`
    ? Start extends ' ' | '\n' | '\t'
        ? TrimLeft<String>
        : Str
    : Str;
