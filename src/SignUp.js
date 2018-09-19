import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }

    render() {

        const errorMensages = {
            'auth/email-already-in-use': 'Esse E-mail já foi utilizado',
            'auth/weak-password': 'Senha muito fraca',
            'auth/invalid-email': 'E-mail invállido'
        }

        return (
            <div>
                <h4> Criar conta</h4>
                <form className="form-inline">
                    <input type="text" className="form-control mr1" onChange={this.handleChange('email')} placeholder="Infome sua email" />
                    <input type="password" className="form-control mr1" onChange={this.handleChange('passwd')} placeholder="Informe sua senha" />
                    <button type="button" className="btn btn-primary mr-1" onClick={this.createAccount}>Cadastrar</button>
                    <button type="button" className="btn" onClick={() => this.props.changeScreen('login')}> Já tenho uma conta, entrar</button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div className="card text-white bg-danger mt-3">
                        <div className="card card-header">Error ao criar nova conta </div>
                        <div className="card-body">
                            {errorMensages[this.props.signUpError]}
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default SignUp