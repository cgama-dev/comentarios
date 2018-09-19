import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import Login from './Login'
import SignUp from './SignUp'
import User from './User'
import 'bootstrap-css-only'

class App extends Component {

    state = {
        'comments': {},
        'isLoading': false,
        'isAuth': false,
        'isAuthError': false,
        'isSignError': false,
        'signUpError': '',
        'isError': '',
        'user': {},
        'userScreen': 'login' //Login or Cadastro
    }

    insertComments = (newComments) => {
        const { database } = this.props
        const id = database.ref().child('comments').push().key;
        const comments = {}

        comments['comments/' + id] = {
            comment: newComments,
            email: this.state.user.email,
            userid: this.state.user.uid
        }

        database.ref().update(comments)

    }

    componentDidMount() {
        const { database, auth } = this.props
        this.comments = database.ref('comments')
        this.setState({ isLoading: true })
        this.comments.on('value', snapshot => {
            this.setState({
                comments: snapshot.val()
            })
            this.setState({ isLoading: false })
        })

        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isAuth: true,
                    user
                })
            } else {
                this.setState({
                    isAuth: false,
                    user: {}
                })
            }
        })

    }
    /*Login*/
    login = async (email, password) => {
        const { auth } = this.props
        try {
            this.setState({
                'isAuthError': false,
                'isError': ''
            })
            await auth.signInWithEmailAndPassword(email, password)
        } catch (err) {
            this.setState({
                'isAuthError': true,
                'isError': err.code
            })
        }

    }

    /*Logout*/
    logout = () => {
        const { auth } = this.props
        auth.signOut()
    }

    /*Create Account*/
    createAccount = async (email, password) => {
        const { auth } = this.props

        this.setState({
            'isSignUpError': false,
            'signUpError': ''
        })
        try {
            await auth.createUserWithEmailAndPassword(email, password)
        } catch (err) {
            this.setState({
                'isSignUpError': true,
                'signUpError': err.code
            })
        }
    }

    changeScreen = (screen) => {
        this.setState({
            userScreen: screen
        })
    }

    /*Render*/
    render() {
        return (
            <div className="container mt-3">

                {
                    this.state.isAuth && <User email={this.state.user.email} logout={this.logout} />
                }
                {
                    !this.state.isAuth && this.state.userScreen === 'login' &&
                    <Login login={this.login} isAuthError={this.state.isAuthError} authError={this.state.isError} changeScreen={this.changeScreen} />
                }
                {
                    !this.state.isAuth && this.state.userScreen === 'signup' &&
                    <SignUp createAccount={this.createAccount} isSignUpError={this.state.isSignUpError} signUpError={this.state.signUpError} changeScreen={this.changeScreen} />
                }
                {this.state.isAuth && <NewComment insertComments={this.insertComments} />}

                <br />
                {
                    this.state.comments && <Comments comments={this.state.comments} />
                }
                {
                    !this.state.comments &&
                    <div className="card card-warning">
                        <div className="card-body">
                            Não existe comentários cadastrados
                         </div>
                    </div>
                }
                {
                    this.state.isLoading && <div><p>Carregado Comentários...</p></div>
                }
            </div>
        );
    }
}

export default App;
