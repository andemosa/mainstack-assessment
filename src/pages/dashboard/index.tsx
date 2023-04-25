import { Flex } from "@chakra-ui/react";

import SidebarComp from "./views/Sidebar";
import ContentComp from "./views/Content";
import NavbarComp from "./views/Navbar";

const DashboardPage = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      width={"100%"}
      minHeight={"100vh"}
    >
      <Flex
        width={{ md: "20%", lg: "23%", xl: "25%" }}
        display={{ base: "none", md: "flex" }}
        position={"fixed"}
        left={0}
        top={0}
        height={"100%"}
        borderRight={"1px"}
        borderColor={"brand.900"}
        zIndex={1}
      >
        <SidebarComp />
      </Flex>
      <ContentComp />
      <NavbarComp />
    </Flex>
  );
};

export default DashboardPage;
