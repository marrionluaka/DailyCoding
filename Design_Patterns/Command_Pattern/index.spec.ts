import { expect } from 'chai';
import {
    Invoker,
    LigthsOnCommand,
    Light
} from './';

describe("Command Spec", () => {
    it("invokes a command.", () => {
        const invoker = new Invoker(
            new LigthsOnCommand(
                new Light()
            )
        );
        expect(invoker.ExecuteCommand()).to.equal("lights on!");
        expect(invoker.UnexecuteCommand()).to.equal("lights off!");
    });
});