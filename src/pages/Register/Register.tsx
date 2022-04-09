import {
  Grid,
  Input,
  Button,
  Heading,
  Container,
  FormControl,
} from '@chakra-ui/react';

const Register: React.FC = () => {
  return (
    <Container p={'0 16px'}>
      <Heading as={'h1'}>Cadastro</Heading>
      <FormControl>
        <Input id={'name'} type={'text'} placeholder={'Nome'} marginTop={'24px'} />
        <Input
          id={'email'}
          type={'email'}
          placeholder={'E-mail'}
          marginTop={'24px'}
        />
        <Input
          id={'password'}
          type={'password'}
          placeholder={'Senha'}
          marginTop={'24px'}
        />
        <Input
          id={'passwordAgain'}
          type={'password'}
          placeholder={'Repita a senha'}
          marginTop={'24px'}
        />
        <Grid margin={'24px 0'}>
          <Button colorScheme={'yellow'}>Cadastrar</Button>
        </Grid>
      </FormControl>
    </Container>
  );
};

export default Register;
