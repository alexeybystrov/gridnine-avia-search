import React from 'react';
import SearchMenu from './SearchMenu.jsx';
import CardsList from './CardsList.jsx';

const App = () => (
  <div className="d-flex flex-column h-100">
    <div className="container-md h-100 overflow-hidden p-3">
      <div className="h-100">
        <div className="row h-100 pb-3">
          <SearchMenu />
          <CardsList />
        </div>
      </div>
    </div>
  </div>
);
export default App;
