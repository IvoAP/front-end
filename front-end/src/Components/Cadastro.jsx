import React from 'react';
import { useState } from 'react';


 class CadastrorController {
    
    constructor(paciente){ 
        this.paciente = paciente
        this.lista = []
        
    }
    
    AdiconarPaciente(){
        
        this.lista.push(this.paciente)
        console.log(this.lista)
    }

    

}






function CadastroView() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [idade, setIdade] = useState("")
    const [numero_contato, setNumero_Contato] = useState("")

    
    // Input
    function AtualizarCampoNome (event){
        setNome(event.target.value)
        
    }

    function AtualizarCampoEmail(event){
        setEmail(event.target.value)
    }

    function AtualizarCampoCpf (event){
        setCpf(event.target.value)
    }

    function AtualizarCampoIdade (event){
        setIdade(event.target.value)
    }

    function AtualizarCampoNumeroContato (event){
        setNumero_Contato(event.target.value)
    }

    // Botão

    function CadastrarPressionado(){
        let paciente = {
            nome : nome,
            email: email,
            cpf : cpf,
            idade: idade,
            numero_contato: numero_contato
        }
        let Controllador = new CadastrorController(paciente)
        Controllador.AdiconarPaciente()
        

    }


    return(
        <div>
            <h2>Cadastro paciente</h2>
            <div>
                Nome completo: <input type= "text" onChange={AtualizarCampoNome} ></input>
                <br></br>
                email: <input type= "text"  onChange = {AtualizarCampoEmail}></input>
                <br></br>
                CPF: <input type= "text"  onChange = {AtualizarCampoCpf}></input>
                <br></br>
                Idade: <input type= "text" onChange={AtualizarCampoIdade}></input>
                <br></br>
                Número de contato: <input type= "text" onChange={AtualizarCampoNumeroContato}></input>
                </div>
                <br></br>
                <button onClick={CadastrarPressionado} >Cadastrar</button>
            
        </div>
    )
    
}

export default CadastroView