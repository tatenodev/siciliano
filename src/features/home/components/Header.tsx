"use client";

import { Button, Flex, Heading, Dialog, Text, TextField } from "@radix-ui/themes";

export function Header() {
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
                <TextField.Input defaultValue="" placeholder="https://" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Comment
                </Text>
                <TextField.Input defaultValue="" placeholder="どんな記事だった？" />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Post</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
    </header>
  );
}
