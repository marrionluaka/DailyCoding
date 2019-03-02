import { IAccountState, Action } from ".";
import { Active } from "./Active";
import { Closed } from "./Closed";

export class NotVerified implements IAccountState {
    private _onUnfreeze: Action;
    
    constructor(onUnfreeze: Action){
        this._onUnfreeze = onUnfreeze;
    }

    public Deposit(addToBalance: Action): IAccountState {
        addToBalance();
        return this;
    }   
    
    public Withdraw = (_: Action): IAccountState => this;
    public Freeze = (): IAccountState => this;
    public HolderVerified = (): IAccountState => new Active(this._onUnfreeze);
    public Close = (): IAccountState => new Closed();

}