import { PokemonTypes } from '@enums';
import { NamedApiResource } from '@interfaces';

export interface PokemonType {
  slot: number;
  type: NamedApiResource<PokemonTypes>;
}
