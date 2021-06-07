export type CamelCase<S extends string> = S extends `${infer Left}-${infer Char}${infer Right}`
    ? Char extends '-'
        ? `${Left}-${CamelCase<`-${Right}`>}`
        : Char extends Uppercase<Char>
        ? `${Left}-${Char}${CamelCase<Right>}`
        : `${Left}${Uppercase<Char>}${CamelCase<Right>}`
    : S;
