import { Flex, Container } from '@chakra-ui/react';

export function Main({ children }) {
  return (
    <Flex
      as="main"
      align="center"
      justify="center"
      direction="column"
      flex={1}
      background="whitesmoke"
    >
      <Container maxWidth={768} paddingY={8}>
        {children}
      </Container>
    </Flex>
  );
}
