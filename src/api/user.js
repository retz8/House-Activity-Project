
import client from "./client";

export const getUser = async (id) => {
  try {
    const { data } = await client(`/user/${id}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
