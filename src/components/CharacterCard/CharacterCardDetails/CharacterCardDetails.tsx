import React, {memo} from 'react';
import {Image, View} from 'react-native';
import Card from '../components/Card/Card';
import Detail from '../components/Detail/Detail';
import LikeBtn from '../components/LikeBtn/LikeBtn';
import {styles} from './CharacterCardDetails.styled';
import {colors} from '../../../styles/global';
import type {Character} from '../../../types/CharactersInfo';

function CharacterCardDetails({
  data,
  isLiked,
}: {
  data: Character;
  isLiked: boolean;
}) {
  return (
    <Card style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: data.image}}
        alt={`${data.name}'s Character`}
      />

      <View>
        <View style={styles.mainDetailContainer}>
          <Detail label="Name" text={data.name} textSize="heading" />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoInnerContainer}>
            <Detail label="Status" text={data.status} accent />
            <Detail label="Origin" text={data.origin.name} accent />
          </View>

          <View style={styles.infoInnerContainer}>
            <Detail label="Species" text={data.species} accent />
            <Detail label="Gender" text={data.gender} accent />
          </View>
        </View>
      </View>

      <LikeBtn
        name={isLiked ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
        variant={isLiked ? 'primaryActive' : 'primary'}
        iconColor={colors.white}
        active={isLiked}
        characterId={data.id}
      />
    </Card>
  );
}

export default memo(CharacterCardDetails);
