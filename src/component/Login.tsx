import {
    Box,
    VStack,
    Heading, 
} from '@chakra-ui/layout'
import { FormControl,
        FormLabel,
       } from '@chakra-ui/form-control'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const login = () => {
      if(username==='' || password===''){
          alert('Please fill all the fields')
      }
      else {
          console.log('Logging in...')
          console.log(username)
          console.log(password)
          // nanti disini login ke API
          localStorage.setItem('username', username)
          localStorage.setItem('id', '1')
          window.location.href = '/home'
      }
  }
  return (
      <Box
      w={['full','md']}
      p={[8,10]}
      mx='auto'
      border={['none','1px solid gray']}
      mt={[20,'10hv']}
      borderRadius={10}
      borderColor={['','gray.200']}
      >
        <VStack
        spacing={4}
        align='flex-start'
        w='full'
        >
          <VStack
          spacing={1}
          w={['full']}
          align={['flex-start','center']}
          >
            <Heading>
              Login
            </Heading>

          </VStack>
          <FormControl>
              <FormLabel>
                Username
              </FormLabel>
              <Input variant={'filled'} value={username} onChange={(e)=>setUsername(e.target.value)}   />
          </FormControl>
          <FormControl>
              <FormLabel>
                Password
              </FormLabel>
              <Input variant={'filled'} type='password' value={password} onChange={(e)=>setPassword(e.target.value)}   />
          </FormControl>
          <Button colorScheme='facebook' w={'full'} onClick={login}>
            Login
          </Button>
        </VStack>
        <FormLabel>
          Don't have an account? <a href='http://localhost:8008/login'>Register</a>
        </FormLabel>
      </Box>
  )
}

export default Login