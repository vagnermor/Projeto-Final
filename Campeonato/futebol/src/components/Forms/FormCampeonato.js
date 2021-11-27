import React from 'react'
import { TextField, Button, Grid  } from '@material-ui/core'
import '../../index.css'

export default class FormCampeonato extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "estilo": "",
                "quantTimes": "",
                "premiacao": ""
            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setCampeonato= () => {
        if(this.props.escolha){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
            "estilo": "",
            "quanTimes": "",
            "premiacao": ""
        })
    }

    render() {
        return (
            <form>
                <Grid container spacing={1} class="edit-campeonato">
                    
                    <TextField label="Estilo do Campeonato" variant="filled" type="text" id="estilo" value={this.state.estilo} onChange={this.handleInput}></TextField>
                    <TextField label="Quantidade de Times" variant="filled" type="text" id="quanTimes" value={this.state.quantTimes} onChange={this.handleInput}></TextField>
                    <TextField label="Premiação do Campeonato" variant="filled" type="text" id="premiacao" value={this.state.premiacao} onChange={this.handleInput}></TextField>

                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={this.setCampeonato}>Incluir
        </Button>
                </Grid>
            </form>
        )
    }
}
