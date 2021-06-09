export type QueryStringParser<T extends string> = T extends `${infer Key}=${infer Value}&${infer Rest}`
    ? {
          [K in Key | keyof QueryStringParser<Rest>]: K extends Key
              ? Value extends QueryStringParser<Rest>[K]
                  ? Value
                  : [Value, QueryStringParser<Rest>[K]]
              : QueryStringParser<Rest>[K];
      }
    : T extends `${infer FirstKey}&${infer SecondKey}`
    ? SecondKey extends `${infer Key}=${infer Value}`
        ? { [K in FirstKey | Key]: K extends Key ? Value : true }
        : { [K in FirstKey | SecondKey]: true }
    : T extends `${infer Key}=${infer Value}`
    ? { [K in Key]: Value }
    : T extends ''
    ? {}
    : { [Key in T]: true };

type R = QueryStringParser<'k1&k2=v2'>;
