import { Container as DIContainer } from '@apestaartje/dependency-injection/container/Container';
import { getContainer } from '@apestaartje/dependency-injection/container/getContainer';
import { Injectable } from '@apestaartje/dependency-injection/decorator/Injectable';

describe('Injectable', (): void => {
    it('resolve value from di container', (): void => {
        const di: DIContainer = getContainer();

        di.register<number>(
            'a',
            () => {
                return 16;
            },
        );

        @Injectable()
        class Adder {
            private readonly _a: number;

            constructor(a: number) {
                this._a = a;
            }

            public add(b: number): number {
                return this._a + b;
            }
        }

        const adder: Adder = di.resolve<Adder>('Adder');

        expect(adder.add(3)).toBe(19);
    });
});
