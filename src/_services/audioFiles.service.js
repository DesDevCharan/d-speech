import config from 'config';  //global variables - set shared variables in webpack.config
import { authHeader } from '../_helpers';
import { commonHandlers } from './index'

export const audioFilesService = {
    getUserAudioFiles,
    getMetaDataService
};

function getUserAudioFiles() {
    let email = JSON.parse(localStorage.getItem('user')).email;
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'same-origin'
    };
    return fetch(`${config.apiUrl}/getUserAudioFiles`, requestOptions)
        .then(commonHandlers.handleAuthentication)
}

function getMetaDataService() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: 'same-origin'
    };
    return fetch(`${config.apiUrl}/metaData`, requestOptions)
        .then(commonHandlers.handleAuthentication)
}


