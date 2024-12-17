import {useNavigate} from "react-router-dom"
import Img1 from "../assets/cardImages/img1.jpg"
import Img2 from "../assets/cardImages/IM2.jpg"
import Img3 from "../assets/cardImages/IM3.jpg"
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
const Cards = () => {
  // const navigate =useNavigate()
  return (
    <div className='justify-center my-32'>
      <div className='grid grid-flow-col justify-items-center '>
        {/* card 1 */}
      <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={500}
        src={Img1}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Descripción de diseño</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Saber más
        </Button>
        </CardFooter>
        </Card>
        {/* card 2 */}
        <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={500}
        src={Img2}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Descripción de diseño</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Saber más
        </Button>
        </CardFooter>
        </Card>
        {/* card 3 */}
        <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={500}
        src={Img3}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Descripción de diseño</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Saber más
        </Button>
        </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Cards