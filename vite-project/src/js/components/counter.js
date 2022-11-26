export function setupCounter(element, counter) {
  let counter;
  const setCounter = (count) => {
    counter = count
    console.log(counter);
  }
  element.addEventListener('click', () => setCounter(counter + 1))

  return counter;
}
