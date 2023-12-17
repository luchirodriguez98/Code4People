import { NavLink } from 'react-router-dom'
import styles from './ListaProyecto.module.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './ListaProyectos.css'

function ListaProyectos ({ toMap }) {
  return (
    <div className={styles.proyectoList}>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
          </SwiperSlide>
        )
      })}
      </Swiper>
      </div>
  )
}

export { ListaProyectos }
