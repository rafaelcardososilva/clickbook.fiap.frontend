import React from 'react';

import { Image, Flex, Box, Text } from '@chakra-ui/react';

import dam from '../../assets/images/dam.jpeg';
import heart from '../../assets/images/heart.svg';

import { PostContainer } from './styles';

const Post: React.FC = () => {
  return (
    <PostContainer>
      <Flex
        padding={'16px'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex>
          <Box marginRight={'16px'}>
            <Image
              src={dam}
              boxSize={'40px'}
              alt={'Dan Abramov'}
              borderRadius={'full'}
            />
          </Box>
          <Box>
            <Text>Renato Duarte</Text>
            <Text fontSize={'xs'}>12/08/2022</Text>
          </Box>
        </Flex>
        <Box>
          <Text>Categoria</Text>
        </Box>
      </Flex>
      <Image alt={'Dan Abramov'} boxSize={'100%'} src={dam} />
      <Flex justifyContent={'center'} padding={'16px'} alignItems={'center'}>
        <Image src={heart} boxSize={'20px'} />
        <Text marginLeft={'8px'} color={'#FF0000'}>
          12k
        </Text>
      </Flex>
      <Text
        padding={'0 8px'}
        noOfLines={{ base: 2, sm: 4 }}
        marginBottom={'8px'}
      >
        Tirure dolor. ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, nostrud exerci
        irure dolor. ut aliquip ex ea commodo consequat. Duis aute, dolor sit
        amet, consectetur adipiscing elit, nostrud exerci irure dolor. ut
        aliquip ex ea
      </Text>
    </PostContainer>
  );
};

export default Post;
