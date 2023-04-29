import Axios from "./Axios";

// Replace "name" with the name of the model
let nameServices = {
    getAll: async function (userId) {
        const response = await Axios.get(`name/`);
        return response;
    },

    getById: async function (Id) {
        const response = await Axios.get(`name/${Id}`);
        return response;
    },

    create: async function (obj) {
        const response = await Axios.post(`name/`, obj);
        return response;
    },

    edit: async function (Id, obj) {
        const response = await Axios.patch(`name/${Id}`, obj);
        return response;
    },

    delete: async function (Id) {
        const response = await Axios.delete(`name/${Id}`);
        return response;
    },
};

export default nameServices;