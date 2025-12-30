export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center"><span className="text-black">Tripper</span> プライバシーポリシー</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <p className="text-base leading-7">
            Tripper(トリッパー)(以下「本サービス」といいます。)の運営者(以下「当運営」といいます。)は、ユーザーのプライバシーを尊重し、個人情報の保護に関する法律その他関連法令を遵守し、以下のプライバシーポリシー(以下「本ポリシー」といいます。)に従って、ユーザーの情報を適切に取り扱います。
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第1条(適用範囲)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本ポリシーは、本サービスに関して当運営が取得するすべてのユーザー情報の取扱いに適用されます。</li>
              <li>本サービスからリンクされる第三者のウェブサイト・アプリ等における情報の取扱いについては、当該第三者のプライバシーポリシーに従うものとし、本ポリシーの適用範囲外となります。</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第2条(取得する情報)</h2>
            <p>当運営は、本サービスの提供にあたり、主に次の情報を取得します。</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. アカウント登録情報</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>氏名またはニックネーム</li>
                  <li>メールアドレス</li>
                  <li>パスワード(ハッシュ化して保存)</li>
                  <li>外部認証サービス(例:Apple、Google等)のIDに紐づく識別子</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. プロフィール情報(任意入力を含む)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>アイコン画像</li>
                  <li>自己紹介文</li>
                  <li>居住エリア、よく行くエリアなど</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. 利用情報・コンテンツ情報</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>ユーザーが投稿した旅カード・ルート情報(訪問スポット、日程、移動手段、メモなど)</li>
                  <li>投稿された写真・動画・コメント・いいね・保存したカード等のアクション履歴</li>
                  <li>フォロー・フォロワーなどのソーシャルグラフ情報</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. 端末情報・ログ情報</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>端末の種類、OS、ブラウザ種別、言語設定、広告ID等</li>
                  <li>IPアドレス、Cookie、アクセス日時、本サービス内での操作履歴、クラッシュログ等</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第3条(利用目的)</h2>
            <p>当運営は、取得した情報を以下の目的で利用します。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>本サービスの提供・運営のため</li>
              <li>ユーザーの本人確認、アカウント認証のため</li>
              <li>ユーザーの旅カード・ルート・写真等の投稿コンテンツを表示・共有するため</li>
              <li>ユーザーの興味・関心や行動履歴に基づく、旅スポット・ルート・ホテル等のレコメンドを行うため</li>
              <li>お知らせ、ニュース、キャンペーン等の情報配信のため</li>
              <li>本サービスに関するお問い合わせへの対応のため</li>
              <li>利用状況の分析、新機能・新サービスの企画・改善のため</li>
              <li>不正アクセスや不正利用の防止、利用規約違反への対応のため</li>
              <li>広告の配信・測定・効果分析等のため</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第4条(第三者提供)</h2>
            <p>当運営は、次のいずれかに該当する場合を除き、あらかじめユーザーの同意を得ることなく、個人情報を第三者に提供しません。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合で、本人の同意を得ることが困難なとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合で、本人の同意を得ることが困難なとき</li>
              <li>国の機関又は地方公共団体等が法令の定める事務を遂行することに協力する必要がある場合</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第5条(個人情報の管理・安全対策)</h2>
            <p>当運営は、ユーザーの個人情報について、漏えい、滅失または毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第6条(ユーザーの権利:開示・訂正・削除等)</h2>
            <p>ユーザーは、当運営が保有する自己の個人情報について、個人情報保護法の定めに基づき、開示・訂正・追加・削除・利用停止・第三者提供の停止等を求めることができます。</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第7条(本ポリシーの変更)</h2>
            <p>当運営は、必要に応じて、本ポリシーの内容を変更することがあります。重要な変更を行う場合には、本サービス上での掲示またはその他適切な方法により、ユーザーに通知します。</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4">第8条(お問い合わせ窓口)</h2>
            <p>本ポリシーに関するお問い合わせ、ユーザー情報の開示・訂正・削除等のご請求は、下記の窓口までご連絡ください。</p>
            <ul className="list-none pl-6 space-y-1">
              <li>運営者:Tripper運営担当</li>
              <li>メールアドレス:<a href="mailto:tripper.jp.info@gmail.com" className="text-primary hover:underline">tripper.jp.info@gmail.com</a></li>
            </ul>
          </section>

          <p className="text-sm text-muted-foreground mt-8">制定日:2025年12月13日</p>
        </div>
      </div>
    </div>
  );
}
