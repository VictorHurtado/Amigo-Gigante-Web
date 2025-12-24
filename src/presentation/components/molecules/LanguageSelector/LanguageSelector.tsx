"use client";

import { MenuItem, TextField, type TextFieldProps } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { defaultLocale, locales } from "@/i18n/config";

export interface LanguageSelectorProps
  extends Omit<TextFieldProps, "select" | "value" | "onChange" | "defaultValue"> {}

export function LanguageSelector({ size = "small", ...props }: LanguageSelectorProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const removeLocalePrefix = (path: string) => {
    for (const localeOption of locales) {
      if (path === `/${localeOption}`) {
        return "/";
      }
      if (path.startsWith(`/${localeOption}/`)) {
        return path.replace(`/${localeOption}`, "");
      }
    }
    return path;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextLocale = event.target.value;

    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;samesite=lax`;
    window.localStorage.setItem("locale", nextLocale);
    const normalizedPathname = removeLocalePrefix(pathname);
    const targetPath =
      nextLocale === defaultLocale ? normalizedPathname : `/${nextLocale}${normalizedPathname}`;
    const queryString = searchParams.toString();
    const url = queryString ? `${targetPath}?${queryString}` : targetPath;

    router.replace(url);
  };

  return (
    <TextField
      select
      size={size}
      label={t("labels.language")}
      value={locale}
      onChange={handleChange}
      {...props}
    >
      {locales.map((localeOption) => (
        <MenuItem key={localeOption} value={localeOption}>
          {localeOption === "es" ? t("labels.spanish") : t("labels.english")}
        </MenuItem>
      ))}
    </TextField>
  );
}
