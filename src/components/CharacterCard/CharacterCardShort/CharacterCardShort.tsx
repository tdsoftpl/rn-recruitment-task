import React, {memo} from 'react';
import {Image, View} from 'react-native';
import Card from '../components/Card/Card';
import Detail from '../components/Detail/Detail';
import LikeBtn from '../components/LikeBtn/LikeBtn';
import {styles} from './CharacterCardShort.styled';
import type {Character} from '../../../types/CharactersInfo';

function CharacterCardShort({
  data,
  isLiked,
}: {
  data: Character;
  isLiked: boolean;
}) {
  return (
    <View style={styles.container}>
      <Card style={styles.innerContainer}>
        <View style={styles.infoContainer}>
          <Detail label="Name" text={data.name} />

          <Detail label="Status" text={data.status} />

          <Detail label="Species" text={data.species} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: data.image}}
            alt={`${data.name}'s Character`}
          />

          <LikeBtn
            name="LIKE"
            variant={isLiked ? 'outlineActive' : 'outline'}
            active={isLiked}
            style={styles.likeBtn}
            characterId={data.id}
          />
        </View>
      </Card>
    </View>
  );
}

export default memo(CharacterCardShort);
