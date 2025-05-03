import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Star from '../../assets/svg/star.svg';
import StarSelected from '../../assets/svg/star_golden.svg';
import { Character } from '../services/characterAPI';
import { useFavorites } from '../services/FavoritesContext';

type CharacterProps = Character;

const CharacterCard = ({ id, name, status, species, image, ...rest }: CharacterProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const liked = isFavorite(id);

  return (
    <View className="flex-1 justify-center items-center mb-6">
      <View className="relative">
        <View className="absolute bg-[#162C1B] rounded-3xl w-[98%] h-[90%] z-0 bottom-4 ml-2" />
        <View className="flex-row border border-[#162C1B] p-4 rounded-3xl bg-white mb-6 z-10 mr-2">
          <View className="w-[40%]">
            <View>
              <Text className="text-[#59695C] font-medium text-sm">NAME</Text>
              <Text className="text-[#162C1B] font-semibold text-lg">{name}</Text>
            </View>
            <View className="mt-2">
              <Text className="text-[#59695C] font-medium text-sm">STATUS</Text>
              <Text className="text-[#162C1B] font-semibold text-lg">{status}</Text>
            </View>
            <View className="mt-2">
              <Text className="text-[#59695C] font-medium text-sm">SPECIES</Text>
              <Text className="text-[#162C1B] font-semibold text-lg">{species}</Text>
            </View>
          </View>

          <View className="w-[60%]">
            <Image
              source={{ uri: image }}
              className="w-[200] h-[200] rounded-3xl border border-[#162C1B]"
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => toggleFavorite({ id, name, status, species, image, ...rest })}
              className={`absolute bottom-[10px] right-[10px] ${liked?'bg-[#DAE4DC]':'bg-white'} p-2 rounded-full flex-row justify-center items-center w-[82] h-[34] border border-[#162C1B]`}
            >
              {liked ? <StarSelected width={16} height={16} /> : <Star width={16} height={16} />}
              <Text className="text-[#162C1B] font-medium text-md ml-2">
                LIKE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterCard;
