import { Pop } from '../../src/medium/Pop';
import { Equal, Expect } from '@type-challenges/utils';

it('Pop', () => {
    type cases = [Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>, Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>];
});
