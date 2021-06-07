export declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any;

type ComputedValueType<C> = { [P in keyof C]: C[P] extends () => infer R ? R : never };

type Options<D, C, M> = {
    data: (this: void) => D;
    computed: C & ThisType<D>;
    methods: M & ThisType<D & ComputedValueType<C> & M>;
};
