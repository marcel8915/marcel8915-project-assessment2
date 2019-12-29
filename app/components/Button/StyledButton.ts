import styled from 'styles/styled-components';

const StyledButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.75em 3em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  :disabled {
    opacity: 0.5;
  }
`;

export default StyledButton;
