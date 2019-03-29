import { expect } from 'chai';
import Mediator from '.';

describe("Mediator Spec", () => {
    let _sut: Mediator<string>, 
        _res: string = "";
        
    beforeEach(() => {
        _sut = new Mediator<string>().subscribe("myevt", () => _res = "call me maybe?");
    });

    it("unsubscribe(): unsubscribe from an event.", () => {
        // Act
        _sut.unsubscribe("myevt");
        _sut.publish("myevt");

        // Assert
        expect(_res).to.be.empty;
    });

    it("publish(): publishes event to client.", () => {
        // Act
        _sut.publish("myevt");

        // Assert
        expect(_res).to.equal("call me maybe?");
    });
});