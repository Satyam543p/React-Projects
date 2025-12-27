import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './components/Profile'
import Login from'./components/Login'

import './App.css'

function App() {
  

  return (
    
      <UserContextProvider>
      <h1>Mini Project of Context API</h1>
      <Login/>
      <Profile/>

      </UserContextProvider>
    
  )
}

export default App
