import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Price from './components/Price';


function App() {

  return(
      <div className='App'>
       <Routes>
        <Route path='/' Component={Products}/>
        <Route path='/price' Component={Price}/>
       </Routes>
      </div>
  )
}
export default App
