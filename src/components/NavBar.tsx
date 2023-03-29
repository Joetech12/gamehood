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
      <HStack padding="10px" spacing={{ base: '30px', lg: '300px' }}>
        <Image src={logo} boxSize="40px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
