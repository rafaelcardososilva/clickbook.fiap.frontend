import { Heading, Flex, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Post from '../../componentes/Post';
import { logout, selectLogin } from '../../redux/loginSlice';

const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useSelector(selectLogin);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged]);

  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        margin={{ base: '0 16px 24px 16px', sm: '0 0 32px 0' }}
      >
        <Heading as={'h1'}>Clickbook</Heading>
        <Button variant={'ghost'} onClick={handleLogout}>
          Sair
        </Button>
      </Flex>
      <Post />
    </>
  );
};

export default Feed;
