export type QueryStringParser<T extends string> = T extends `${infer FirstPair}&${infer Rest}`
    ? {
          [P in
              | keyof QueryStringParser<FirstPair>
              | keyof QueryStringParser<Rest>]: P extends keyof QueryStringParser<FirstPair>
              ? P extends keyof QueryStringParser<Rest>
                  ? QueryStringParser<FirstPair>[P] extends QueryStringParser<Rest>[P]
                      ? QueryStringParser<Rest>[P]
                      : QueryStringParser<Rest>[P] extends [infer A, ...infer B]
                      ? QueryStringParser<FirstPair>[P] extends [A, ...B][number]
                          ? [A, ...B]
                          : [QueryStringParser<FirstPair>[P], A, ...B]
                      : [QueryStringParser<FirstPair>[P], QueryStringParser<Rest>[P]]
                  : QueryStringParser<FirstPair>[P]
              : P extends keyof QueryStringParser<Rest>
              ? QueryStringParser<Rest>[P]
              : never;
      }
    : T extends `${infer Key}=${infer Value}`
    ? { [P in Key]: Value }
    : T extends ''
    ? {}
    : { [K in T]: true };

type R = QueryStringParser<'k1&k1&k1=false&k2&k1=3&k1'>;
