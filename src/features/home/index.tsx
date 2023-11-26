import { Flex, Heading } from "@radix-ui/themes";

import { ArticleCard } from "./components/ArticleCard";

export function Home() {
  return (
    <main>
      <Heading align="center" mb="5" color="blue" size="6">
        siciliano
      </Heading>
      <Flex align="center" direction="column">
        <ArticleCard />
        <ArticleCard />
      </Flex>
    </main>
  );
}
