import axios from "axios";
const pokeApiUrl = "https://tender-calf-sweatsuit.cyclic.app/pokemon";

export const pokemonApi1 = async () => {
  try {
    const result = await axios(pokeApiUrl).then((data) => data);
    if (!result)
      throw new Error(`Fail to get datas with a status of ${result.status}`);
    console.log(result);
    return result;
  } catch (error) {
    console.warn(error);
  }
};

pokemonApi1();
