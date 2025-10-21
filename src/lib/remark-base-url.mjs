import { visit } from "unist-util-visit";

const base = import.meta.env.BASE_URL;

export function remarkBaseUrl() {
  return (tree) => {
    visit(tree, "image", (node) => {
      // Only modify absolute paths that start with /
      if (node.url && node.url.startsWith("/") && !node.url.startsWith("//")) {
        node.url = (base.startsWith("/") ? base.slice(1) : base) + node.url;
      }
    });
  };
}
