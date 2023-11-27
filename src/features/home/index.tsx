import { Flex } from "@radix-ui/themes";

import { ArticleCard } from "./components/ArticleCard";
import { Header } from "./components/Header";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Flex align="center" direction="column">
          <ArticleCard />
          <ArticleCard />
        </Flex>
      </main>
    </>
  );
}
