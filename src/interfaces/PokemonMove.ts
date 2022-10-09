import { NamedApiResource, PokemonMoveVersion } from '@interfaces';

export interface PokemonMove {
  move: NamedApiResource;
  version_group_details: PokemonMoveVersion[];
}
