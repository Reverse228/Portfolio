import type { FC } from 'react';
import type { IconProps } from './types';

import * as S from './styled';

export const Icon: FC<IconProps> = (props) => {
  const { Svg, ...restProps } = props;

  return <S.Wrapper {...restProps}>{Svg}</S.Wrapper>;
};
