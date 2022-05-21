import axios from "axios";
import { BASE_URL } from "../constants";


export const getCurrentUser = async (id) => {
    try {
        const response = await axios.post(
            `${BASE_URL}users/find/${id}`,
            {
                headers: {"token" : "123456789"}
            }
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const login = async (endPoint, data) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${endPoint}`,
            data
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const register = async (endPoint, data) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${endPoint}`,
            data
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const logout = async (endPoint, data) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${endPoint}`,
            {
                headers: {"token" : "123456789"}
            }
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const getAll = async (endPoint, params) => {
  try {
    const response = await axios.get(
        `${BASE_URL}${endPoint}`,
        {
            params: params,
            headers: {"token" : "123456789"}
        }
    );
    return response;
  } catch (err) {
    throw new Error(
      JSON.stringify({
        data: err.response.data,
        status: err.response.status,
      })
    );
  }
};

export const getOne = async (endPoint, id) => {
    try {
        const response = await axios.get(
            `${BASE_URL}${endPoint}/${id}`,
            {
                headers: {"token" : "123456789"}
            }
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const createOne = async (endPoint, data) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${endPoint}`,
            data,
            {
                headers: {"token" : "123456789"}
            }
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const updateOne = async (endPoint, id, data) => {
    try {
        const response = await axios.put(
            `${BASE_URL}${endPoint}/${id}`,
            data,
            {
                headers: {"token" : "123456789"}
            }
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

export const deleteOne = async (endPoint, id) => {
    try {
        const response = await axios.delete(
            `${BASE_URL}${endPoint}/${id}`,
            {
                headers: {"token" : "123456789"}
            }
        );
        return response;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          data: err.response.data,
          status: err.response.status,
        })
      );
    }
};

