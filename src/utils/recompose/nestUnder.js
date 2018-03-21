import { nest } from 'recompose';

export const nestUnder = ParentComponent => BaseComponent =>
  nest(ParentComponent, BaseComponent);
