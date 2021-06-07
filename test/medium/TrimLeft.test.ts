import { TrimLeft } from '../../src/medium/TrimLeft';
import { Equal, Expect } from '@type-challenges/utils';

it('TrimLeft', () => {
    type cases = [
        Expect<Equal<TrimLeft<'str'>, 'str'>>,
        Expect<Equal<TrimLeft<' str'>, 'str'>>,
        Expect<Equal<TrimLeft<'     str'>, 'str'>>,
        Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
        Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
    ];
});
