import React from 'react'
import FormCampeonato from '../Forms/FormCampeonato'
import ListaFutebol from '../Listagem/ListaFutebol'
import Axios from 'axios'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import '../../index.css'

export default class Campeonato extends React.Component {

    constructor(props) {
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/campeonato"

        this.state = {
            "Campeonato": [],
            "escolha": null
        }
    }

    componentDidMount = () => {
        this.getAllCampeonato()
    }

    getAllCampeonato = () => {
        let req = Axios.get(this.API_ENDPOINT)
        req.then((res) => {
            if (res.status === 200) {
                this.setState({
                    "campeonato": res.data
                })
            }
        })
    }

    SaveCampeonato = (campeonato) => {
        let req = Axios.post(this.API_ENDPOINT, campeonato)
        req.then((res) => {
            if (res.status === 200) {
                this.getAllCampeonato()
            }
        })
    }

    deleteCampeonato = (campeonatoid) => {
        let req = Axios.delete(this.API_ENDPOINT + "/" + campeonatoid)
        req.then((res) => {
            if (res.status === 200) {
                this.getAllCampeonato()
            }
        })
    }

    putCampeonato = (campeonato) => {
        let req = Axios.put(this.API_ENDPOINT + "/" + this.state.escolha._id, campeonato)
        req.then((res) => {
            if (res.status === 200) {
                this.getAllCampeonato()
            }
        })
    }

    selectCampeonato = (campeonato) => {
        if (this.state.escolha === campeonato) {
            this.setState({
                "escolha": null
            })
        } else {
            this.setState({
                "escolha": campeonato
            })
        }
    }

    render() {
        let escolha = this.state.escolha ? this.state.escolha._id : null
        return (
            <main>
                <section>
                    <h2>Campeonato</h2>
                    {escolha}
                    <FormCampeonato
                        save={this.SaveCampeonato}
                        put={this.putCampeonato}
                        selecionado={this.state.escolha}
                        key={escolha}>
                    </FormCampeonato>
                </section>
                <section>

                    <Accordion>
                        <AccordionSummary>
                            <h3>Campeonato</h3>
                        </AccordionSummary>
                        <AccordionDetails class="edit-futebol">
                                <ListaFutebol
                                    dados={this.state.campeonato}
                                    delete={this.deleteCampeonato}
                                    select={this.selectCampeonato}
                                ></ListaFutebol>
                        </AccordionDetails>
                    </Accordion>
                </section>
            </main>
        )
    }
}