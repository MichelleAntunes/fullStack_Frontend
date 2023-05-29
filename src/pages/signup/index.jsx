import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useToast } from "../../hooks/useToast";
import { useRequestData } from "../../hooks/useRequestData";
import { useContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loading from "../../assets/loading.svg";
import { getMessageErrorToastSignup } from "../../utils/ReturnMessageToast";
import { goToPosts } from "../../routes/coordinator";
import { UserContext } from "../../contexts/UserContext";

export default function SignupPage() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(UserContext);
  const { isLoading, requestData } = useRequestData();
  const { errorToast, Toast } = useToast();

  useEffect(() => {
    if (token) {
      goToPosts(navigate);
    }
  }, [token, navigate]);

  const [form, onChangeInputs, clearInputs] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState("password");
  const handleShowPassword = (type) => {
    setShowPassword(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await requestData(
      "https://fullstackproject-ilt9.onrender.com/users/signup",
      "POST",
      form
    );

    if (response.status === 200) {
      clearInputs();
      setToken(response.data.token);
      goToPosts(navigate);
    } else {
      errorToast(getMessageErrorToastSignup(response.data.message));
    }
  };

  return (
    <>
      <Header />
      <main className="flex min-h-full flex-col justify-start pt-10 px-8 gap-[194px] sm:gap-24">
        <div className="flex justify-center items-center flex-col">
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
        </div>

        <div className="flex items-center flex-col w-full">
          <form className="form" onSubmit={handleSubmit}>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={onChangeInputs}
              autoComplete="username"
              placeholder="Username"
              required
              className="input"
            />
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChangeInputs}
              autoComplete="email"
              placeholder="Email"
              required
              className="input"
            />
            <input
              id="password"
              name="password"
              type={showPassword}
              value={form.password}
              onChange={onChangeInputs}
              autoComplete="current-password"
              placeholder="Senha"
              required
              className="input"
            />
            {showPassword === "password" ? (
              <AiOutlineEye
                className="absolute text-gray-900 right-4 mt-[150px] sm:mt-[167px]"
                onClick={() => handleShowPassword("text")}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute text-gray-900 right-4 mt-[150px] sm:mt-[167px]"
                onClick={() => handleShowPassword("password")}
              />
            )}
            <div className="w-full h-full flex flex-col items-center gap-7 pt-14">
              <fieldset className="text-sm text-gray-900 font-['Noto_Sans']">
                <div className="flex flex-col gap-5">
                  <legend className="font-medium ">
                    Ao continuar, você concorda com o nosso{" "}
                    <a href="#" className="text-blue-button">
                      Contrato de usuário
                    </a>{" "}
                    e nossa{" "}
                    <a href="#" className="text-blue-button">
                      Política de Privacidade
                    </a>
                  </legend>
                  <div className="flex gap-3 items-center">
                    <input
                      id="consentment"
                      name="consentment"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-light-gray text-dark-orange-labeddit focus:ring-light-orange-labeddit"
                    />

                    <label htmlFor="consentment" className="font-normal">
                      Eu concordo em receber emails sobre coisas legais no
                      Labeddit
                    </label>
                  </div>
                </div>
              </fieldset>

              <button type="submit" className="button">
                {!isLoading ? (
                  "Cadastrar"
                ) : (
                  <img
                    src={loading}
                    alt="Carregando sua requisição"
                    className="inline w-6 h-6 mr-3 animate-spin"
                  />
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Toast />
    </>
  );
}
