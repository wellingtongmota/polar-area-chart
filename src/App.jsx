import { Flex, Heading } from "@chakra-ui/react"

const App = () => {

  const qualidades = [
    'Propriedade 1',
    'Propriedade 2',
    'Propriedade 3',
    'Propriedade 4',
    'Propriedade 5',
  ]

  return (
    <Flex
      w='full'
      h='100dvh'
      flexDirection='column'
      align='center'
      bgColor='white'
      overflowY='auto'
      gap={2}
    >

      <Heading>Título</Heading>

      <Flex 
        bgColor='blue.50'
        maxW='4xl'
        w='full'
        maxH='xl'
        h='full'
        p={4}
      >
        Polar Area Chart
      </Flex>
    </Flex>
  )
}

export default App