import { Equal, Expect } from '@type-challenges/utils';
import { FirstOfArray } from '../../src/easy/FirstOfArray';

it('FirstOfArray', () => {
    type cases = [
        Expect<Equal<FirstOfArray<[3, 2, 1]>, 3>>,
        Expect<Equal<FirstOfArray<[() => 123, { a: string }]>, () => 123>>,
        Expect<Equal<FirstOfArray<[]>, never>>,
        Expect<Equal<FirstOfArray<[undefined]>, undefined>>,
    ];
});
