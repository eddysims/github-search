import { useState } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';

export function SearchForm({ onSubmit, children }) {
  const [username, setUsername] = useState();
  const [valid, setValid] = useState(true);

  return (
    <Flex
      as="form"
      marginY={8}
      maxWidth={768}
      marginX="auto"
      gridGap={4}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Enter a username"
        onChange={event => setUsername(event.target.value)}
        isInvalid={!valid}
        size="lg"
      />
      <Button type="submit" colorScheme="blue" size="lg">
        Search
      </Button>
    </Flex>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (!username) {
      setValid(false);
      alert('Please enter a username');
      return;
    }

    onSubmit(username);
  }
}
