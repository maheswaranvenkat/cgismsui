import Cookies from 'js-cookie';
import {fetchUtils} from "ra-core";
import jsonServerProvider from 'ra-data-json-server'

const httpClient = async (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }

    const csrfToken = Cookies.get('XSRF-TOKEN');
    if (csrfToken) {
        options.headers.set('XSRF-TOKEN', csrfToken);
    }
    options.credentials = 'same-origin';
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(`/api`, httpClient);