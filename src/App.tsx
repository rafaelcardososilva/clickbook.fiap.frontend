import Router from './Router';

import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="2xl" p={{ base: '24px 0', sm: '32px 0' }}>
      <Router />
    </Container>
  );
}

export default App;
