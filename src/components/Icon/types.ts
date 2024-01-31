import type { Color, FundamentalActions, Size } from '@types';

export type StyledIconProps = {
  size?: Size;
  color?: Color;
  opacity?: number;
};

export type IconProps = StyledIconProps &
  FundamentalActions & {
    Svg: JSX.Element;
  };
