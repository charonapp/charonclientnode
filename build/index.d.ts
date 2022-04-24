import { KeyStorage } from './storage/Storage';
export interface CharonClientSettings {
    createEndpoint?: string;
    verifyEndpoint?: string;
    signInEndpoint?: string;
    authenticateEndpoint?: string;
}
export declare enum RequestType {
    GET = 0,
    POST = 1,
    PUT = 2,
    DELETE = 3
}
export declare class CharonClient {
    storage: KeyStorage;
    settings: CharonClientSettings | undefined;
    constructor(storage: KeyStorage, settings?: CharonClientSettings);
    createUserRequest(username: string): Promise<true | string>;
    signInRequest(username: string): Promise<any>;
    authenticateRequest(): Promise<void>;
    makeAuthenticatedRequest(url: string, type: RequestType, data?: any): Promise<any>;
    getKey(): any;
    getUsername(): any;
    setUsernameAndKey(username: string, key: string): void;
    setUsername(username: string): void;
    setKey(key: string): void;
}
