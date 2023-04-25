import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
} from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const DrawerComp = ({ children, isOpen, onClose }: Props) => {
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <Box width={{ base: "90%", smm: "80%" }} margin={"10px auto"}>
            <DrawerCloseButton />
            <DrawerBody>{children}</DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComp;
