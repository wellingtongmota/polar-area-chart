import React from 'react'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  useDisclosure
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { LuPhone, LuUser } from "react-icons/lu";

const SendModal = ({ children, onSendItem }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const sendItem = () => onSendItem()

  return (
    <>
      <div onClick={onOpen}>
        {children}
      </div>

      <Formik
        initialValues={{
          name: '',
          phone: ''
        }}
      >
        {({ isSubmitting }) => (
          <Box as={Form}>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent m={2}>
                <ModalHeader>Enviar</ModalHeader>
                <ModalBody>
                  <FormControl isRequired>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none' color='gray.600'>
                        <LuUser />
                      </InputLeftElement>
                      <Input as={Field} name="name" type="text" placeholder='Digite seu nome' />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired mt={4}>
                    <InputGroup>
                      <InputLeftElement pointerEvents='phone' color='gray.600'>
                        <LuPhone />
                      </InputLeftElement>
                      <Input as={Field} name="phone" type="text" placeholder='Digite seu número' />
                    </InputGroup>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button mr={3} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme='blue' onClick={sendItem}>
                    Enviar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        )}
      </Formik>
    </>
  )
}

export default SendModal