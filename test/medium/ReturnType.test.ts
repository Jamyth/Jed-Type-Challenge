import { Equal, Expect, ExpectFalse } from '@type-challenges/utils';
import { ReturnType } from '../../src/medium/ReturnType';

it('Exclude', () => {
    type cases = [
        Expect<Equal<string, ReturnType<() => string>>>,
        Expect<Equal<123, ReturnType<() => 123>>>,
        Expect<Equal<ComplexObject, ReturnType<() => ComplexObject>>>,
        Expect<Equal<Promise<boolean>, ReturnType<() => Promise<boolean>>>>,
        Expect<Equal<() => 'foo', ReturnType<() => () => 'foo'>>>,
        Expect<Equal<1 | 2, ReturnType<typeof fn>>>,
        Expect<Equal<1 | 2, ReturnType<typeof fn1>>>,
    ];

    type ComplexObject = {
        a: [12, 'foo'];
        bar: 'hello';
        prev(): number;
    };

    const fn = (v: boolean) => (v ? 1 : 2);
    const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
});
