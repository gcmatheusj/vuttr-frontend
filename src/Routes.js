import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './screens/Main';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
}
