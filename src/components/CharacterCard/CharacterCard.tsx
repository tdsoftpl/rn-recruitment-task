import React, {memo} from 'react';
import {useCharacters} from '../../hooks/useCharacters';
import CharacterCardShort from './CharacterCardShort/CharacterCardShort';
import CharacterCardDetails from './CharacterCardDetails/CharacterCardDetails';
import type {Character} from '../../types/CharactersInfo';

type CharacterCardProps = {
  data: Character;
  detailed?: boolean;
};

function CharacterCard({data, detailed}: CharacterCardProps) {
  const {likedCharactersIds} = useCharacters();

  return (
    <>
      {detailed ? (
        <CharacterCardDetails
          data={data}
          isLiked={likedCharactersIds.includes(data.id)}
        />
      ) : (
        <CharacterCardShort
          data={data}
          isLiked={likedCharactersIds.includes(data.id)}
        />
      )}
    </>
  );
}

export default memo(CharacterCard);
