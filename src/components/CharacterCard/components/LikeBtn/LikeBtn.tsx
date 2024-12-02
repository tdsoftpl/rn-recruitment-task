import React, {memo, type ComponentProps} from 'react';
import {useCharacters} from '../../../../hooks/useCharacters';
import Button from '../../../Button/Button';
import StarIcon from '../../../../icons/Star';
import StarEmptyIcon from '../../../../icons/StarEmpty';
import {colors} from '../../../../styles/global';
import {styles} from './LikeBtn.styled';

type LikeBtnProps = {
  active: boolean;
  characterId: number;
  iconColor?: string;
} & ComponentProps<typeof Button>;

function LikeBtn({
  active,
  characterId,
  iconColor = colors.darkGreen,
  ...props
}: LikeBtnProps) {
  const {toggleLikedStatus} = useCharacters();

  return (
    <Button
      activeOpacity={0.8}
      {...props}
      icon={
        active ? (
          <StarIcon color={colors.accent} size={16} />
        ) : (
          <StarEmptyIcon color={iconColor} size={16} />
        )
      }
      style={[styles.btn, props.style]}
      onPress={() => toggleLikedStatus(characterId)}
    />
  );
}

export default memo(LikeBtn);
