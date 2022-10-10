import { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { PokemonTypes } from '@enums';
import { colors } from '@styles';
import BugSVG from '../../assets/icons/types/bug.svg';
import DarkSVG from '../../assets/icons/types/dark.svg';
import DragonSVG from '../../assets/icons/types/dragon.svg';
import ElectricSVG from '../../assets/icons/types/electric.svg';
import FairySVG from '../../assets/icons/types/fairy.svg';
import FightingSVG from '../../assets/icons/types/fighting.svg';
import FireSVG from '../../assets/icons/types/fire.svg';
import FlyingSVG from '../../assets/icons/types/flying.svg';
import GhostSVG from '../../assets/icons/types/ghost.svg';
import GrassSVG from '../../assets/icons/types/grass.svg';
import GroundSVG from '../../assets/icons/types/ground.svg';
import IceSVG from '../../assets/icons/types/ice.svg';
import NormalSVG from '../../assets/icons/types/normal.svg';
import PoisonSVG from '../../assets/icons/types/poison.svg';
import PsychicSVG from '../../assets/icons/types/psychic.svg';
import RockSVG from '../../assets/icons/types/rock.svg';
import SteelSVG from '../../assets/icons/types/steel.svg';
import WaterSVG from '../../assets/icons/types/water.svg';
import styles from './styles';

const iconComponents: Record<PokemonTypes, typeof BugSVG> = {
  normal: NormalSVG,
  fighting: FightingSVG,
  flying: FlyingSVG,
  poison: PoisonSVG,
  ground: GroundSVG,
  rock: RockSVG,
  bug: BugSVG,
  ghost: GhostSVG,
  steel: SteelSVG,
  fire: FireSVG,
  water: WaterSVG,
  grass: GrassSVG,
  electric: ElectricSVG,
  psychic: PsychicSVG,
  ice: IceSVG,
  dragon: DragonSVG,
  dark: DarkSVG,
  fairy: FairySVG,
};

type TypeBadgeProps = {
  type: PokemonTypes;
  viewStyles?: ViewStyle;
};

export const TypeBadge: FC<TypeBadgeProps> = ({ type, viewStyles }) => {
  const Icon = iconComponents[type];

  return (
    <View style={[styles.container, viewStyles, { backgroundColor: colors.pokemonTypes[type].primary }]}>
      <Icon width={15} height={15} fill="#ffffff" />
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};
