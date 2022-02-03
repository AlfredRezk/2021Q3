const jwt = require('jsonwebtoken');


exports.isAuth = (req, res, next)=> { 

  // Authorization : Bearer fasfdfesdfsfgsdgsdgsdsdgsdgdvzcvvdvsd

  const authHeader = req.get('Authorization');

  if (!authHeader) { 
    const error = new Error('Not authenticated')
    error.statusCode = 401; 
    throw error;
  }

  // extract the token; 
  const token = authHeader.split(' ')[1]

  // verify the token => secret 
  let decodedToken; 

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) { 
    err.statusCode = 500;
    throw err; 
  }


  if (!decodedToken) { 
    const error = new Error('Not authenticated')
    error.statusCode = 401; 
    throw error;
  }

  req.userId = decodedToken.userId; 
  next();
}