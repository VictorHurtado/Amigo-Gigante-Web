"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button, InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const t = useTranslations("login");

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {t("form.kicker")}
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          {t("form.title")}
        </h1>
        <p className="text-base text-neutral-600">{t("form.subtitle")}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-transparent transition hover:border-neutral-200 focus-within:ring-2 focus-within:ring-brand-500/30">
          <TextField
            label={t("form.email.label")}
            placeholder={t("form.email.placeholder")}
            type="email"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon className="text-neutral-500" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <PasswordInput
          label={t("form.password.label")}
          placeholder={t("form.password.placeholder")}
        />

        <div className="flex items-center justify-end">
          <Link className="text-sm text-brand-500 hover:text-brand-600" href="#">
            {t("form.forgotPassword")}
          </Link>
        </div>
      </div>

      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600">
        <ShieldOutlinedIcon className="text-brand-500" fontSize="small" />
        <span>{t("form.secureLogin")}</span>
      </div>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className="rounded-full py-3 text-base normal-case"
      >
        {t("form.submit")}
      </Button>

      <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
        <span>{t("form.newUser")}</span>
        <Link className="font-medium text-brand-500 hover:text-brand-600" href="#">
          {t("form.registerLink")}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
