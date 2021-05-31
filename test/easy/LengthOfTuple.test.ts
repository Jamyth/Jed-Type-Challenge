import { Equal, Expect } from '@type-challenges/utils';
import { LengthOfTuple } from '../../src/easy/LengthOfTuple';

it('LengthOfTuple', () => {
    type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
    type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

    type cases = [Expect<Equal<LengthOfTuple<tesla>, 4>>, Expect<Equal<LengthOfTuple<spaceX>, 5>>];
});
