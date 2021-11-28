import React from 'react'
import FormTime from '../Forms/FormTime'
import ListaCampeonato from '../Listagem/ListaCampeonato'
import Axios from 'axios'
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@material-ui/core'
import '../../index.css'


export default class Time extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/time"

        this.state = {
            "time": [],
            "escolha": null
        }
    }

    componentDidMount = () => {
        this.getAllTime()
    }

    getAllTime = () => {
        let req = Axios.get(this.API_ENDPOINT)
        req.then((res) => {
            if(res.status === 200){
                this.setState({
                    "time": res.data
                })
            }
        })
    }

    SaveTime = (time) => {
        let req = Axios.post(this.API_ENDPOINT, time)
        req.then((res) => {
            if(res.status === 200){
                this.getAllTime()
            }
        })
    }

    deletetime = (timeid) => {
        var req= Axios.delete(this.API_ENDPOINT + "/" + timeid)
        req.then((res) => {
            if(res.status === 200){
                this.getAllTime()
            }
        })
    }

    puttime = (time) => {
        let req = Axios.put(this.API_ENDPOINT + "/" + this.state.escolha._id, time)
       req.then((res) => {
            if(res.status === 200){
                this.getAllTime()
            }
        })
    }

    selectime = (time) => {
        if(this.state.escolha === time){
            this.setState({
                "escolha": null
            })
        } else {
            this.setState({
                "escolha": time
            })
        }
    }

    render() {
        let escolha = this.state.escolha ? this.state.escolha._id : null
        return (
            <main>
                <Grid>
                    <section>
                        <h2>Time</h2>
                        {escolha}
                        <FormTime
                            save={this.SaveTime}
                            put={this.puttime}
                            escolha={this.state.escolha}
                            key={escolha}>
                        </FormTime>
                    </section>
                    <section>
                    <Accordion>
                    <AccordionSummary>
                        <h3>Times</h3>
                        </AccordionSummary>
                        <AccordionDetails class="edit-campeonato">
                        <ListaCampeonato
                            dados={this.state.time}
                            delete={this.deletetime}
                            select={this.selectime}
                        ></ListaCampeonato>
                        </AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </main>
        )
    }
}