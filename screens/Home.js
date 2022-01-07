import React from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Header} from '../components/Header';
import {PrimaryCard} from '../components/PrimaryCard';
import {Search} from '../components/Search';
import {Groupes} from '../components/Groupes';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.container}>
        <Header />
        <Search />
        <FlatList
          keyExtractor={item => `banner_${item.id}`}
          data={MOCK}
          renderItem={({item}) => {
            return (
              <PrimaryCard
                title={item.title}
                src={item.img}
                subTitle={item.subTitle}
                style={{marginRight: 10}}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 30}}
          style={{marginTop: 25, width: '100%', flex: 1}}
        />
        <Groupes />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MOCK = [
  {
    title: 'Hoggar Mountains',
    subTitle: 'Tamanrasset, Algeria',
    id: 1,
    img: require('../assets/images/Place2.png'),
  },
  {
    title: 'Yemma Gouraya',
    subTitle: ' Bejaia Algeria',
    id: 2,
    img: require('../assets/images/Place1.png'),
  },
  {
    title: 'Hoggar Mountains',
    subTitle: 'Tamanrasset, Algeria',
    id: 3,
    img: require('../assets/images/Place2.png'),
  },
  {
    title: 'Yemma Gouraya',
    subTitle: ' Bejaia Algeria',
    id: 4,
    img: require('../assets/images/Place1.png'),
  },
];

export default App;
