import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'  

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
    
  )
}


export default App;



