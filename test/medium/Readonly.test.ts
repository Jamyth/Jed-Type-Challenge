import { Alike, Expect } from '@type-challenges/utils';
import { Readonly as MyReadonly2 } from '../../src/medium/Readonly';

it('Readonly with keys', () => {
    type cases = [
        Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
        Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
        Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
    ];

    interface Todo1 {
        title: string;
        description?: string;
        completed: boolean;
    }

    interface Todo2 {
        readonly title: string;
        description?: string;
        completed: boolean;
    }

    interface Expected {
        readonly title: string;
        readonly description?: string;
        completed: boolean;
    }
});
