import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchAllAlbums = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/albums`);
    if (response.status !== 200) {
      throw new Error("Error fetching all albums");
    }
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const fetchAlbumById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/${id}`);
    if (response.status !== 200) {
      throw new Error("Error fetching album by id!");
    }
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const createAlbum = async (album) => {
  try {
    const response = await axios.post(`${BASE_URL}/albums`, album);
    if (response.status !== 201) {
      throw new Error("Error creating new album!");
    }
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
