import { QueryStringParser } from '../../src/extreme/QueryStringParser';
import { Equal, Expect } from '@type-challenges/utils';

it('QueryStringParser', () => {
    type cases = [
        Expect<Equal<QueryStringParser<''>, {}>>,
        Expect<Equal<QueryStringParser<'k1'>, { k1: true }>>,
        Expect<Equal<QueryStringParser<'k1&k1'>, { k1: true }>>,
        Expect<Equal<QueryStringParser<'k1&k2'>, { k1: true; k2: true }>>,
        Expect<Equal<QueryStringParser<'k1=v1'>, { k1: 'v1' }>>,
        Expect<Equal<QueryStringParser<'k1=v1&k1=v2'>, { k1: ['v1', 'v2'] }>>,
        Expect<Equal<QueryStringParser<'k1=v1&k2=v2'>, { k1: 'v1'; k2: 'v2' }>>,
        Expect<Equal<QueryStringParser<'k1=v1&k2=v2&k1=v2'>, { k1: ['v1', 'v2']; k2: 'v2' }>>,
        Expect<Equal<QueryStringParser<'k1=v1&k2'>, { k1: 'v1'; k2: true }>>,
        Expect<Equal<QueryStringParser<'k1=v1&k1=v1'>, { k1: 'v1' }>>,
        Expect<Equal<QueryStringParser<'k1&k2=v2'>, { k1: true; k2: 'v2' }>>,
        Expect<Equal<QueryStringParser<'k2=v2&k1'>, { k1: true; k2: 'v2' }>>,
        Expect<Equal<QueryStringParser<'k1&k1&k2=v2'>, { k1: true; k2: 'v2' }>>,
    ];
});
