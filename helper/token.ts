import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
import axios from 'axios';

export function getToken(){
    let tokenApiUrl = `http://3.111.225.218:8080/api/nsk/v2/token`
    let headers = {
        "Ocp-Apim-Subscription-Key":"709c72b49b0248a5b6bca315cced3b3a"
    }
    try{
        let token = axios.post(tokenApiUrl,{headers:headers})
            .then((res)=>{
                let tokenHeaders:any ={
                    "Ocp-Apim-Subscription-Key":"709c72b49b0248a5b6bca315cced3b3a",
                    "Authorization":res.data.data.token
                }
                return tokenHeaders;
            }).catch(err=>{
                return null;
            });
        return token;
    }catch (err) {
        return null;
      }
}