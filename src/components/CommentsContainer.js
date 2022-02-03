
import Comment from './Comment'

import { useState } from 'react'

function CommentsContainer({ comments }) {

    /* afterparty search functionality */
    const [search, setSearch] = useState('')
    const findUser = e => setSearch(e.target.value)
    const foundUsers = comments.filter(commentObj => {
        return commentObj.user.includes(search)
    })

    return (
        <div>
            <h2>{foundUsers.length} Comments</h2>
            Search: <input placeholder="potato" onChange={findUser}/>

            { foundUsers.map(commentObj => 
                <Comment key={commentObj.id} comment={commentObj} />) }

           
        </div>
    )
}

export default CommentsContainer