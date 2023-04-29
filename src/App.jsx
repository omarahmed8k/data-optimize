import { Route, Routes } from 'react-router-dom'
import MasterLayout from './layout/MasterLayout'

function App() {

  return (
    <Routes>
      <Route path="/*" element={<MasterLayout />} />
    </Routes>
  )
}

export default App
