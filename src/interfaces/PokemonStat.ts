import { NamedApiResource } from '@interfaces';

export interface PokemonStat {
  stat: NamedApiResource;
  effort: number;
  base_stat: number;
}
