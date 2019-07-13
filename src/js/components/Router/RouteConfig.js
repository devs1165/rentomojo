import Layout from '../Layout';
import Home from '../Home';
import Blog from '../Blog';
import AllBlogs from '../AllBlogs'
const Routes = [
  	{
		path : "/",
		exact : false,
		component : Layout,
		routes : [
			{
                path: "/",
                exact: true,
                component: Home
			},
			{
                path: "/allposts/:id?",
                exact: false,
                component: AllBlogs
			},
			{
                path: "/posts/:id?",
                exact: false,
                component: Blog
			}
		]
	}
]

export default Routes;