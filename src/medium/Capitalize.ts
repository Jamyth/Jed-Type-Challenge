export type Capitalize<String extends string> = String extends `${infer Start}${infer Rest}`
    ? `${Uppercase<Start>}${Rest}`
    : String;
