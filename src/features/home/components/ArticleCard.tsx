import { Badge, Box, Card, Flex, Heading, Separator, Text, Link } from "@radix-ui/themes";
import Image from "next/image";

export function ArticleCard() {
  return (
    <Card style={{ minWidth: "350px", maxWidth: "800px", marginBottom: "24px" }}>
      <Flex style={{ position: "relative", overflow: "hidden", height: "140px" }} align="center">
        <a
          href="https://zenn.dev/pale_delphinium/articles/96397db45866b0"
          target="_blank"
          style={{ position: "absolute", inset: 0 }}
        />
        <Box>
          <Heading
            as="h2"
            style={{
              wordBreak: "break-word",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              paddingBottom: "4px",
            }}
          >
            記事タイトル
          </Heading>
          <Text
            style={{
              wordBreak: "break-word",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            記事のディスクリプション。サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
          </Text>
          <Box>
            <Badge>Shared: 2023-11-26</Badge>
          </Box>
        </Box>
        <Box shrink="0" style={{ maxWidth: "230px", height: "120px", marginLeft: "6px" }}>
          <Image
            src="https://picsum.photos/700/300"
            alt=""
            style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
            width={100}
            height={100}
          />
        </Box>
      </Flex>
      <Separator my="3" size="4" />
      <Heading as="h3">User comments</Heading>
      <Text as="p">コメント</Text>
    </Card>
  );
}
