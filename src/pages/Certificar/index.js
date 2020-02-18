import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Certificar(){  

  return (
    <> 
      <div class="main">
        <div class="topo">          
          <div class="topocontas">
            <span class="contasmes">
              <Link class="link" to="/">&#60;</Link>
              Certificar
            </span>
          </div>
        </div>
        <div class="certificar">
          <div class="creditodisponivel">
            Crédito a ser alocado<br />
            R$ 420,01
          </div>
          <div class="credito">
            <div class="utilizado">
              Crédito restante
            </div>
            <div class="utilizado">
              R$79,99
            </div>
          </div>
        </div>
        <div class="confirmar">
          <div class="registro">          
            <div class="valorregistro">R$ 79,99</div>
            <div>Internet</div>
            <div>23/01</div>                    
          </div>
          <div class="divconfirmar">
            <div>
              <Link to="confirmacao">
              <button class="botaoconfirmar">
                <bold class="tituloconfirmar">Confirmar</bold>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}