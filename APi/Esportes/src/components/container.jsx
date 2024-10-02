import '../App.css'
import Capa1 from '../assets/1.png'
import Capa2 from '../assets/2.png'
import Capa3 from '../assets/3.png'
import Capa4 from '../assets/4.png'
import Capa5 from '../assets/5.png'
import Capa6 from '../assets/6.png'
import Noticia1 from '../assets/not1.png'
import Noticia2 from '../assets/not2.png'
import Noticia3 from '../assets/not3.png'
import Noticia4 from '../assets/not4.png'
import Coroa from '../assets/coroa.png'
import BannerOffiline from '../assets/banner_offline.png'
import BannerPropaganda from '../assets/banner_propagandas.png'
import Cesta from '../assets/cestadebasquete.png'

function Container() {
    return (
        <>
            <div className='banner'>
                <div class="overlay"></div>
                <div className="infos">
                    <h1>Fique por dentro das últimas notícias e análises do mundo esportivo.<br />
                        <span>Novidades esportivas e conquistas dos maiores atletas.</span>
                    </h1>
                    <a href="">Saiba Mais</a>
                </div>
                <div className='infos'></div>
            </div>

            <div className="principaisJogos">
                <div className="containerJogos">
                    <h1 className='tituloJogos'>Principais Jogos</h1>

                    <div className="jogos">
                        <div>
                            <img src={Capa1} alt="" />
                            <h1>Portugal vs. Bélgica <br /> <span>Quartas de final da Eurocopa 2024 em 5 de julho de 2024</span> <br /></h1>
                            <a href="https://www.nbcsports.com/soccer/news/euro-2024-schedule-dates-venues">UEFA.com</a>
                        </div>
                        <div>
                            <img src={Capa2} alt="" />
                            <h1>Alemanha vs. Espanha <br /> <span>Quartas de final da Eurocopa 2024 em 5 de julho de 2024</span> <br /></h1>
                            <a href="https://www.uefa.com/euro2024/news/0275-151eb1c333ea-d30deec67b13-1000--uefa-euro-2024-fixtures-and-results-when-and-where-are-t/">UEFA.com</a>
                        </div>
                        <div>
                            <img src={Capa3} alt="" />
                            <h1>NBA Summer League <br /> <span> Denver Nuggets vs. Los Angeles Lakers em 7 de julho de 2024</span> <br /></h1>
                            <a href="https://nbaevents.nba.com/summerleague">NBAEvents.com</a>
                        </div>
                        <div>
                            <img src={Capa4} alt="" />
                            <h1>WNBA Regular Season <br /> <span>New York Liberty vs. Las Vegas Aces em 8 de julho de 2024.</span> <br /></h1>
                            <a href="https://www.wnba.com/schedule?season=2024&month=all">WNBA.com</a>
                        </div>
                        <div>
                            <img src={Capa5} alt="" />
                            <h1>The Open Championship <br /> <span>British Open, ocorrerá de 18 a 21 de julho de 2024 em Royal Troon, Escócia.</span> <br /></h1>
                            <a href="https://www.theopen.com">TheOpen.com</a>
                        </div>
                        <div>
                            <img src={Capa6} alt="" />
                            <h1>U.S. Women's Open  <br /> <span>De 4 a 7 de julho de 2024 no Lancaster Country Club, na Pensilvânia</span> <br /></h1>
                            <a href="https://www.uswomensopen.com">USWomensOpen.com</a>
                        </div>
                    </div>

                    <div className="noticias">
                        <h1 className="tituloNoticias">Últimas Notícias</h1>
                        <nav className='nav_noticias'>
                            <div className='div_org'>
                                <div className='div_img'><img src={Noticia1} alt="" /></div>
                                <div className='div_infos'>
                                    <h1>Futebol</h1>
                                    <span>O Chelsea e o Newcastle estão em negociações avançadas para a transferência de Reece James, em um acordo que pode alcançar até £50 milhões. Este movimento marca uma mudança significativa para o capitão do Chelsea e pode fortalecer a defesa do Newcastle na próxima temporada da Premier League.</span>
                                    <a href="https://www.theguardian.com/football/live">The Guardian</a>
                                </div>
                            </div>
                            <div className='div_org'>
                                <div className='div_img'><img src={Noticia2} alt="" /></div>
                                <div className='div_infos'>
                                    <h1>Natação</h1>
                                    <span>Na Mare Nostrum, uma das principais competições de natação, o nadador americano Caeleb Dressel demonstrou seu domínio ao vencer várias provas. Este evento, realizado na Espanha, atrai os melhores nadadores do mundo e serve como preparação crucial para competições internacionais.</span>
                                    <a href="https://www.swimmingworldmagazine.com/">Swimming World</a>
                                </div>
                            </div>
                            <div className='div_org'>
                                <div className='div_img'><img src={Noticia3} alt="" /></div>
                                <div className='div_infos'>
                                    <h1>Basquete</h1>
                                    <span>O jogador de basquete Nikola Jokic, estrela do Denver Nuggets, está considerando retornar à seleção da Sérvia para as próximas competições internacionais, após um desempenho estelar na última temporada da NBA.</span>
                                    <a href="https://www.eurohoops.net/en/olympic-games/1683231/nikola-jokic-serbia-national-team-extended-roster-olympic-games-2024/">ESPN</a>
                                </div>
                            </div>
                            <div className='div_org'>
                                <div className='div_img'><img src={Noticia4} alt="" /></div>
                                <div className='div_infos'>
                                    <h1>Tênis de Mesa</h1>
                                    <span>No Campeonato Mundial de Tênis de Mesa, a China dominou mais uma vez, com Fan Zhendong e Sun Yingsha conquistando os títulos de simples masculino e feminino, respectivamente. Este evento reafirma o domínio da China no esporte.</span>
                                    <a href="https://www.ittf.com/">ITTF</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="planos">
                <nav className="nav_planos" id='megafun'>
                    <div className='div_planos1'>
                        <h1>FAN <br /> MYR R$14,99/mês <br /> <span>+ TAXAS E IMPOSTOS</span></h1>
                        <a href="" className='btn_comecar'>COMECE UM TESTE GRÁTIS DE 7 DIAS</a>
                        <a href="" className='btn_pular'>PULAR TESTE GRATUITO</a>
                        <span className='spanTexto'>Assista a todos os jogos e eventos esportivos sem propagandas, com transmissões ao vivo logo após o início do evento.</span>
                        <span className='mais'>MAIS</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Assista em até 1 tela</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Acesso aos resultados dos jogos ao vivo</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Receba um resumo das principais notícias esportivas toda semana</span>
                        </div>
                    </div>
                    <div className='div_planos2'>
                        <img className='coroa' src={Coroa} alt="" />
                        <h1><h2>O MAIS POPULAR</h2>MEGA FAN <br /> MYR R$19,99/mês <br /> <span>+ TAXAS E IMPOSTOS</span></h1>
                        <a href="" className='btn_comecar'>COMECE UM TESTE GRÁTIS DE 7 DIAS</a>
                        <a href="" className='btn_pular'>PULAR TESTE GRATUITO</a>
                        <span className='spanTexto'>Assista a todos os jogos e eventos esportivos sem propagandas, com transmissões ao vivo logo após o início do evento.</span>
                        <span className='mais'>MAIS</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Assista em até 4 telas simultâneas</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Artigos e análises exclusivas de especialistas</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Descontos em produtos esportivos e ingressos para jogos</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Suporte ao cliente com prioridade e tempo de resposta mais rápido</span>
                        </div>
                    </div>
                    <div className='div_planos3'>
                        <h1>MEGA FAN <br /> MYR R$199,99/ano <br /> <span>+ TAXAS E IMPOSTOS</span></h1>
                        <a href="" className='btn_comecar'>COMECE UM TESTE GRÁTIS DE 7 DIAS</a>
                        <a href="" className='btn_pular'>PULAR TESTE GRATUITO</a>
                        <span className='spanTexto'>Assista a todos os jogos e eventos esportivos sem propagandas, com transmissões ao vivo logo após o início do evento.</span>
                        <span className='mais'>MAIS</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Assista em até 4 telas simultâneas</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Acesso a estatísticas detalhadas de jogadores e times</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Acesso exclusivo a vídeos de melhores momentos dos jogos</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                            <span>Participe de discussões e interaja com outros membros da comunidade</span>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="footer">
                <div className="containerFooter">
                    <nav className="offline">
                        <div><img src={BannerOffiline} alt="" /></div>
                        <div>
                            <h1 className="tituloOffline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16">
                                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                                </svg>
                                <span>ASSISTA SEM INTERNET</span>
                            </h1>
                            <span className='descOffline'>Continue a assistir os seus jogos favoritos mesmo longe de casa - Obtenha o Assistir Offline com o plano <a href="#megafun">Mega Fun.</a></span>
                        </div>
                    </nav>

                    <nav className='propagandas'>
                        <img className='cesta' src={Cesta} alt="" />
                        <div className='div_propaganda'>
                            <h1 className="tituloPropaganda">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                                </svg>
                                <span>JOGOS SEM PROPAGANDA</span>
                            </h1>
                            <span className='descPropaganda'>Continue a assistir os seus jogos favoritos mesmo longe de casa - Obtenha o Assistir Offline com o plano <a href="#megafun">Mega Fun.</a></span>
                        </div>
                        <div className='img_propaganda'><img src={BannerPropaganda} alt="" /></div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Container