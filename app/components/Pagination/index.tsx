import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";

type PaginationProps = {
    current: number;
    last: number;
    changePage: (value: number) => void;
}

export default function Pagination ({ current, last, changePage }: PaginationProps) {

    const updatePage = () => {

    };

    return (
        
        <div className="m-4 flex items-center justify-center">
            <FaChevronLeft cursor={'pointer'} onClick={() => {
                if (current - 1 < 2) {
                    changePage(1);
                } else {
                    changePage(current - 1);
                }
            }} />
            <h1
                className={`cursor-pointer font-[${current === 1 ? 'bold' : 'regular'}] text-[16px] ml-4 mr-2`}
                onClick={() => changePage(1)}
            >
                1
            </h1>
            {current !== 2 && <h1>...</h1>}
            <h1 className={`cursor-pointer font-[bold] text-[16px] m-2`}>
                {current !== 1 && current !== last ? current : ''}
            </h1>
            {current !== last - 1  && <h1>...</h1>}
            <h1
                className={`cursor-pointer font-[${current === last ? 'bold' : 'regular'}] text-[16px] mr-4 ml-2`}
                onClick={() => changePage(last)}
            >
                {last}
            </h1>
            <FaChevronRight cursor={'pointer'} onClick={() => {
                if (current + 1 > last - 1) {
                    changePage(last);
                } else {
                    changePage(current + 1);
                }
            }}   />

        </div>
    );
}