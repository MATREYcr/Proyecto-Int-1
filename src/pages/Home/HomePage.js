import PageContact from "./Contact";
import "./styles/stylesPageHome.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage=()=>{
    
    return (
        // <div className="container-home">
        //     <img  className="img-home" src="https://www.xtrafondos.com/descargar.php?id=7745&resolucion=3840x2160" alt=""></img>
        //     <div className="container-eslogan">
        //         <p className="text-center">Salud Mental</p>
        //         <p className="eslogan">"Mente Sana - Cuerpo Sano"</p>
        //     </div>
            
        //     <div className="columns">
        //         <div className="column-1">
        //             <h1 className="title-columns">Depresion</h1>
        //             <p className="text-columns">La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento</p>
        //             <button type="button" class="btn btn-primary"><a href="/Depresion">Depresion</a></button>
        //         </div>
        //         <div className="column-2">
        //             <h1 className="title-columns">Ansiedad</h1>
        //             <p className="text-columns">La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés.</p>
        //             <button type="button" class="btn btn-primary">Ansiedad</button>
        //         </div>
        //         <div className="column-3">
        //             <h1 className="title-columns">Estres</h1>
        //             <p className="text-columns">La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento </p>
        //             <button type="button" class="btn btn-primary">Estres</button>
        //         </div>    
        //     </div>
        // </div>
        <>

            <header class="content header">
            <h2 class="title">Salud Mental</h2>
            <p className="eslogan">"Mente Sana - Cuerpo Sano"</p>

            <div class="btn-home">
                <a href="#" class="btn">Saber mas</a>
                <a href="#" class="btn">Saber mas</a>
            </div>
            </header>

            <section class="content sau">

            <h2 class="title">Productos</h2>
            <p>La salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida, desarrollar todas sus habilidades, poder aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad.</p>

            <div class="box-container">

                <div class="box">
                    <i class="fab fa-angular"></i>
                    <h3>Depresion</h3>
                    <p>labore molestias consectetur veniam</p>
                </div>
                <div class="box">
                    <i class="fab fa-apple"></i>
                    <h3>Ansiedad</h3>
                    <p>labore molestias consectetur veniam</p>
                </div>
                <div class="box">
                    <i class="fab fa-android"></i>
                    <h3>Estres</h3>
                    <p>labore molestias consectetur veniam</p>
                </div>

            </div>

            </section>

            {/* <section class="content about">

            <h2 class="title">Nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ut soluta similique 
                quia reprehenderit eligendi aliquam. Sit 
                odio impedit quibusdam. Velit corporis, 
                optio debitis quidem ex ipsam rerum dolorem autem sequi.
            </p>

            <a href="#" class="btn">Saber mas</a>


            </section> */}

            <section class="content price">

            <article class="contain">
                <h2 class="title">¿Quienes somos?</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ut soluta similique 
                    quia reprehenderit eligendi aliquam. Sit 
                    odio impedit quibusdam. Velit corporis, 
                    optio debitis quidem ex ipsam rerum dolorem autem sequi.
                </p>

                <a href="#" class="btn">Saber precio</a>

            </article>

            </section>

            <section>
                <PageContact></PageContact>
            </section>
        </>
    )
        
}
export default HomePage;