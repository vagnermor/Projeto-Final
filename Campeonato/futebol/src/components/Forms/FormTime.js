import React from 'react'
import { TextField, Button, Grid  } from '@material-ui/core'
import '../../index.css'

export default class Formtime extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "nometime": "",
                "estadio": ""
            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setTime = () => {
        if(this.props.escolha){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
            "nome": "",
            "estadio": ""
        })
    }

    render() {
        return (
            <form>
                <Grid container spacing={1} class="edit-campeonato">
                    <TextField label="Nome do Time" variant="filled" type="text" id="nometime" value={this.state.nometime} onChange={this.handleInput}> </TextField>
                    <TextField label="Estadio" variant="filled" type="text" id="estadio" value={this.state.estadio} onChange={this.handleInput}> </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={this.setTime}>Incluir Time
        </Button>
                </Grid>
            </form>
        )
    }
}
