import React from 'react'

const Comment = ({ comment }) => {
    let c = 'vazio'
    let email = 'email vazio'
    if (comment) {
        if (comment.comment) {
            c = comment.comment
        }
        if (comment.email) {
            email = comment.email
        }

    }
    return (
        <div className="card mt-2">
            <div className="card-body">
                {c}
                <br />
                <span className="text-muted"> Enviado por : {email} </span>
            </div>
        </div>
    )
}

export default Comment