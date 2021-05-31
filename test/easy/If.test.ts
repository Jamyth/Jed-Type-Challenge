import { Equal, Expect, ExpectFalse } from '@type-challenges/utils';
import { If } from '../../src/easy/If';

it('If', () => {
    type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>];
});
