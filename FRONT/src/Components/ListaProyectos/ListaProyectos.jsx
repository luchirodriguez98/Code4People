import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import styles from './ListaProyecto.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './ListaProyectos.css'

SwiperCore.use([EffectCoverflow, Pagination, Navigation])

function ListaProyectos ({ toMap }) {
  const swiperParams = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    modules: [EffectCoverflow, Pagination, Navigation],
    className: styles.mySwiper
  }
  return (
    <div className={styles.proyectoList}>
    <Swiper
        {...swiperParams}
        className={styles.mySwiper}
      >
      {toMap.map(item => {
        return (
          <SwiperSlide key ={item.id_proyecto} className={styles.proyectoItem}>
            <div className={styles.text}>
              <p>{item.titulo}</p>
              <p>{item.url}</p>
            </div>
            {item.url
              ? <NavLink to={item.url} state={item} target='_blank'>
                  <ChevronDownIcon className={styles.icon}/>
                </NavLink>
              : <NavLink to={`/proyectos/disponibles/${item.id_proyecto}`} state={item} >
                  <ChevronDownIcon className={styles.icon}/>
                </NavLink>
            }
            {item.url_imagen &&
              <div className={styles.imageContainer}>
                <img src={item.url_imagen} className={styles.image}></img>
              </div>
            }
          </SwiperSlide>
        )
      })}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      </Swiper>
      </div>
  )
}

export { ListaProyectos }
