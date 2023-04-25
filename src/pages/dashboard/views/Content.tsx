import { Box, Flex, Heading, Spinner, Text, chakra } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import useSWRImmutable from "swr/immutable";

import PageViews from "./PageViews";
import Locations from "./Locations";
import Referrals from "./Referrals";

import { IResponse } from "@customTypes/response";

const fetcher = (url: string) =>
  axios.get<IResponse>(url).then((res) => res.data);

const tagsData = [
  {
    label: "1 Day",
    id: 0,
  },
  {
    label: "3 Days",
    id: 1,
  },
  {
    label: "7 Days",
    id: 2,
  },
  {
    label: "30 Days",
    id: 3,
  },
  {
    label: "All Time",
    id: 4,
  },
  {
    label: "Custom Date",
    id: 5,
  },
];

const Wrapper = chakra(Flex, {
  baseStyle: {
    direction: "column",
    align: "center",
    justifyContent: "center",
    marginLeft: { md: "20%", lg: "23%", xl: "25%" },
    width: "100%",
  },
});

const Card = chakra(Flex, {
  baseStyle: {
    background: "#fff",
    border: "1px solid",
    borderColor: "brand.900",
    borderRadius: "6px",
    flex: 1,
  },
});

const ContentComp = () => {
  const [display, setDisplay] = useState(4);
  const { data, error, isLoading } = useSWRImmutable(
    "https://fe-task-api.mainstack.io/",
    fetcher
  );

  if (isLoading)
    return (
      <Wrapper>
        <Spinner margin={"2rem auto"} />
      </Wrapper>
    );

  if (error)
    return (
      <Wrapper>
        <Text textAlign={"center"} margin={"2rem auto"}>
          An error occurred. Please try again
        </Text>
      </Wrapper>
    );

  if (data)
    return (
      <Wrapper marginBottom={{ base: "70px", md: "20px" }}>
        <Box
          width={"100%"}
          padding={{ base: "0 1rem", lg: "0 1.5rem", xl: "0 3.75rem" }}
        >
          <Flex
            align={"center"}
            position={"sticky"}
            top={0}
            zIndex={"1"}
            padding={"1.5rem 0"}
            background={"#fff"}
          >
            <Heading as="h2" size="md">
              Dashboard
            </Heading>
          </Flex>
          <Box>
            <Flex
              justify={"space-between"}
              gap={2.5}
              align={"center"}
              fontSize={13}
            >
              <Flex direction={"column"} gap={2.5}>
                <Heading as="h1" size="md" fontSize={20}>
                  Good morning, Blessing ⛅️
                </Heading>
                <Text color={"brand.700"}>
                  Check out your dashboard summary.
                </Text>
              </Flex>
              <Flex direction={"column"} gap={10} cursor={"pointer"}>
                <Text color={"brand.800"}>View analytics</Text>
              </Flex>
            </Flex>
            <Flex
              align={"center"}
              gap={2.5}
              margin={"5px 0"}
              wrap={"nowrap"}
              overflowX={{ base: "scroll", lg: "hidden" }}
              padding={"15px 0"}
            >
              {tagsData.map((item) => (
                <Box
                  key={item.id}
                  padding={"5px 10px"}
                  borderRadius={"20px"}
                  whiteSpace={"nowrap"}
                  cursor={"pointer"}
                  width={"max-content"}
                  border={"1px solid"}
                  onClick={() => setDisplay(item.id)}
                  color={display === item.id ? "brand.800" : "brand.700"}
                  borderColor={display === item.id ? "brand.800" : "brand.900"}
                  background={display === item.id ? "brand.600" : "#fff"}
                >
                  {item.label}
                </Box>
              ))}
            </Flex>
            <Card>
              <PageViews obj={data?.graph_data?.views} />
            </Card>
            <Flex
              gap={2.5}
              justify={"space-between"}
              margin={"20px 0"}
              direction={{ base: "column", smm: "row" }}
            >
              <Card>
                <Locations data={data?.top_locations} />
              </Card>
              <Card>
                <Referrals data={data?.top_sources} />
              </Card>
            </Flex>
          </Box>
        </Box>
      </Wrapper>
    );

  return null;
};

export default ContentComp;
