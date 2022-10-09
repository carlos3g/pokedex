import {
  NamedApiResource,
  PokemonAbility,
  PokemonHeldItem,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
  PokemonType,
  PokemonTypePast,
  VersionGameIndex,
} from '@interfaces';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedApiResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: NamedApiResource;
  stats: PokemonStat[];
  types: PokemonType[];
}
