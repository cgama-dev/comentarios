
import React from 'react'

const User = props => {
    return (
        <div>
            <button type='button' className="btn btn-danger " onClick={props.logout}> Sair </button>
            <div className="card text-white bg-primary mt-2">
                <div className="card-body">
                    Usuário Logado com : {props.email}
                </div>
            </div>

        </div>
    )
}

export default User