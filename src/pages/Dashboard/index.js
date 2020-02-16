import React from 'react';
import './styles.css';

export default function Dashboard(){  

  return (
    <> 
      <div class="main">
        <div class="topo">
          <div class="menu">
            <h3>P</h3>
            <h3>I</h3>
            <h3>C</h3>
            <h3>O</h3>
            <h3>C</h3>
          </div>
          <div class="visao">
            <div class="creditodisponivel">
              Crédito disponível<br />
              R$ 420,01
            </div>
            <div class="credito">
              <div class="utilizado">
                Crédito utilizado
              </div>
              <div class="utilizado">
                R$79,99
              </div>
            </div>
          </div>
        </div>
        <div class="contas">
          Contas deste mês >
        </div>
        <div class="boxcontas">
          <div class="box">
            <div class="icone">
              <i class="fas fa-lightbulb fa-2x"></i>
              <span class="iconetitulo">Energia</span>
            </div>
            <div class="dados">
              <span>19/02</span><br />
              <span>R$ 32,99</span>
            </div>
          </div>
          <div class="box">
            <div class="icone">
              <i class="fas fa-wifi fa-2x"></i>
              <span class="iconetitulo">Internet</span>
            </div>
            <div class="dados">
              <span>19/02</span><br />
              <span>R$ 32,99</span>
            </div>
          </div>
          <div class="box">
            <div class="icone">
              <i class="fas fa-dumbbell fa-2x"></i>
              <span class="iconetitulo">Academia</span>
            </div>
            <div class="dados">
              <span>19/02</span><br />
              <span>R$ 32,99</span>
            </div>
          </div>          
        </div>
        <div class="total">
          <span class="titulo">Valor total das contas</span><br />
          <span class="valor">R$ 569,97</span>
        </div>
      </div>
    </>
  )
}