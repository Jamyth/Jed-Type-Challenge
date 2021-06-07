import { LengthOfString } from '../../src/medium/LengthOfString';
import { Equal, Expect } from '@type-challenges/utils';

it('LengthOfString', () => {
    type cases = [
        Expect<Equal<LengthOfString<''>, 0>>,
        Expect<Equal<LengthOfString<'kumiko'>, 6>>,
        Expect<Equal<LengthOfString<'reina'>, 5>>,
        Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
    ];
});
