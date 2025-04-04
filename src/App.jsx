import './App.css'
import SocialSidebar from './components/SocialSidebar.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <body  class="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <SocialSidebar/>
      <Home/>
    </body>
  )
}

export default App
