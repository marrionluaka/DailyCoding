import { expect } from "chai";
import { sandbox } from "sinon";
import BurgerBuilder from "./";

describe.only("Builder Spec", function () {
    let sut: BurgerBuilder, _sandbox: any;

    beforeEach(() => {
        sut = new BurgerBuilder();
        _sandbox = sandbox.create();

        _sandbox.stub(console, "log");
    });

    afterEach(() => {
        _sandbox.restore();
    });

    it("creates a burger with loin cut and no pickles",function () {
        // Act
        const expected = "Beef type: Loin";
        const actual = sut.Build();

        // Assert
        expect(actual).to.eql(expected);
    });

    it("creates a burger with brisket cut and pickles",function () {
        // Act
        const expected = "Beef type: Brisket";
        const actual = sut.WithBrisket().WithPickles().Build();

        // Assert
        expect(actual).to.eql(expected);
    });
});