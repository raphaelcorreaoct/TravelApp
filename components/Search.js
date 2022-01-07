import React from 'react';
import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
import {PrimaryButton} from './PrimaryButton';
import {SecondaryButton} from './SecondaryButton';

export const Search = () => {
  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>We hope you find what you came for</Text>
        <View style={style.wrapField}>
          <View style={style.fakeField}>
            <Image
              source={require('../assets/icons/icon-search.png')}
              style={{width: 14, height: 14}}
            />
            <TextInput placeholder="Search places" />
          </View>
          <PrimaryButton>
            <Image
              source={require('../assets/icons/icon-filter.png')}
              style={{width: 24, height: 24}}
            />
          </PrimaryButton>
        </View>
      </View>
      <FlatList
        keyExtractor={item => `fill_${item.id}`}
        data={MOCK}
        renderItem={({item}) => {
          return (
            <SecondaryButton text={item.label} style={{marginRight: 10}} />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 30}}
        style={{marginTop: 25, width: '100%', flex: 1}}
      />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#333',
    marginBottom: 25,
  },
  fakeField: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  wrapField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const MOCK = [
  {label: 'All', id: 1},
  {label: 'Most Viewed', id: 2},
  {label: 'Recommended', id: 3},
  {label: 'Cities', id: 4},
  {label: 'Beaches', id: 5},
  {label: 'Museums', id: 6},
  {label: 'historic cities', id: 7},
  {label: 'Nature', id: 8},
  {label: 'Adventure', id: 9},
];
