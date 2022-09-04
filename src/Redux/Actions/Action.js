import {
    LOGIN_ADD,
    RESET_PASSWORD
} from "./Type"

export const LOGIN = (item) => {
    return {
        type: LOGIN_ADD,
        data: item,
        isHttpsAction: true,
        method: 'POST',
        url: '/login.json'
    }
}

export const RESETPASSWORD = (item, KEY) => {
    return {
        type: RESET_PASSWORD,
        data: item,
        isHttpsAction: true,
        method: 'PATCH',
        url: `/login/${KEY}.json`
    }
}