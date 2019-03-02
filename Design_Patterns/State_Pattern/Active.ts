import { IAccountState, Action } from ".";
import { Frozen } from "./Frozen";
import { Closed } from "./Closed";

export class Active implements IAccountState {
    private _onUnfreeze: Action;

    constructor(onUnfreeze: Action){
        this._onUnfreeze = onUnfreeze;
    }

    public Deposit(addToBalance: Action): IAccountState {
        addToBalance();
        return this;
    }

    public Withdraw(subtractFromBalance: Action): IAccountState {
        subtractFromBalance();
        return this;
    }

    public Close = (): IAccountState => new Closed();
    public Freeze = (): IAccountState => new Frozen(this._onUnfreeze);
    public HolderVerified = (): IAccountState => this;
}