import Banner from "components/Banner"
import styles from "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom"
import NaoEncontrada from "pages/NaoEncontrada"
import { useEffect, useState } from "react"

export default function Player(){
    const [videos, setVideos] = useState([])
    const parametros = useParams()
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/karloseduard/cinetag-api/videos?id=${(parametros.id)}`).then(resp => resp.json()).then(dados =>{
            setVideos(...dados)
        } )
    },[parametros])
    
    if(!videos){
        return <NaoEncontrada/>
    }
    
    return(
        <>
        <Banner imagem='Player'/>
        <Titulo>
            <h1>
            Player
            </h1>
        </Titulo>
        <section className={styles.container}>
        <iframe
        width="100%"
        height="100%"
        
        src={videos.link}
        title={videos.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        
        </section>
        </>
        
    )
}