export default class Mediator<T> {
    private _channels: any;

    constructor(){
        this._channels = {};
    }

    public subscribe(channel: string, callback: any): Mediator<T>{
        this._channels[channel] = this._channels[channel] || [];
        this._channels[channel].push(callback);
        return this;
    }

    public unsubscribe(channel: string): void{
        if(!this._channels[channel]) return;

        const {[channel]: remove, ...res } = this._channels;
        this._channels = res;
    }

    public publish(channel: string): void{
        if(!this._channels[channel]) return;

        this._channels[channel].forEach((fn: any) => {
            fn.apply(this, [].slice.call(arguments, 1));
        });
    }
}