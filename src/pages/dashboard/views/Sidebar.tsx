import {
  Flex,
  ListItem,
  UnorderedList,
  Text,
  chakra,
  Box,
  Image,
} from "@chakra-ui/react";

import AlarmIcon from "@components/Icons/AlarmIcon";
import DashboardIcon from "@components/Icons/DashboardIcon";
import DeleteIcon from "@components/Icons/DeleteIcon";
import EditIcon from "@components/Icons/EditIcon";
import FileIcon from "@components/Icons/FileIcon";
import GroupIcon from "@components/Icons/GroupIcon";
import HourGlassIcon from "@components/Icons/HourGlassIcon";
import Logo from "@components/Icons/Logo";
import MoreIcon from "@components/Icons/MoreIcon";
import PhotoIcon from "@components/Icons/PhotoIcon";
import SubscriptionsIcon from "@components/Icons/SubscriptionsIcon";

const firstSet = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
  },
  {
    icon: <EditIcon />,
    label: "Item 1",
  },
  {
    icon: <GroupIcon />,
    label: "Item 2",
  },
  {
    icon: <HourGlassIcon />,
    label: "Item 3",
  },
];

const secondSet = [
  {
    icon: <PhotoIcon />,
    label: "Item 4",
  },
  {
    icon: <DeleteIcon />,
    label: "Item 5",
  },
];

const thirdSet = [
  {
    icon: <SubscriptionsIcon />,
    label: "Item 6",
  },
  {
    icon: <FileIcon />,
    label: "Item 7",
  },
  {
    icon: <AlarmIcon />,
    label: "Item 8",
  },
];

const Title = chakra(Text, {
  baseStyle: {
    fontSize: "12px",
    paddingLeft: { base: 4, lg: 8, xl: 12 },
  },
});

const List = chakra(UnorderedList, {
  baseStyle: {
    styleType: "none",
    margin: { base: "15px 0", xl: "20px 0" },
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
});

const Item = chakra(ListItem, {
  baseStyle: {
    paddingLeft: { base: 4, lg: 10, xl: 12 },
    display: "flex",
    alignItems: "center",
    gap: 3,
    margin: "5px 0",
    cursor: "pointer",
  },
});

const SidebarComp = () => {
  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      width={"100%"}
      height={"100%"}
    >
      <Box>
        <Flex
          padding={{
            md: "1rem 1rem 0",
            lg: "1.5rem 2.5rem 0",
            xl: "2rem 3.2rem 0",
          }}
        >
          <Logo />
        </Flex>
        <List>
          {firstSet.map(({ icon, label }) => (
            <Item
              _first={{
                color: "brand.800",
                borderLeft: "3px solid",
                borderColor: "brand.800",
              }}
              key={label}
            >
              {icon}
              <Text>{label}</Text>
            </Item>
          ))}
        </List>
        <Title>OTHERS 1</Title>
        <List>
          {secondSet.map(({ icon, label }) => (
            <Item key={label}>
              {icon}
              <Text>{label}</Text>
            </Item>
          ))}
        </List>
        <Title>OTHERS 2</Title>
        <List>
          {thirdSet.map(({ icon, label }) => (
            <Item key={label}>
              {icon}
              <Text>{label}</Text>
            </Item>
          ))}
        </List>
      </Box>
      <Flex
        align={"center"}
        gap={2.5}
        cursor={"pointer"}
        marginBottom={"60px"}
        paddingRight={"1rem"}
        fontSize={14}
        justify={"space-between"}
        paddingLeft={{ base: 4, lg: 10, xl: 12 }}
      >
        <Flex align={"center"} gap={2.5}>
          <Image
            src={"/images/blessing.png"}
            alt="user"
            width={25}
            height={25}
            rounded={"full"}
          />
          <Text>Blessing Daniels</Text>
        </Flex>
        <MoreIcon />
      </Flex>
    </Flex>
  );
};

export default SidebarComp;
