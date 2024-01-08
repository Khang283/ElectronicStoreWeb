import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducer/userReducer';
import { useAlert } from 'react-alert';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    useColorModeValue,
    useToast,
    VStack,Link
  } from "@chakra-ui/react";
function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();

    const handleLogin = () => {
        
        const loginResquest ={
            username,
            password
        }

        console.log(username);
        console.log(password);
        
        axios.post("/api/v1/login",loginResquest)
        .then(res=>{
            if(res.status===200){
                const token = res.data.token;
                console.log(token);
                if(token!=''){
                    const user = {
                        userId: res.data.userId,
                        username: res.data.username,
                        role: res.data.role,
                    }
                    Cookies.set('authToken',token,{expires: 1});
                    dispatch(setUser(user));
                    alert.success("Đăng nhập thành công")
                    navigate('/');
                }
            }
        }).catch(e=>{
            console.log(e);
            alert.error("Đăng nhập không thành công")
        })
            
    };

    return (
        <Box w="100%">
        <HStack
          w="98%"
          justifyContent={"space-around"}
          alignContent="center"
          m="auto"
          p="auto"
        >
          <VStack>
            <Image src="login.jpg" alt="login" width="48%" />
          </VStack>
          <Flex
            w="50%"
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Đăng nhập vào tài khoản</Heading>
                <NavLink to="/signup">
                <Text fontSize={"lg"} color={"gray.600"}>
                  Bạn chưa có tài khoản?
                  <Link to="/registry" color={"blue.400"}> Đăng ký</Link> ✌️
                </Text>
                </NavLink>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Tên đăng nhập</FormLabel>
                    <Input
                      id="user"
                      type="name"
                      placeholder="Tài khoản"
                      onChange={e => setUsername(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Mật khẩu</FormLabel>
                    <Input
                      id="pwd"
                      type="password"
                      placeholder="Nhập mật khẩu"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Lưu thông tin</Checkbox>
                      <Link color={"blue.400"}>Bạn quên mật khẩu?</Link>
                    </Stack>
                    <Button
                      onClick={handleLogin}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </HStack>
      </Box>
    );
}

export default Login;