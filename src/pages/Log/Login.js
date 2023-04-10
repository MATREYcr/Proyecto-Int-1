
import './styles/stylespage.css';
// import './styles/stylesLogin.css';
const LoginPage =()=>{
    return(
        <div class="contenedor-formulario contenedor">
        <div class="imagen-formulario">
            
        </div>

        <form class="formulario">
            <div class="texto-formulario">
                <h2>Bienvenido de nuevo</h2>
                <p>Inicia sesión con tu cuenta</p>
            </div>
            <div class="input">
                <label for="usuario">Usuario</label>
                <input placeholder="Ingresa tu nombre" type="text" id="usuario"/>
            </div>
            <div class="input">
                <label for="contraseña">Contraseña</label>
                <input placeholder="Ingresa tu contraseña" type="password" id="contraseña"/>
            </div>
            <div class="password-olvidada">
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="input">
                <input type="submit" value="Login"/>
            </div>
        </form>
    </div>
    );

}

export default LoginPage;