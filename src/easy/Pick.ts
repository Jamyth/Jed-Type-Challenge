export type Pick<T extends object, K extends keyof T> = { [Key in K]: T[Key] };
