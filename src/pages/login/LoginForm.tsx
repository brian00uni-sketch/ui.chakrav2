import React, { useState, useRef } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  useToast,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { useNavigate } from 'react-router';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginType, TokenType } from 'auth-types'

export default function LoginForm() {
  
  
  type FormData = {
    username: string
    password: string
  }
  const toast = useToast()
  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const { register, handleSubmit, watch, clearErrors, setValue } = useForm<FormData>();

  const navigate = useNavigate()

  const onSubmit : SubmitHandler<FormData> = (data : FormData) => {

    if(data.username === 'admin' && data.password === 'admin') { 
      localStorage.setItem('isAuthenticated', 'true');
      navigate("/")

    } else { 
      localStorage.setItem('isAuthenticated', 'false');
      setValue("username", "")
      setValue("password", "")

      toast({
        title: "Auth Failed",
        description: "인증에 실패 했습니다.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="blue.700" />
        <Heading color="blue.600">SKT-CVOps</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
                  <Input {...register("username", { required: "Please enter a username", minLength : 1 } )} type="text" name="username" autoComplete="off" placeholder="Username" onBlur={()=>clearErrors('username')} />
                </InputGroup>     
              </FormControl>            
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />} />
                  <Input { ...register("password", { required: "Please enter a password", minLength : 1 } )} type={showPassword ? "text" : "password"} name="password" autoComplete="off" placeholder="Password" onBlur={()=>clearErrors('password')} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}> {showPassword ? "Hide" : "Show"}</Button>
                  </InputRightElement>              
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button type="submit" borderRadius={5} variant="solid" colorScheme="blue" width="full">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Create new account?{" "}
        <Link color="blue.600" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};