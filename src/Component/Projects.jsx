import React from 'react'
import Currency from "../assets/Currency.png";
import Translator from "../assets/Translator.png";
import CodeEditor from "../assets/CodeEditor.png";
import Ecart from "../assets/Ecart.png";
import Portfilio from "../assets/Portfilio.png";
import Refocus from "../assets/Refocus.png";
import shine from "../assets/shine.png";
import weather from "../assets/weather.png";
import LinkPage from './LinkPage';


const Projects = () => {

  let data = [
      {
        img: Currency,
        heading: "Currency Convertor",
        description: "Real Time currency report using API",
        versel: "https://currency-converter.vercel.app/", // corrected sample versel
        github: "https://github.com/rajpal-singh-code/currency-converter"
      },
      {
        img: Translator,
        heading: "English To Hindi",
        description: "Uses Translator API",
        versel: "https://english-to-hindi.vercel.app/",
        github: "https://github.com/rajpal-singh-code/EnglishTo_Hindi"
      },
      {
        img: Portfilio,
        heading: "Portfilio Rajpal",
        description: "Use for Job Purpose",
        versel: "https://english-to-hindi.vercel.app/",
        github: "https://github.com/rajpal-singh-code/EnglishTo_Hindi"
      },
      {
        img: CodeEditor,
        heading: "Mini Proect Code-Editor",
        description: "Uses CodeMirror HTML CSS JavaScipt",
        versel: "https://code-editor-two-ashen.vercel.app/",
        github: "https://github.com/rajpal-singh-code/Code-editor/blob/main/src/Components/Editor.jsx"
      },
      {
        img: Ecart,
        heading: "E-commerce for Clothes",
        description: "Uses Random E-commerce API",
        versel: "https://e-cart-five-topaz.vercel.app/",
        github: "https://github.com/rajpal-singh-code/E_cart"
      },
      {
        img: shine,
        heading: "Clone of Shine-website",
        description: "Uses TailwindCss,and React",
        versel: "https://clone-shine.vercel.app/",
        github: "https://github.com/rajpal-singh-code/Clone_Shine"
      },
      {
        img: weather,
        heading: "Weather App",
        description: "Uses Weather API",
        versel: "https://weather-app-seven-ivory.vercel.app/",
        github: "https://github.com/rajpal-singh-code/React_Weather"
      },
      {
        img: Refocus,
        heading: "Refocus Clone",
        description: "Uses HTML,TailwindCss,React ,JavaScript",
        versel: "https://refocuss-clone.vercel.app/",
        github: "https://github.com/rajpal-singh-code/Refocuss_Clone"
      }
      
    ];

  return (
    <>
      <div>
        <div className='pt-15'>
          <h4 className='text-4xl font-semibold text-sans'>Projects</h4>
          <p className='text-xl py-2 font-sans md:text-2xl'>A collection of finest project that i have built.</p>
        </div>

        <div className='flex flex-col gap-5 md:flex-row md:justify-between md:flex-wrap'>
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 px-4 py-3 rounded-xl h-auto w-full md:w-90 lg:w-120 mb-4"
            >
              <div className="h-fit w-full overflow-hidden rounded-t-xl">
                <img
                  src={item.img}
                  alt={item.heading}
                  className="object-cover hover:scale-110 transition-all ease-in-out"
                />
              </div>
              <div>
                <h1 className="py-2 text-3xl font-semibold font-sans">
                  {item.heading}
                </h1>
                <p className="text-lg opacity-70">{item.description}</p>
                <div className="flex gap-5 py-2.5">
                  <a
                    className="border px-3.5 rounded text-lg py-1.4 font-normal"
                    href={item.versel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-global-line"></i> Preview
                  </a>
                  <a
                    className="border px-3.5 rounded text-lg py-1.4 font-normal"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-github-fill"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <LinkPage/>
      </div>
    </>
  )
}

export default Projects
