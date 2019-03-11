import { Internet } from "./interface";

export class TheInternet implements Internet {
    connectTo(serverHost: string): string {
        return `Connecting to ${serverHost}`;
    }
}