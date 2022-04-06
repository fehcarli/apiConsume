import { useQueryClient } from "react-query"
import { useParams } from "react-router-dom"

export function Repo(){

    const params = useParams();
    const currentRepository = params['*'] as string

    const queryClient = useQueryClient();

    async function handleChangeRepositoryDescription(){
        await queryClient.invalidateQueries(['repo'])
    }

    return (
        <div>
            <h1>{currentRepository}</h1>
            <button onClick={handleChangeRepositoryDescription}>Alterar</button>
        </div>
    )
}