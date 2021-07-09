import { styled } from '@material-ui/core/styles';

export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0; //16px 0 pega thema e spacing é uma função do atributo thema 2x8 ;
  font-size: 12px;
`;
