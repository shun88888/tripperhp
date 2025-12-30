import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="text-black">Tripper</span> お問い合わせ
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Contact Information</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">お問い合わせ先</h3>
                <p className="text-muted-foreground">
                  サービスに関するご質問、ご要望、不具合のご報告などがございましたら、下記のメールアドレスまでお気軽にお問い合わせください。
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a
                  href="mailto:tripper.jp.info@gmail.com"
                  className="text-2xl font-semibold text-primary hover:underline break-all"
                >
                  tripper.jp.info@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">運営者</h3>
                <p className="text-muted-foreground">Tripper運営担当</p>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  ※ お問い合わせへの返信には数日かかる場合がございます。あらかじめご了承ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
