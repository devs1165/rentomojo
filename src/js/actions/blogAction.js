export function fetchUsers(){
    return function(dispatch){
        var url = 'https://jsonplaceholder.typicode.com/users';
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
        		dispatch({
					type : "USERS",
					payload : resp
				})
			}
		}
        xhttp.open("GET", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(null)
    }
}

export function fetchAllPostByUserId(userId,page){
    return function(dispatch){
        var url = 'https://jsonplaceholder.typicode.com/posts?userId='+userId+'&skip=0&limit=10';
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
                dispatch({
					type : "ALL_POST",
					payload : resp
				})
			}
		}
        xhttp.open("GET", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(null)
    }
}


export function fetchPostById(id){
    return function(dispatch){
        var url = 'https://jsonplaceholder.typicode.com'+id;
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
        		dispatch({
					type : "POST",
					payload : resp
				})
			}
		}
        xhttp.open("GET", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(null)
    }
}

export function commentPostById(id){
    return function(dispatch){
        var url = 'https://jsonplaceholder.typicode.com'+id+'/comments';
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
        		dispatch({
					type : "COMMENTS",
					payload : resp
				})
			}
		}
        xhttp.open("GET", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(null)
    }
}

export function deletePostById(id){
    return function(dispatch){
        var url = 'https://jsonplaceholder.typicode.com'+id;
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
        		dispatch({
					type : "DELETE",
					payload : resp
				})
			}
		}
        xhttp.open("DELETE", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(null)
    }
}

