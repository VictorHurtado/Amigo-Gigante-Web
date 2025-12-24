"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps extends Omit<TextFieldProps, "type"> {}

const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const t = useTranslations("login");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="rounded-xl border border-transparent transition hover:border-neutral-200 focus-within:ring-2 focus-within:ring-brand-500/30">
      <TextField
        {...props}
        type={isVisible ? "text" : "password"}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon className="text-neutral-500" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  isVisible
                    ? t("form.password.hide")
                    : t("form.password.show")
                }
                onClick={() => setIsVisible((prev) => !prev)}
                edge="end"
              >
                {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default PasswordInput;
