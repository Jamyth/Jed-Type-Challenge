export type AppendArgument<Fn, A> = Fn extends (...args: infer Param) => infer R
    ? (...args: [...Param, A]) => R
    : never;
