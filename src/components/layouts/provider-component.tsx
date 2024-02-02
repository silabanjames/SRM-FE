'use client';
import { MantineProvider } from '@mantine/core';
import React, { ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';

import '@mantine/core/styles.layer.css';
import '@mantine/core/styles.css';
import 'mantine-datatable/styles.layer.css';

import Loading from '@/components/layouts/loading';

import store from '@/store';

import App from '@/App';

interface IProps {
  children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
  return (
    <MantineProvider defaultColorScheme='auto'>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <App>{children} </App>
        </Suspense>
      </Provider>
    </MantineProvider>
  );
};

export default ProviderComponent;
// todo
// export default appWithI18Next(ProviderComponent, ni18nConfig);
