import { useState } from "react"

const CommentBox = ({ comment }) => {
    const [replyForm, setReplyForm] = useState(null)
    const showReplyForm = () => {
        setReplyForm(<div className="flex flex-col">
            <span className="text-lg font-bold my-4">{`Reply to ${comment.name} - `} <a onClick={hideReplyForm}>Cancel Reply</a></span>
        </div>)
    }
    const hideReplyForm = () => {
        setReplyForm(null)
    }
    const hasChildren = comment.comments && comment.comments.length > 0
    console.log('test', comment)
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className={`flex ${!hasChildren && "border-b"} my-2`}>
                    <div><img src="/images/commentAvatar.jpg" style={{ minWidth: 50 }} /></div>
                    <div className="flex flex-col pl-2">
                        <div className="mb-3 flex">
                            <b>{comment.name}</b> &nbsp;
                            <span>{comment.date} - </span>
                            <a onClick={showReplyForm}>Reply</a>
                        </div>
                        <div className="mb-3 flex">
                            <p>{comment.content}</p>
                        </div>
                        <div className="replyForm">{replyForm}</div>
                        {hasChildren && comment.comments.map(item =>
                            <CommentBox comment={item} />
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommentBox