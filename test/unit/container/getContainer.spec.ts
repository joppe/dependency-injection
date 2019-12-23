import { Container } from '@apestaartje/dependency-injection/container/Container';
import { getContainer } from '@apestaartje/dependency-injection/container/getContainer';

describe('getContainer', (): void => {
    it('create only once a container', (): void => {
        const a: Container = getContainer();
        const b: Container = getContainer();

        expect(a).toBeDefined();
        expect(b).toBeDefined();
        expect(a).toBe(b);
    });
});
