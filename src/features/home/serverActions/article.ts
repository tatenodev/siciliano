"use server";

import { PrismaClient } from "@prisma/client";
import { load } from "cheerio";

type PostArticleProps = {
  userName: string;
  url: string;
  comment: string;
};

const prisma = new PrismaClient();

export const getArticles = async () => {
  const articles = await prisma.articles.findMany();
  return { articles };
};

export const postArticle = async ({ userName, url, comment }: PostArticleProps) => {
  const response = await fetch(url);
  const html = await response.text();
  const $ = load(html);
  const title = $("head title").text();
  const description = $("meta[name*='description']").attr("content");
  const image_url = $("meta[property*='og:image']").attr("content");
  const res = await prisma.articles.create({
    data: {
      created_at: new Date(),
      url,
      title,
      user: userName,
      description,
      comment,
      image_url,
    },
  });
  console.log("res", res);
};

export const shareArticle = async ({ url, comment }: PostArticleProps) => {
  console.log("shareArticle", url, comment);

  return "success";
};
