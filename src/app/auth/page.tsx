"use client";

import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Input from "../components/Input";
import { useState } from "react";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src={Logo} alt="Logo" height={48} draggable={false} />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Entrar</h2>

            <div className="flex flex-col gap-4">
              <Input
                label="Nome"
                onChange={({ target }) => setName(target.value)}
                id="name"
                value={name}
              />
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
                id="pasword"
                type="password"
                value={password}
              />
            </div>

            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition font-bold">
              Login
            </button>

            <p className="text-neutral-500 mt-12">
              Primeira vez utilizando Netflix?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Cria Conta
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
