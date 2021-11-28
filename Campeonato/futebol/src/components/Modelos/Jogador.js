import React from 'react'
import FormJogador from '../Forms/FormJogador'
import ListaCampeonato from '../Listagem/ListaCampeonato'
import Axios from 'axios'
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@material-ui/core'
import '../../index.css'


export default class Jogador extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/jogador"

        this.state = {
            "jogador": [],
            "escolha": null
        }
    }

    componentDidMount = () => {
        this.getAllJogador()
    }

    getAllJogador = () => {
        let req = Axios.get(this.API_ENDPOINT)
        req.then((res) => {
            if(res.status === 200){
                this.setState({
                    "jogador": res.data
                })
            }
        })
    }

    SaveJogador= (jogador) => {
        let req = Axios.post(this.API_ENDPOINT, jogador)
        req.then((res) => {
            if(res.status === 200){
                this.getAllJogador()
            }
        })
    }

    deleteJogador = (jogadorid) => {
        let req = Axios.delete(this.API_ENDPOINT + "/" + jogadorid)
        req.then((res) => {
            if(res.status === 200){
                this.getAllJogador()
            }
        })
    }

    putJogador = (jogador) => {
        let req = Axios.put(this.API_ENDPOINT + "/" + this.state.escolha._id, jogador)
        req.then((res) => {
            if(res.status === 200){
                this.getAllJogador()
            }
        })
    }

    selectJogador = (jogador) => {
        if(this.state.escolha === jogador){
            this.setState({
                "escolha": null
            })
        } else {
            this.setState({
                "escolha": jogador
            })
        }
    }

    render() {
        let escolha = this.state.escolha ? this.state.escolha._id : null
        return (

            <main>
                <Grid>
                    <section>
                        <h2>Jogador</h2>
                        {escolha}
                        <FormJogador
                            save={this.SaveJogador}
                            put={this.putJogador}
                            selecionado={this.state.escolha}
                            key={escolha}>
                        </FormJogador>
                    </section>
                    <section>
                    <Accordion>
                    <AccordionSummary>
                        <h3>Jodadores</h3>
                        </AccordionSummary>
                        <AccordionDetails class="edit-campeonato">
                        <ListaCampeonato
                            dados={this.state.jogador}
                            delete={this.deleteJogador}
                            select={this.selectJogador}
                        ></ListaCampeonato>
                        </AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </main>

        )
    }
}