import { useQuery } from "@tanstack/react-query";
import { fetchPokemonData } from "../utils";

export const useFetchPokemonData = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonData(id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
