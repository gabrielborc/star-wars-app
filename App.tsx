import 'react-native-gesture-handler';

import * as Stores from './src/stores';

import { IconRegistry } from '@ui-kitten/components';
import { Provider } from 'mobx-react';
import React from 'react';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Application from './src/containers/application';

export default function App() {
    console.log(Stores);
  return (
    <Provider {...Stores}>
      <IconRegistry icons={EvaIconsPack} />
      <Application />
    </Provider>
  );
}
