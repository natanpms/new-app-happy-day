import { useEffect, useRef, useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './assets/teste-1.jpeg';
import img2 from './assets/teste-2.jpeg';
import img3 from './assets/teste-3.jpeg';
import img4 from './assets/teste-4.jpeg';
import img5 from './assets/teste-5.jpeg';
import img6 from './assets/teste-6.jpeg';
import img7 from './assets/teste-7.jpeg';
import img8 from './assets/teste-8.jpeg';
import img9 from './assets/teste-9.jpeg';
import img10 from './assets/teste-10.jpeg';
import img11 from './assets/teste-11.jpeg';
import img12 from './assets/teste-12.jpeg';
import img13 from './assets/teste-13.jpeg';
import Slider from "react-slick";

function App() {
  const colors = ["#e03776", "#8f3e98", "#4687bf", "#3bab6f", "#f9c25e", "#f47274"];
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const SVG_XLINK = "http://www.w3.org/1999/xlink";

  const heartsRef = useRef(null);
  const heartsRy = [];
  const [isCLicked, setIsCLicked] = useState();
  const [isSlider, setIsSlider] = useState();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    dotsClass: 'slick-dots custom-dots'
  };

  const imagens = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
  ];

  useEffect(() => {
    const hearts = heartsRef.current;

    function useTheHeart(n) {
      let use = document.createElementNS(SVG_NS, 'use');
      use.n = n;
      use.setAttributeNS(SVG_XLINK, 'xlink:href', '#heart');
      use.setAttributeNS(null, 'transform', `scale(${use.n})`);
      use.setAttributeNS(null, 'fill', colors[n % colors.length]);
      use.setAttributeNS(null, 'x', -69);
      use.setAttributeNS(null, 'y', -69);
      use.setAttributeNS(null, 'width', 138);
      use.setAttributeNS(null, 'height', 138);
      heartsRy.push(use);
      hearts.appendChild(use);
    }

    for (let n = 18; n >= 0; n--) { useTheHeart(n) }

    function Frame() {
      requestAnimationFrame(Frame);
      for (let i = 0; i < heartsRy.length; i++) {
        if (heartsRy[i].n < 18) {
          heartsRy[i].n += 0.01;
        } else {
          heartsRy[i].n = 0;
          hearts.appendChild(heartsRy[i]);
        }
        heartsRy[i].setAttributeNS(null, 'transform', `scale(${heartsRy[i].n})`);
      }
    }

    Frame();
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <svg
        ref={heartsRef}
        id="hearts"
        viewBox="-600 -400 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full z-0"
      >
        <defs>
          <symbol id="heart" viewBox="-69 -16 138 138">
            <path d="M0,12 C 50,-30 110,50  0,120 C-110,50 -50,-30 0,12z" />
          </symbol>
        </defs>
      </svg>

      <div className="flex items-center justify-center h-full w-full absolute z-10 text-white text-4xl ">
        {(!isCLicked && !isSlider) &&
          <button className='rounded-md p-6 bg-white z-10' onClick={() => setIsCLicked(true)}>
            Clica aqui
          </button>

        }
        {isCLicked &&
          <>
            <div className="flex flex-col items-center justify-center h-full w-full absolute z-10 text-white  gap-6">
              <p className='max-w-[95%] h-[70%] md:h-[50%] lg:max-w-7xl overflow-y-auto p-2 text-lg lg:text-xl bg-black/30 rounded-md backdrop-blur-sm'>
                Feliz 5 meses do momento em que minha vida mudou. Eu definitivamente sei quando o destino me entrelaçou com você, é engraçado e eu ja falei varias vezes pra vc que eu acredito em destino e se tem algo que eu agradeço fielmente todos os dias, foi por eu ter entrado no Simple em 2023, pq isso me levou para conhecer o amor da minha vida e a pessoa que eu não me vejo mais sem. E isso é o que mais me interessa, eu definitivamente não me importo com o meu sucesso em vagas, dinheiro, sucesso, isso tudo nunca foi dúvida para mim, nunca duvidei que eu fosse alcançar grandes coisas um dia mas eu sempre me peguei pensando no momento que eu encontraria alguém a qual faria sentido lutar todas as batalhas e dedicar uma vida linda ao lado dela, e pra mim, setembro de 2023 foi o início dessa aventura. Eu agradeço por vc ter visto o melhor em mim mesmo em momentos que eu não estava me encontrando, em momentos que eu coloquei tudo a perder entre a gente, momentos que eu estava em conflito com tudo que eu sentia, muito medo e muita insegurança quase me tirou de você. Eu sou muito grato por ser você, eu amo tuas risadas, amo seu jeito, amo sua forma de ser uma namorada incrível, seus cuidados, sua dedicação, seu sorrisinho, seu cabelo e tudo isso foi me conquistando com o tempo, eu amo todos os seus detalhes. Amo a nossa parceria, nossos momentos e vou amar o resto das nossas vidinhas. O tempo tem voado de uma forma maluca e eu definitivamente estou amando passar ele com você. Eu estarei sempre aqui para te ajudar, apoiar e com você sempre que precisar e for necessário. Eu sempre vou lutar por mim, por você e por nós. Eu te amo muito e pra sempre.
              </p>
              <div className='flex flex-col md: flex-wrap gap-2 w-[80%] md:w-[20%] text-base'>
                <button className="rounded-md  bg-white z-10" onClick={() => {
                  setIsCLicked(false)
                  setIsSlider(true)
                }}>
                  SE CLICAR TEM OUTRA SURPRESA
                </button>
                <button className="rounded-md  bg-white z-10" onClick={() => setIsCLicked(false)}>
                  VOLTAR
                </button>
              </div>
            </div>

          </>
        }


        {isSlider && (
          <div className="w-full h-full flex flex-col p-4 bg-black/15 rounded-none sm:rounded-md backdrop-blur-sm text-white overflow-hidden">


            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="w-full max-w-4xl slider-container">
                <Slider {...settings}>
                  {imagens.map((imgSrc, index) => (
                    <div key={index} className="px-2">
                      <div className="flex justify-center items-center h-full">
                        <img
                          src={imgSrc}
                          alt={`Slide ${index + 1}`}
                          className="max-w-full max-h-[60vh] sm:max-h-[70vh] lg:max-h-[400px] object-contain rounded-lg shadow-lg"
                          style={{ margin: '0 auto' }}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}

export default App;
