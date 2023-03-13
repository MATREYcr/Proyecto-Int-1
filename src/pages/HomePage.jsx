import "./styles/stylesPageHome.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage=()=>{
    
    return (
        <div className="container-home">
            <img  className="img-home" src="https://www.xtrafondos.com/descargar.php?id=7745&resolucion=3840x2160" alt=""></img>
            <div className="container-eslogan">
                <p className="text-center">Salud Mental</p>
                <p className="eslogan">"Mente Sana - Cuerpo Sano"</p>
            </div>
            
            <div className="columns">
                <div className="column-1">
                    <h1 className="title-columns">Depresion</h1>
                    <p className="text-columns">La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento</p>
                    <button type="button" class="btn btn-primary">Depresion</button>
                </div>
                <div className="column-2">
                    <h1 className="title-columns">Ansiedad</h1>
                    <p className="text-columns">La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés.</p>
                    <button type="button" class="btn btn-primary">Ansiedad</button>
                </div>
                <div className="column-3">
                    <h1 className="title-columns">Estres</h1>
                    <p className="text-columns">La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento </p>
                    <button type="button" class="btn btn-primary">Estres</button>
                </div>    
            </div>
        </div>
    )
        
}
export default HomePage;