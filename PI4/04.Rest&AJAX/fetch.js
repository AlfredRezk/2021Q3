fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example")
  .then((res) => res.blob())
  .then((data) => {
    console.log(URL.createObjectURL(data))
  })
	.catch((err) => console.log(err));
