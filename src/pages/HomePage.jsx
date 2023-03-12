import "./styles/stylesPageHome.css";
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
                    <h1 className="title-columns">Pacientes</h1>
                    <p className="text-columns">El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal.</p>
                </div>
                <div className="column-2">
                    <h1 className="title-columns">Medicos</h1>
                    <p className="text-columns">El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal.</p>
                </div>
                <div className="column-3">
                    <h1 className="title-columns">Medicamentos</h1>
                    <p className="text-columns">El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal.</p>
                </div>    
            </div>
        </div>
    )
        
}
export default HomePage;