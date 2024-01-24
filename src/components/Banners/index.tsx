import { IBanners } from 'pages/Home'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Banner from './Banner'
import styles from './Banner.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";


interface Props {
  imageBanners: IBanners[]
}

export default function Banners( { imageBanners }: Props) {

  return (
    <div className={styles.banners}>
      <Carousel showArrows autoPlay infiniteLoop>
        {imageBanners.map(banner => (
          <Banner 
            key={banner.id}
            {...banner}
          />
        ))}
      </Carousel>
    </div>
  )
}
