type ObjectWithType = { type: string };

export type LookUp<U extends ObjectWithType, T extends U['type']> = U extends { type: T } ? U : never;
