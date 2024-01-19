import axios from "axios";

export const getMatches = async () => {
  try {
    const response = await axios.get(
      "https://cloud-room.club/tournaments"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
