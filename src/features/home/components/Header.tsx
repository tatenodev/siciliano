"use client";

import { useState } from "react";
import { Button, Flex, Heading, Dialog, Text, TextField } from "@radix-ui/themes";

import { shareArticle } from "../serverActions/shareArticle";

export function Header() {
  const [shareUrl, setShareUrl] = useState("");
  const [shareComment, setShareComment] = useState("");

  const handleShare = async () => {
    const res = await shareArticle({ url: shareUrl, comment: shareComment });
    console.log(`res: ${res}`);
    setShareUrl("");
    setShareComment("");
  };

  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <Flex style={{ maxWidth: "800px", width: "100%" }} justify="between">
        <Heading mb="5" color="blue" size="6">
          siciliano
        </Heading>

        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Add</Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
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
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button onClick={handleShare}>Post</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
    </header>
  );
}
