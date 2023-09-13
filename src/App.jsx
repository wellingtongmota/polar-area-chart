import {
  Button,
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text
} from "@chakra-ui/react"
import { LuSave } from "react-icons/lu";

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
        flexDirection={['column']}
        flexWrap='wrap'
      >


        <Flex flex={1} flexDirection={['column', 'column', 'row']}>
          <Flex
            // flex={1}
            flexDirection={['row', 'row', 'column']}
            flexWrap='wrap'
            gap={[4, 3]}
            px={2}
            justify={['flex-start', 'flex-start', 'center']}
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
        </Flex>


        <Flex
          border='2px solid black'
          w='full'
          maxH='16'
          justify='center'
          align='end'
          p={2}
        >
          {/* <SendModal onSendItem={() => console.log('send')}>
            <Button rightIcon={<LuSave />} colorScheme='blue'>
              Salvar
            </Button>
          </SendModal> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App