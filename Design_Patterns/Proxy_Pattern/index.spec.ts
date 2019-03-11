import { expect } from 'chai';
import { Proxy } from './';

describe("Proxy Spec", () => {
    let sut: Proxy;
    beforeEach(() => sut = new Proxy());

    it("connectTo(): throws when a user tries to access a banned site.", () => {
        expect(() => sut.connectTo("")).to.throw("The access to this site is denied.");
        expect(() => sut.connectTo("evilSite.com")).to.throw("The access to this site is denied.");
    });

    it("connectTo(): grants access to allowed site.", () => {
        expect(sut.connectTo("bing.com")).to.equal("Connecting to bing.com")
    });
});