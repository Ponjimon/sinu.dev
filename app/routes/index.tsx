import { Box, Heading, Link, ListItem, UnorderedList } from '@chakra-ui/react';

export default function Index() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl">
        Welcome to Remix
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link isExternal href="https://remix.run/tutorials/blog">
            15m Quickstart Blog Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link isExternal href="https://remix.run/tutorials/jokes">
            Deep Dive Jokes App Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link isExternal href="https://remix.run/docs">
            Remix Docs
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
