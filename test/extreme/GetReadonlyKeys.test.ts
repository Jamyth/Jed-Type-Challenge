import { GetReadonlyKeys } from '../../src/extreme/GetReadonlyKeys';
import { Equal, Expect } from '@type-challenges/utils';

it('GetReadonlyKeys', () => {
    type cases = [
        Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
        Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
    ];

    interface Todo1 {
        readonly title: string;
        description: string;
        completed: boolean;
    }

    interface Todo2 {
        readonly title: string;
        readonly description: string;
        completed?: boolean;
    }
});
