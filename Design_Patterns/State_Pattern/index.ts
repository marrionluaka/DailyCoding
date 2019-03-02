import { NotVerified } from "./NotVerified";

export interface IAccountState {
  Deposit(addToBalance: Action): IAccountState;
  Withdraw(subtractFromBalance: Action): IAccountState;
  Freeze(): IAccountState;
  HolderVerified(): IAccountState;
  Close(): IAccountState;
}

export type Action = () => void;

export class Account {
  private _balance: number = 0;
  private _state: IAccountState;

  public get Balance(): number{
    return this._balance;
  }
  
  constructor(onUnfreeze: Action) {
    this._state = new NotVerified(onUnfreeze);
  }

  public Deposit(amount: number): void {
    this._state = this._state.Deposit(() => { this._balance += amount; });
  }

  public Withdraw(amount: number): void {
    this._state = this._state.Withdraw(() => { this._balance -= amount; });
  }

  public HolderVerified(): void {
    this._state = this._state.HolderVerified();
  }

  public Close(): void {
    this._state = this._state.Close();
  }

  public Freeze(): void {
    this._state = this._state.Freeze();
  }
}