export type ReturnType<Fn> = Fn extends (...args: any[]) => infer U ? U : never;
