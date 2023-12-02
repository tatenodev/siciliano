"use server";

import { PrismaClient } from "@prisma/client";
import { load } from "cheerio";

type PostArticleProps = {
  url: string;
  comment: string;
};

const prisma = new PrismaClient();

export const getArticles = async () => {
  const articles = await prisma.articles.findMany();
  return { articles };
};

export const postArticle = async ({ url, comment }: PostArticleProps) => {
  const response = await fetch(url);
  const text = await response.text();
  console.log(text);

  const $ = load(text);
};

export const shareArticle = async ({ url, comment }: PostArticleProps) => {
  console.log("shareArticle", url, comment);

  return "success";
};
