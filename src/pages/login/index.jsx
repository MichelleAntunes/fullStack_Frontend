import { useForm } from "../../hooks/useForm";
import labeddit_logo from "../../assets/labeddit_logo.svg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRequestData } from "../../hooks/useRequestData";
import { useToast } from "../../hooks/useToast";
import Cookies from "universal-cookie";
import loading from "../../assets/loading.svg";
import { getMessageErrorToastLogin } from "../../utils/ReturnMessageToast";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

export default function LoginPage() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { isLoading, requestData } = useRequestData();
  const { errorToast, Toast } = useToast();
  const { token, setToken } = useContext(UserContext);

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await requestData("users/login", "POST", undefined, form);

    if (response.data.token) {
      clearInputs();
      cookies.set("labedditUserToken", response.data.token, { path: "/" });
      setToken(response.data.token);
      navigate("/posts");
    } else {
      errorToast(getMessageErrorToastLogin(response.data));
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/posts");
    }
  }, [navigate, token]);

  return (
    <>
      <main className="flex min-h-full flex-col justify-center px-8 gap-24">
        <div className="flex justify-center items-center flex-col">
          <img
            className="mx-auto w-auto"
            src={labeddit_logo}
            alt="Logo da rede social Labeddit"
          />
          <p className="font-light text-center">
            O projeto de rede social da Labenu
          </p>
        </div>

        <div className="flex items-center flex-col w-full">
          <form className="form" onSubmit={handleSubmit}>
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
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={onChangeInputs}
              autoComplete="current-password"
              placeholder="Senha"
              required
              className="input"
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="absolute text-gray-900 right-4 mt-[85px] sm:mt-[93px]"
                onClick={handleShowPassword}
              />
            ) : (
              <AiOutlineEye
                className="absolute text-gray-900 right-4 mt-[85px] sm:mt-[93px]"
                onClick={handleShowPassword}
              />
            )}
            <div className="w-full h-full flex flex-col items-center gap-4 pt-14">
              <button type="submit" className="button">
                {!isLoading ? (
                  "Continuar"
                ) : (
                  <img
                    src={loading}
                    alt="Carregando sua requisição"
                    className="inline w-6 h-6 mr-3 animate-spin"
                  />
                )}
              </button>
              <hr className="hr" />
              <button
                type="button"
                className="button-outline"
                onClick={() => navigate("/signup")}
              >
                Crie uma conta!
              </button>
            </div>
          </form>
        </div>
      </main>
      <Toast />
    </>
  );
}
