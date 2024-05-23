
import Dash from './pages/Dash'
import AuthorDash from './pages/AuthorDash'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
   <div>
    <Routes>
      <Route element={<Dash/>} path='/' />
      <Route element={<AuthorDash/>} path='/author' />
    </Routes>
   </div>
  )
}

export default App
