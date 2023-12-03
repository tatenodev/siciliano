import { Flex } from "@radix-ui/themes";

import { ArticleCard } from "./components/ArticleCard";
import { Header } from "./components/Header";
import { getArticles } from "./serverActions/article";

export async function Home() {
  const { articles } = await getArticles();

  return (
    <>
      <Header />
      <main>
        <Flex align="center" direction="column">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Flex>
      </main>
    </>
  );
}
