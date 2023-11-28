"use server";

type ShareArticleProps = {
  url: string;
  comment: string;
};

export const shareArticle = async ({ url, comment }: ShareArticleProps) => {
  console.log("shareArticle", url, comment);

  return "success";
};
