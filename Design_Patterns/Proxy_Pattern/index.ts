import { Internet } from "./interface";
import { TheInternet } from "./TheInternet";

export class Proxy implements Internet {
    private _internet: Internet;
    private _bannedSites: Set<string>;

    constructor(){
        this._internet = new TheInternet();
        this._bannedSites = new Set();
        this._bannedSites.add("evilSite.com");
        this._bannedSites.add("badSite.com");
        this._bannedSites.add("horroSite.net");
        this._bannedSites.add("vulgarSite.com");
    }

    connectTo(serverHost: string): string {
        if(!serverHost || this._bannedSites.has(serverHost))
            throw "The access to this site is denied.";
        
        return this._internet.connectTo(serverHost);
    }
}