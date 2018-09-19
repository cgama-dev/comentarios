import React from 'react'
import Comment from './Comment'

const Comments = ({ comments }) => {

    return (
        <div>
            <div>
                {/*Lista de comentarios*/}
                {
                    Object.keys(comments).map(key =>
                        <Comment key={key} comment={comments[key]} />
                    )
                }
            </div>
        </div>
    )
}

export default Comments