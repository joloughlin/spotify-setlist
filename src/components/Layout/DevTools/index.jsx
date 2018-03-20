import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import enhance from './enhance';

export const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
    defaultPosition="bottom"
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>,
);

export default enhance(DevTools);
