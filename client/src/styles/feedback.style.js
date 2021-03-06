import styled from 'styled-components';

export const FeedbackWrapper = styled.div``;

export const NoFeedback = styled.div``;

export const FeedbackStyle = styled.div`
  display: flex;
  width: auto;
  min-width: 300px;
`;

export const FeedbackInputsWrapper = styled.div``;

export const FeedbackInputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TierSelect = styled.select`
  flex-basis: 25%;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgb(152, 149, 134);
  min-width: 180px;
  height: 48px;
  padding: 12px;
  color: rgb(115, 114, 108);
  font-size: 16px;
  line-height: 24px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' height='20' xmlns='http://www.w3.org/2000/svg'><path d='M 16.59 8.59 L 12 13.17 L 7.41 8.59 L 6 10 l 6 6 l 6 -6 l -1.41 -1.41 Z' fill='rgb(115, 114, 108)'/></svg>") no-repeat;
  background-position: right 8px top 50%;
`;

export const TierOption = styled.option`
`;