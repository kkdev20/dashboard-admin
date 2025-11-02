"use client";

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
import { User } from "lucide-react";

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
      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
}

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("common", "profile")}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>Manage your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <Button variant="outline">Change Photo</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <LabelComponent>{t("common", "name")}</LabelComponent>
              <Input placeholder="Admin User" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("common", "email")}</LabelComponent>
              <Input type="email" placeholder="admin@example.com" />
            </div>
            <div className="space-y-2">
              <LabelComponent>{t("common", "phone")}</LabelComponent>
              <Input type="tel" placeholder="+1 234-567-8900" />
            </div>
            <div className="space-y-2">
              <LabelComponent>Role</LabelComponent>
              <Input value="Administrator" disabled />
            </div>
          </div>
          <div className="space-y-2">
            <LabelComponent>Change Password</LabelComponent>
            <Input type="password" placeholder="Enter new password" />
          </div>
          <Button>{t("common", "save")}</Button>
        </CardContent>
      </Card>
    </div>
  );
}

