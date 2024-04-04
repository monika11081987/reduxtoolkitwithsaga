import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getCatsFetch } from './catState';
import './App.css';

function App() {
  const cats=useSelector(state=>state.cats.cats);

const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getCatsFetch());
},[dispatch]);
console.log(cats);

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats.</p>
      <hr/>
      <div className='Gallery'>
        {cats.map(cat=>
          <div key={cat.id} className='row'>
            <div className='column column-left'>
              {/* <img alt={cat.name}
              src={cat.image.url}
              width="200"
              height="200"
              /> */}
              {cat.name}
            </div>
            <div className='column column-right'>
              <h2>Temperament:{cat.temperament}</h2>
              <p>{cat.description}</p>
            </div>

          </div>
        )}
      </div>
      
      <button>view more cats</button>
    </div>
  );
}

export default App;
