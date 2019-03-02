import { expect } from 'chai';
import * as sinon from 'sinon';

import { Account } from '.';
import { Active } from './Active';
import { NotVerified } from './NotVerified';
import { Frozen } from './Frozen';
import { Closed } from './Closed';

describe("State Spec", () => {
    context("Account", () => {
        let account: Account,
            spy: sinon.SinonSpy;

        beforeEach(() =>{
            spy = sinon.spy();
            account = new Account(spy);
            account.Deposit(10);
        });

        it("Deposit(): allows user to deposit money.", () => {
            expect(account.Balance).to.equal(10);
        });

        it("Withdraw(): does not allows user to widthdraw money unless user is verified.", () => {
            account.Withdraw(10);
            expect(account.Balance).to.equal(10);

            account.HolderVerified();
            account.Withdraw(10);
            expect(account.Balance).to.equal(0);
        });

        it("Closed(): does not allows user to widthdraw or deposit money.", () => {
            account.Close();
            account.Withdraw(10);
            expect(account.Balance).to.equal(10);

            account.Deposit(100);
            expect(account.Balance).to.equal(10);
        });

        it("Freeze(): freezes an account.", () => {
            account.HolderVerified();
            account.Freeze();
            account.Withdraw(10);
            expect(spy.called).to.be.true;
        });
    });

    context("NotVerified State Spec", () => {
        let nvf: NotVerified;
        beforeEach(() => nvf = new NotVerified(() => {}));

        it("Withdraw(): returns a not verified state.", () => {
            expect(nvf.Withdraw(() => {}) instanceof(NotVerified)).to.be.true;
        });

        it("Freeze(): returns a not verified state.", () => {
            expect(nvf.Freeze() instanceof(NotVerified)).to.be.true;
        });

        it("HolderVerified(): returns a active state.", () => {
            expect(nvf.HolderVerified() instanceof(Active)).to.be.true;
        });

        it("Close(): returns a closed state.", () => {
            expect(nvf.Close() instanceof(Closed)).to.be.true;
        });
    });

    context("Active State Spec", () => {
        it("", () => {});
    });

    context("Frozen State Spec", () => {
        it("", () => {});
    });

    context("Closed State Spec", () => {
        it("", () => {});
    });
});