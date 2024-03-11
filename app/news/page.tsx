import { getNewsFromAPI } from "@/app/api";
import { Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import CustomDatePicker, { FilterDates } from "../components/DatePicker";

export type NewsProps = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  produto_id: number;
  editorias: string;
  link: string;
};

export default function News() {
    const [pageControl, setPageControl] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [newsList, setNewsList] = useState<NewsProps[]>([]);
    const [filterDates, setFilterDates] = useState<FilterDates>();
    const { data: newsData } = useQuery(
      ["news", pageControl],
      () => getNewsFromAPI({
          qtd: 10,
          page: pageControl,
          de: filterDates?.startDate,
          ate: filterDates?.finishDate
        }),
      {
        
      }
    );

    useEffect(() => {
      if (newsData?.items.length) {
        setNewsList(newsData.items);
        setTotalPages(newsData.totalPages);
      }
    }, [newsData]);
  
    return (
      <Suspense fallback={<h1>Carregando dados</h1>}>
        <div>
          <CustomDatePicker setFilterDates={setFilterDates} />
          {newsList.map(news => (
            <NewsCard news={news} key={news.id}/>
          ))}
          <Pagination current={pageControl} last={totalPages} changePage={(page) => setPageControl(page)} />
        </div>
      </Suspense>
    );
  }