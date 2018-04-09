import axios from 'axios';

import Config from './webApiConfig';

const merge = require('lodash/merge');

class WebApi {
    constructor(public enroll: any = {}) {
        this._getApi();
    }

    async _ApiRes(config: any, datas: any, header: any) {
        let { method, path } = config;
        let patch = { method, url: path };
        patch = merge(patch, header, { data: datas });
        console.log(patch, 'patch');

        let ress = await axios(patch)
            .then((res: any) => {
                console.log(res, 'res');
                return res;
            })
            .catch((err: any) => {
                console.log(err, 'error');
            });

        return ress;
    }

    _getApi() {
        this.enroll.news = (data: any) =>  this._ApiRes(Config.news, data, {}); 
        this.enroll.product = (data: any) =>  this._ApiRes(Config.product, data, {});
    }

}

export default new WebApi;