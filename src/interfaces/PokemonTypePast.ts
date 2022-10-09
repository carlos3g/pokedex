import { NamedApiResource, PokemonType } from '@interfaces';

export interface PokemonTypePast {
  generation: NamedApiResource;
  types: PokemonType[];
}
