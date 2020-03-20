import * as func from '@apestaartje/function';
import * as types from '@apestaartje/types';

import 'reflect-metadata';
import { Factory } from './Factory';

/**
 * A dependency definition.
 */

export class Definition<T> {
    private readonly _requiredDependencies: string[];
    private readonly _factory: Factory<T>;
    private readonly _identifier: string;
    private _isInvoked: boolean = false;
    // tslint:disable-next-line no-any
    private readonly _dependencies: types.Dictionary<any> = {};
    private _result: T;

    constructor(identifier: string, factory: Factory<T>, requiredDependencies?: string[]) {
        this._identifier = identifier;
        this._factory = factory;
        console.log('??');
        console.log(Reflect.metadata('design:paramtypes', factory));
        this._requiredDependencies = requiredDependencies ?? func.args(this._factory);
    }

    public get requiredDependencies(): string[] {
        return this._requiredDependencies;
    }

    public get isInvoked(): boolean {
        return this._isInvoked;
    }

    // tslint:disable-next-line no-any
    public setDependency(identifier: string, value: any): void {
        this._dependencies[identifier] = value;
    }

    // tslint:disable-next-line no-any
    public getDependency(identifier: string): any {
        if (!this.isDependencyDefined(identifier)) {
            throw new Error(`Definition.getDependency, dependency with name "${identifier}" not defined`);
        }

        return this._dependencies[identifier];
    }

    // tslint:disable-next-line no-any
    public getDependencies(): any[] {
        return this._requiredDependencies
            .reduce(
                // tslint:disable-next-line no-any
                (dependencies: any[], identifier: string): any[] => {
                    return dependencies.concat(this.getDependency(identifier));
                },
                [],
            );
    }

    public isDependencyDefined(identifier: string): boolean {
        return this._dependencies[identifier] !== undefined;
    }

    public invoke(): T {
        if (!this._isInvoked) {
            this._result = this._factory(...this.getDependencies());
            this._isInvoked = true;
        }

        return this._result;
    }
}
