import React from 'react';
import { fetchPostById,commentPostById, deletePostById } from '../actions/blogAction'
import connect from 'redux-connect-decorator';

@connect((store) => {
    return {
        posts: store.blog.posts,
        comments:store.blog.comments,
        delete:store.blog.delete
    }
})
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comment:[],
            commentDisp:false,
            commentLable:'show comments'
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchPostById(this.props.match.url))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.posts !== nextProps.posts) {
            this.setState({
                post: nextProps.posts,
            })
        }
        if(this.props.comments!== nextProps.comments){
            this.setState({
                comment:nextProps.comments
            })
        }
        if(this.props.delete!== nextProps.delete){
            alert('post deleted successfully')
        }
    }
    
    deletePost(){
        this.props.dispatch(deletePostById('/posts/'+this.state.post.id))
    }

    getAllComments(){
        if(this.state.commentDisp){
            this.setState({
                commentDisp:false,
                commentLable:'show comments'
            })
        }
        else{
            this.props.dispatch(commentPostById(this.props.match.url))
            this.setState({
                commentDisp:true,
                commentLable:'hide comments'
            })
        }
    }
    render() {
        const comment_table=(
            <div className='col-12'>
                {
                    this.state.comment.map((v,i)=>{
                        return(
                            <div key={'i_'+i} className='my-3 p-3 commnet-wrapper'>
                                <div className=''>{v.body}</div>
                                <p className='comment-name mt-2'>{v.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
        return (
            <React.Fragment>
                <div className='my-2 container'>
                    <div className='text-right'>
                        <input type="button" className='delete-button' value='delete' onClick={this.deletePost.bind(this)}/>

                    </div>
                    <div>
                        <h2 className='post-heading'>{this.state.post.title}</h2>
                        <p className='post-body'>{this.state.post.body}</p>
                    </div>
                    <div>
                        <div className='hide-show-comment' onClick={this.getAllComments.bind(this)}>{this.state.commentLable}</div>
                        {
                            (this.state.commentDisp)? comment_table:null
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}