import styled from '@emotion/styled';

export interface BoxProps {
  bgColor?: string;
  ms?: number;
  ps?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}
export const Box = styled.div<BoxProps>`
  background-color: ${(props: { bgColor?: string }) =>
    props.bgColor || '#f5f5f5'};
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;

  margin: ${(props) =>
    props.ms
      ? props.ms + 'px'
      : `${props.mt || 0}px ${props.mr || 0}px ${props.mb || props.mt || 0}px ${
          props.ml || props.mr || 0
        }px`};

  padding: ${(props) =>
    props.ps
      ? props.ps + 'px'
      : `${props.pt || 0}px ${props.pr || 0}px ${props.pb || props.pt || 0}px ${
          props.pl || props.pr || 0
        }px`};
`;
