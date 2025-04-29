import { useState } from 'react'
import AppHeader from './components/Header/AppHeader'
import './App.css'
import AppMain from './blocks/Main/AppMain'
import AppNumbers from './blocks/Numbers/AppNumbers'
import AppResult from './blocks/Result/AppResult'
import AppTrainers from './blocks/Trainers/AppTrainers'
import AppPackages from './blocks/Packages/AppPackages'
import AppSign from './blocks/Sign/AppSign'
import AppFooter from './components/Footer/AppFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppMain />
      <AppNumbers/>
      <AppResult />
      <AppTrainers />
      <AppPackages />
      <AppSign />
      <AppFooter/>
    </>
  )
}

export default App
