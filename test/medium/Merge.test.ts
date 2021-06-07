import { Merge } from '../../src/medium/Merge';
import { Equal, Expect } from '@type-challenges/utils';

it('Merge', () => {
    type Foo = {
        a: number;
        b: string;
    };
    type Bar = {
        b: number;
    };

    type cases = [
        Expect<
            Equal<
                Merge<Foo, Bar>,
                {
                    a: number;
                    b: number;
                }
            >
        >,
    ];
});
