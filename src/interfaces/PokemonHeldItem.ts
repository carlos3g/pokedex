import { NamedApiResource, PokemonHeldItemVersion } from '@interfaces';

export interface PokemonHeldItem {
  item: NamedApiResource;
  version_details: PokemonHeldItemVersion[];
}
