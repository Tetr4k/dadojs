import styled from 'styled-components';

const Historico = styled.ol`
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    height: 50vh;
    overflow: scroll;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
`

export default Historico;