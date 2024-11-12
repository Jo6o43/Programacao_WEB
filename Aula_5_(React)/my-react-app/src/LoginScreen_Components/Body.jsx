import userIcon from './assets/user_icon.png';
import passwordIcon from './assets/password_icon.png';

function Body() {

    {/*if regist is true, formName is "Registar", else formName is "Entrar" */ }
    let regist = false;
    let formName = regist ? "Registar" : "Entrar";

    return (
        <form>
            {/* header for login */}
            <h1>{formName}</h1>

            {/* textBox for username */}
            <div class="inputBox">
                <input type="text" placeholder="Nome de Usuário" required />
                <img class="icon" src={userIcon} />
            </div>

            {/* textBox for password */}
            <div class="inputBox">
                <input type="password" placeholder="Palavra-Passe" required />
                <img class="icon" src={passwordIcon} />
            </div>

            {/* link to forgot password */}
            <a href="">Esqueci-me da Palavra-Passe</a>

            {/* button to login */}
            <input type="submit" value="Entrar" />

            {/* link to create account */}
            <div>
                <p>Não tens uma conta, <a href="#" onClick={() => regist = true}>clica aqui</a>.</p>
            </div>

        </form>
    );
}

export default Body;