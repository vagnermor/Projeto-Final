import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid } from '@material-ui/core'
import '../../index.css'

export default class ListaFutebol extends React.Component {

    render() {
               
        let lista = this.props.lista. map(item => {
       
            return <li key={item._id}>
                <Grid container class="edit-futebol">
                    <Accordion>
                        <AccordionSummary>
                            <h3>{item.campeonato}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid>
                                <div>{item.campeonato}</div>
                                <div>{item.estilo}</div>
                                <div>{item.premiacao}</div>
                                <div>{item.nome}</div>
                                <div>{item.idade}</div>
                                <div>{item.numero}</div>
                                <div>{item.camisa}</div>
                                <div>{item.time}</div>
                                <div>{item.estadio}</div>
                            </Grid>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={() => this.props.select(item)}>Selecionar
                     </Button>
                            </Grid>
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={() => this.props.delete(item._id)}>Deletar
                     </Button>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </li>
        })
        return (
            <ul>
                {lista}
            </ul>
        )
    }
}
