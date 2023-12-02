import { Flex, Heading } from "@radix-ui/themes";

import { HeaderPostDialog } from "./HeaderPostDialog";

export function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <Flex style={{ maxWidth: "800px", width: "100%" }} justify="between">
        <Heading mb="5" color="blue" size="6">
          siciliano
        </Heading>
        <HeaderPostDialog />
      </Flex>
    </header>
  );
}
