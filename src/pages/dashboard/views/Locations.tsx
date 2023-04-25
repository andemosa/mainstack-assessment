import { Flex, Heading, Box, Text } from "@chakra-ui/react";

import PieChartComp from "@components/Charts/PieChart";

import { IResponse } from "@customTypes/response";

const COLORS = ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"];

type LocationsProp = {
  data: IResponse["top_locations"];
};

const Locations = ({ data }: LocationsProp) => {
  const locationsData = data.map(({ count, country, percent }, index) => ({
    name: country,
    value: percent,
    color: COLORS[index],
    count,
  }));

  return (
    <Box
      padding={{ base: "10px", lg: "15px" }}
      fontSize={{ base: "12px", smm: "15px" }}
      flex={1}
    >
      <Flex justify={"space-between"} gap={2.5} align={"center"} width={"100%"}>
        <Heading as="h4" size="sm">
          Top Locations
        </Heading>
        <Text
          fontSize={{ base: "10px", md: "12px" }}
          color={"brand.800"}
          cursor={"pointer"}
        >
          View full reports
        </Text>
      </Flex>
      <Flex width={"100%"} gap={2.5} align={"center"} justify={"space-between"}>
        <Box flex={1} fontSize={"12px"}>
          {locationsData.map(({ color, name, value }) => (
            <Flex align={"center"} gap={2.5} padding={2.5} key={name}>
              <Text textTransform={"capitalize"}>{name}</Text>
              <Text>({value}%)</Text>
              <Box
                height={"10px"}
                width={"10px"}
                rounded={"full"}
                background={color}
              ></Box>
            </Flex>
          ))}
        </Box>
        <Box flex={1} width={0} height={"250px"}>
          <PieChartComp chartData={locationsData} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Locations;
