import { Flex, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"

const App = () => {

  const qualidades = [
    'Escuta',
    'Estratégia',
    'Gatilhos mentais',
    'Conexão',
    'Comunicação',
    'Clareza do negócio',
    'Marketing',
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
        gap={1}
        p={4}
        flexDirection={['column', 'row']}
        flexWrap='wrap'
      >
        <Flex
          // flex={1}
          flexDirection={['row', 'column']}
          flexWrap='wrap'
          gap={[4, 3]}
          px={2}
          justify='center'
          border='2px solid red'
        >
          {
            qualidades.map((item, index) => (
              <Flex key={index} gap={1} align='center'>
                <Text w='44'>{item}</Text>
                <NumberInput maxW='14' size='xs' max={10} min={0} bgColor='white'>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            ))
          }
        </Flex>
        <Flex
          flex={1}
          p={2}
          border='2px solid green'
        >
          Gráfico
        </Flex>
        <Flex
          border='2px solid black'
          w='full'
        >
          Ações
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App