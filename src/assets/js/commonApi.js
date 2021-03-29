import axios from 'axios';
import qs from 'qs'

export function asyncMethod(data, url, method) {
    return new Promise((resolve, reject) => {
        axios({
            method: (method ? method : 'get'),
            url,
            data,
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error)
            });
    })
}

