import Link from "next/link";

type SidebarProps = {
  opened: boolean;
  setClose: () => void;
};

export default function Sidebar({ opened, setClose }: SidebarProps) {
  const MenuItem = ({
    name,
    routeName,
  }: {
    name: string;
    routeName: string;
  }) => (
    <Link
      href={{ pathname: `/${routeName}`, query: { category: name } }}
      className="w-full mb-3.5 p-1 hover:bg-[#330000]"
      onClick={setClose}
    >
      <h1 className="text-lg text-center">{name}</h1>
    </Link>
  );
  
  return (
    <>
      {opened ? (
        <div className="absolute w-full h-full flex-row flex">
          <div className="w-[180px] bg-[#111010] h-full flex flex-col items-center pt-8;">
            <h1 className="text-[28px] font-[bold] mb-[18px]">Menu</h1>
            <MenuItem name="Esportes" routeName="search" />
            <MenuItem name="Política" routeName="search" />
            <MenuItem name="Mundo" routeName="search" />
          </div>
          <div className="bg-[black] opacity-[50%] w-full h-full" onClick={setClose} />
        </div>
      ) : null}
    </>
  );
}
