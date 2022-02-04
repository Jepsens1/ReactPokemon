import Pokemon from "../components/pokemon";
import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://localhost:7077",
    headers: {
        "Content-type": "application/json",
        "ApiKey": "hL4bA4nB4yI0VI0fC8fH7eT6"
    }
});
 const getAll = async () => {
        const response = await apiClient.get<Pokemon[]>("/GetAllPokemons");
        console.log(response.data);
        return response.data;
    }
 const getById = async (id: number) => {
        const response = await apiClient.get<Pokemon>(`/GetPokemonDetailsFromID?id=${id}`);
        console.log(response.data);
        return response.data;
    }
  const searchPokemon = async (term: string) => {
        const response = await apiClient.get<Pokemon>(`//GetPokemon?name=${term}`);
        console.log(response.data);
        return response.data;
    }
const PokemonService = {
    getAll,
    getById,
    searchPokemon
}
export default PokemonService;