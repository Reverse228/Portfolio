import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { theme } from '@theme';

import type { StyledIconProps } from './types';

export const Wrapper = styled.div<StyledIconProps>`
  svg {
    ${({ size }) => {
      switch (size) {
        case 'S':
          return {
            width: '12px',
            height: '12px',
          };
        case 'M':
          return {
            width: '18px',
            height: '18px',
          };
        case 'L':
          return {
            width: '64px',
            height: '64px',
          };
        default:
          return {
            height: 'auto',
            width: 'auto',
          };
      }
    }};

    path {
      ${({ color, opacity }) => {
        const rgbaValue = opacity ?? 1;

        switch (color) {
          case 'alert':
            return {
              fill: rgba(theme.colors.alert.base, rgbaValue),
            };
          case 'dark':
            return {
              fill: rgba(theme.colors.dark.base, rgbaValue),
            };
          case 'error':
            return {
              fill: rgba(theme.colors.error.base, rgbaValue),
            };
          case 'light':
            return {
              fill: rgba(theme.colors.light.base, rgbaValue),
            };
          case 'success':
            return {
              fill: rgba(theme.colors.success.base, rgbaValue),
            };
          default:
            return {
              fill: rgba(theme.colors.light.base, rgbaValue),
            };
        }
      }}
    }
  }
`;
