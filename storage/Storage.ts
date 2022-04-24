import { LocalStorage } from 'node-localstorage';

export interface KeyStorageItem{
    key:string;
}

export class KeyStorage{
    //Extremely insecure, better to build your own key storage system rather than using the unencrypted node local storage
    static UnencryptedNodeLocalStorage = class extends KeyStorage{
        public storage:LocalStorage = new LocalStorage('./scratch');
        constructor(){
            super();

            
        }

        public override save(key: string, data: any): void {
            super.save(key,data);

            this.storage.setItem(key,JSON.stringify(data));

        }

        public override get(key:string):KeyStorageItem | null{
            let item = this.storage.getItem(key);

            if(item){
                return JSON.parse(item);
            }else{
                return null;
            }
        }
        
    }

    //TODO: Create a storage system for react, Ionic, vue and vanilla JS
    //TODO: create own universal storage API

    public save(key:string,data:any){

    }

    public get(key:string):any{

    }

    public delete(key:string){

    }
}