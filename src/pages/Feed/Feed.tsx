import { Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Post from '../../componentes/Post';

const Feed: React.FC = () => {
  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        margin={{ base: '0 16px 24px 16px', sm: '0 0 32px 0' }}
      >
        <Heading as={'h1'}>Clickbook</Heading>
        <Link to={'/login'}>Sair</Link>
      </Flex>
      <Post />
    </>
  );
};

export default Feed;
