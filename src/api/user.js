import client from "./client";

export const getUser = async (id) => {
  try {
    const { data } = await client(`/user/${id}`);
    return data;
  } catch (error) {
    console.log("check");
    const { response } = error;
    console.log(response);
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const updateUser = async (id, formData) => {
  try {
    console.log("try");
    const { data } = await client.put(`/user/udpate/${id}`, formData);
    console.log("check");
    return data;
  } catch (error) {
    console.log("error");
    const { response } = error;
    if (response?.data) {
      console.log(response.data);
      return response.data;
    }
    return { error: error.message || error };
  }
};
