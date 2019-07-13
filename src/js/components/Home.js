import React from 'react'
import './css/home.css'
import connect from 'redux-connect-decorator';
import { fetchUsers } from '../actions/blogAction'

@connect((store) => {
    return {
        users: store.blog.users
    }
})
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.users !== nextProps.users) {
            this.setState({
                users: nextProps.users
            })
        }
    }

    route(id) {
        var url = "/allposts/" + id

        this.props.history.push({
            pathname: url
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        {
                            this.state.users.map((v, i) => {
                                return (
                                    <div key={'ind_' + i} className='col-4 users-container'
                                        onClick={this.route.bind(this, v.id)}>
                                        <div className='p-4 my-3 users-wrapper'>
                                            <h2 className='post-heading'>{v.name}</h2>
                                            <h5 className='post-body'>{v.email}</h5>
                                            <h4 className='comment-name'>http://{v.website}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}