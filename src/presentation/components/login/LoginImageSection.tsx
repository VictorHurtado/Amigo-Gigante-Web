"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import PetsIcon from "@mui/icons-material/Pets";

const LoginImageSection = () => {
  const t = useTranslations("login");

  return (
    <section className="relative hidden w-1/2 items-stretch lg:flex">
      <div className="group relative flex w-full items-end overflow-hidden rounded-3xl bg-neutral-900">
        <Image
          src="/images/login-dog.jpg"
          alt={t("leftColumn.imageAlt")}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 p-10 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium">
            <PetsIcon fontSize="small" />
            <span>{t("leftColumn.badge")}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold">{t("leftColumn.title")}</h2>
          <p className="mt-3 max-w-sm text-sm text-white/80">
            {t("leftColumn.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginImageSection;
