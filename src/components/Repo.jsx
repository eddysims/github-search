import React from 'react';
import { Box, Heading, Button, Divider } from '@chakra-ui/react';

export function Repo({ name, description, html_url, watchers_count }) {
  return (
    <Box
      padding={3}
      border={`1px solid lightgrey`}
      textAlign="center"
      boxShadow={`0 5px 5px 0 rgba(0,0,0,0.15)`}
      borderRadius={3}
    >
      <Heading as="h3" size="md">
        {name}
      </Heading>
      <Divider variant="dashed" marginY={3} />
      <Box>{description}</Box>
      <Button
        as="a"
        isExternal
        href={html_url}
        marginY={3}
        size="xs"
        colorScheme="blue"
      >
        View Repo
      </Button>
      <Box fontWeight="black" fontSize="xs" color="blackAlpha.800">
        👀 {watchers_count} Watchers
      </Box>
    </Box>
  );
}
