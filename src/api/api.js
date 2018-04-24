import request from '@/utils/request';

export function doPost(url, params) {
  return request({
    url: url,
    method: 'post',
    data: params
  });
}

export function doGet(url,params) {
	let href = getFullUrl(url,params);
  return request({
    url: href,
    method: 'get',
  });
}

function getFullUrl(url, params) {
    let query = '';
    for (let p in params) {
        query += `&${p}=${params[p]}`
    }
    url +='?'+ query.substring(1);
    return url;
}