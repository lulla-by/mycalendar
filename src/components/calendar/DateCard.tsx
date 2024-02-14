import React from 'react';
import styled from 'styled-components';

interface DateCard {
  props: {
    date: number;
    state: string;
    today?: boolean;
  };
}

type StyledProps = Pick<DateCard, 'props'>;

const DateCard = ({ props }: DateCard) => {
  return (
    <CardContainer props={props}>
      <DateText props={props}>{props.date}</DateText>
    </CardContainer>
  );
};

export default DateCard;

const CardContainer = styled.div<StyledProps>`
  height: 100%;
  display: inline-block;
  background-color: ${({ props, theme }) =>
    props.state === 'prev' || props.state === 'next'
      ? '#f1f3f5'
      : theme.colors.light};
  border: 1px solid #e9ecef;

  color: ${({ props, theme }) =>
    props.state === 'prev' || props.state === 'next'
      ? '#868e96'
      : theme.colors.main};
`;

const DateText = styled.p<StyledProps>`
display:block;
  background-color: ${({ theme, props }) =>
    props.state === 'prev' || props.state === 'next'
      ? null
      : theme.colors.median};
  color: ${({ theme, props }) =>
    props.state === 'prev' || props.state === 'next'
      ? '#ced4da'
      : theme.colors.base};
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
  border-radius: 0 0 5px 0;
`;
