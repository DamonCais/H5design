import request from '@/utils/request';
export function doPost(url, params) {
  return request({
    url: url,
    method: 'post',
    data: params
  });
}