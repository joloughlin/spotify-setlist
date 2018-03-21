export const combineSelectors = selectors => (state, props) => {
  return Object.keys(selectors).reduce((mappedProps, selectorKey) => {
    const selector = selectors[selectorKey];
    mappedProps[selectorKey] = selector(state, props);
    return mappedProps;
  }, {});
};
