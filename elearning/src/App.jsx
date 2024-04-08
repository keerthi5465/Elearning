import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Learning from './pages/Learning'
import Boost from './pages/Boost'
import Test from './pages/Test'
import Review from './pages/Review'
import Header from './components/Header'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/learning" element={<Learning/>}/>
      <Route path="/boost" element={<Boost/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/signin" element={<SignIn/>}/>

    </Routes>
    </BrowserRouter>
  )
}

