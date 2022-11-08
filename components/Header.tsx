import React from "react";
import { Flex } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  return (
    <Flex
      padding="2"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#292929"
      borderBottom="1px solid #e8e8e8"
    >
      <Flex alignItems="center" padding="10px" width="290px">
       <div style={{color:'white', fontWeight:'bolder'}}>The Station TV Live Studio</div>
      </Flex>
    </Flex>
  );
}
