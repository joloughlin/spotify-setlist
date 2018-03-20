import { lifecycle } from 'recompose';

export const scrollToTop = lifecycle({
  componentDidMount() {
    window.scrollTo(0, 0);
  },
});
