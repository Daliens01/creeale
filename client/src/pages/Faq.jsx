import {Accordion, AccordionItem} from "@nextui-org/react";

const Faq = ( )=>{
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return(
        <>
        <div  className=" mb-56 flex flex-col h-[calc(50vh-100px)] items-center justify-center min-[320px]:mb-80 md:mb-56">
          <h1 className="m-10 ">Preguntas frecuentes</h1>
        <div className="min-[320px]:w-[300px] md:w-[900px]">
        <Accordion variant="shadow">
      <AccordionItem key="1" aria-label="Como realizas los diseños" title="Como realizas los diseños?">
        <p>Para realizar los diseños se utilizan todo tipo de viniles, desde permanentes y removibles a sublimados textiles. 
          Se cortan con un plotter de la Marca Cricut, por lo que los cortes son de alta calidad
        </p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Cual es el rango de envíos?">
        <p>Actualmente los envíos se centran en la ciudad de coatzacoalcos, Veracruz. Se tiene en mente expandirse a envíos a toda 
          la republica Mexicana
        </p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Cuales son los medios de pagos disponibles?">
        <p>Los pagos son por transferencia o por pago en efectivo. Se tiene en mente gestionar pagos directamente en pagina 
          con usuario y contraseña
        </p>
      </AccordionItem>
    </Accordion>
        </div>
    </div>
        </>
    )
}

export default Faq