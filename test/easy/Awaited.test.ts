import { Equal, Expect, ExpectFalse } from '@type-challenges/utils';
import { Awaited } from '../../src/easy/Awaited';

it('Exclude', () => {
    type X = Promise<string>;
    type Y = Promise<{ field: number }>;

    type cases = [
        Expect<Equal<Awaited<X>, string>>,
        Expect<Equal<Awaited<Y>, { field: number }>>,
        ExpectFalse<Equal<Awaited<number>, number>>,
    ];
});
