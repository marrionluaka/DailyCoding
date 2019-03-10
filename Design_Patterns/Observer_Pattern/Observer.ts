export interface IObserver {
    id: number;
    notify: () => string;
}


export class Observer implements IObserver {
    public id: number;

    public notify(): string{
        return "notified"
    }
}