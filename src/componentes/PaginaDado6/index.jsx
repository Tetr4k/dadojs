import Dado6 from '../dados/Dado6'
import styled from 'styled-components';
import Historico from '../Historico';
import BotaoLimpar from '../BotaoLimpar';
import BotaoTrocar from '../BotaoLimpar';
import Acoes from '../Acoes';
import {useNumero} from '../../hooks/useNumero'
import {useHistorico} from '../../hooks/useHistorico';

const PaginaDado6 = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: fixed;
    bottom: 0;
    height: 85%;
    width: 100%;
`

const Retorno = () => {

    const [numero, setNumero] = useNumero(6);
    const [historico, setHistorico] = useHistorico();

    const geraNumero = (numero) => {
        const novoValor = Math.floor(Math.random()*6)+1;
        if(novoValor === numero) {
            return geraNumero(numero);
        }
        return novoValor;
    }

    const fazSorteio = () => {
        const novoNumero = geraNumero(numero);
        setNumero(novoNumero);

        const novoHistorico = historico;
        novoHistorico.push(novoNumero);
        setHistorico(novoHistorico);
    }

    const limpaHistorico = () =>{
        setHistorico([]);
    }

    return (
        <PaginaDado6 >
            <Dado6 onClick={fazSorteio} tamanho={3} numero={numero}/>
            <Acoes>
                <BotaoLimpar onClick={limpaHistorico}/>
                <BotaoTrocar/>
            </Acoes>
            <Historico conteudo={historico}/>
        </PaginaDado6>
    )
}

export default Retorno;