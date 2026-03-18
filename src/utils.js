function getRandomArrayElements(array, count) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  if (count >= array.length) {
    return [...array];
  }
  const arrayCopy = [...array];
  const result = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy[randomIndex]);
    arrayCopy.splice(randomIndex, 1);
  }
  
  return result;
}