import axios from 'axios';

TEST_URL = "http://10.0.2.2:5000"
LIVE_URL = "https://upa-backend.onrender.com/"

const BASE_URL = TEST_URL

export const getNavigation = async () => {
    return await axios.get(`${BASE_URL}/parse-navigation`);
}

export const getAuthors = async () => {
    return await axios.get(`${BASE_URL}/parse-authors`);
}

export const getHome = async () => {
    return await axios.get(`${BASE_URL}/parse-home`);
}

export const getByCategory = async (category) => {
    return await axios.get(`${BASE_URL}/parse-category/${category}`);
}

export const getByCategoryAndPage = async (category, page) => {
    return await axios.get(`${BASE_URL}/parse-category/${category}/page/${page}`);
}

export const getPost = async (link) => {
    return await axios.get(`${BASE_URL}/post?link=${link}`);
}

export const getTest = async () => {
    return await axios.get(`${BASE_URL}`);
}