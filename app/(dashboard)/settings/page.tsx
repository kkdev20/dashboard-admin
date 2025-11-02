"use client";

import { useState } from "react";
import { useLanguage } from "@/app/providers/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Temporary Label component since we don't have it yet
function LabelComponent({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
}

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: t("settings", "tabs.general") },
    { id: "notifications", label: t("settings", "tabs.notifications") },
    { id: "security", label: t("settings", "tabs.security") },
    { id: "billing", label: t("settings", "tabs.billing") },
    { id: "api", label: t("settings", "tabs.api") },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("settings", "title")}
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === "general" && (
        <Card>
          <CardHeader>
            <CardTitle>{t("settings", "tabs.general")}</CardTitle>
            <CardDescription>
              Manage your general account settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.storeName")}</LabelComponent>
              <Input placeholder="My Store" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.storeDescription")}</LabelComponent>
              <Input placeholder="Store description" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.contactEmail")}</LabelComponent>
              <Input type="email" placeholder="contact@example.com" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.phoneNumber")}</LabelComponent>
              <Input type="tel" placeholder="+1 234-567-8900" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.address")}</LabelComponent>
              <Input placeholder="123 Main St, City, State, ZIP" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.currency")}</LabelComponent>
              <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm">
                <option value="USD">USD</option>
                <option value="IDR">IDR</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("settings", "general.languagePreference")}</LabelComponent>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "id")}
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm"
              >
                <option value="en">English</option>
                <option value="id">Indonesia</option>
              </select>
            </div>
            <Button>{t("common", "save")}</Button>
          </CardContent>
        </Card>
      )}

      {/* Other tabs */}
      {activeTab !== "general" && (
        <Card>
          <CardHeader>
            <CardTitle>{tabs.find((t) => t.id === activeTab)?.label}</CardTitle>
            <CardDescription>
              This section is under development
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}

