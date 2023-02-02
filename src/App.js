import React from 'react';
// import Banner from './components/Banner';
// import CategoryCard from './components/CategoryCard';
import Homepage from './components/Homepage';
import { Provider } from './components/MyContext';

function App() {
  return (
    <>
      <Provider>
        <Homepage />
        {/* <CategoryCard />
        <Banner /> */}
      </Provider>
    </>
  );
}

export default App;
