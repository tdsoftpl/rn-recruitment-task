import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Star from '../../../../../assets/svg/star_white.svg';
import StarSelected from '../../../../../assets/svg/star_golden.svg';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {useFavorites} from '../../../../services/FavoritesContext';

const CharacterDetailsScreen = () => {
  const route =
    useRoute<
      RouteProp<CharacterDetailsStackParamList, 'CharacterDetailsScreen'>
    >();
  const {id, name, status, species, image, origin, gender} = route.params;
  const navigation = useNavigation();
  const {toggleFavorite, isFavorite} = useFavorites();

  const liked = isFavorite(id);

  return (
    <View className="flex-1 justify-center items-center mb-6 bg-[#F4F6F5] p-2">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className=" flex-row w-full h-[5%] justify-start items-center mb-6">
        <Text className="text-[#59695C] underline">
          Go back to Characters List
        </Text>
      </TouchableOpacity>
      <View className="relative w-full h-[90%]">
        <View className="absolute bg-[#162C1B] rounded-3xl w-[98%] h-full z-0 top-2 ml-2"></View>
        <View className="flex-1 border border-[#162C1B] p-4 rounded-3xl bg-white z-10 mr-2 h-full justify-around items-center">
          <View className="flex-row w-full justify-center items-center mb-2">
            <Image
              source={{uri: image}}
              className="w-[310] h-[310] rounded-3xl border border-[#162C1B]"
              resizeMode="cover"
            />
          </View>
          <View className="flex-row w-[90%]">
            <View className="w-full">
              <Text className="text-[#59695C] font-medium text-sm w-full">
                NAME
              </Text>
              <Text className="text-[#162C1B] font-semibold text-3xl w-full">
                {name}
              </Text>
            </View>
          </View>
          <View className="flex-row w-[90%]">
            <View className="flex-1 bg-[#F4F6F5] p-2 rounded-2xl mr-4">
              <Text className="text-[#59695C] font-medium text-sm">STATUS</Text>
              <Text className="text-[#162C1B] font-normal text-lg">
                {status}
              </Text>
            </View>
            <View className="flex-1 bg-[#F4F6F5] p-2 rounded-2xl">
              <Text className="text-[#59695C] font-medium text-sm">ORIGIN</Text>
              <Text className="text-[#162C1B] font-normal text-lg">
                {origin.name}
              </Text>
            </View>
          </View>
          <View className="flex-row w-[90%]">
            <View className="flex-1 bg-[#F4F6F5] p-2 rounded-2xl mr-4">
              <Text className="text-[#59695C] font-medium text-sm">
                SPECIES
              </Text>
              <Text className="text-[#162C1B] font-normal text-lg">
                {species}
              </Text>
            </View>
            <View className="flex-1 bg-[#F4F6F5] p-2 rounded-2xl">
              <Text className="text-[#59695C] font-medium text-sm">GENDER</Text>
              <Text className="text-[#162C1B] font-normal text-lg">
                {gender}
              </Text>
            </View>
          </View>
          <View className="flex-row w-[90%]">
            <TouchableOpacity
              className={`p-3 rounded-full flex-row justify-center items-center w-full ${
                liked ? 'bg-[#224229]' : 'bg-[#224229]'
              }`}
              onPress={() =>
                toggleFavorite({
                  id,
                  name,
                  status,
                  species,
                  image,
                  origin,
                  gender,
                })
              }>
              {liked ? (
                <StarSelected width={16} height={16} />
              ) : (
                <Star width={16} height={16} />
              )}
              <Text className="text-white font-semibold text-md ml-2 uppercase">
                {liked ? 'Remove from Favorites' : 'Add to Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetailsScreen;
