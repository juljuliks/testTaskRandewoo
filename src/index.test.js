const { MovingObject, generateDelay } = require('./index');
const _ = new MovingObject('1');

test('testing instance "_" should be instance of MovingObject', () => {
	expect(_).toBeInstanceOf(MovingObject);
});

describe('MovingObject: getID', () => {
	test('should return number', () => {
		expect(_.getId()).toBeGreaterThan(0);
		expect(_.getId()).toBeDefined();
		expect(_.getId()).not.toBeNaN();
	});
});

describe('MovingObject: getRandomDegrees', () => {
	test('should return a number in the given range', () => {
		expect(_.getRandomDegrees(0, 90)).toBeGreaterThanOrEqual(0);
		expect(_.getRandomDegrees(0, 90)).toBeLessThanOrEqual(90);
		expect(_.getRandomDegrees(0, 90)).toBeDefined();
		expect(_.getRandomDegrees(0, 90)).not.toBeNaN();
	});
});

describe('MovingObject: coordinateGenerator', () => {
	test('should return a string', () => {
		expect(_.coordinateGenerator()).toBeDefined();
		expect(_.coordinateGenerator()).toContain('°');
	});
});

describe('MovingObject: generateTimeAndCoordinates', () => {
	test('should return an array', () => {
		expect(_.generateTimeAndCoordinates()).toBeDefined();
		expect(_.generateTimeAndCoordinates()).toBeInstanceOf(Array);
	});
});

describe('MovingObject: getTimestamp', () => {
	test('should return a string', () => {
		expect(_.getTimestamp()).toBeDefined();
	});
});

describe('generateDelay', () => {
	test('should return a delay in milliseconds', () => {
		expect(generateDelay()).toBeDefined();
		expect(generateDelay()).toBeGreaterThanOrEqual(4000);
		expect(generateDelay()).toBeLessThanOrEqual(10000);
	});
});

