"use client"

import { getNewsByProductFromAPI } from "@/app/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NewsProps } from "../news/page";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import NewsCard from "../components/NewsCard";
import Divider from "../components/Divider";

export default function Details() {
    const [newsDetails, setNewsDetails] = useState<NewsProps>();
    const [newsRelated, setNewsRelated] = useState<NewsProps[]>();
    const searchParams = useSearchParams();
    const newsId = searchParams.get('newsId');
    const newsProductId = searchParams.get('newsProductid');
    const { data: newsData } = useQuery(
      ["newsByProduct"],
      () => getNewsByProductFromAPI(Number(newsProductId)),
      {
        enabled: true
      }
    );

    useEffect(() => {
      if (newsData?.length) {
          setNewsRelated(newsData.slice(0, 5));
          setNewsDetails(newsData?.find((element: NewsProps) => element.id === Number(newsId)));
      }
    }, [newsData, newsId, newsRelated]);

    console.log(newsData)

    const formatDate = (date: string) => {
      return date.slice(0, 10) + ' às ' + date.slice(11, 13);
    }
  
    return (
      <div>
          {newsDetails?.id && <div key={Number(newsId)} className="bg-[#111111] m-8 p-4 rounded-md">
            <h1 className="text-[#AAAAAA] font-[bold] text-[32px]">{newsDetails.titulo}</h1>
            <Divider />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <h1>Editorias: </h1>
                <h1 className="bg-[#331111] rounded-lg ml-2 p-0.5 pl-2 pr-2 ">{newsDetails.editorias}</h1>
              </div>
              <h1>{`Publicada em ${formatDate(newsDetails.data_publicacao)}h`}</h1>
            </div>
            <Divider />
            <h1 className="text-[#DDDDDD] font-[bold] text-[22px]">{newsDetails.introducao}</h1>
            <div className="flex justify-center mt-4">
            <Link
              href={newsDetails.link}
              className="bg-[#111166] rounded-2xl p-3"
            >Ler notícia completa</Link>
            </div>
          </div>}
          <div className="m-8 rounded-md">
            <h1 className="text-[#DDDDDD] font-[bold] text-[32px]">Notícicas relacionadas</h1>
            <Divider />
          </div>
            {newsRelated?.filter(element => element.id !== newsDetails?.id).map(news =>
              <NewsCard news={news} key={news.id}/>
            )}
      </div>
    );
  }