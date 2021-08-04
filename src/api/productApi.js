import axiosClient from './axiosClient';

//   Hàm axiosClient.get(): gồm 2 tham số: url và ObjConfig
// Hàm axiosClient.post(): gồm 3 tham số: url, data và ObjConfig

const productApi = {
  getAll: function getAll(params) {
    const url = '/products';
    return axiosClient.get(url, { params: params });
  },

  get: function get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url, {});
  },

  add: function add(data) {
    const url = '/products';
    return axiosClient.post(url, data, {});
  },

  update: function update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data, {});
  },

  remove: function remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
