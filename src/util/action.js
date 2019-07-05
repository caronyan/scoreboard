import * as util from '@/util'
import * as httpConst from '@/constants/http-const'

/**
 * api generator
 *
 * @param {*} meta
 * @returns 
 */
const _generateApiFunction = meta => {
    return ({ commit }, params) => {
        let isHttpGet = meta.httpMethod === httpConst.METHOD.GET;
        let isHttpPost = meta.httpMethod === httpConst.METHOD.POST;
        let fetchParams = {
            method: meta.httpMethod,
            body: (!!params && isHttpPost) ? util.getPostParams(params) : '',
            // headers: "",
        };
        // remove body if using http get
        if (isHttpGet) {
            delete fetchParams.body;
            meta.url += util.getUrlParams(params);
        }
        return util.fetchWithTimeout(meta.url, fetchParams);
    };
};
