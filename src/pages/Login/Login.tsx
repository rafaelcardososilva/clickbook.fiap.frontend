import {
  Text,
  Flex,
  Box,
  Grid,
  Input,
  Button,
  Heading,
  FormControl,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <>
      <Heading as={'h1'} textAlign={'center'}>
        ClickBook
      </Heading>
      <FormControl p={{ base: '16px', sm: '32px 16px' }}>
        <Input id={'email'} type={'email'} placeholder={'E-mail'}  />
        <Input
          id={'password'}
          type={'password'}
          placeholder={'Senha'}
          marginTop={'24px'}
        />
        <Grid margin={'24px 0'}>
          <Button colorScheme={'yellow'}>Fazer Login</Button>
        </Grid>
        <Flex justifyContent={'center'}>
          <Box>
            <Text display={'inline-block'} marginRight={'8px'}>
              Não tem uma conta?
            </Text>
            <Link to={'/cadastro'} style={{ textDecoration: 'underline' }}>
              Cadastre-se
            </Link>
          </Box>
        </Flex>
      </FormControl>
    </>
  );
};

export default Login;
