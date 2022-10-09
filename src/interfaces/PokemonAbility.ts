import { NamedApiResource } from '@interfaces';

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedApiResource;
}
