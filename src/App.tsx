import styled from 'styled-components';
import { keyframes } from 'styled-components'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`;

const AnimatedBackground = styled.div`
  width: 100wh;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  -webkit-animation: ${gradientAnimation} 10s ease infinite;
  -moz-animation: ${gradientAnimation} 10s ease infinite;
  animation: ${gradientAnimation} 10s ease infinite;
`;

const App = () => {
  return (
    <AnimatedBackground />
  );
};

export default App;
