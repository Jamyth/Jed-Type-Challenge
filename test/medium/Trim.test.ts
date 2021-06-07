import { Trim } from '../../src/medium/Trim';
import { Equal, Expect } from '@type-challenges/utils';

it('Trim', () => {
    type T = Trim<'   \n\t foo bar \t'>;
    type cases = [
        Expect<Equal<Trim<'str'>, 'str'>>,
        Expect<Equal<Trim<' str'>, 'str'>>,
        Expect<Equal<Trim<'     str'>, 'str'>>,
        Expect<Equal<Trim<'str   '>, 'str'>>,
        Expect<Equal<Trim<'     str     '>, 'str'>>,
        Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
    ];
});
