export const animateComponent = (e, direction) => {
  if (e.detail.inView) {
    e.srcElement.classList.add(direction);
  } else {
    e.srcElement.classList.remove(direction);
  }
};
