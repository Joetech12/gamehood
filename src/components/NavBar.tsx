import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Button,
  Input,
  Hide,
  Spacer,
} from '@chakra-ui/react';
import { useRef } from 'react';
import logo from '../assets/gamehood.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateColumns={{ base: '2fr 1fr', md: 'repeat(2, 1fr)' }}
        marginY="10px"
        marginX={{ base: '10px', md: '20px' }}
      >
        <Flex>
          <Image
            src={logo}
            boxSize="40px"
            marginRight={{ base: '10px', md: '20px' }}
          />
          <SearchInput onSearch={onSearch} />
        </Flex>
        <Flex justify="end">
          <ColorModeSwitch />
        </Flex>
      </Grid>
    </>
  );
};

export default NavBar;
