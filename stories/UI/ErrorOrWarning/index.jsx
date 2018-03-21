import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ErrorOrWarning } from 'components/UI/ErrorOrWarning';

const story = storiesOf('ErrorOrWarning', module);

story.add('with text', () => (
  <ErrorOrWarning message="must be 7 characters or more" />
));
