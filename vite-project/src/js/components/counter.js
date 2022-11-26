export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    console.log(counter);
  }
  element.addEventListener('click', () => setCounter(counter + 1))

  return counter;
}
