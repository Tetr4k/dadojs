import Dado6 from '../dados/Dado6'
import styled from 'styled-components';
import Historico from '../Historico';
import BotaoLimpar from '../BotaoLimpar';
import BotaoTrocar from '../BotaoLimpar';
import Acoes from '../Acoes';
import {useNumero} from '../../hooks/useNumero'
import {useHistorico} from '../../hooks/useHistorico';
import {useLado} from '../../hooks/useLado';
import {AlinhamentoContext} from '../../context/AlinhamentoContext';
import {useContext} from 'react';

const PaginaDado = styled.div`
    align-items: ${(props) => props.alinhamento ? 'flex-end': 'flex-start'};
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: fixed;
    bottom: 0;
    height: 85%;
    width: 100%;
`

const Retorno = (props) => {
    const [numero, setNumero] = useNumero(6);
    const [historico, setHistorico] = useHistorico();
    const [lado, trocaLado] = useLado();
    const alinhamento = useContext(AlinhamentoContext);

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
        <AlinhamentoContext.Provider value={lado}>
            <PaginaDado alinhamento={alinhamento}>
                <Dado6 onClick={fazSorteio} tamanho={3} numero={numero}/>
                <Acoes alinhamento={alinhamento}>
                    <BotaoLimpar onClick={limpaHistorico}/>
                    <BotaoTrocar onClick={trocaLado}/>
                </Acoes>
                <Historico conteudo={historico}/>
            </PaginaDado>
        </AlinhamentoContext.Provider>
    )
}

export default Retorno;