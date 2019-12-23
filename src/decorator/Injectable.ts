import * as func from '@apestaartje/function';
import * as types from '@apestaartje/types';

import { Container } from '../container/Container';
import { getContainer } from '../container/getContainer';

const CONSTRUCTOR_NAME: string = 'name';

/**
 * Class decorator
 */

// tslint:disable-next-line function-name no-any
export function Injectable<T extends types.Constructor<any>>(name?: string): (target: T) => T {
    return (target: T): T => {
        const di: Container = getContainer();
        // tslint:disable-next-line no-unsafe-any
        const identifier: string = name === undefined ? target[CONSTRUCTOR_NAME] : name;
        const requiredDependencies: string[] = func.args(target);

        di.register(
            identifier,
            // tslint:disable-next-line no-any
            (dependencies: any[]): T => {
                // tslint:disable-next-line no-unsafe-any
                return new (target.bind(target, dependencies))();
            },
            requiredDependencies,
        );

        return target;
    };
}
