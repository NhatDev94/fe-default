import Routes from './routes'
import useGlobal from './hooks/useGlobal'


function App() {

  const { GlobalContext, ...global } = useGlobal()
  
  return (
    <GlobalContext.Provider value={{ ...global }}>
        <Routes />
    </GlobalContext.Provider >
  )
}

export default App
