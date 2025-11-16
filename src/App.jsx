import Layout from "./components/Layout";
import Grid from "./components/Grid";
import Hero from "./components/Hero";

function App() {

  return (
    <Layout>
      <main>
        <Hero />
        { /* we make self closing tag since Grid doesnt have any CHILDREN */}
        <Grid />
      </main>
    </Layout>
  )
}

export default App
