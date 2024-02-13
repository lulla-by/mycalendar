import styled from 'styled-components';

interface ButtonProps {
  text: string;
  color?: string;
  clickEvent?: (type: string) => void;
}

type StyleProps = Pick<ButtonProps, 'color'>;

const Button = ({ text, color, clickEvent }: ButtonProps) => {
  const theme = text.toLowerCase();

  return (
    <ButtonContainer
      color={color}
      onClick={() => clickEvent && clickEvent(theme)}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<StyleProps>`
  background-color: ${({ color }) => color};
  color: white;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 50%;
`;
