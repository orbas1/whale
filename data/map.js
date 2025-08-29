export const TILE_SIZE = 32;
export const MAP_WIDTH = 200;
export const MAP_HEIGHT = 200;

export const mapData = (() => {
  const map = Array.from({ length: MAP_HEIGHT }, () =>
    Array(MAP_WIDTH).fill('G')
  );

  const fill = (code, x1, y1, x2, y2) => {
    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        if (map[y] && map[y][x] !== undefined) map[y][x] = code;
      }
    }
  };

  // snow region
  fill('S', 0, 0, MAP_WIDTH, 20);

  // water body
  fill('W', 0, 40, 50, 80);

  // mountains
  fill('M', 70, 0, 120, 50);

  // desert
  fill('D', 120, 80, 180, 140);

  // ice patch
  fill('I', 30, 10, 60, 25);

  // rocky area
  fill('R', 80, 80, 100, 100);

  // forest
  fill('T', 40, 120, 80, 160);

  // jungle
  fill('J', 90, 130, 130, 180);

  // cave
  fill('C', 150, 150, 160, 160);

  // Sprout Town
  fill('H', 10, 30, 20, 40);

  // Harbor City
  fill('B', 170, 60, 190, 80);

  // Route path
  for (let x = 20; x < 170; x++) {
    map[35][x] = 'P';
    map[36][x] = 'P';
  }

  // tall grass encounter
  fill('E', 25, 25, 45, 35);

  return map.map((row) => row.join(''));
})();
