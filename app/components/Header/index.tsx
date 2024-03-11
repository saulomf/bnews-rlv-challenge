import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";

type HeaderProps = {
  openSidebar: () => void;
};

export default function Header({ openSidebar }: HeaderProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex bg-[#330000] h-[100px] flex-row justify-between items-center px-4 py-0">
      <div className="flex flex-row cursor-pointer" onClick={openSidebar}>
        <IoIosMenu size={48} />
        <h1 className="text-[32px] font-bold font-serif ml-[4]" >
          BN
        </h1>
      </div>
      <Link href={'/'}>
        <h1 className="text-[28px] font-bold font-serif">
          BRAZILIAN NEWS
        </h1>
      </Link>
      <div className="bg-[#331111] p-1.5 rounded-lg">
        <input
          className="bg-[#331111]"
          type="text"
          placeholder="Buscar.."
          value={searchValue}
          onChange={(element) => setSearchValue(element.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              router.push(`/search?searchTerms=${searchValue}`);
              setSearchValue('');
            }
          }}
        />
      </div>
    </div>
  );
}
