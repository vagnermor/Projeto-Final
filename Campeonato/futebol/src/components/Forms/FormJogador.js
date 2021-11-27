import React from 'react'
import { TextField, Button, Grid  } from '@material-ui/core'
import '../../index.css'

export default class FormJogador extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "nome":"",
                "idade":"",
                "numero":"",
                "camisa":""
            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setJogador = () => {
        if(this.props.escolha){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
                "nome":"",
                "idade":"",
                "numero":"",
                "camisa":""
        })
    }

    render() {
        return (
            <form>
                <Grid container spacing={1} class="edit-album">
                    <TextField label="Nome do Jogador" variant="filled" type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></TextField>
                    <TextField label="Idade do Jogador" variant="filled" type="text" id="idade" value={this.state.idade} onChange={this.handleInput}></TextField>
                    <TextField label="Posição" variant="filled" type="text" id="posicao" value={this.state.posicao} onChange={this.handleInput}></TextField>
                    <TextField label="Camisa" variant="filled" type="text" id="camisa" value={this.state.camisa} onChange={this.handleInput}></TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={this.setJogador}>Incluir
                     </Button>
                </Grid>
            </form>
        )
    }
}
