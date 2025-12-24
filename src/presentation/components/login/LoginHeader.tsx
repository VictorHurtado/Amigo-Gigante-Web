"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";

const LoginHeader = () => {
  const t = useTranslations("login");

  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-200/70 bg-white/70 px-4 py-4 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white shadow-sm">
            <PetsIcon fontSize="small" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold text-neutral-900">{t("header.title")}</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-neutral-600 lg:flex">
          <Link className="transition hover:text-neutral-900" href="#">
            {t("header.home")}
          </Link>
          <Link className="transition hover:text-neutral-900" href="#">
            {t("header.about")}
          </Link>
          <Link className="transition hover:text-neutral-900" href="#">
            {t("header.contact")}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="contained"
            color="primary"
            className="rounded-full px-5 py-2 text-sm normal-case"
          >
            {t("header.registerFoundation")}
          </Button>
        </div>

        <div className="lg:hidden">
          <IconButton aria-label={t("header.openMenu")}> 
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
