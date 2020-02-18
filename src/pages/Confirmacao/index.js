import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Confirmacao(){  

  return (
    <> 
      <div class="tudo">
        <div class="processado">
          <div>
            Processado com sucesso
          </div>
        </div>
        <div>
          <i class="far fa-grin-beam fa-7x"></i>
        </div>
        <div>
        crédito utilizado, quando conveniente se dirija a um local de pagamento para quitar o crédito.
        </div>
        <div>
        <Link to="/">
              <button class="botaoconfirmar2">
                <bold class="tituloconfirmar">&#62;</bold>
              </button>
              </Link>
        </div>
      </div>
    </>
  )
}