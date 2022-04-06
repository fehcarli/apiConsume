import { useFetch } from "./hooks/useFetch";

type Repository = {
  name: string;
  description: String;
}

function App() {

  const { data: repositories, isFetching } = 
  useFetch<Repository[]>('users/fehcarli/repos')

  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return (
          <li key={repo.name}>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App