import React from 'react';
import Comment from '../Comment Components/Comment'

export default function CommentContainer(props) {
    
    let displayComments = props.comments.map( (comment) => {
        return (
           <Comment key={comment.id} comment={comment} />
        )
    })

    return (
        <section className='commentcontainer-container'>
            {displayComments}
        </section>
    )
}
