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

export const getEvents = async (pageNum, limit) => {
  try {
    const { data } = await client(
      `/event/events-page?pageNum=${pageNum}&limit=${limit}`
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getFilteredEvents = async (pageNum, limit) => {
  try {
    const { data } = await client(
      `/event/events-filter?pageNum=${pageNum}&limit=${limit}`
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getEvent = async (id) => {
  try {
    const { data } = await client(`/event/${id}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
