import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { MdLightMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      {colorMode === 'light' ? (
        <MdLightMode size={25} />
      ) : (
        <MdOutlineLightMode size={25} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
