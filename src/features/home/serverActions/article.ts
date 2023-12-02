"use server";

import { PrismaClient } from "@prisma/client";

type ShareArticleProps = {
  url: string;
  comment: string;
};

const prisma = new PrismaClient();

export const getArticles = async () => {
  const articles = await prisma.articles.findMany();
  return { articles };
};

export const shareArticle = async ({ url, comment }: ShareArticleProps) => {
  console.log("shareArticle", url, comment);

  return "success";
};
