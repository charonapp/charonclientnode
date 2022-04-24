import * as axios from 'axios';
import getMAC from 'getmac';
import { KeyStorage } from './storage/Storage';

export interface CharonClientSettings{
    //server API endpoint to create a user
    createEndpoint?:string;
    //server API endpoint to verify a user
    verifyEndpoint?:string;
    //server API endpoint to allow a user to sign in
    signInEndpoint?:string;
    //server API endpoint to authenticate a pending account
    authenticateEndpoint?:string;
}

export enum RequestType{
    GET,
    POST,
    PUT,
    DELETE
}

export class CharonClient{
    public storage:KeyStorage;
    public settings:CharonClientSettings | undefined;
    constructor(storage:KeyStorage,settings?:CharonClientSettings){
        this.storage = storage;
        this.settings = settings;
    }

    public async createUserRequest(username:string):Promise<true | string>{
        if(this.settings != undefined && this.settings.createEndpoint != undefined){
            var res = await axios.default.post(this.settings.createEndpoint,{username,address:getMAC(),'notificationid':'never'});
            if(res.data.status == 'success'){
                this.setUsernameAndKey(res.data.username,res.data.key);

                return true;
            }else{
                return res.data.status;
            }
        }else{
            throw new Error("The createEndpoint in the client settings is undefined.");
        }
    }

    public async signInRequest(username:string){
        if(this.settings != undefined && this.settings.signInEndpoint != undefined){
            var charonRes = await axios.default.post(this.settings.signInEndpoint,{username:username,address:getMAC(),notificationid:'never'});

            if(charonRes.data.status == 'success'){
                this.setUsernameAndKey(charonRes.data.username,charonRes.data.key);

                return true;
            }else{
                return charonRes.data.status;
            }
        }else{
            throw new Error("The signInEndpoint in the client settings is undefined.");
        }
    }

    public async authenticateRequest(){
        if(this.settings != undefined && this.settings.authenticateEndpoint != undefined){

        }else{
            throw new Error("The authenticateEndpoint in the client settings is undefined.");
        }
    }

    public async makeAuthenticatedRequest(url:string,type:RequestType,data?:any): Promise<any>{
        var key = this.getKey();
        var username = this.getUsername();
        if(type == RequestType.GET){
            var getRes = await axios.default.get(url,{headers:{
                charon: `auth ${key} ${username}`
            }}).catch(e => {return e});

            return getRes;
        }else if(type == RequestType.POST){
            var postRes = await axios.default.post(url,data,{
                headers:{
                    charon:`auth ${key} ${username}`
                }
            }).catch(e => {return e});

            return postRes;
        }else if(type == RequestType.PUT){
            var putRes = await axios.default.put(url,data,{
                headers:{
                    charon:`auth ${key} ${username}`
                }
            }).catch(e => {return e});

            return putRes;
        }else if(type == RequestType.DELETE){
            var deleteRes = await axios.default.delete(url,{
                headers:{
                    charon:`auth ${key} ${username}`
                }
            })

            return deleteRes;
        }
    }


    public getKey(){
        return this.storage.get('key');
    }

    public getUsername(){
        return this.storage.get('username');
    }

    public setUsernameAndKey(username:string,key:string){
        this.storage.save('username',{'username':username});
        this.storage.save('key',{'key':key});
    }

    public setUsername(username:string){
        this.storage.save('username',{'username':username});
    }

    public setKey(key:string){
        this.storage.save('key',{'key':key});
    }

    //public create
}


