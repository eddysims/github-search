import React from 'react';
import { Box, Avatar, Heading, Container } from '@chakra-ui/react';

export function Profile({ name, image, bio }) {
  return (
    <Container textAlign="center" maxWidth={350}>
      <Box>
        <Avatar name={name} src={image} size="2xl" />
      </Box>
      <Heading size="lg" marginY={3}>
        {name}
      </Heading>
      <Box>{bio}</Box>
    </Container>
  );
}
