import { IAccountState, Action } from ".";
import { Active } from "./Active";
import { Closed } from "./Closed";

export class Frozen implements IAccountState {
    private _onUnfreeze: Action;

    constructor(onUnfreeze: Action){
        this._onUnfreeze = onUnfreeze;
    }

    public Deposit(addToBalance: Action): IAccountState {
        this._onUnfreeze();
        addToBalance();
        return new Active(this._onUnfreeze);
    }

    public Withdraw(subtractFromBalance: Action): IAccountState {
        this._onUnfreeze();
        subtractFromBalance();
        return new Active(this._onUnfreeze);
    }

    public Freeze = (): IAccountState => this;
    public Close = (): IAccountState => new Closed();
    public HolderVerified = (): IAccountState => this;
}