import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export default function Home() {
  const canvasRef = useRef(null);
  const playerRef = useRef({ x: 50, y: 50 });
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('playerPos');
    if (saved) {
      playerRef.current = JSON.parse(saved);
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.fillStyle = colorMode === 'dark' ? '#000' : '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'teal';
      ctx.fillRect(playerRef.current.x, playerRef.current.y, 20, 20);
    };

    draw();

    const handleKey = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          playerRef.current.y = Math.max(0, playerRef.current.y - 5);
          break;
        case 'ArrowDown':
          playerRef.current.y = Math.min(canvas.height - 20, playerRef.current.y + 5);
          break;
        case 'ArrowLeft':
          playerRef.current.x = Math.max(0, playerRef.current.x - 5);
          break;
        case 'ArrowRight':
          playerRef.current.x = Math.min(canvas.width - 20, playerRef.current.x + 5);
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
      <Box textAlign="center" p={4}>
        <Button mb={4} onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <canvas
          ref={canvasRef}
          width={300}
          height={150}
          aria-label="Game area"
        />
      </Box>
    </>
  );
}
