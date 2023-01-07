import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID oBsbTeZ-NjQN0MfqulAqGoE4aaiJt49LuTgYmrj5D-g",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
