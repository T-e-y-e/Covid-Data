import { useEffect } from 'react';
import { getData } from './features/covidDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const { covidData, loading} = useSelector((state) => state.data)  

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getData())
  }, [])
  

  if(loading) {
    return (
      <h1>loading...</h1>
    )
  }

  return (
    <div className="App">
      <h2></h2>
    </div>
  );
}

export default App;
