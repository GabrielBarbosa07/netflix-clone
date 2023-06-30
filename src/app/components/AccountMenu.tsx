import { signOut } from "next-auth/react";

import Image from "next/image";

import defaultBlue from "../../../public/images/default-blue.png";
import useCurrentUser from "../../../hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image className="rounded-md" src={defaultBlue} alt="" width={32} />
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />

        <div
          onClick={() => signOut({ callbackUrl: "/auth" })}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sair da Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
