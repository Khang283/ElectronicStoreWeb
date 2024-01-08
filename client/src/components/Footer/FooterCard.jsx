import React from "react";
import { Box, Text, Grid, Flex, Image, Center } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";

export const FooterCard1 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontWeight="700">{heading}</Text>
      <Box>
        {type.map((i, index) => (
          <Box key={index}>
            <Text fontSize="15px" _hover={{ color: "whiteAlpha.600" }}>
              {i.labels}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard2 = () => {
  return (
    <Box p={2} justifyContent="center">
      <Flex mt="-2%" gap="2" wrap="wrap">
        
      </Flex>
    </Box>
  );
};

export const FooterCard4 = () => {
  return (
    <Box backgroundColor="#0a244a" p="2">
      {/* <Center lineHeight="15px" borderColor="white.500" w="5%" m="auto" p="3">
        <Text fontSize="14px" fontWeight="600" p="1">
          <u>Chú ý</u>
        </Text>
      </Center>
      <Center>
        <Text fontSize="14px" w="92%" m="auto" textAlign="center" p="1">
          Hình ảnh ngoài đời và giá niêm yết ở ngoài có thể khác so với thông tin trên page vì có thể giá thay đổi đột ngột
        </Text>
      </Center> */}
      <Center
        mb="2"
        borderBottom="1px"
        borderBottomColor="whiteAlpha.400"
        p="1"
      >
        <Text fontSize="14px" w="90%" m="auto" textAlign="center"></Text>
      </Center>
      <Center>
        <Text fontSize="14px" p="1">
          {" "}
          © 2023 PK Electronics. All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
};
