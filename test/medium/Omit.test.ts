import { Equal, Expect, ExpectFalse } from '@type-challenges/utils';
import { Omit as MyOmit } from '../../src/medium/Omit';

it('Omit', () => {
    type cases = [
        Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
        Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
    ];

    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    interface Expected1 {
        title: string;
        completed: boolean;
    }

    interface Expected2 {
        title: string;
    }
});