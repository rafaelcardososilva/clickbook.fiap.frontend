import { useState } from 'react';

import {
  Grid,
  Input,
  Button,
  Heading,
  Container,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useRequest } from '../../hooks/useRequest';
import { register } from '../../models/register.model';
import { createRegister } from '../../services/register';

const Register: React.FC = () => {
  const { createRequest, isFailure, isLoading, isSuccess } =
    useRequest(createRegister);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [formIsInvalid, setFormIsInvalid] = useState<boolean>(false);

  const validateForm = (): boolean => {
    return password === passwordAgain && password !== '';
  };

  const handleSubmit = async () => {
    const data: register = {
      name,
      email,
      password,
      passwordAgain,
    };

    if (validateForm()) {
      setFormIsInvalid(false);
      await createRequest(data);

      // const { isLoading, isError, isSuccess } = response;
    } else {
      setFormIsInvalid(true);
    }
  };

  console.log('isLoading', isLoading);

  return (
    <Container p={'0 16px'}>
      <Heading as={'h1'}>Cadastro</Heading>
      <Input
        id={'name'}
        type={'text'}
        placeholder={'Nome'}
        marginTop={'24px'}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id={'email'}
        type={'email'}
        marginTop={'24px'}
        placeholder={'E-mail'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl isInvalid={formIsInvalid}>
        <Input
          id={'password'}
          type={'password'}
          placeholder={'Senha'}
          marginTop={'24px'}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormErrorMessage>Senhas inválidas ou não são iguais.</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formIsInvalid}>
        <Input
          id={'passwordAgain'}
          type={'password'}
          placeholder={'Repita a senha'}
          marginTop={'24px'}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <FormErrorMessage>Senhas inválidas ou não são iguais.</FormErrorMessage>
      </FormControl>
      <Grid margin={'24px 0'}>
        <Button colorScheme={'yellow'} onClick={handleSubmit}>
          Cadastrar
        </Button>
      </Grid>
    </Container>
  );
};

export default Register;
