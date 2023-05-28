"use client";

import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Input from "../components/Input";
import { useCallback, useState } from "react";
import axios from "axios";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
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

            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition font-bold">
              Entrar
            </button>

            <p className="text-neutral-500 mt-12">
              {variant === "login" ? "Novo por aqui?" : "Já possui uma conta?"}

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
  );
};

export default Auth;
