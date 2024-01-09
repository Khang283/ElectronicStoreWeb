import React from 'react';
import {
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useToast,
    Square
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
  import { BsSuitHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';

const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

const CardProduct = (props) => {
    return (
        <>
            <Link to={"/product/" + props.product.category + "/" + props.product.productId}>
                <Box>
                    <Image src={props.product.productIcon} onError={(e) => { e.target.onerror = null; e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyOIU0kkPJe1f_kwLcA6P-b7UIn3l3s7juw&usqp=CAU" }} alt={props.product.productName} p="5" h="200" _hover={{ p: "0" }} />
                    <Box
                        h="10"
                        w="100%"
                        color="blue.700"
                        lineHeight="120%"
                        marginBottom="3"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        _hover={{ color: "red" }}
                    >
                        {props.product.productName}
                    </Box>
                    <Flex
                        w="75%"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="2"
                    >
                        <Heading as="h3" size="xs" color="blue.700">
                            {moneyFormat.format(props.product.productPrice)}
                        </Heading>
                    </Flex>
                    <Badge
                        borderRadius="full"
                        px="2"
                        border="1px solid green"
                        color="green"
                        fontSize="xs"
                        marginBottom="10"
                    >
                        GIÁ TỐT NHẤT
                    </Badge>
                    <Flex>
                        <Square>
                            <Text color="gray.600" fontSize="14px">
                                Đánh giá:{"    "}
                            </Text>
                        </Square>
                        <Square>
                            <Box className='product-rating'>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    idx < props.product.productRating ? <StarIcon color="teal.500" /> : <StarIcon />
                                ))}
                            </Box>
                        </Square>

                    </Flex>
                </Box >
            </Link>
        </>
    );
}
export default CardProduct;