import axios from "axios";
import { BASE_URL } from "utils/constants";
import { parseCharactersResponse } from "utils/helpers";

export const getSuggestions = async (characterName, page) => {
  try {
    const { data, status } = await axios.get(
      `${BASE_URL}/character/?page=${page}&name=${characterName}`
    );
    const parsedResponse = parseCharactersResponse(data);
    return { data: parsedResponse, status };
  } catch (error) {
    return error;
  }
};
