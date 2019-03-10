import { expect } from 'chai';
import * as sinon from 'sinon';
import { Subject } from './';
import { Observer, IObserver } from './Observer';

describe("Observer Spec", () => {
    let sut: Subject, observer: IObserver;
    beforeEach(() => {
        sut = new Subject();
        observer = new Observer();
    });

    it("subscribe(): adds subscribers to internal array", () => {
        sut.subscribe(observer);
        expect(sut.observers.length).to.equal(1);
    });

    it("unsubscribe(): removes an observer from the list of observers", () => {
        observer.id = 1;
        sut.subscribe(observer);

        sut.unsubscribe(observer);
        
        expect(sut.observers).to.be.empty;
    });

    it("notifyObserver(): notifies a given observer", () => {
        const spy = sinon.spy(observer, "notify");
        sut.subscribe(observer);

        sut.notifyObserver(observer);

        expect(spy.called).to.be.true;
    });

    it("notifyAllObservers(): notifies all observers", () => {
        const newObserver = new Observer();
        const observer1 = sinon.spy(observer, "notify");
        const observer2 = sinon.spy(newObserver, "notify");
        sut.subscribe(observer);
        sut.subscribe(newObserver);

        sut.notifyAllObservers();
        
        expect(observer1.called).to.be.true;
        expect(observer2.called).to.be.true;
    });
});