import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
  MenuItem,
  Button,
  useToast,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import '../Header/Header.css';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
// import { FormGroup, Image } from "react-bootstrap";
import Cookies from "js-cookie";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLogin, GrReturn, GrServices } from "react-icons/gr";
import { loadUser, setUser } from "../../reducer/userReducer";
import axios from "axios";
import { useAccount, useConnect, useDisconnect } from "wagmi";
/*const UserMenu = (
  <img
    src={'../user.png'}
    alt="UserName profile image"
    roundedCircle
    style={{ width: '40px', height: '40px' }}
  />
) //Test thu hinh anh dai dien */
function Header() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const userState = useSelector((state) => state.user);
  let userId, username, role;
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();

  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (userState.isLoad == false) {
    axios.get('/api/user/me', {
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    })
      .then((res) => {
        if (res.status === 200) {
          const user = {
            userId: res.data.userId,
            username: res.data.username,
            role: res.data.role,
          };
          dispatch(setUser(user));
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
  userId = userState.userId;
  username = userState.username;
  role = userState.role;

  const handleLogout = () => {
    console.log("logout");
    Cookies.remove('authToken');
    const user = {
      userId: -1,
      username: '',
      role: 'USER',
      isLoad: false,
    };
    dispatch(setUser(user));
    navigate('/');
  }

  const searchClicked = () => {
    if (keyword == '') {
      return null;
    }
    else {
      navigate(`/search/${keyword}`);
    }

  }

  const openDropDown = () => {
    setVisible(true);
  }

  function fetchDropdownOptions(value) {
    axios.get("/api/v1/search?name=" + value)
      .then(res => {
        setDropDownOption(res.data);
      }).catch(err => {
        console.log(err);
      });
  }
  const debounceDropDown = useCallback(debounce((nextValue) => fetchDropdownOptions(nextValue), 1000), [])

  const handleInputChange = (e) => {
    let value = e.target.value;
    setKeyword(value);
    debounceDropDown(value)

  }

  if (isLargerThan1100)
    return (
      <Box>
        <Flex
          w="100%"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          m="auto"
          bg="black"
          p="10px"
          px="3%"
          gap="30px"
        >
          <Link alignSelf={"center"} to="/">
            <Image src="pk.png" alt="logo" w="190px" h="70px" />
            {/* <Text color={"white"}>PK Electronics</Text> */}
          </Link>
          <Flex
            bg="white"
            borderRadius={"20px"}
            w="500px"
            p="5px"
            m="auto"
            textAlign={"center"}
          >
            <Input
              border={"none"}
              fontSize={"18px"}
              borderRadius="full"
              fontWeight="bold"
              placeholder="Nhập thông tin sản phẩm"
              onChange={e => handleInputChange(e)}
              onClick={openDropDown}
            />
            <div>
              {
                visible ? dropDownOption.map(value => {
                  return <div key={value} className="overflow-y-auto">{value}</div>
                }) : null
              }
            </div>
            <FcSearch fontSize={"42px"} onClick={searchClicked} />
          </Flex>
          {userId == -1 ? (
            <Flex cursor={"pointer"}>

              <Link to="/login">
                <Heading
                  cursor={"pointer"}
                  fontSize={"17px"}
                  padding={"5px"}
                  color="white"
                  _hover={{ bg: "red", textDecoration: "underline" }}
                >
                  Đăng nhập
                </Heading>
              </Link>
              <Box>
                <Link to="/registry">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    padding={"5px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    Đăng ký
                  </Heading>
                </Link>
              </Box>
            </Flex>
          ) : (
            <Menu>
              <MenuButton
                color="black"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Chào {username}
              </MenuButton>
              <MenuList>
                {role == 'ADMIN' ? (
                  <Link to={"/admin/product"}><MenuItem>Admin </MenuItem></Link>
                ) : null}
                <Link to={"/account"}><MenuItem>Tài khoản </MenuItem></Link>
                <Link to={"/cart"}><MenuItem>Giỏ hàng</MenuItem></Link>
                {
                  isConnected ?
                    <Button variant="primary" onClick={() => disconnect()}>Disconnect Wallet</Button>
                    :
                    <Button variant='primary' key={connectors[1].uid} onClick={() => connect({ connector: connectors[1] })}>
                      {connectors[1].name}
                    </Button>
                }
                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>

        <Flex
          w="100%"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="blue"
          px="3%"
        >
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Điện thoại <ChevronDownIcon />
            </MenuButton>

            <MenuList bg="#013380">
              <Link to="/phone">
                <Grid
                  p="15px"
                  // gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  w="95%"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Các hãng tiêu biểu
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      <Link to={'/phone/apple'}>
                        iPhone
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='phone/samsung'>
                        Samsung
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='/phone/oppo'>
                        Oppo
                      </Link>
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>

          </Menu>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Phụ kiện <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="accessories">
                <Grid
                  p="15px"
                  // gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  w="95%"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Các phụ kiện tiêu biểu
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      <Link to={'/chuột'}>
                        Chuột
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='bàn phím'>
                        Bàn Phím
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='tai nghe'>
                        Tai nghe
                      </Link>
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Laptop <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="laptop">
                <Grid
                  p="15px"
                  // gridTemplateColumns={"repeat(4,1fr)"}
                  gap="10px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Các hãng tiêu biểu
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      <Link to={'/laptop/hp'}>
                        HP
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='laptop/dell'>
                        Dell
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='/laptop/msi'>
                        MSI
                      </Link>
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Tablet <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="tablet">
                <Grid
                  p="15px"
                  gap="10px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Các hãng tiêu biểu
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      <Link to={'/tablet/apple'}>
                        Samsung
                      </Link>
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    > <Link to='tablet/apple'>
                        iPad
                      </Link>
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    ); else if (isLargerThan750px) return (<Box>
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="black"
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src="pk.png" alt="logo" w="190px" h="70px" />
            {/* <Text color={"white"}>PK Electronics</Text> */}
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"20px"}
          w="400px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"15px"}
            borderRadius="full"
            fontWeight="bold"
            placeholder="Nhập thông tin sản phẩm"
            onChange={e => handleInputChange(e)}
            onClick={openDropDown}
          />
          <div>
            {
              visible ? dropDownOption.map(value => {
                return <div key={value} className="overflow-y-auto">{value}</div>
              }) : null
            }
          </div>
          <FcSearch fontSize={"42px"} onClick={searchClicked} />
        </Flex>
        {userId == -1 ? (
          <Flex cursor={"pointer"}>
            <Box>
              <Link to="/login">
                <Heading
                  cursor={"pointer"}
                  fontSize={"17px"}
                  padding={"5px"}
                  color="white"
                  _hover={{ bg: "red", textDecoration: "underline" }}
                >
                  Đăng nhập
                </Heading>
              </Link>
            </Box>
            <Box>
              <Link to="/registry">
                <Heading
                  cursor={"pointer"}
                  fontSize={"17px"}
                  padding={"5px"}
                  color="white"
                  _hover={{ bg: "red", textDecoration: "underline" }}
                >
                  Đăng ký
                </Heading>
              </Link>
            </Box>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              color="black"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Hi {username}
            </MenuButton>
            <MenuList>
              {role == 'ADMIN' ? (
                <Link to={"/admin/product"}><MenuItem>Admin </MenuItem></Link>
              ) : null}
              <Link to={"/account"}><MenuItem>Tài khoản </MenuItem></Link>
              <Link to={"/cart"}><MenuItem>Giỏ hàng</MenuItem></Link>
              {
                isConnected ?
                  <Button variant="primary" onClick={() => disconnect()}>Disconnect Wallet</Button>
                  :
                  <Button variant='primary' key={connectors[1].uid} onClick={() => connect({ connector: connectors[1] })}>
                    {connectors[1].name}
                  </Button>
              }
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem
              >
            </MenuList>
          </Menu>
        )}
        <Box mx="20px">
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="teal.300">
              <DrawerCloseButton />
              <DrawerHeader fontSize={"22px"} fontWeight="bold">
                Chọn danh mục
              </DrawerHeader>

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  <Link to="phone">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      Điện thoại
                    </Heading>
                  </Link>
                  <Link to="tablet">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      Tablet
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="laptop">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      Laptop
                    </Heading>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>


    </Box>); else if (islesserThan740px) return (<Flex
      w="100%"
      justifyContent="space-around"
      alignItems={"center"}
      m="auto"
      bg="black"
      p="20px"
      px="2%"
      gap="10px"
    >
      <Link to="/">
        <Box>
          <Image src="pk.png" alt="logo" w="120px" h="50px" />
          {/* <Text color={"white"}>PK Electronics</Text> */}
        </Box>
      </Link>
      <Flex
        bg="white"
        borderRadius={"20px"}
        w="400px"
        p="5px"
        m="auto"
        textAlign={"center"}
      >
        <Input
          border={"none"}
          fontSize={"15px"}
          borderRadius="full"
          fontWeight="bold"
          placeholder="Nhập thông tin sản phẩm "
          onClick={openDropDown}
          onChange={(e) => handleInputChange(e)}
        />
        <div>
          {
            visible ? dropDownOption.map(value => {
              return <div key={value} className="overflow-y-auto">{value}</div>
            }) : null
          }
        </div>
        <FcSearch fontSize={"42px"} />
      </Flex>
      <Box mx="20px">
        <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <GiHamburgerMenu fontSize={"55px"} />
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="red.300">
            <DrawerCloseButton />

            <DrawerBody>
              <VStack
                justifyContent={"space-around"}
                alignContent="center"
                gap="25px"
                m="auto"
                p="auto"
              >
                {userId == -1 ? (
                  <Flex cursor={"pointer"}>
                    <Box>
                      <Link to="/login">
                        <Heading
                          cursor={"pointer"}
                          fontSize={"17px"}
                          padding={"5px"}
                          color="white"
                          _hover={{ bg: "red", textDecoration: "underline" }}
                        >
                          Đăng nhập
                        </Heading>
                      </Link>
                    </Box>
                    <Box>
                      <Link to="/registry">
                        <Heading
                          cursor={"pointer"}
                          fontSize={"17px"}
                          padding={"5px"}
                          color="white"
                          _hover={{ bg: "red", textDecoration: "underline" }}
                        >
                          Đăng ký
                        </Heading>
                      </Link>
                    </Box>
                  </Flex>
                ) : (
                  <Menu>
                    <MenuButton
                      color="black"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Hi {username}
                    </MenuButton>
                    <MenuList>
                      {role == 'ADMIN' ? (
                        <Link to={"/admin/product"}><MenuItem>Admin </MenuItem></Link>
                      ) : null}
                      <Link to={"/account"}><MenuItem>Tài khoản </MenuItem></Link>
                      <Link to={"/cart"}><MenuItem>Giỏ hàng</MenuItem></Link>
                      {
                        isConnected ?
                          <Button variant="primary" onClick={() => disconnect()}>Disconnect Wallet</Button>
                          :
                          <Button variant='primary' key={connectors[1].uid} onClick={() => connect({ connector: connectors[1] })}>
                            {connectors[1].name}
                          </Button>
                      }
                      <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                    </MenuList>
                  </Menu>
                )}

                <DrawerHeader fontSize={"22px"} fontWeight="bold">
                  <Divider color={"black"} />
                  Danh mục sản phẩm
                  <Divider color={"black"} />
                </DrawerHeader>

                <Link to="phone">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    Điện thoại
                  </Heading>
                </Link>
                <Link to="tablet">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    Tablet
                  </Heading>
                </Link>
                <Link to="accessories">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    Phụ kiện điện tử
                  </Heading>
                </Link>
                <Link to="laptop">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    Laptop
                  </Heading>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
    )
}

export default Header;
