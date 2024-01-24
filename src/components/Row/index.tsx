import Card from 'components/Card'
import { IAnimes } from 'types/anime'
import styles from './Row.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
  animes: IAnimes[]
  setMinhaLista?: React.Dispatch<React.SetStateAction<IAnimes[] | []>>
  minhaLista?: IAnimes[] | []
  lista?: boolean
}

export default function Row({ animes, setMinhaLista, minhaLista, lista }: Props) {
  const responsive = {
    desktoplarge: {
      breakpoint: { max: 3000, min: 1680 },
      items: 8,
      slidesToSlide: 8 // optional, default to 1.
    },
    desktopmedium: {
      breakpoint: { max: 1680, min: 1440 },
      items: 7,
      slidesToSlide: 7 // optional, default to 1.
    },
    desktopsmall: {
      breakpoint: { max: 1440, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    }
  };

  return (
      <section className={styles.row} id="width">
          {animes.length > 1 ? (
            <Carousel
              containerClass={styles.container}
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              customTransition="all .5s"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              sliderClass={styles.slider}
            >
              {animes.map(anime =>
                <Card
                  key={anime.id}
                  anime={anime}
                  setMinhaLista={setMinhaLista}
                  minhaLista={minhaLista}
                />
              )}
            </Carousel>
            ) : (
            <div className={styles.row__empty}>
              {lista ? 'Parece que você ainda não adicionou nenhum anime na sua lista!' : 'Loading'}
            </div>
          )}
      </section>
  )
}
