import { Flex } from "@radix-ui/themes";

import { ArticleCard } from "./components/ArticleCard";
import { Header } from "./components/Header";
import { Sample } from "./components/Sample";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Flex align="center" direction="column">
          <ArticleCard />
          <ArticleCard />
        </Flex>
        <Sample />
      </main>
    </>
  );
}
