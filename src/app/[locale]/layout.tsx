import { setRequestLocale } from "next-intl/server";

import type { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  return <>{children}</>;
}
