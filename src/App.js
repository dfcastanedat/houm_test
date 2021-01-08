import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchText } from './Redux/Selectors';
import RouterIndex from './Routes/RouterIndex';
import Header from './Pages/Shared/Header/Header';

function App() {

  const [state] = useState(useSelector(getSearchText));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state, dispatch])

  return (
    <>
      <Header />
      <RouterIndex />
    </>
  );
}

export default App;