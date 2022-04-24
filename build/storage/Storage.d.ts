import { LocalStorage } from 'node-localstorage';
export interface KeyStorageItem {
    key: string;
}
export declare class KeyStorage {
    static UnencryptedNodeLocalStorage: {
        new (): {
            storage: LocalStorage;
            save(key: string, data: any): void;
            get(key: string): KeyStorageItem | null;
            delete(key: string): void;
        };
        UnencryptedNodeLocalStorage: any;
    };
    save(key: string, data: any): void;
    get(key: string): any;
    delete(key: string): void;
}
