import { Container } from '../../src/Container';
import { factory } from '../../src/factory';

describe('dependency injection factory', (): void => {
    it('create only once a container', (): void => {
        const a: Container = factory();
        const b: Container = factory();

        expect(a).toBeDefined();
        expect(b).toBeDefined();
        expect(a).toBe(b);
    });
});
