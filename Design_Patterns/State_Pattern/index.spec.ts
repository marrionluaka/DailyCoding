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

        it("HolderVerified(): returns an active state.", () => {
            expect(nvf.HolderVerified() instanceof(Active)).to.be.true;
        });

        it("Close(): returns a closed state.", () => {
            expect(nvf.Close() instanceof(Closed)).to.be.true;
        });
    });

    context("Active State Spec", () => {
        let active: Active,
            activeSpy: sinon.SinonSpy;

        beforeEach(() => {
            activeSpy = sinon.spy();
            active = new Active(activeSpy);
        });

        it("Deposit(): returns an active state.", () => {
            expect(active.Deposit(activeSpy) instanceof(Active)).to.be.true;
            expect(activeSpy.called).to.be.true;
        });

        it("Withdraw(): returns an active state.", () => {
            expect(active.Withdraw(activeSpy) instanceof(Active)).to.be.true;
            expect(activeSpy.called).to.be.true;
        });

        it("Freeze(): returns a frozen state.", () => {
            expect(active.Freeze() instanceof(Frozen)).to.be.true;
        });

        it("HolderVerified(): returns an active state.", () => {
            expect(active.HolderVerified() instanceof(Active)).to.be.true;
        });

        it("Close(): returns a closed state.", () => {
            expect(active.Close() instanceof(Closed)).to.be.true;
        });
    });

    context("Frozen State Spec", () => {
        let frozen: Frozen,
            onUnfreeze: sinon.SinonSpy;

        beforeEach(() => {
            onUnfreeze = sinon.spy();
            frozen = new Frozen(onUnfreeze);
        });

        it("Deposit(): returns an active state.", () => {
            expect(frozen.Deposit(onUnfreeze) instanceof(Active)).to.be.true;
            expect(onUnfreeze.called).to.be.true;
        });

        it("Withdraw(): returns an active state.", () => {
            expect(frozen.Withdraw(onUnfreeze) instanceof(Active)).to.be.true;
            expect(onUnfreeze.called).to.be.true;
        });

        it("Freeze(): returns a frozen state.", () => {
            expect(frozen.Freeze() instanceof(Frozen)).to.be.true;
        });

        it("HolderVerified(): returns a frozen state.", () => {
            expect(frozen.HolderVerified() instanceof(Frozen)).to.be.true;
        });

        it("Close(): returns a closed state.", () => {
            expect(frozen.Close() instanceof(Closed)).to.be.true;
        });
    });

    context("Closed State Spec", () => {
        let closed: Closed;

        beforeEach(() => closed = new Closed());

        it("returns a closed state for every operations.", () => {
            expect(closed.Deposit(() => {}) instanceof(Closed)).to.be.true;
            expect(closed.Withdraw(() => {}) instanceof(Closed)).to.be.true;
            expect(closed.Freeze() instanceof(Closed)).to.be.true;
            expect(closed.HolderVerified() instanceof(Closed)).to.be.true;
            expect(closed.Close() instanceof(Closed)).to.be.true;
        });
    });
});