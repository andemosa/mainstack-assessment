import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import dayjs from "dayjs";

import AreaChartComp from "@components/Charts/AreaChart";
import InfoIcon from "@components/Icons/InfoIcon";

import { IResponse } from "@customTypes/response";

type ViewsType = IResponse["graph_data"]["views"];

const formatViewsData = (obj: ViewsType) => {
  return Object.keys(obj).map((key) => ({
    name: dayjs(key).format("DD MMM"),
    views: obj[key as keyof ViewsType],
  }));
};

type Props = {
  obj: ViewsType;
};

const PageViews = ({ obj }: Props) => {
  const pageViewsData = useMemo(() => formatViewsData(obj), [obj]);

  return (
    <Flex padding={"20px 10px"} direction={"column"} gap={"5px"} flex={1}>
      <Flex
        justify={"space-between"}
        gap={2.5}
        align={"center"}
        paddingLeft={5}
      >
        <Flex direction={"column"} gap={2.5}>
          <Heading as="h4" size="sm">
            Page Views
          </Heading>
          <Text color={"brand.700"} fontSize={12}>
            All time
          </Text>
        </Flex>
        <Box cursor={"pointer"}>
          <InfoIcon />
        </Box>
      </Flex>
      <Heading as="h3" size="md" fontSize={34} paddingLeft={5}>
        500
      </Heading>
      <Box margin={"1rem 0 0"}>
        <AreaChartComp data={pageViewsData} />
      </Box>
    </Flex>
  );
};

export default PageViews;
