import { expect } from "chai";
import { sandbox } from "sinon";
import BurgerBuilder from "./";

describe("Builder Spec", function () {
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
        // Arrange
        const expected = "Beef type: Loin";
        
        // Act
        sut.Build();

        // Assert 
        //@ts-ignore~
        expect(console.log.getCall(0).args.join().replace(",", ""))
            .to.equal("Beef type: Loin");
        //@ts-ignore~
        expect(console.log.getCall(1).args.join().replace(",", ""))
            .to.equal("Do I have pickles no");
    });

    it("creates a burger with brisket cut and pickles",function () {
        // Act
        sut.WithBrisket().WithPickles().Build();

        // Assert
        //@ts-ignore~
        expect(console.log.getCall(0).args.join().replace(",", ""))
            .to.equal("Beef type: Brisket");
        //@ts-ignore~
        expect(console.log.getCall(1).args.join().replace(",", ""))
            .to.equal("Do I have pickles yes");
    });
});