import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BookProvider } from './state/BookProvider';

render(
  <BookProvider>
    <App />,
  </BookProvider>,
  document.getElementById('root')
);
