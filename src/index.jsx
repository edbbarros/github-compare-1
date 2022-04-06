import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClayIconSpriteContext } from '@clayui/icon';
import App from './App';
import { RepositoryContextProvider } from './contexts/RepositoryContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import spritemap from './assets/icons.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClayIconSpriteContext.Provider value={spritemap}>
    <ThemeContextProvider>
      <RepositoryContextProvider>
        <App />
      </RepositoryContextProvider>
    </ThemeContextProvider>
  </ClayIconSpriteContext.Provider>,
);
