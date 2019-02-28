import { expect } from 'chai';
import {
     Component,
     DecoratorA,
     DecoratorB 
} from './';

describe('Decorator Spec', function () {
    it("decorates a component.", () => {
        const component = new DecoratorA(new Component());
        expect(component.Operation()).to.equal("I am walking and listening to Classic FM");

        const decoratorB = new DecoratorB(component);
        expect(decoratorB.Operation() + decoratorB.AddedBehavior()).to.equal("I am walking and listening to Classic FM to school and I bought a cappuccino");
    });
});