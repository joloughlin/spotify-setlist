import { nest } from 'recompose';

export default ParentComponent => BaseComponent =>
  nest(ParentComponent, BaseComponent);
