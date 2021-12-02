import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllDogs } from './selectors';

function App() {
  const dispatch = useDispatch();

  const dogs = useSelector(selectAllDogs);
  console.log(dogs);

  const addDog = (dog) => {
    dispatch({type: 'add_dog', payload: dog})
  }
  const get_dogs = {type: 'get_dogs', payload: 'get_dogs'}

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={() => {
          addDog(prompt('enter dog'))
          }}>get dogs: {animals.dogs
        }</button>
        <button onClick={() => dispatch('get_cats')}>
          get cats: {animals.cats}
        </button> */}
      </header>
    </div>
  );
}

export default App;
