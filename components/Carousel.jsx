import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Carousel (props) {
  const auto = props.images.map(image => image.auto)
  const imgs = props.images.map(image => image.img)
  const titles = props.images.map(image => image.title)
  const ps = props.images.map(image => image.p)
  const links = props.images.map(image => image.link)
  const pButtons = props.images.map(image => image.pBoton)
  const [isAuto, setIsAuto] = useState(null)
  const [imgTablet, setImgTablet] = useState(null)
  const [imgMobile, setImgMobile] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(imgs[0])
  const [selectedTitle, setSelectedTitle] = useState(titles[0])
  const [selectedP, setSelectedP] = useState(ps[0])
  const [selectedLink, setSelectedLink] = useState(links[0])
  const [selectedPButton, setSelectedPButton] = useState(pButtons[0])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (auto.includes(true)) {
      setIsAuto(true)
      const imgesTablet = props.images.filter(image => image.imgTablet)
      setImgTablet(imgesTablet[0].imgTablet)
      const imgesMobile = props.images.filter(image => image.imgMobile)
      setImgMobile(imgesMobile[0].imgMobile)
    } else {
      setIsAuto(false)
    }
  }, [auto])
  useEffect(() => {
    if (props.autoPlay === true && !props.showButtons) {
      const Interval = setInterval(() => {
        selectNewImage(selectedIndex, imgs)
      }, props.interval)
      return () => {
        clearInterval(Interval)
      }
    } else if (!props.interval || props.interval === undefined) {
      const Interval = setInterval(() => {
        selectNewImage(selectedIndex, imgs)
      }, 100000)
      return () => {
        clearInterval(Interval)
      }
    }
  }, [selectedIndex, imgs, props.autoPlay])

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedTitle(titles[nextIndex])
      setSelectedP(ps[nextIndex])
      setSelectedLink(links[nextIndex])
      setSelectedPButton(pButtons[nextIndex])
      setSelectedIndex(nextIndex)
    }, 400)
  }

  const previus = () => {
    selectNewImage(selectedIndex, imgs, false)
  }
  const next = () => {
    selectNewImage(selectedIndex, imgs)
  }
  return (
        <>
          <div className="w-full h-auto relative box-border touch-pan-y">
            <div className="md:hidden">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `/caroussel/mobile/${selectedImage}-mobile.jpeg` : isAuto === true ? `http://localhost:1337${imgMobile}` : '/loading.webp'}
              alt={selectedImage} width={480} height={450} onLoad={() => setLoaded(true) } layout="responsive"
              />
            </div>
            <div className="hidden md:block lg:hidden">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `/caroussel/tablet/${selectedImage}-tablet.jpeg` : isAuto === true ? `http://localhost:1337${imgTablet}` : '/loading.webp' }
              alt={selectedImage} width={768} height={720} onLoad={() => setLoaded(true) } layout="responsive"
              />
            </div>
            <div className="hidden lg:block xl:hidden">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `/caroussel/${selectedImage}.jpeg` : isAuto === true ? `http://localhost:1337${selectedImage}` : '/loading.webp' }
              alt={selectedImage} width={1000} height={400} onLoad={() => setLoaded(true) } layout="responsive"
              />
            </div>
            <div className="hidden xl:block">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `/caroussel/${selectedImage}.jpeg` : isAuto === true ? `http://localhost:1337${selectedImage}` : '/loading.webp'}
              alt={selectedImage} width={1500} height={600} onLoad={() => setLoaded(true) } layout="responsive"
              />
            </div>
            {!selectedTitle
              ? null
              : <div className="rounded bg-white bg-opacity-80 lg:bg-opacity-100 w-11/12 lg:w-2/5 xl:w-4/12 h-fit absolute flex flex-col content-center justify-center top-5 lg:top-1/4 left-4p lg:left-32 p-5">
              <h2 className="text-clamp-h2">{selectedTitle}</h2>
              <p className="text-clamp-p">{selectedP}</p>
              { selectedLink && selectedPButton ? <Link href={selectedLink}><span className="rounded w-fit text-clamp-p2 cursor-pointer text-clamp-p p-3 bg-black text-white mt-4 mb-1 hover:bg-yellow-400 transition-all ease-in-out duration-300">{selectedPButton}</span></Link> : null }
            </div>
            }
            {
              props.showButtons && (
                <>
                  <button className="text-white bg-black px-3 py-2 my-s4 rounded ml-4 absolute top-2/4 float-left left-0 hover:bg-yellow-400 transition-all ease-in-out duration-300" onClick={previus}>{'<'}</button>
                  <button className="text-white bg-black px-3 py-2 my-s4 rounded mr-4 absolute top-2/4 float-right right-0 hover:bg-yellow-400 transition-all ease-in-out duration-300" onClick={next}>{'>'}</button>
                </>
              )
            }

          </div>
        </>
  )
}
