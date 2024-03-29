"use client";

import { useCallback, useState } from "react";
import axios from "axios";

import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Input from "../components/Input";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BASE_URL } from "../../../lib/fetcher";

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";

const Auth = () => {
  const { status } = useSession();
  const { push } = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  {
    status === "authenticated" && push("/profiles");
  }

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    if (!email || !password) return alert("Preencha todos os campos...");
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      if (!name || !email || !password)
        return alert(
          "Preencha todos os campos para registrar uma nova conta..."
        );

      try {
        await axios.post(`${BASE_URL}/api/register`, {
          email,
          name,
          password,
        });
        login();
      } catch (error) {
        console.log(error);
      }
    },
    [email, name, password, login]
  );

  return (
    <>
      {status === "unauthenticated" && (
        <div className="relative h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
          <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-6">
              <Image src={Logo} alt="Logo" height={48} draggable={false} />
            </nav>

            <div className="flex justify-center">
              <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">
                  {variant === "login" ? "Entrar" : "Registrar"}
                </h2>

                <form className="flex flex-col gap-4">
                  {variant === "register" && (
                    <Input
                      label="Nome"
                      onChange={({ target }) => setName(target.value)}
                      id="name"
                      value={name}
                    />
                  )}
                  <Input
                    label="Email"
                    onChange={({ target }) => setEmail(target.value)}
                    id="email"
                    type="email"
                    value={email}
                  />
                  <Input
                    label="Senha"
                    onChange={({ target }) => setPassword(target.value)}
                    id="password"
                    type="password"
                    value={password}
                  />
                </form>

                <button
                  type="button"
                  onClick={variant === "login" ? login : register}
                  className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition font-bold"
                >
                  {variant === "login" ? "Entrar" : "Registrar"}
                </button>

                <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                  <div
                    onClick={() =>
                      signIn("google", { callbackUrl: "/profiles" })
                    }
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                  >
                    <FcGoogle size={30} />
                  </div>

                  <div
                    onClick={() =>
                      signIn("github", { callbackUrl: "/profiles" })
                    }
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                  >
                    <FaGithub size={30} />
                  </div>
                </div>

                <p className="text-neutral-500 mt-12">
                  {variant === "login"
                    ? "Novo por aqui?"
                    : "Já possui uma conta?"}

                  <span
                    onClick={toggleVariant}
                    className="text-white ml-1 hover:underline cursor-pointer"
                  >
                    {variant === "login" ? "Assine agora" : "Fazer Login"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
