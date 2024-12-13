const Login = () =>{
    return(
        <div className="flex h-[calc(50vh-100px)] items-center justify-center">
            <form onSubmit={()=>{
                alert("registrado")
            }}>
                <label className="text-xl">Login</label>
                <input type="text" placeholder="correo" 
                className="w-full bg-pink-50 text-white px-4 py-2 rounded-md my-2"/>
                <input type="password" placeholder="contraseña"
                className="w-full bg-pink-50 text-white px-4 py-2 rounded-md my-2"/>
                <button 
                 className="bg-blue-300 px-3 py-2 rounded-md"
                type="submit">ingresar</button>
            </form>
        </div>
    )
}

export default Login