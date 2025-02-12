import "./App.css";

import { SuperheroesList } from "./components/SuperheroesList";
import { SuperheroesForm } from "./components/SuperheroesForm";
import { useSuperheroes } from "./hooks/useSeperheroes";

function App() {
  const { superheroes, loading, fetchSuperheroes } = useSuperheroes();

  return (
    <>
      <div>
        <SuperheroesForm onSuperheroCreated={fetchSuperheroes} />
        {loading ? <p>Loading...</p> : <SuperheroesList data={superheroes} />}
      </div>
    </>
  );
}

export default App;
