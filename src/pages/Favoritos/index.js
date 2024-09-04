import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'components/contextos/Favoritos'


export default function Favoritos(){
    const {favorito} = useFavoritoContext()
    
    return(
        <>
        <Banner imagem={'Favoritos'}/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map(item => <Card {...item} key={item.id}/>)}
        </section>
        </>
    )
}