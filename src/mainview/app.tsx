import { Route } from "wouter"
import Layout from "./layout"
import MainPage from "./pages/main"

const App: React.FC = () => {
  return (
    <Layout>
      <Route path="/" component={MainPage} />
    </Layout>
  )
}

export default App
