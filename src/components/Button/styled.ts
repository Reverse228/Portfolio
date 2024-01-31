import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { theme } from '@theme';

import type { StyledButtonProps } from './types';

export const Wrapper = styled.div<StyledButtonProps>`
  width: fit-content;
  display: flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

  ${({ iconPosition }) => {
    switch (iconPosition) {
      case 'start':
        return {
          flexDirection: 'row',
        };
      case 'end':
        return {
          flexDirection: 'row-reverse',
        };
      default:
        return {};
    }
  }}

  ${({ color }) => {
    switch (color) {
      case 'dark':
        return {
          backgroundColor: rgba(theme.colors.dark.base, 0.86),
          border: `0.5px solid ${theme.colors.dark.base}`,
        };
      case 'success':
        return {
          backgroundColor: theme.colors.success.base,
          border: ` 0.5px solid ${rgba(theme.colors.success.dark, 0.4)}`,
        };
      default:
        return {};
    }
  }}

  && {
    svg path {
      ${({ color, disabled }) => {
        switch (color) {
          case 'dark':
            return {
              fill: rgba(theme.colors.light.base, disabled ? 0.4 : 1),
            };
          case 'success':
            return {
              fill: rgba(theme.colors.dark.base, disabled ? 0.4 : 0.8),
            };
          default:
            return {};
        }
      }}
    }
  }

  &:hover {
    ${({ disabled }) =>
      !disabled && {
        boxShadow: `0px 2px 10px -4px ${rgba(theme.colors.dark.base, 0.6)}`,
        transform: `translateY(-1.5px)`,
      }}
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const Label = styled.p<StyledButtonProps>`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({ color, disabled }) => {
    switch (color) {
      case 'dark':
        return {
          color: rgba(theme.colors.light.base, disabled ? 0.4 : 1),
        };
      case 'success':
        return {
          color: rgba(theme.colors.dark.base, disabled ? 0.4 : 0.8),
        };
      default:
        return {};
    }
  }}
`;
