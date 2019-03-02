import { Action, IAccountState } from ".";

export class Closed implements IAccountState {
    public Deposit = (addToBalance: Action): IAccountState => this;
    public Withdraw = (subtractFromBalance: Action): IAccountState => this;
    public Freeze = (): IAccountState => this;
    public Close = (): IAccountState => this;
    public HolderVerified = (): IAccountState => this;
}