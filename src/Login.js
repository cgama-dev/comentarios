import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render() {

        const errorMensages = {
            'auth/wrong-password': 'Error de Autenticação: Email e/ou Senha incorretos',
            'auth/user-not-found': 'Error de Autenticação: Usuário não encontrado',
            'auth/invalid-email': 'Error de Autenticação: Email Inválido'
        }

        return (
            <div>
                <h4> Entre para comentar</h4>
                <form className="form-inline">
                    <input type="text" className="form-control mr-1" onChange={this.handleChange('email')} placeholder="Infome sua email" />
                    <input type="password" className="form-control mr-1" onChange={this.handleChange('passwd')} placeholder="Informe sua senha" />
                    <button type="button" className="btn btn-primary mr-1" onClick={this.login}>Entrar</button>
                    <button type="button" className="btn mr-2" onClick={() => this.props.changeScreen('signup')}> Criar Contas</button>
                </form>
                {
                    this.props.isAuthError &&
                    <div className="card text-white bg-danger mt-3">
                        <div className="card card-header">Error ao entrar </div>
                        <div className="card-body">
                            {errorMensages[this.props.authError]}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Login
