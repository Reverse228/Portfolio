export type Size = 'S' | 'M' | 'L';

export type Variant = 'filled' | 'outland';

export type Color = 'dark' | 'light' | 'success' | 'error' | 'alert';

export type FundamentalActions = {
  onClick?: () => void;
  onChange?: () => void;
  onBlur?: () => void;
};
