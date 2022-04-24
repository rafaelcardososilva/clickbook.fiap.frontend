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
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '../../componentes/Alert';

import { AppDispatch } from '../../redux/store';
import { signIn, selectLogin } from '../../redux/loginSlice';

const Login: React.FC = () => {
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { isLogged, isLoading, isFailure } = useSelector(selectLogin);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = () => {
    dispatch(signIn(email, password));
  };

  useEffect(() => {
    if (isLogged) {
      navigate('/feed');
    }
  }, [isLogged]);

  return (
    <>
      <Heading as={'h1'} textAlign={'center'}>
        ClickBook
      </Heading>
      <FormControl p={{ base: '16px', sm: '32px 16px' }}>
        <Input
          id={'email'}
          type={'email'}
          placeholder={'E-mail'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id={'password'}
          type={'password'}
          marginTop={'24px'}
          placeholder={'Senha'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Grid margin={'24px 0'}>
          <Button
            colorScheme={'yellow'}
            onClick={handleSignIn}
            isLoading={isLoading}
          >
            Fazer Login
          </Button>
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
        {isFailure && (
          <Alert
            title={'Erro!'}
            status={'error'}
            description={'E-mail ou senha inválidos'}
          />
        )}
      </FormControl>
    </>
  );
};

export default Login;
