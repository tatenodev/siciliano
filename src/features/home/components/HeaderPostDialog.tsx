"use client";

import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { Button, Flex, Dialog, Text, TextField } from "@radix-ui/themes";

import { postArticle } from "../serverActions/article";

type User = {
  name: string;
};

const getUser = () => {
  const userStringify = window.localStorage.getItem("user");
  const user: User | null = userStringify ? JSON.parse(userStringify) : null;
  return user;
};

export function HeaderPostDialog() {
  const [localUser, setLocalUser] = useState<User | null>(null);
  const [inputName, setInputName] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleUserName = () => {
    const user = getUser();
    setLocalUser(user);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button onClick={handleUserName} disabled={isPosting}>
          {isPosting ? "Posting..." : "Add"}
        </Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        {localUser?.name ? (
          <ArticleInputContent setIsPosting={setIsPosting} />
        ) : (
          <UserNameInputContent inputName={inputName} setInputName={setInputName} setLocalUser={setLocalUser} />
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
}

type UserNameInputContentProps = {
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  setLocalUser: Dispatch<SetStateAction<User>>;
};

const UserNameInputContent = ({ inputName, setInputName, setLocalUser }: UserNameInputContentProps) => {
  const handleSetName = () => {
    if (inputName === "") return alert("名前を入力してください");
    window.localStorage.setItem("user", JSON.stringify({ name: inputName }));
    setLocalUser({ name: inputName });
  };

  return (
    <>
      <Dialog.Title>ニックネーム</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        あなたの名前を入力してください
      </Dialog.Description>

      <Flex direction="column" gap="3">
        <label>
          <TextField.Input
            defaultValue={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Faure"
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            キャンセル
          </Button>
        </Dialog.Close>
        <Button onClick={handleSetName}>保存</Button>
      </Flex>
    </>
  );
};

type ArticleInputContentProps = {
  setIsPosting: Dispatch<SetStateAction<boolean>>;
};

const ArticleInputContent = ({ setIsPosting }: ArticleInputContentProps) => {
  const [shareUrl, setShareUrl] = useState("");
  const [shareComment, setShareComment] = useState("");

  const handleShare = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsPosting(true);
    const user = getUser();
    if (!user?.name || user.name === "") {
      e.preventDefault();
      alert("名前を設定してください");
      return;
    }
    if (shareUrl === "") {
      e.preventDefault();
      alert("URLを入力してください");
      return;
    }
    const urlRegex = /^(https?:\/\/)/;
    if (!urlRegex.test(shareUrl)) {
      e.preventDefault();
      alert("URLを入力してください");
      return;
    }

    const res = await postArticle({ userName: user.name, url: shareUrl, comment: shareComment });
    setShareUrl("");
    setShareComment("");
    setIsPosting(false);
  };
  return (
    <>
      <Dialog.Title>Share</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        シェアしたい記事のURLを入力してコメントを添えよう
      </Dialog.Description>

      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            URL
          </Text>
          <TextField.Input
            defaultValue={shareUrl}
            onChange={(e) => setShareUrl(e.target.value)}
            placeholder="https://"
          />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Comment
          </Text>
          <TextField.Input
            defaultValue={shareComment}
            onChange={(e) => setShareComment(e.target.value)}
            placeholder="記事についてのコメントを書こう"
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            キャンセル
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button onClick={handleShare}>投稿</Button>
        </Dialog.Close>
      </Flex>
    </>
  );
};
