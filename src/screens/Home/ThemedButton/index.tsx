import React, { FC } from 'react';
import { Image, Pressable, PressableProps, Text, View } from 'react-native';

import PatternGrid6x3 from '@assets/patterns/grid-6x3.svg';
import PatternPokeball from '@assets/patterns/pokeball.svg';
import { TypeBadge } from '@components';
import { Pokemon } from '@models';
import { colors } from '@styles';
import styles from './styles';

interface ThemedButtonProps extends PressableProps {
  pokemon: Pokemon;
}

const ThemedButton: FC<ThemedButtonProps> = React.memo(({ pokemon, ...rest }) => {
  const NPNumber = `#${pokemon.id.toString().padStart(4, '0')}`;
  const containerDynamicStyle = { backgroundColor: colors.pokemonTypes[pokemon.types[0].type.name].background };

  return (
    <Pressable style={[styles.container, containerDynamicStyle]} {...rest}>
      <View style={styles.details}>
        <Text style={styles.pokemonNumber}>{NPNumber}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>

        <View style={styles.badges}>
          {pokemon.types.map(({ type }) => (
            <TypeBadge key={type.name} type={type.name} viewStyles={styles.spaceRight} />
          ))}
        </View>
      </View>

      <Image
        style={styles.sprite}
        source={{ uri: pokemon.sprites.other['official-artwork'].front_default, width: 200, height: 200 }}
      />

      <PatternGrid6x3 fill={colors.gradients.vector[0]} width={74} height={32} style={styles.patternGrid6x3} />
      <PatternPokeball fill={colors.gradients.vector[0]} width={160} height={160} style={styles.patternPokeball} />
    </Pressable>
  );
});

export { ThemedButton };
