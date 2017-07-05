import { withProps } from 'recompose';

export default function addProps(funcsByPropNames) {
  const propNames = Object.keys(funcsByPropNames);

  const createProps = props =>
    propNames.reduce((createdProps, propName) => {
      const func = funcsByPropNames[propName];
      createdProps[propName] = func(props);
      return createdProps;
    }, {});

  return withProps(createProps);
}
