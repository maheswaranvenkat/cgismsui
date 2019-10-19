import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_GET_PERMISSIONS} from "react-admin";
import {} from "ra-core";


export default async (type: any, params: any) => {
    if(type === AUTH_LOGIN) {

    }
    if(type === AUTH_LOGOUT) {

    }
    if(type === AUTH_CHECK) {
        return Promise.resolve();
    }
    if(type === AUTH_GET_PERMISSIONS) {
        return Promise.resolve();
    }
    return Promise.resolve();
}