import React, { useRef } from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'

const SendModal = ({children, onSendItem }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const sendItem = () => onSendItem()

  return (
    <>
      <div onClick={onOpen}>
        {children}
      </div>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent m={2}>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Enviar
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja enviar? Você não poderá desfazer essa ação.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='blue' ml={3} onClick={sendItem}>
                Enviar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default SendModal