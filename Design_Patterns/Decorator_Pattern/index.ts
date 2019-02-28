export interface IComponent {
    Operation(): string;
}

export class Component implements IComponent {
    public Operation(): string {
        return "I am walking";
    }
}

export class DecoratorA implements IComponent {
    private readonly _component: IComponent;

    public constructor(component: IComponent) {
        this._component = component;
    }

    public Operation(): string {
        return `${this._component.Operation()} and listening to Classic FM`;
    }
}

export class DecoratorB implements IComponent {
    private readonly _component: IComponent;

    public constructor(component: IComponent) {
        this._component = component;
    }

    public Operation(): string {
        return `${this._component.Operation()} to school`;
    }

    public AddedBehavior(): string {
        return " and I bought a cappuccino";
    } 
}