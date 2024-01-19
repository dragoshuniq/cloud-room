import axios from "axios";
import { camelCaseDeep } from "../utils/deep";

export const getMatches = async () => {
  try {
    const response = await axios.get(
      "https://cloud-room.club/tournaments"
    );
    return camelCaseDeep(response.data);
  } catch (error) {
    return [];
  }
};
