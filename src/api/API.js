import axios from "axios";

export const getMatches = async () => {
  try {
    const response = await axios.get(
      "https://cloud-room.club/tournaments"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
