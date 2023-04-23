import axios from "axios";

const API_URL = "/api/prayers/";

// Create new prayer
const createPrayer = async (prayerData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, prayerData, config);

  return response.data;
};

// Get user prayers
const getPrayers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user prayers
const deletePrayer = async (prayerId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + prayerId, config);

  return response.data;
};

const prayerService = {
  createPrayer,
  getPrayers,
  deletePrayer,
};

export default prayerService;
