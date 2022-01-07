import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {SecondaryCard} from './SecondaryCard';

export const Groupes = () => {
  return (
    <View style={style.container}>
      <Text style={style.sectionTitle}>Travel Groupes</Text>
      <FlatList
        keyExtractor={item => `banner_${item.id}`}
        data={MOCK}
        renderItem={({item}) => {
          return (
            <SecondaryCard
              title={item.title}
              src={item.img}
              subTitle={item.subTitle}
              style={{marginRight: 10}}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 30, paddingVertical: 10}}
        style={{width: '100%', flex: 1}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#333',
    marginHorizontal: 30,
    marginVertical: 20,
    marginBottom: 10,
  },
});

const MOCK = [
  {
    title: 'Hoggar Mountains',
    subTitle: 'Tamanrasset, Algeria',
    id: 1,
    img: require('../assets/images/Place3.png'),
  },
  {
    title: 'Yemma Gouraya',
    subTitle: ' Bejaia Algeria',
    id: 2,
    img: require('../assets/images/Place4.png'),
  },
  {
    title: 'Hoggar Mountains',
    subTitle: 'Tamanrasset, Algeria',
    id: 3,
    img: require('../assets/images/Place3.png'),
  },
  {
    title: 'Yemma Gouraya',
    subTitle: ' Bejaia Algeria',
    id: 4,
    img: require('../assets/images/Place4.png'),
  },
];
