import type { Pick } from '../../src/easy/Pick';
import { Equal, Expect } from '@type-challenges/utils';

it('Pick', () => {
    type cases = [
        Expect<Equal<Expected1, Pick<Todo, 'title'>>>,
        Expect<Equal<Expected2, Pick<Todo, 'title' | 'completed'>>>,
        // @ts-expect-error
        Pick<Todo, 'title' | 'completed' | 'invalid'>,
    ];

    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    interface Expected1 {
        title: string;
    }

    interface Expected2 {
        title: string;
        completed: boolean;
    }
});
