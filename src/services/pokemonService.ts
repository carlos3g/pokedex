import axios from 'axios';

import { ApiPaginatedResponse } from '@interfaces';
import { Pokemon } from '@models';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

interface getPokemonsProps {
  params: {
    limit: number;
  };
  page: number;
}

interface getPokemonProps {
  params: {
    id: number;
    name: string;
  };
}

export const pokemonService = {
  async getPokemons(props: getPokemonsProps): Promise<ApiPaginatedResponse> {
    const { params, page } = props;

    const limit = params.limit ? params.limit : 20;
    const offset = typeof page === 'number' ? limit * page : undefined;

    const { data } = await api.get<ApiPaginatedResponse>('/pokemon', {
      params: {
        ...params,
        offset,
      },
    });

    return data;
  },

  async getPokemon(props: getPokemonProps): Promise<Pokemon> {
    const { params } = props;
    const pokemonIdentifier = params.id || params.name;

    const { data } = await api.get<Pokemon>(`/pokemon/${pokemonIdentifier}`, {
      params,
    });

    return data;
  },
};
