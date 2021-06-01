import { LastOfArray } from '../../src/medium/LastOfArray';
import { Equal, Expect } from '@type-challenges/utils';

it('LastOfArray', () => {
    type cases = [
        Expect<Equal<LastOfArray<[3, 2, 1]>, 1>>,
        Expect<Equal<LastOfArray<[() => 123, { a: string }]>, { a: string }>>,
    ];
});
