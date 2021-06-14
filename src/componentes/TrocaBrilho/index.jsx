import styled from 'styled-components';
import { useState } from 'react';
import { Switch, FormGroup, FormControlLabel } from '@material-ui/core';

const BotaoTroca = styled.div`
    margin-right: 1rem;
    transform: rotate(90deg);
`

const Retorno = () => {

    const [ brilho, setBrilho] = useState(false);

    const handleChange = (event) => {
        setBrilho({ ...brilho, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <BotaoTroca>
                        <Switch
                            checked={brilho}
                            color="default"
                            name="brilho"
                            onChange={handleChange}
                            size="normal"
                        />
                    </BotaoTroca>
                }
                label="Brilho"
                labelPlacement="start"
            />
        </FormGroup>
    );
};

export default Retorno;