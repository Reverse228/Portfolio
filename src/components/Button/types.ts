import type { Color, FundamentalActions } from '@types';

export type StyledButtonProps = {
  color?: Exclude<Color, 'error' | 'alert' | 'light'>;
  iconPosition?: 'start' | 'end';
  disabled?: boolean;
};

export type ButtonProps = FundamentalActions &
  StyledButtonProps & {
    label: string;
    icon?: JSX.Element;
  };
