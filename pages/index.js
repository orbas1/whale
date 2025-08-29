import Head from 'next/head';
import { useEffect, useRef } from 'react';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

const TILE_SIZE = 20;
const mapData = [
  'GGGGGGGGGGGGGGGGGGGG',
  'GWWWGGGGMMMMGGGGGGGG',
  'GWWWGGGGMMMMGGGGGGGG',
  'GGGGGGGGMMMMGGGGGGGG',
  'GGGGDDDDMMMMGGGGGGGG',
  'GGGGDDDDGGGGGGGGGGGG',
  'GGGGGGGGGGGGGWWWGGGG',
  'GGGGGGGGGGGGGWWWGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGG',
];

const tileColors = {
  G: '#7cfc00', // grass
  W: '#1e90ff', // water
  M: '#a9a9a9', // mountain
  D: '#deb887', // desert
};

const playerSprite = [
  ' 111 ',
  '11111',
  ' 101 ',
  '11111',
  '1   1',
];

export default function Home() {
  const canvasRef = useRef(null);
  const playerRef = useRef({ x: 0, y: 0 });
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('playerPos');
    if (saved) {
      playerRef.current = JSON.parse(saved);
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawMap = () => {
      mapData.forEach((row, r) => {
        [...row].forEach((tile, c) => {
          ctx.fillStyle = tileColors[tile] || '#000';
          ctx.fillRect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        });
      });
    };

    const drawPlayer = () => {
      const pixelSize = TILE_SIZE / playerSprite.length;
      playerSprite.forEach((row, r) => {
        [...row].forEach((pixel, c) => {
          if (pixel === '1') {
            ctx.fillStyle = 'teal';
            ctx.fillRect(
              playerRef.current.x + c * pixelSize,
              playerRef.current.y + r * pixelSize,
              pixelSize,
              pixelSize
            );
          }
        });
      });
    };

    const draw = () => {
      ctx.fillStyle = colorMode === 'dark' ? '#000' : '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawMap();
      drawPlayer();
    };

    draw();

    const handleKey = (e) => {
      const maxX = canvas.width - TILE_SIZE;
      const maxY = canvas.height - TILE_SIZE;
      switch (e.key) {
        case 'ArrowUp':
          playerRef.current.y = Math.max(0, playerRef.current.y - TILE_SIZE);
          break;
        case 'ArrowDown':
          playerRef.current.y = Math.min(maxY, playerRef.current.y + TILE_SIZE);
          break;
        case 'ArrowLeft':
          playerRef.current.x = Math.max(0, playerRef.current.x - TILE_SIZE);
          break;
        case 'ArrowRight':
          playerRef.current.x = Math.min(maxX, playerRef.current.x + TILE_SIZE);
          break;
        default:
          return;
      }
      localStorage.setItem('playerPos', JSON.stringify(playerRef.current));
      draw();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [colorMode]);

  return (
    <>
      <Head>
        <title>Whale</title>
        <meta name="description" content="Client-side canvas game" />
      </Head>
      <Box textAlign="center" p={4} position="relative">
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            borderRadius="full"
            position="absolute"
            top={4}
            right={4}
            aria-label="Open menu"
          />
          <MenuList>
            <MenuItem>Inventory</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>
        <Button mb={4} onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <canvas
          ref={canvasRef}
          width={mapData[0].length * TILE_SIZE}
          height={mapData.length * TILE_SIZE}
          aria-label="Game area"
        />
      </Box>
    </>
  );
}
