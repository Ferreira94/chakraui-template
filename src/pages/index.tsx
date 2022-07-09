import { Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chakra Template</title>
      </Head>

      <Flex w="100vw" h="100vh" justify="center" align="center">
        <Text>Chakra Template</Text>
      </Flex>
    </>
  );
}
