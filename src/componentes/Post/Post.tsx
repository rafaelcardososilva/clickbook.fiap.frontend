import React, { useEffect } from 'react';

import { Image, Flex, Box, Text } from '@chakra-ui/react';

import dam from '../../assets/images/dam.jpeg';
import heart from '../../assets/images/heart.svg';

import { PostContainer } from './styles';
import { useRequest } from '../../hooks/useRequest';
import { getFeed } from '../../services/feed';
import { IPost } from '../../models/post.model';

const Post: React.FC = () => {
  const { createRequest, data } = useRequest(getFeed);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await createRequest('');
  };

  return (
    <>
      {data?.map((item: IPost) => (
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
              <Text>{item.categoria}</Text>
            </Box>
          </Flex>
          <Image alt={'Dan Abramov'} boxSize={'100%'} src={item.fotoURL} />
          <Flex
            justifyContent={'center'}
            padding={'16px'}
            alignItems={'center'}
          >
            <Image src={heart} boxSize={'20px'} />
            <Text marginLeft={'8px'} color={'#FF0000'}>
              {item.numLikes}
            </Text>
          </Flex>
          <Text
            padding={'0 8px'}
            noOfLines={{ base: 2, sm: 4 }}
            marginBottom={'8px'}
          >
            {item.texto}
          </Text>
        </PostContainer>
      ))}
    </>
  );
};

export default Post;
