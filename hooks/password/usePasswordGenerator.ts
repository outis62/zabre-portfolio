"use client";

import { useState, useEffect } from "react";

export interface PasswordOptions {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
}

export interface PasswordHook {
  password: string;
  generatePassword: () => void;
}

export function usePasswordGenerator({
  length,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  includeLowercase,
}: PasswordOptions): PasswordHook {
  const [password, setPassword] = useState<string>("");

  const generatePassword = (): void => {
    let charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!charset) {
      setPassword("");
      return;
    }

    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor((array[i] / 255) * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, includeUppercase, includeLowercase]);

  return { password, generatePassword };
}
