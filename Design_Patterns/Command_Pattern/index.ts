interface ICommand<T> {
    execute(): T;
    unexecute(): T;
}

export class Invoker {
    private readonly _command: ICommand<string>;

    constructor(command: ICommand<string>){
        this._command = command;
    }

    public ExecuteCommand(): string {
        return this._command.execute();
    }

    public UnexecuteCommand(): string {
        return this._command.unexecute();
    }
}

export class LigthsOnCommand implements ICommand<string> {
    private readonly _light: Light;

    constructor(light: Light){
        this._light = light;
    }

    public execute(): string {
        return this._light.on();
    }

    public unexecute(): string {
        return this._light.off();
    }
}

export class Light {
    public on(): string {
        return "lights on!";
    }

    public off(): string {
        return "lights off!";
    }
}
