
 /**
 * generate url param from kv object
 *
 * @param {*} urlParams
 * @returns
 */
export const getUrlParams = urlParams => {
    if (!urlParams) return '';
    else {
        let paramStr = '?';
        for (let key in urlParams) {
            paramStr += key + '=' + urlParams[key] + '&';
        }
        return paramStr.substr(0, paramStr.length - 1);
    }
};

 /**
 * generate body param from kv object
 *
 * @param {*} params
 * @param {boolean} [compact=false]
 * @returns
 */
export const getPostParams = (params, compact = false) => {
    let result = '';
    if (!compact) {
        for (let key in params) {
            result = `${result}&${key}=${encodeURIComponent(params[key])}`;
        }
    } else {
        for (let key in params) {
            if (params[key] !== null) {
                result = `${result}&${key}=${encodeURIComponent(params[key])}`;
            }
        }
    }
    return result.substr(1);
};

 /**
 * generic fetch wrap function with timeout proc
 * default timeout = 30 secs
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const fetchWithTimeout = (url, params) => {
    return Promise.race([
        fetch(url, params),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('request timeout'));
            }, 1000 * 30);
        }),
    ]).then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(res => {
            window.console.log(res);
            return {
                status: 'fail',
                msg: 'request timeout',
            };
        });
};