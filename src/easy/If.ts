export type If<Bool extends boolean, T, F> = Bool extends true ? T : F;
