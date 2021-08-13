import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BookProvider } from './state/BookProvider';
import ThemeProvider from './state/ThemeProvider';

render(
  <BookProvider>
    <ThemeProvider>
      <App />,
    </ThemeProvider>
  </BookProvider>,
  document.getElementById('root')
);
