import { Equal, Expect, ExpectFalse } from '@type-challenges/utils';
import { Includes } from '../../src/easy/Includes';

it('Includes', () => {
    type cases = [
        Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
        Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
        Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
        Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
        Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
        Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
        ExpectFalse<Equal<Includes<[{}], { a: 'A' }>, false>>,
        ExpectFalse<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
    ];
});
