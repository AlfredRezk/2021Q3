export const getPosts = async (applyFunc) => {
  const url = "http://localhost:8080/api/origami";
  const res = await fetch(url);
  res.json().then(posts => {
    applyFunc([...posts])
  }) 
}

export const login = async (username, password, applyFunc) => { 
  const url = "http://localhost:8080/api/user/login";
  const body = JSON.stringify({ username, password })
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(url, { method: 'POST', body, headers });
  if (res.ok) {
    const result = await res.json();
    localStorage.setItem("userData", JSON.stringify({ token: result.token, id: result.user._id, username: result.user.username }));
    applyFunc(true); 

  } else { 
    applyFunc(false)

  }
 
}

export const addPost = async (description) => { 
  const { id, token } = JSON.parse(localStorage.getItem("userData"))
  const url = "http://localhost:8080/api/origami";
  const body = JSON.stringify({description , author: id});
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
	const res = await fetch(url, { method: "POST", body, headers });
  const result = await res.json();
  return result;
}

export const register = async (username, password) => { 
  const url = 'http://localhost:8080/api/user/register'; 
  const body = JSON.stringify({ username, password });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
}

export const logout = async () => { 
  const url = "http://localhost:8080/api/user/logout";
  const { id, token } = JSON.parse(localStorage.getItem("userData"));
  const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
  };
  const res = await fetch(url, { method: "POST", body: '', headers });
	const result = await res.json();
  localStorage.removeItem("userData");
  return result;
  
}

