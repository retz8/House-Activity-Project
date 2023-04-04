import client from "./client";

export const getAllEvents = async () => {
  try {
    const { data } = await client("/event/events");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
