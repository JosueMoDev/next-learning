import { PokemonGrid } from "@/pokemons";


export default async function FavoritesPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Favoritos <small className="text-red-500">local state</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
