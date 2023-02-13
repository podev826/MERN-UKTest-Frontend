import { useState } from "react"
import { useParams } from "react-router-dom"
import { saveComment } from "../services/commentService";

export default function CommentBox(props) {
    const [replyForm, setReplyForm] = useState(null)
    const params = useParams()
    const comment = props.comment
    const submit = e => {
        e.preventDefault();

        doSubmit({
            test: params.testNum, 
            parent: comment._id,
            name: e.target.name.value,
            email: e.target.email.value,
            comment: e.target.comment.value,
         })
        // TODO: create comment
    }

    const doSubmit =  async (formdata) => {
        await saveComment(formdata);
        props.fetchOnLoad()
        hideReplyForm()
    };
    const id = comment.name + Number(new Date())
    const showReplyForm = () => {
        setReplyForm(<form className="flex flex-col" onSubmit={submit}>
            <span className="text-lg font-bold my-4">{`Reply to ${comment.name} - `} <a onClick={hideReplyForm}>Cancel Reply</a></span>
            <textarea className="w-full border mb-4 p-2" required rows={4} placeholder="Comment..." name="comment"></textarea>
            <div className="flex justify-start">
                <input name="name" className="min-w-20 border p-2 mr-4" type="text" required placeholder="Name (requried)"/>
                <input name="email" className="min-w-20 border p-2" type="email" required placeholder="Email (requried)"/>
            </div>
            <div className="content-center">
                <input id={`saveCredential${id}`} name="saveCredential border" type="checkbox" style={{position:"relative", opacity:1}}/>
                <label htmlFor={`saveCredential${id}`}> Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button type="submit" className="uppercase w-fit text-lg font-bold bg-[#A8DADC] text-white 
            block rounded-full px-4 py-2 my-4">post comment</button>
        </form>)
    }
    const hideReplyForm = () => {
        setReplyForm(null)
    }
    const hasChildren = comment.children && comment.children.length > 0

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className={`flex ${!hasChildren && "border-b"} my-2`}>
                    <div><img src="/images/commentAvatar.jpg" style={{ minWidth: 50 }} /></div>
                    <div className="flex flex-col pl-2">
                        <div className="mb-3 flex">
                            <b>{comment.name}</b> &nbsp;
                            <span>{comment.createdAt} - </span>
                            <a onClick={showReplyForm}>Reply</a>
                        </div>
                        <div className="mb-3 flex">
                            <p>{comment.comment}</p>
                        </div>
                        <div className="replyForm">{replyForm}</div>
                        {hasChildren && comment.children.map((item, index) =>
                            <CommentBox key={index} comment={item} fetchOnLoad={props.fetchOnLoad}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}