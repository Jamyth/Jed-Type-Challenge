import type { Readonly as MyReadonly } from '../../src/easy/Readonly';
import { Equal, Expect } from '@type-challenges/utils';

it('Readonly', () => {
    type cases = [
        Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
        Expect<Equal<MyReadonly<string>, Readonly<string>>>,
    ];

    interface Todo1 {
        title: string;
        description: string;
        completed: boolean;
    }
});
