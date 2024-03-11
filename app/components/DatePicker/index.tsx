import { useEffect, useState } from 'react';

export type FilterDates = {
    startDate: string,
    finishDate: string
}

type CustomDatePickerProps = {
    setFilterDates: (dates: FilterDates) => void;
}

export default function CustomDatePicker({ setFilterDates }: CustomDatePickerProps) {
    const [startDate, setStartDate] = useState<string>('');
    const [finishDate, setFinishDate] = useState<string>('');

    useEffect(() => {
        if (startDate && finishDate) {
            const validStartDate = `${startDate.slice(5, 7)}-${startDate.slice(8, 10)}-${startDate.slice(0, 4)}`
            const validFinishDate = `${finishDate.slice(5, 7)}-${finishDate.slice(8, 10)}-${finishDate.slice(0, 4)}`
            
            setFilterDates({ startDate: validStartDate, finishDate: validFinishDate });
        }
    }, [finishDate, setFilterDates, startDate]);

    return (
        <div className='flex ml-8 mt-4 items-center'>
            <h1 className='text-[#DDDDDD] font-[bold] text-[24px] mr-2'>Filtrar -</h1>
            <div className='flex justify-between items-center'>
                <h1 className='text-[#DDDDDD] font-[bold] text-[20px] mr-2'>Data inicial: </h1>
                <input
                    className="bg-[#222222] rounded-md p-1 mr-2"
                    aria-label="Date"
                    type="date"
                    onChange={(evn) => setStartDate(evn.target.value)}
                />
                <h1 className='text-[#DDDDDD] font-[bold] text-[20px] mr-2'>Data final: </h1>
                <input
                    className="bg-[#222222] rounded-md p-1"
                    aria-label="Date"
                    type="date"
                    onChange={(evn) => setFinishDate(evn.target.value)}
                />
            </div>
        </div>
    );
}