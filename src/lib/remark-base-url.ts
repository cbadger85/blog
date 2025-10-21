import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

const base = import.meta.env.BASE_URL;

export const remarkBaseUrl: RemarkPlugin = () => {
  return (tree) => {
    visit(tree, "image", (node) => {
      // Only modify absolute paths that start with /
      console.log({ base });

      if (node.url && node.url.startsWith("/") && !node.url.startsWith("//")) {
        node.url = base + node.url.slice(1);
      }
    });
  };
};
