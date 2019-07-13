import React from 'react';
import { fetchAllPostByUserId } from '../actions/blogAction'
import connect from 'redux-connect-decorator';

@connect((store) => {
    return {
        allposts: store.blog.allposts
    }
})
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allpost: []
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchAllPostByUserId(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.allposts !== nextProps.allposts) {
            this.setState({
                allpost: nextProps.allposts
            })
        }
    }

    route(id) {
        var url = "/posts/" + id
        this.props.history.push({
            pathname: url
        })
    }

    render() {
        return (
            <div className='my-2 container'>
                {
                    this.state.allpost.map((v, i) => {
                        return (
                            <div className='my-3 p-3 all-post-list' key={'ind_' + i} onClick={this.route.bind(this, v.id)}>
                                <h3 className='post-heading'>{v.title}</h3>
                                <h6 className='post-body'>{v.body}</h6>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}