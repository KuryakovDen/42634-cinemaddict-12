const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.ceil(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = (elements) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

const getSomeRandomElements = (elements) => {
  const startElement = getRandomInteger(0, 2);
  const endElement = getRandomInteger(3, 3);
  return elements.slice(startElement, endElement);
};

const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};

const prepareDate = (taskDate) => {
  return taskDate.toLocaleString(`en-US`, {
    year: `numeric`,
    day: `numeric`,
    month: `long`,
    hour: `numeric`,
    minute: `numeric`
  }
  );
};

export {
  getRandomInteger,
  getRandomElement,
  getRandomBoolean,
  prepareDate,
  getSomeRandomElements
};
