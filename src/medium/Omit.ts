export type Omit<T extends object, K extends keyof T> = { [Key in keyof T as Key extends K ? never : Key]: T[Key] };

type A = Omit<{ a: string }, 'a'>;
