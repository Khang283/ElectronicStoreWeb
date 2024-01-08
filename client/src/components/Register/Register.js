import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUser } from '../../reducer/userReducer';
import { useAlert } from 'react-alert';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Link,
  useColorModeValue,
  useToast,
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
function RegistrationForm() {
  const navigate = useNavigate();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [passwordRetype,setPasswordRetype] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [gender,setGender] = useState('');
  const [dob,setDob] = useState('');
  const dispatch = useDispatch();
  const alert = useAlert();
  const [showPassword, setShowPassword] = useState(false);
  function validUserEmail(email){
    let validText = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm ;
    if(email.match(validText)){
      return true;
    }
    return false
  }

  function validPassword(password,passwordRetype){
    if(password===passwordRetype)return true;
    if(password==='' || passwordRetype==='') return false;
    return false;
  }
  function validPhone(phone){
    let phoneValid = /^0\d{9}$/gm ;
    if(phone.match(phoneValid)){
      return true;
    }
    return false;
  }

  function validUser(){
    if(validUserEmail(email) && validPassword(password,passwordRetype) && validPhone(phone)){
      if(username!=='' && (gender==='male' || gender ==='female') && address!=='' && dob!==''){
        return true;
      }
    }
    return false;
  }

  function handleNewAccountRequest() {
    if(!validUser()){
      alert.error("Xin hãy kiểm tra lại thông tin");
      return ;
    }
    let date = new Date(dob);
    let day = date.getDate();
    if(day<10) day = `0${day}`;
    let month = date.getMonth() + 1;
    if(month<10) month = `0${month}`;
    let year = date.getFullYear();
    let newDob = day+"-"+month+"-"+year;


    const requestPayload ={
      username,
      password,
      userEmail: email,
      gender,
      userAddress: address,
      userPhone: phone,
      dob: newDob,
    }
    console.log(requestPayload);

    axios.post('/api/v1/signup',requestPayload)
    .then(res=>{
      let token = res.data.token;
      if(token){
        const user = {
          userId: res.data.userId,
          username: res.data.username,
          role: res.data.role
        }
        dispatch(setUser(user))
        Cookies.set('authToken',token,{expires: 1});
        navigate('/');
      }
    })
  }

  return (
    <Flex
    minH={"100vh"}
    align={"center"}
    justify={"center"}
    bg={useColorModeValue("gray.50", "gray.800")}
  >
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Đăng ký
        </Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          để nhận được những thông tin mới nhất ✌️
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Tài khoản</FormLabel>
            <Input
              type="text"
              name='username'
              placeholder="Tên tài khoản"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="userPhone" isRequired>
            <FormLabel>Điện thoại</FormLabel>
            <Input
              type="tel"
              placeholder="Nhập số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Địa chỉ email</FormLabel>
            <Input
              type="email"
              placeholder="Nhập địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="userAddress" isRequired>
            <FormLabel>Địa chỉ</FormLabel>
            <Input
              type="email"
              placeholder="Nhập địa chỉ"
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl id="dob" isRequired>
            <FormLabel>Ngày sinh</FormLabel>
            <Input
              type="date"
              placeholder="Nhập đia chỉ"
              onChange={(e) => setDob(e.target.value)}
            />
          </FormControl>
          <FormControl id="gender" isRequired>
            <FormLabel>Giới tính</FormLabel>
            {/* <Input
              type="date"
              placeholder="Nhập đia chỉ"
              onChange={(e) => setDob(e.target.value)}
            /> */}
            <Select onChange={e => setGender(e.target.value)}>
              <option selected>Chọn giới tính</option>
              <option value = "male">Nam</option>
              <option value = "female">Nữ</option>
            </Select>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Mật khẩu</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập vào mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement >
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="password_retype" isRequired>
            <FormLabel>Nhập lại mật khẩu</FormLabel>
            <InputGroup>
              <Input
                type={"password"}
                placeholder="Nhập vào mật khẩu"
                onChange={(e) => setPasswordRetype(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleNewAccountRequest}
            >
              Đăng ký
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Bạn đã có tài khoản?{" "}
              <NavLink to="/login">
                <Link color={"blue.400"}>Đăng nhập</Link>
              </NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  );
}

export default RegistrationForm;