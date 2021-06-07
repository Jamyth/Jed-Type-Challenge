import { LookUp } from '../../src/medium/TypeLookup';

it('TypeLookUp', () => {
    interface Cat {
        type: 'cat';
        breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
    }

    interface Dog {
        type: 'dog';
        breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
        color: 'brown' | 'white' | 'black';
    }

    type MyDogType = LookUp<Cat | Dog, 'cat'>; // expected to be `Dog`
});
