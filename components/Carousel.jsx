import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function Carousel (props) {
  const publicMode = props.images.map(image => image.public)
  const auto = props.images.map(image => image.auto)
  const imgs = props.images.map(image => image.img)
  const tablet = props.images.map(image => image.tablet)
  const mobile = props.images.map(image => image.mobile)
  const titles = props.images.map(image => image.title)
  const ps = props.images.map(image => image.p)
  const links = props.images.map(image => image.link)
  const pButtons = props.images.map(image => image.pBoton)
  const [isAuto, setIsAuto] = useState(null)
  const [isPublic, setIsPublic] = useState(null)
  const [imgTablet, setImgTablet] = useState(null)
  const [imgMobile, setImgMobile] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(imgs[0])
  const [selectedTablet, setSelectedTablet] = useState(tablet[0])
  const [selectedMobile, setSelectedMobile] = useState(mobile[0])
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
    } else if (publicMode.includes(true)) {
      setIsPublic(true)
      const imgesTablet = props.images.filter(image => image.imgTablet)
      setImgTablet(imgesTablet[0].imgTablet)
      const imgesMobile = props.images.filter(image => image.imgMobile)
      setImgMobile(imgesMobile[0].imgMobile)
    } else {
      setIsAuto(false)
    }
  }, [auto])
  useEffect(() => {
    if (props.autoPlay === true && props.interval && imgs.length > 1) {
      const Interval = setInterval(() => {
        selectNewImage(selectedIndex, imgs, tablet, mobile)
      }, props.interval)
      return () => {
        clearInterval(Interval)
      }
    } else if (!props.interval || props.interval === undefined || imgs.length === 1) {
      const Interval = setInterval(() => {
        selectNewImage(selectedIndex, imgs, tablet, mobile)
      }, 5000000)
      return () => {
        clearInterval(Interval)
      }
    }
  }, [selectedIndex, imgs, tablet, mobile, props.autoPlay])

  const selectNewImage = (index, images, tablet, mobile, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedTablet(tablet[nextIndex])
      setSelectedMobile(mobile[nextIndex])
      setSelectedTitle(titles[nextIndex])
      setSelectedP(ps[nextIndex])
      setSelectedLink(links[nextIndex])
      setSelectedPButton(pButtons[nextIndex])
      setSelectedIndex(nextIndex)
    }, 400)
  }

  const previus = () => {
    selectNewImage(selectedIndex, imgs, tablet, mobile, false)
  }
  const next = () => {
    selectNewImage(selectedIndex, imgs, tablet, mobile)
  }

  return (
        <>
          <div className="w-full h-auto relative box-border touch-pan-y">
            <div className="md:hidden">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `http://localhost:1337${selectedMobile}` : isAuto === true ? `http://localhost:1337${imgMobile}` : isPublic === true ? `http://localhost:3000${imgMobile}` : '/loading.webp'}
              alt={selectedMobile} width={480} height={450} onLoad={() => setLoaded(true) } layout="responsive" quality={80}
              />
            </div>
            <div className="hidden md:block lg:hidden">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `http://localhost:1337${selectedTablet}` : isAuto === true ? `http://localhost:1337${imgTablet}` : isPublic === true ? `http://localhost:3000${imgTablet}` : '/loading.webp' }
              alt={selectedTablet} width={768} height={720} onLoad={() => setLoaded(true) } layout="responsive" quality={80}
              />
            </div>
            <div className="hidden lg:block xl:hidden">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `http://localhost:1337${selectedImage}` : isAuto === true ? `http://localhost:1337${selectedImage}` : isPublic === true ? `http://localhost:3000${selectedImage}` : '/loading.webp' }
              alt={selectedImage} width={1000} height={400} onLoad={() => setLoaded(true) } layout="responsive" quality={80}
              />
            </div>
            <div className="hidden xl:block">
              <Image className={`w-full h-auto opacity-0 transition ease-in-out duration-1000 ${loaded ? 'loaded' : ''}`}
              src={isAuto === false ? `http://localhost:1337${selectedImage}` : isAuto === true ? `http://localhost:1337${selectedImage}` : isPublic === true ? `http://localhost:3000${selectedImage}` : '/loading.webp'}
              alt={selectedImage} width={1500} height={600} onLoad={() => setLoaded(true) } layout="responsive" quality={80}
              />
            </div>
            {!selectedTitle
              ? null
              : <div className={isAuto === false ? 'rounded bg-white bg-opacity-80 lg:bg-opacity-100 w-11/12 lg:w-3/5 xl:w-5/12 h-fit absolute flex flex-col content-center justify-center top-5 lg:top-1/4 left-4p lg:left-32 p-5' : 'rounded bg-white bg-opacity-70 lg:bg-opacity-80 w-11/12 lg:w-fit xl:w-fit h-fit absolute flex flex-col content-center justify-center top-5 lg:top-1/4 left-4p lg:left-32 px-7 py-5' }>
              <h2 className={isAuto === false ? 'text-clamp-h2 font-bold text-center  md:text-start' : isAuto === true ? 'text-clamp-h2 font-bold text-center  md:text-start' : 'text-clamp-h2 font-bold text-center  md:text-start' }>{selectedTitle}</h2>
              <ReactMarkdown className="text-clamp-p3 text-center md:text-start">{selectedP}</ReactMarkdown>
              { selectedLink && selectedPButton ? <Link href={selectedLink}><p className="text-clamp-p3 rounded w-fit cursor-pointer p-3 bg-black text-white mt-4 mb-1 hover:bg-yellow-400 hover:text-black transition-all ease-in-out duration-300">{selectedPButton}</p></Link> : null }
            </div>
            }
            {
              props.showButtons && imgs.length > 1 && (
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
