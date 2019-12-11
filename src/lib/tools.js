const comIndex = (uuid, component) => {
  for (let i = 0; i < component.length; i++) {
    if (component[i].uuid === uuid) {
      return i;
    }
  }
};
export { comIndex };
