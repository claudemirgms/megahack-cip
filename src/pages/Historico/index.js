import React from 'react';
import './styles.css';

export default function Historico(){  

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
            <span class="titulovisao">Histórico de Contas</span>
          </div>
        </div>
        <div class="linha">          
          <div class="preco">R$ 79,99</div>
          <div class="descricao">Internet</div>
          <div class="data">23/01 ></div>                    
        </div>
        <div class="linha">          
          <div class="preco">R$ 79,99</div>
          <div class="descricao">Luz</div>
          <div class="data">23/01 ></div>                    
        </div>
        <div class="linha">          
          <div class="preco">R$ 79,99</div>
          <div class="descricao">Academia</div>
          <div class="data">23/01 ></div>                    
        </div>
        <div class="linha">          
          <div class="preco">R$ 79,99</div>
          <div class="descricao">Gás</div>
          <div class="data">23/01 ></div>                    
        </div>
      </div>
    </>
  )
}