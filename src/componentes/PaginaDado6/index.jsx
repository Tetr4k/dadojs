import Dado6 from '../dados/Dado6'
import styled from 'styled-components';
import Historico from '../Historico';
import BotaoLimpar from '../BotaoLimpar';
import BotaoTrocar from '../BotaoLimpar';
import Acoes from '../Acoes';
import {useNumero} from '../../hooks/useNumero'
import {useHistorico} from '../../hooks/useHistorico';
import {useLado} from '../../hooks/useLado';

const PaginaDado = styled.div`
    align-items: ${(props) => props.alinhamento ? 'flex-end': 'flex-start'};
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: fixed;
    bottom: 0;
    height: 75%;
    width: 100%;
`

const Retorno = () => {
    const [numero, setNumero] = useNumero(6);
    const [historico, setHistorico] = useHistorico();
    const [lado, trocaLado] = useLado(true);

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
        <PaginaDado alinhamento={lado}>
            <Dado6 onClick={fazSorteio} tamanho={2} numero={numero}/>
            <Acoes alinhamento={lado}>
                <BotaoLimpar onClick={limpaHistorico}>♻</BotaoLimpar>
                <BotaoTrocar onClick={trocaLado}>{lado ? '←' : '→'}</BotaoTrocar>
            </Acoes>
            <Historico conteudo={historico}/>
        </PaginaDado>
    )
}

export default Retorno;