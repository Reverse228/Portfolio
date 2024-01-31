import { Icon } from '@components';

import type { FC } from 'react';
import type { ButtonProps } from './types';

import * as S from './styled';

export const Button: FC<ButtonProps> = (props) => {
  const { icon, label, disabled, color, ...restProps } = props;

  return (
    <S.Wrapper {...{ disabled, color, ...restProps }}>
      {icon && <Icon Svg={icon} />}
      <S.Label {...{ disabled, color }}>{label}</S.Label>
    </S.Wrapper>
  );
};
