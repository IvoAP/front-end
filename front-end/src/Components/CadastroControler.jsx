import React from 'react';
import { useState } from 'react';


function CadastrorController(props){
    const [paciente,setPaciente] = useState()
    const [listaPacientes, setListaPacientes] = useState([])

    function AdicionarPacientes(props){
        let paciente = props.paciente
        setListaPacientes(
            listaAtual => [...listaAtual, paciente]
        )  
        
        console.log(listaPacientes)
    }

    
}

export default CadastrorController

