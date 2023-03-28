import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // const platform = `${gameQuery && '('}`
  const heading = `GameHood ${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  }`;
  const subHeading = `${gameQuery.platform?.name  || ''} ${
    gameQuery.genre?.name || ''
  }`;

  return (
    <>
      <Heading as="h1" marginY={5} fontSize="5xl">
        GameHood
      </Heading>
      <Heading as="h2" marginY={5} fontSize="2xl">
        {subHeading}
      </Heading>
    </>
  );
};

export default GameHeading;
