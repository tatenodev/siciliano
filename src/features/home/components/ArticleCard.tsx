import { Badge, Box, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

type ArticleCardProps = {
  article: {
    id: bigint;
    created_at: Date;
    url: string;
    description: string | null;
    user: string;
    comment: string | null;
    title: string;
    image_url: string | null;
  };
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card style={{ minWidth: "350px", maxWidth: "800px", width: "100%", marginBottom: "24px" }}>
      <Flex style={{ position: "relative", overflow: "hidden", height: "140px" }} align="center" justify="between">
        <a href={article.url} target="_blank" style={{ position: "absolute", inset: 0 }} />
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
            {article.title}
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
            {article.description}
          </Text>
          <Box>
            <Badge>
              Shared:{" "}
              {article.created_at
                .toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                .split("/")
                .join("-")}
            </Badge>
          </Box>
        </Box>
        <Box shrink="0" style={{ maxWidth: "230px", height: "120px", marginLeft: "6px" }}>
          <Image
            src={article.image_url!}
            alt=""
            style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
            width={100}
            height={100}
          />
        </Box>
      </Flex>
      <Separator my="3" size="4" />
      <Heading as="h3">User comments</Heading>
      <Text as="p">{article.comment}</Text>
    </Card>
  );
}
