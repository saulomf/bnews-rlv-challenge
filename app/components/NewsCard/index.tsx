import { NewsProps } from "@/app/news/page";
import Link from "next/link";

type NewsCardProps = {
    news: NewsProps;
};

export default function NewsCard({ news }: NewsCardProps) {
    
    const formatDate = (date: string) => {
        return date.slice(0, 10) + ' às ' + date.slice(11, 13);
    }

    return (
        <Link href={{ pathname: '/details', query: { newsId: news.id, newsProductid: news.produto_id } }} >
            <div className="bg-[#111111] m-8 p-4 rounded-md">
              <h1 className="text-[#AAAAAA] font-[bold] text-[32px]">{news.titulo}</h1>
              <h1 className="text-red mt-4">{`Publicada em ${formatDate(news.data_publicacao)}h`}</h1>
            </div>
        </Link>
    );
}