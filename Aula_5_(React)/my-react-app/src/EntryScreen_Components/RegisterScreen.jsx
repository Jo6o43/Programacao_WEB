import React from 'react';
import userIcon from './assets/user_icon.png';
import passwordIcon from './assets/password_icon.png';
import './EntryScreen.css';

function EntryScreen() {
    return (
        <form>
            {/* header for login */}
            <h1>Registre-se</h1>

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

            {/* textBox for confirm password */}
            <div class="inputBox">
                <input type="password" placeholder="Confirmar Palavra-Passe" required />
                <img class="icon" src={passwordIcon} />
            </div>

            {/* link to forgot password */}
            <p>Já tenho uma conta, <a href="#" onClick={() => regist = true}>entrar</a>.</p>

            {/* button to login */}
            <input type="submit" value="Registrar Conta" />

        </form>
    );
}

export default EntryScreen;