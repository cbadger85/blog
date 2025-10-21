import { visit } from "unist-util-visit";
import { BASE_URL } from "../consts.ts";

export function remarkBaseUrl() {
  return (tree) => {
    visit(tree, "image", (node) => {
      // Only modify absolute paths that start with /
      if (node.url && node.url.startsWith("/") && !node.url.startsWith("//")) {
        node.url = BASE_URL.slice(1) + node.url;
      }
    });
  };
}
