import { Equal, Expect } from '@type-challenges/utils';
import { Exclude as MyExclude } from '../../src/easy/Exclude';

it('Exclude', () => {
    type cases = [
        Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
        Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
        Expect<
            Equal<
                MyExclude<string | number | (() => void), Function>,
                Exclude<string | number | (() => void), Function>
            >
        >,
    ];
});
