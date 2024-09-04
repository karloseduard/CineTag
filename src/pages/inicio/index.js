import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";
export default function Inicio (){
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/karloseduard/cinetag-api/videos').then(resp => resp.json()).then(dados => {setVideos(dados)} )
       },[])
    
    return(
        <>
        
        <Banner imagem='Home'/>
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
        {videos.map(video => <Card key={video.id} {...video}/>)}

        </section>
        
       
        </>
        
    )
}