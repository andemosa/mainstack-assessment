import {
  Box,
  Flex,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import DrawerComp from "@components/Drawer";

import DashboardIcon from "@components/Icons/DashboardIcon";
import MoreIcon from "@components/Icons/MoreIcon";
import PhotoIcon from "@components/Icons/PhotoIcon";
import SubscriptionsIcon from "@components/Icons/SubscriptionsIcon";
import SidebarComp from "./Sidebar";

const iconData = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
  },
  {
    icon: <PhotoIcon />,
    label: "Item 4",
  },
  {
    icon: <SubscriptionsIcon />,
    label: "Item 6",
  },
];

const NavbarComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DrawerComp isOpen={isOpen} onClose={onClose}>
        <SidebarComp />
      </DrawerComp>
      <Flex
        display={{ base: "inline-flex", md: "none" }}
        position={"fixed"}
        bottom={0}
        width={"100%"}
        padding={4}
        borderTop={"1px solid"}
        borderColor={"brand.900"}
        zIndex={1}
        background={"#fff"}
        fontSize={13}
      >
        <UnorderedList styleType={"none"} display={"flex"} gap={1} flex={"1"}>
          {iconData.map(({ icon, label }) => (
            <ListItem
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={2.5}
              cursor={"pointer"}
              key={label}
            >
              <Box>{icon}</Box>
              <Box>{label}</Box>
            </ListItem>
          ))}
          <ListItem
            display={"flex"}
            flexDirection={"column"}
            flex={"1"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2.5}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <Box>
              <MoreIcon />
            </Box>
            <Box>More</Box>
          </ListItem>
        </UnorderedList>
      </Flex>
    </>
  );
};

export default NavbarComp;
