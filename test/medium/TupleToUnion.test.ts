import { TupleToUnion } from '../../src/medium/TupleToUnion';
import { Equal, Expect } from '@type-challenges/utils';

it('TupleToUnion', () => {
    type cases = [
        Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
        Expect<Equal<TupleToUnion<[123]>, 123>>,
    ];
});
