import { FC, useCallback, useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';

import SearchSVG from '@assets/icons/search.svg';
import PatternPokeball from '@assets/patterns/pokeball.svg';
import { Input } from '@components';
import { Pokemon } from '@models';
import { pokemonService } from '@services';
import { colors } from '@styles';
import styles from './styles';
import { ThemedButton } from './ThemedButton';

const { width: wWidth } = Dimensions.get('window');

const separatorComponent = () => <View style={styles.separator} />;

const renderItem: ListRenderItem<Pokemon> = ({ item }) => <ThemedButton pokemon={item} />;

const keyExtractor: (item: Pokemon, index: number) => string = (item) => item.name;

const InputLeftComponent = () => <SearchSVG fill={colors.texts.gray} />;

export const Home: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState(0);
  const [isSearch, setIsSearch] = useState(false);

  const searchPokemon = useCallback(async (searchText: string) => {
    if (!searchText) {
      setPokemons([]);
      setIsSearch(false);

      return;
    }

    try {
      const pokemon = await pokemonService.getPokemon({ params: { name: searchText } });

      setIsSearch(true);
      setNextPage(0);
      setPokemons([pokemon]);
    } catch (e) {
      console.log('Nenhum pokemon encontrado');
    }
  }, []);

  const fetchPokemons = useCallback(async () => {
    if (isSearch) {
      return;
    }

    const { results: rawResults } = await pokemonService.getPokemons({ page: nextPage });
    const resultsPromises = rawResults.map(({ name }) => pokemonService.getPokemon({ params: { name } }));
    const results = await Promise.all(resultsPromises);

    setNextPage((pS) => pS + 1);
    setPokemons((pS) => [...pS, ...results]);
  }, [nextPage, isSearch]);

  useEffect(() => {
    void fetchPokemons();
  }, [isSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <Text style={styles.description}>Search for Pokémon by name or using the National Pokédex number.</Text>

      <Input
        placeholder="Which pokémon are you looking for?"
        onChangeText={searchPokemon}
        leftComponent={InputLeftComponent}
      />

      <FlashList<Pokemon>
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={167}
        ItemSeparatorComponent={separatorComponent}
        onEndReached={fetchPokemons}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flashListContent}
      />

      <PatternPokeball
        fill={colors.gradients.pokeball[0]}
        width={wWidth}
        height={wWidth}
        style={styles.patternPokeball}
      />
    </View>
  );
};
