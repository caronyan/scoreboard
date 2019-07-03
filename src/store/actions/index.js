import * as util from '@/util'
import * as httpConst from '@/constants'

/**
 * api generator
 *
 * @param {*} meta
 * @returns
 */
const _generateApiFunction = meta => {
    // 返回一个接受commit和载荷的函数
    return ({ commit }, params) => {
        let isHttpGet = meta.httpMethod === httpConst.METHOD.GET;
        let isHttpPost = meta.httpMethod === httpConst.METHOD.POST;
        let fetchParams = {
            method: meta.httpMethod,
            body: (!!params && isHttpPost) ? util.getPostParams(params) : '',
            // headers: "",
        };
        // 如果是get方法移除body参数，并添加query string参数
        if (isHttpGet) {
            delete fetchParams.body;
            meta.url += util.getUrlParams(params);
        }
        return util.fetchWithTimeout(meta.url, fetchParams);
    };
};
