import axios from "axios";
import {useQuery} from "react-query"
import {Link} from "react-router-dom"


type Repository = {
  full_name: string;
  description: String;
}

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async ()=>{
    const response = await axios.get('https://api.github.com/users/fehcarli/repos');
    return response.data;
  }, {
    //refetchOnWindowFocus : false,
    staleTime: 1000 * 60,
  })

  return (
    <ul>
      {data?.map(repo =>{
        return (
          <li key={repo.full_name}>
            <Link to={`repo/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}