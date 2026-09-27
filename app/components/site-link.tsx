import NextLink from "next/link";
import type { ComponentProps } from "react";

// This small static site does not need speculative downloads of every route.
export default function SiteLink(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
