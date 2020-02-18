import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Contas(){  

  return (
    <> 
      <div class="main">
        <div class="topo">          
          <div class="topocontas">
            <span class="contasmes">
              <Link class="link" to="/">&#60;</Link>
              Contas desse mês
            </span>
          </div>
        </div>
        <div>
          <div class="disponivel">
            <span class="valor">R$ 569,97</span><br />
            <span class="tituloconta">Valor Disponível</span>
            <hr />
          </div>
          <div class="selecionado">          
            <span class="valor">R$ 0,00</span><br />
            <span class="tituloconta">Valor Selecionado</span>            
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