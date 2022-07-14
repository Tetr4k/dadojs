import styled from 'styled-components';
import PaginaDado6 from '../PaginaDado6';

const Conteudo = styled.main`
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
`

const Retorno = () => {
    //Futuramente usar Router
    return (
        <Conteudo>
            <PaginaDado6/>
        </Conteudo>
    )
}
export default Retorno;