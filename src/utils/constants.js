const CANVAS_SIZE = [400, 400];
const SNAKE_COLOR = '#750505';
const FOOD_COLOR = '#02497b';
const SNAKE_START = [
    [4, 3],
    [4, 4]
];
const FOOD_START = [2, 1];
const SCALE = 20;
const SPEED = 260;
const DIRECTIONS = {
    40: [0, 1], // down
    39: [1, 0], // right
    38: [0, -1], // up
    37: [-1, 0] // left
};

export {
    CANVAS_SIZE,
    SNAKE_COLOR,
    FOOD_COLOR,
    SNAKE_START,
    FOOD_START,
    SCALE,
    SPEED,
    DIRECTIONS
};