import styled from 'styled-components';

const Acoes = styled.div`
	display: flex;
	flex-direction: ${(props) => props.alinhamento ? 'row-reverse' : 'row'};
	gap: 1rem;
	justify-content: space-between;
	padding: 1rem;
	width: 90%;

	@media(min-width: 900px){
		flex-direction: column;
		justify-content: flex-start;
		width: 30%;
		height: 100%;
	}
`

export default Acoes;