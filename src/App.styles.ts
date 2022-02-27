import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');
* {
    font-family: 'Poppins', sans-serif;
}
  margin: 80px;
`;

export const StyledButton = styled(IconButton)`
  position: absolute;
  z-index: 100;
  right: 10%;
  top: 10%;
  background-color: #25c77c;
  color: #000;
    :hover {
      background-color: #21b571;
    }
`;
