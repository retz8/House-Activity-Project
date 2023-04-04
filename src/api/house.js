import client from "./client";

export const getHouseByName = async (houseName) => {
  try {
    console.log(houseName);
    const { data } = await client(`/house/name/${houseName}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getMembers = async (houseName) => {
  try {
    const { data } = await client(`/house/members/${houseName}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getLeaders = async (houseName) => {
  try {
    const { data } = await client(`/house/leaders/${houseName}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
