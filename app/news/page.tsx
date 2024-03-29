"use client"

import { getNewsFromAPI } from "@/app/api";
import { useEffect, useState } from "react";
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
    const { data: newsData, isLoading, isError } = useQuery(
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
    
    if (isLoading) {
      <div className="flex pt-8">
        <h1>Por favor aguarde enquanto os dados são carregados</h1>
      </div>
    }

    if (isError) {
      <div className="flex pt-8">
        <h1>Houve um erro ao carregar os dados, por favor tente novamente mais tarde</h1>
      </div>
    }
  
    return (
        <div>
          <CustomDatePicker setFilterDates={setFilterDates} />
          {newsList.map(news => (
            <NewsCard news={news} key={news.id}/>
          ))}
          <Pagination current={pageControl} last={totalPages} changePage={(page) => setPageControl(page)} />
        </div>
    );
  }