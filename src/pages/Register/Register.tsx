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
import { useNavigate } from 'react-router-dom';

import { useRequest } from '../../hooks/useRequest';
import { createRegister } from '../../services/register';
import Alert from '../../componentes/Alert';

const Register: React.FC = () => {
  let navigate = useNavigate();

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

  if (isSuccess) {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }

  const handleSubmit = async () => {
    const data = {
      nome: name,
      email,
      senha: password,
    };

    if (validateForm()) {
      setFormIsInvalid(false);
      await createRequest(data);
    } else {
      setFormIsInvalid(true);
    }
  };

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
        <Button
          colorScheme={'yellow'}
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          Cadastrar
        </Button>
      </Grid>
      {isFailure && (
        <Alert
          title={'Erro!'}
          status={'error'}
          description={'Falha ao registrar o cadastro, tente novamente.'}
        />
      )}
      {isSuccess && (
        <Alert
          title={'Parabéns!'}
          status={'success'}
          description={'Seu cadastro foi realizado com sucesso.'}
        />
      )}
    </Container>
  );
};

export default Register;
