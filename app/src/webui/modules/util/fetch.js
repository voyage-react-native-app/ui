import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const postData = async (url, data = {}) => {
    try {
        const response = await axios.post(url, data, headers);
        return response.data;
    } catch (err) {
        return err.response.data
    }
};

export const putData = async (url, data = {}) => {
    try {
        const response = await axios.put(url, data, headers);
        return response.data;
    } catch (err) {
        return err.response.data
    }
};

export const getData = async url => {
    try {
        const response = await axios.get(url, headers);
        return response.data;
    } catch (err) {
        return err.response.data
    }
};
