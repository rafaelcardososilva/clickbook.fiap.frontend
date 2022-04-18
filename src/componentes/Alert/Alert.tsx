import React from 'react';

import {
  Alert as AlertChackra,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';

import { Container } from './styles';

interface IProps {
  title: string;
  description: string;
  status: 'error' | 'info' | 'success' | 'warning';
}

const Alert: React.FC<IProps> = ({ status, title, description }) => {
  return (
    <Container>
      <AlertChackra status={status}>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
        <AlertDescription>
          {description}
        </AlertDescription>
      </AlertChackra>
    </Container>
  );
}

export default Alert;
