import { getNewsFromAPI } from "@/app/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import NewsCard from "../components/NewsCard";

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
    const { data: newsData } = useQuery(
      ["news"],
      () => getNewsFromAPI({ qtd: 10, page: pageControl }),
      {
        enabled: true
      }
    );

    useEffect(() => {
      if (newsData?.items.length) {
        setNewsList(newsData.items);
        setTotalPages(newsData.totalPages);
      }
    }, [newsData]);
  
    return (
      <div>
        {newsList.map(news => (
          <NewsCard news={news} key={news.id}/>
        ))}
      </div>
    );
  }