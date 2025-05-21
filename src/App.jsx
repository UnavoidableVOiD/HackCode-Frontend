import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'  

function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    
  )
}


export default App;



