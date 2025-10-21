import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

const base = process.env.NODE_ENV === "production" ? "/blog" : "/";

export const remarkBaseUrl: RemarkPlugin = () => {
  return (tree) => {
    visit(tree, "image", (node) => {
      if (node.url && node.url.startsWith("/") && !node.url.startsWith("//")) {
        node.url = base + node.url.slice(1);
      }
    });
  };
};
