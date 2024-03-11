"use client"

import { getNewsFromAPI } from "@/app/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import NewsCard from "../components/NewsCard";
import { NewsProps } from "../news/page";
import { useSearchParams } from "next/navigation";
import Divider from "../components/Divider";

export default function News() {
    const searchParams = useSearchParams();
    const searched = searchParams.get('searchTerms');
    const category = searchParams.get('category');
    const [pageControl, setPageControl] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [newsList, setNewsList] = useState<NewsProps[]>([]);
    const { data: newsData } = useQuery(
      ["news"],
      () => getNewsFromAPI({ qtd: 10, page: pageControl, busca: searched || '' }),
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
        <div className="m-8 rounded-md">
            <h1 className="text-[#DDDDDD] font-[bold] text-[32px]">
                {category ? category : `Resultados da busca '${searched}':`}
            </h1>
            <Divider />
          </div>
        {newsList.map(news => (
          <NewsCard news={news} key={news.id}/>
        ))}
      </div>
    );
  }