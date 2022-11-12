// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components

import "./app.css"


// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
