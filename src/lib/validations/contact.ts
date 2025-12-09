import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().optional(),
  email: z.string().email("有効なメールアドレスを入力してください"),
  type: z.enum(["demo", "dev", "seminar", "other"], {
    message: "お問い合わせ種別を選択してください",
  }),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const contactTypes = [
  { value: "demo", label: "デモ依頼" },
  { value: "dev", label: "開発相談" },
  { value: "seminar", label: "研修・セミナー" },
  { value: "other", label: "その他" },
] as const;
