import axiosClient from './axiosClient';

//   Hàm axiosClient.get(): gồm 2 tham số: url và ObjConfig
// Hàm axiosClient.post(): gồm 3 tham số: url, data và ObjConfig

const categoryApi = {
  getAll: function getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params: params });
  },

  get: function get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url, {});
  },

  add: function add(data) {
    const url = '/categories';
    return axiosClient.post(url, data, {});
  },

  update: function update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, data, {});
  },

  remove: function remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
