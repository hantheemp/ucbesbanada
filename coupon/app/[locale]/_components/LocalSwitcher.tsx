"use client";

import { getCookie } from "cookies-next";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

interface LocalSwitcherProps {
  type: string;
  id: string;
}

export default function LocalSwitcher({ type, id }: LocalSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const authDoctor = getCookie("authDoctor");

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    switch (type) {
      case "home":
        startTransition(() => {
          router.replace(`/${nextLocale}/${type}`);
        });
      case "homeDoctor":
        startTransition(() => {
          router.replace(`/${nextLocale}/du/${authDoctor}`);
        });
      case "agent":
        startTransition(() => {
          router.replace(`/${nextLocale}/${type}/${id}`);
        });
    }
  };
  return (
    <label>
      <select
        defaultValue={localActive}
        className="bg-transparent"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="it">Italiano</option>
      </select>
    </label>
  );
}
