const Login = () => {
  return (
    <div className="mx-auto max-w-[1366px]">
      <div className="bg-gradient-to-t from-purple-950 to-purple-500 w-[300px] pt-1 pb-10 mx-auto mt-12 rounded-md">
        <h1 className="text-3xl font-semibold text-center mt-12">
          Faça seu login
        </h1>
        <form className="flex flex-col items-center justify-center mt-10 gap-5 w-[250px] mx-auto">
          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="name">
              Nome de usuário
            </label>
            <input
              className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="senha">
              Senha
            </label>
            <input
              className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring focus:border-blue-500 "
              type="password"
              placeholder="Digite sua senha"
              id="senha"
            />
          </div>
          <a className="ml-auto text-xs cursor-pointer" href="#">
            Esqueci minha senha
          </a>
          <button className="bg-gradient-to-r from-purple-700 to-blue-500 hover:bg-gradient-to-r hover:from-purple-950 hover:to-blue-700 text-white px-4 py-2 rounded w-full">
            Entrar
          </button>
          <a className="text-xs cursor-pointer underline" href="#">
            Ainda não tenho uma conta
          </a>
        </form>
      </div>
    </div>
  );
};
export default Login;
