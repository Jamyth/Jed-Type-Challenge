import { Equal, Expect } from '@type-challenges/utils';
import { TupleToObject } from '../../src/easy/TupleToObject';

it('TupleToObject', () => {
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

    type cases = [
        Expect<
            Equal<
                TupleToObject<typeof tuple>,
                { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
            >
        >,
    ];
});
