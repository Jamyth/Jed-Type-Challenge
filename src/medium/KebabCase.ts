export type KebabCase<S extends string> = S extends `${infer Char}${infer String}`
    ? String extends Uncapitalize<String>
        ? `${Uncapitalize<Char>}${KebabCase<String>}`
        : `${Uncapitalize<Char>}-${KebabCase<Uncapitalize<String>>}`
    : S;
