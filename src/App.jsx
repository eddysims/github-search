import { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  SimpleGrid,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { useGithubUser } from './hooks/useGithubUser';
import { Profile } from './components/Profile';
import { Repo } from './components/Repo';
import { SearchForm } from './components/SearchForm';
import { Main } from './components/Main';

function App() {
  const { user, repos, error, getUser } = useGithubUser();

  useEffect(() => {
    getUser('eddysims');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100vh">
        <Box as="header">
          <SearchForm onSubmit={handleSubmit} />
        </Box>

        <Main>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>{error}</AlertTitle>
            </Alert>
          )}

          {user && (
            <Profile name={user.name} image={user.avatar_url} bio={user.bio} />
          )}

          {repos && (
            <>
              <Divider variant="dashed" marginY={6} />
              <SimpleGrid columns={3} spacing={6} marginTop={6}>
                {repos.map(repo => {
                  return <Repo key={repo.id} {...repo} />;
                })}
              </SimpleGrid>
            </>
          )}
        </Main>
      </Flex>
    </ChakraProvider>
  );

  function handleSubmit(username) {
    getUser(username);
  }
}

export default App;
