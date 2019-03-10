import { IObserver } from "./Observer";

export class Subject {
    private _observers: Array<IObserver>;
    public get observers(): ReadonlyArray<IObserver> {
        return this._observers;
    }

    constructor(){
        this._observers = [];
    }

    public subscribe(observer: IObserver): Subject {
        this._observers.push(observer);
        return this;
    }

    public unsubscribe(observer: IObserver): Subject {
        this._observers = this._observers.filter(o => o.id !== observer.id);
        return this;
    }

    public notifyObserver(observer: IObserver): Subject {
        const obs = this._observers.find(o => o.id === observer.id);

        if(obs) obs.notify();
        
        return this;
    }

    public notifyAllObservers(): Subject {
        this._observers.map((observer) => observer.notify());
        return this;
    }
}