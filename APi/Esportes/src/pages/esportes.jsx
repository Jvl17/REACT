import './esportes.css'
import { Link } from 'react-router-dom'
function Esportes() {
    return (
        <>
            <main>
                <div className="esporteContainer">
                    <div className='esporte1'>
                        <div className="sombra"></div>
                        <div className="textoEsportes1">
                            <h1>Futebol</h1>
                            <Link to="/futebol" className="btnVerMais">Ver Mais</Link>
                        </div>
                    </div>
                    <div className='esporte2'>
                        <div className="sombra">
                            <div className="textoEsportes">
                                <h1>Basquete</h1>
                                <Link to="/basquete" className='btnVerMais'>Ver Mais</Link>
                            </div>
                        </div>
                    </div>
                    <div className='esporte3'>
                        <div className="sombra">
                            <div className="textoEsportes">
                                <h1>Golf</h1>
                                <Link to="/golf" className='btnVerMais'>Ver Mais</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="navNoticiasEsporte">
                    <nav>
                        <div></div>
                        <div>
                            <h1>Futebol</h1>
                            <span>Euro 2024: A Alemanha conquistou a Euro 2024 ao vencer a final contra a França por 2-1, em um jogo emocionante realizado no Estádio Olímpico de Munique.</span>
                            <a href="https://ge.globo.com/futebol/eurocopa/noticia/2024/06/14/euro-2024-alemanha-aplica-sua-maior-goleada-em-um-torneio-desde-o-7-a-1.ghtml">globo.com</a>
                        </div>
                    </nav>
                </section>
            </main>
        </>
    )
}

export default Esportes