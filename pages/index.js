import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
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

const VIEWPORT_WIDTH = 640;
const VIEWPORT_HEIGHT = 480;

export default function Home() {
  const canvasRef = useRef(null);
  const playerRef = useRef({ x: 0, y: 0 });
  const cameraRef = useRef({ x: 0, y: 0 });
  const tileCacheRef = useRef({});
  const { colorMode, toggleColorMode } = useColorMode();
  const [assets, setAssets] = useState(null);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      import('../data/map'),
      import('../data/tiles'),
      import('../sprites/player'),
    ]).then(([mapMod, tileMod, spriteMod]) => {
      if (!mounted) return;
      setAssets({
        TILE_SIZE: mapMod.TILE_SIZE,
        mapData: mapMod.mapData,
        mapWidth: mapMod.MAP_WIDTH,
        mapHeight: mapMod.MAP_HEIGHT,
        tileColors: tileMod.tileColors,
        playerSprite: spriteMod.playerSprite,
        spritePalette: spriteMod.spritePalette,
      });
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!assets) return;
    const { TILE_SIZE, mapData, mapWidth, mapHeight, tileColors, playerSprite, spritePalette } = assets;
    const saved = typeof window !== 'undefined' && localStorage.getItem('playerPos');
    if (saved) {
      playerRef.current = JSON.parse(saved);
    }
    const canvas = canvasRef.current;
    canvas.width = VIEWPORT_WIDTH;
    canvas.height = VIEWPORT_HEIGHT;
    const ctx = canvas.getContext('2d');

    const getTileCanvas = (code) => {
      const cache = tileCacheRef.current;
      if (cache[code]) return cache[code];
      const tileCanvas = document.createElement('canvas');
      tileCanvas.width = TILE_SIZE;
      tileCanvas.height = TILE_SIZE;
      const tctx = tileCanvas.getContext('2d');
      tctx.fillStyle = tileColors[code] || '#000';
      tctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
      cache[code] = tileCanvas;
      return tileCanvas;
    };

    const drawMap = () => {
      const startCol = Math.floor(cameraRef.current.x / TILE_SIZE);
      const endCol = startCol + Math.ceil(VIEWPORT_WIDTH / TILE_SIZE);
      const startRow = Math.floor(cameraRef.current.y / TILE_SIZE);
      const endRow = startRow + Math.ceil(VIEWPORT_HEIGHT / TILE_SIZE);
      for (let r = startRow; r <= endRow; r++) {
        const row = mapData[r];
        if (!row) continue;
        for (let c = startCol; c <= endCol; c++) {
          const tile = row[c];
          const tileCanvas = getTileCanvas(tile);
          ctx.drawImage(
            tileCanvas,
            c * TILE_SIZE - cameraRef.current.x,
            r * TILE_SIZE - cameraRef.current.y
          );
        }
      }
    };

    const drawPlayer = () => {
      const pixelSize = TILE_SIZE / playerSprite.length;
      playerSprite.forEach((row, r) => {
        [...row].forEach((pixel, c) => {
          if (pixel !== '0') {
            ctx.fillStyle = spritePalette[pixel];
            ctx.fillRect(
              playerRef.current.x - cameraRef.current.x + c * pixelSize,
              playerRef.current.y - cameraRef.current.y + r * pixelSize,
              pixelSize,
              pixelSize
            );
          }
        });
      });
    };

    const drawRain = () => {
      ctx.strokeStyle = 'rgba(173,216,230,0.5)';
      for (let i = 0; i < 50; i++) {
        const rx = Math.random() * VIEWPORT_WIDTH;
        const ry = Math.random() * VIEWPORT_HEIGHT;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx + 2, ry + 10);
        ctx.stroke();
      }
    };

    const updateCamera = () => {
      cameraRef.current.x =
        playerRef.current.x + TILE_SIZE / 2 - VIEWPORT_WIDTH / 2;
      cameraRef.current.y =
        playerRef.current.y + TILE_SIZE / 2 - VIEWPORT_HEIGHT / 2;
      cameraRef.current.x = Math.max(
        0,
        Math.min(cameraRef.current.x, mapWidth * TILE_SIZE - VIEWPORT_WIDTH)
      );
      cameraRef.current.y = Math.max(
        0,
        Math.min(cameraRef.current.y, mapHeight * TILE_SIZE - VIEWPORT_HEIGHT)
      );
    };

    const draw = () => {
      ctx.fillStyle = colorMode === 'dark' ? '#000' : '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawMap();
      drawPlayer();
      drawRain();
    };

    updateCamera();
    draw();

    const handleKey = (e) => {
      const maxX = mapWidth * TILE_SIZE - TILE_SIZE;
      const maxY = mapHeight * TILE_SIZE - TILE_SIZE;
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
      updateCamera();
      draw();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [assets, colorMode]);

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
        <canvas ref={canvasRef} aria-label="Game area" />
      </Box>
    </>
  );
}
