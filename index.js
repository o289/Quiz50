// 要素の取得
    // 初期画面
        const hamburger = document.getElementById('hamburger');
        const display = document.getElementById('display');
        const quiz01 = document.getElementById('quiz01');
        const quiz02 = document.getElementById('quiz02');
        const quiz03 = document.getElementById('quiz03');
        const quiz04 = document.getElementById('quiz04');
        const quiz05 = document.getElementById('quiz05');
    // 問題文と選択肢
        const questionDisplay = document.getElementById('questionDisplay');
        const question = document.getElementById('question');
        const submit0 = document.getElementById('submit0');
        const submit1 = document.getElementById('submit1');
        const submit2 = document.getElementById('submit2');
        const submit3 = document.getElementById('submit3');
        const nowScore = document.getElementById('nowScore');
    // 正解
        const correctDisplay = document.getElementById('correctDisplay');
        const correct = document.getElementById('correct')
    // 不正解
        const wrongDisplay = document.getElementById('wrongDisplay');
        const wrong = document.getElementById('wrong')
    // 結果
        const resultDisplay = document.getElementById('resultDisplay');
        const backgroundImg = document.getElementById('backgroundImg')
        const result = document.getElementById('result')
// スコア
    let score = 0;
//選んだ要素に応じて違うクイズを出す
    // 1
    const submited1 = () => {
        const quizData01 = [
            {
                questionText: 'スーパーマリオシリーズの主人公「マリオ」の本名は？',
                questionAnswers: [
                    'エリクセン・ディ・マリオ',
                    'マリオ・オンジェン',
                    'マリオ・マリオ',
                    'マリオ・ルイージ'
                ],
                correct: 'マリオ・マリオ'
            },
            {
                questionText: 'スーパーマリオシリーズの主人公「マリオ」の職業は？',
                questionAnswers: [
                    'パン屋',
                    'スパイ',
                    '教師',
                    '配管工'
                ],
                correct: '配管工'
            },
            {
                questionText: '1986年公開「スーパーマリオブラザーズ ピーチ姫救出大作戦」でクッパ大魔王の声優を務めたのは誰？',
                questionAnswers: [
                    '哀川翔',
                    '和田アキ子',
                    '明石家さんま',
                    '浜田雅功(ダウンタウン)'
                ],
                correct: '和田アキ子'
            },
            {
                questionText: 'スーパーマリオシリーズのキャラクター「ヘイホー」の英語名は何？',
                questionAnswers: [
                    'Shy guy',
                    'shy boy',
                    'shy people',
                    'shy man'
                ],
                correct: 'Shy guy'
            },
            {
                questionText: 'ゼルダの伝説シリーズに出演経験があるマリオのキャラクターは誰？',
                questionAnswers: [
                    'ヘイホー',
                    'ルイージ',
                    'カメック',
                    'ワンワン'
                ],
                correct: 'ワンワン'
            },
            {
                questionText: 'ポケットモンスターシリーズに登場する「オーキド博士」の本名は何？',
                questionAnswers: [
                    'オーキド・タツジ',
                    'オーキド・ユキナリ',
                    'オーキド・トモノリ',
                    'オーキド・タマムラ'
                ],
                correct: 'オーキド・ユキナリ'
            },
            {
                questionText: 'どうぶつの森シリーズに登場するたぬきちの趣味は何？',
                questionAnswers: [
                    '野球',
                    'サッカー',
                    'テニス',
                    'ゴルフ'
                ],
                correct: 'ゴルフ'
            },
            {
                questionText: '「あつまれ どうぶつの森」に出てくる魚が好きなビーバーの名前は？',
                questionAnswers: [
                    'マイケル',
                    'マジック',
                    'ジャスティン',
                    'マサムネ'
                ],
                correct: 'ジャスティン'
            },
            {
                questionText: 'ピクミンの主人公、キャプテン・オリマーが住む星は？',
                questionAnswers: [
                    'ホコタテ星',
                    'フシシ星',
                    'ピクミン星',
                    'フォーク星'
                ],
                correct: 'ホコタテ星'
            },
            {
                questionText: 'ピクミン3の主人公、アルフが住む星は？',
                questionAnswers: [
                    'ソバ星',
                    'パイーン星',
                    'コッパイ星',
                    'フシシ星'
                ],
                correct: 'コッパイ星'
            },
            {
                questionText: 'この中でNintendo Switchのジョイコンでできることは何？',
                questionAnswers: [
                    'Wii、WiiUソフトのゲーム',
                    'プレステーションソフトのゲーム',
                    'スマホアプリゲーム',
                    '音楽を聴く'
                ],
                correct: 'スマホアプリゲーム'
            },
            {
                questionText: 'スーパーマリオシリーズのキャラクター「クッパ」の英語名は何？',
                questionAnswers: [
                    'King kuppa',
                    'Bowser',
                    'The boss',
                    'archmage'
                ],
                correct: 'Bowser'
            },
            {
                questionText: 'スーパーマリオブラザーズの雲と草、よく見るとデザインは同じ色違い。なぜ？',
                questionAnswers: [
                    'デザインがあまりにも良かった',
                    '容量節約',
                    '納期が迫っていた',
                    '他のデザインがあまりにも酷かった'
                ],
                correct: '容量節約'
            },
            {
                questionText: 'ワリオの乗っている飛行機の名前は何？',
                questionAnswers: [
                    'ブルドック号',
                    'ガーリック号',
                    'ハット号',
                    'ウェイト号'
                ],
                correct: 'ブルドック号'
            },
            {
                questionText: 'ワリオランドアドバンスの謎解きステージに登場する博士の名前は何？',
                questionAnswers: [
                    'ソンナコト・シテナイ',
                    'バカハ・ファック',
                    'メイド・イン・ワリオ',
                    'アレヲ・シタイン'
                ],
                correct: 'アレヲ・シタイン'
            },
            {
                questionText: 'メイドインワリオなどでワリオが乗っているバイクはワリオバイクだが、そのバイクの排気量は？',
                questionAnswers: [
                    '3000cc',
                    '5000cc',
                    '7000cc',
                    '14000cc'
                ],
                correct: '5000cc'
            },
            {
                questionText: 'バルーンファイトの続編の主人公は誰？',
                questionAnswers: [
                    'ハンギョドン',
                    'ハローキティ',
                    'ポムポムプリン',
                    'マイメロディ'
                ],
                correct: 'ハローキティ'
            },
            {
                questionText: 'カービィの身長は何センチ？',
                questionAnswers: [
                    '50cm',
                    '90cm',
                    '2m',
                    '20cm'
                ],
                correct: '20cm'
            },
            {
                questionText: '星のカービィシリーズに登場するワドルディとワドルドゥの後ろ半分のイラストは全く同じ、なぜ？',
                questionAnswers: [
                    'デザインがあまりにも良かった',
                    '容量節約',
                    '納期が迫っていた',
                    '他のデザインがあまりにも酷かった'
                ],
                correct: '容量節約'
            },
            {
                questionText: 'ポケモンの世界にも存在する現実世界の動物は何？',
                questionAnswers: [
                    'インド象',
                    'パンダ',
                    'ライオン',
                    'アフリカ象'
                ],
                correct: 'インド象'
            },
            {
                questionText: 'ポケモンのカビゴンという名前の由来は何？',
                questionAnswers: [
                    '開発スタッフのあだ名',
                    'カビが生えたパン',
                    'カビキラー',
                    'とあるお店の名前'
                ],
                correct: '開発スタッフのあだ名'
            },
            {
                questionText: 'カビゴンのBMIはいくつ？',
                questionAnswers: [
                    '73',
                    '89',
                    '104',
                    '157'
                ],
                correct: '104'
            },
            {
                questionText: 'イーブイの名前の由来はとある英単語の頭文字から付けられた、その英単語は何？',
                questionAnswers: [
                    'Environment',
                    'Enough',
                    'Evolution',
                    'Energy'
                ],
                correct: 'Evolution'
            },
            {
                questionText: 'この中で「名前が似ている」という理由で裁判になったポケモンは何？',
                questionAnswers: [
                    'ヤドラン',
                    'ゲンガー',
                    'ユンゲラー',
                    'カメール'
                ],
                correct: 'ユンゲラー'
            },
            {
                questionText: '昔のゲームハードの特徴は何？',
                questionAnswers: [
                    '柔らかい',
                    '硬い',
                    '頑丈',
                    '脆い'
                ],
                correct: '頑丈'
            },
            {
                questionText: 'ニンテンドーDSのDSはなんの略？',
                questionAnswers: [
                    'Dynamic Screen',
                    'Dual Screen',
                    'Double Screen',
                    'DOM Screen'
                ],
                correct: 'Dual Screen'
            },
            {
                questionText: '最も売れたプレステは何？',
                questionAnswers: [
                    'PlayStation 1',
                    'PlayStation 2',
                    'PlayStation 3',
                    'PlayStation 4'
                ],
                correct: 'PlayStation 2'
            },
            {
                questionText: '「BIOHAZARD」の意味は何？',
                questionAnswers: [
                    '原子力警報',
                    '生物警報',
                    '原子力災害',
                    '生物災害'
                ],
                correct: '生物災害'
            },
            {
                questionText: '初代バイオハザードはシリーズを通して唯一実写で撮影されたオープニングムービーが流れる、その撮影地はどこ？',
                questionAnswers: [
                    'グランドキャニオン',
                    '多摩川の河川敷',
                    '万里の長城',
                    'アラル海'
                ],
                correct: '多摩川の河川敷'
            },
            {
                questionText: 'この中でモンストで使用されていない図鑑番号はどれ？',
                questionAnswers: [
                    '683',
                    '785',
                    '814',
                    '1033'
                ],
                correct: '785'
            },
            {
                questionText: 'モンストの男性キャラと女性キャラで異なるところがある、それは何？',
                questionAnswers: [
                    'ストライクショットの背景音',
                    '背景画像',
                    'クエスト攻略難易度',
                    'キャラ図鑑の字のフォント'
                ],
                correct: 'ストライクショットの背景音'
            },
            {
                questionText: 'モンストではステータスをタップすると攻撃力に赤丸が付くことがある、どういうこと？',
                questionAnswers: [
                    'ゲージを成功した時の攻撃力',
                    'そのキャラ本来の攻撃力',
                    '特定のクエストでの攻撃力',
                    'クリティカルヒットした時の攻撃力'
                ],
                correct: 'ゲージを成功した時の攻撃力'
            },
            {
                questionText: '「大乱闘スマッシュブラザーズ for WiiU/3DS」で初めて参戦した「ベヨネッタ」の元ネタとなるゲームは何？',
                questionAnswers: [
                    'ファイナルファンタジー',
                    'ドラゴンクエスト',
                    'ベヨネッタ',
                    'メトロイド'
                ],
                correct: 'ベヨネッタ'
            },
            {
                questionText: '「大乱闘スマッシュブラザーズ for WiiU/3DS」で初めて参戦した「シュルク」の元ネタとなるゲームは何？',
                questionAnswers: [
                    'バイオハザード',
                    'ゼノブレイド',
                    'メタルギアソリッド',
                    'ゼルダの伝説'
                ],
                correct: 'ゼノブレイド'
            },
            {
                questionText: '「大乱闘スマッシュブラザーズ for WiiU/3DS」で初めて参戦した「ゲッコウガ」の元ネタとなるゲームは何？',
                questionAnswers: [
                    'ポケットモンスター赤・緑',
                    'ポケットモンスターダイヤモンド・パール',
                    'ポケットモンスターX・Y',
                    'ポケットモンスターサン・ムーン'
                ],
                correct: 'ポケットモンスターX・Y'
            },
            {
                questionText: 'マリオカートシリーズのアイテム「サンダー」の効果は何？',
                questionAnswers: [
                    '先頭のカートを追いかけて、転倒させる',
                    '相手のカートを小さくする',
                    '相手の視界と悪くする',
                    '相手のアイテムを奪う'
                ],
                correct: '相手のカートを小さくする'
            },
            {
                questionText: 'レースのスタートの合図を出したり、コースから落ちたカートを救出する役割を持つキャラクターは誰？',
                questionAnswers: [
                    'ワンワン',
                    'ヘイホー',
                    'カメック',
                    'ジュゲム'
                ],
                correct: 'ジュゲム'
            },
            {
                questionText: '東京やニューヨークの街並みを模したコースも楽しめる、マリオカートシリーズ初のスマホ向けアプリは何？',
                questionAnswers: [
                    '「マリオカート ワールド」',
                    '「マリオカート ツアー」',
                    '「マリオカート ゴー」',
                    '「マリオカート モバイル」'
                ],
                correct: '「マリオカート ツアー」'
            },
            {
                questionText: '「マインクラフト」シリーズでネザーで行うと爆発する行為は何？',
                questionAnswers: [
                    'ベットで寝る',
                    'ゾンビピグリンを殺す',
                    'ガストから放出される火のたまをガストに当てる',
                    'マグマブロックを壊す'
                ],
                correct: 'ベットで寝る'
            },
            {
                questionText: '「マインクラフト」では稀にピンクの毛の羊がスポーンするがその確率は？',
                questionAnswers: [
                    '0.5%',
                    '2%',
                    '0.2%',
                    '5%'
                ],
                correct: '0.2%'
            },
            {
                questionText: '「マインクラフト」でフェンスの上にカーペットを敷くと何が起こる',
                questionAnswers: [
                    '爆発する',
                    'ダメージを受ける',
                    '牛が寄ってくる',
                    '通常のジャンプで越えられるようになる'
                ],
                correct: '通常のジャンプで越えられるようになる'
            },
            {
                questionText: '「マインクラフト」で雷に打たれて絶命したカメが確率でドロップするアイテムは何？',
                questionAnswers: [
                    'ボウル',
                    'ポーション',
                    'きのこ',
                    '水入り瓶'
                ],
                correct: 'ボウル'
            },
            {
                questionText: '「マインクラフト」の敵モブ「スケルトン」ですが、11%の確率である特徴を持った個体に出会える、それは何？',
                questionAnswers: [
                    '左利き',
                    '弓を持っていない',
                    '攻撃してこない',
                    '蜘蛛に乗っている'
                ],
                correct: '左利き'
            },
            {
                questionText: '「マインクラフト」のアイアンゴーレムはあるものを与えると回復する、それは何？',
                questionAnswers: [
                    '鉄インゴット',
                    'ポピー',
                    '鉄ブロック',
                    '金インゴット'
                ],
                correct: '鉄インゴット'
            },
            {
                questionText: '「パズドラ」にて操作位置固定と操作不可の位置が被るとどうなる？',
                questionAnswers: [
                    'フリーズする',
                    'クエストが強制終了する',
                    '操作不可が消える',
                    '操作位置固定が消える'
                ],
                correct: '操作位置固定が消える'
            },
            {
                questionText: '「Wii スポーツリゾート」のチャンバラにて夕方に試合をするには、キャラを選択後どうすればいい？',
                questionAnswers: [
                    'Wiiリモコンの1ボタンを押しっぱなしにしておく',
                    'Wiiリモコンの2ボタンを押しっぱなしにしておく',
                    'WiiリモコンのAボタンを押しっぱなしにしておく',
                    'WiiリモコンのBボタンを押しっぱなしにしておく'
                ],
                correct: 'Wiiリモコンの2ボタンを押しっぱなしにしておく'
            },
            {
                questionText: 'Wii スポーツリゾート」のチャンバラにて紫の剣を使うために必要な条件は何？',
                questionAnswers: [
                    '全てのスポーツの熟練度を2000以上にする',
                    'リモコンを振る',
                    '台パンする',
                    'チャンピオンに勝つ'
                ],
                correct: 'チャンピオンに勝つ'
            },
            {
                questionText: '任天堂はもともと何を作る会社だった？',
                questionAnswers: [
                    '自転車',
                    '花札・かるた',
                    '新聞',
                    'ティッシュ'
                ],
                correct: '花札・かるた'
            },
            {
                questionText: '任天堂が初めて家庭用ゲーム機を発売したのはいつ？',
                questionAnswers: [
                    '1957年',
                    '1967年',
                    '1977年',
                    '1987年'
                ],
                correct: '1977年'
            },
            {
                questionText: '全国でゲーム制作会社はいくつある？',
                questionAnswers: [
                    '1583社',
                    '1773社',
                    '2063社',
                    '2233社'
                ],
                correct: '2233社'
            },
        ];
        
        // 1
        let quiz_count = 0;
        const allData01 = quizData01.length;
        
        start()
        function QuizDisplay(){
        const quizNumber01 = quizData01[quiz_count];
        // クイズデータ
        question.innerText = quizNumber01.questionText;
        submit0.innerText = quizNumber01.questionAnswers[0];
        submit1.innerText = quizNumber01.questionAnswers[1];
        submit2.innerText = quizNumber01.questionAnswers[2];
        submit3.innerText = quizNumber01.questionAnswers[3];
        questionDisplay.classList.add('start');
        };
        QuizDisplay();
        // 正誤判定
        const clickEvent = (e) => {
            if(quizData01[quiz_count].correct === e.target.innerText){
                yes()
                score++;
            } else {
                no()
            }
        }; 
        // 次の問題へ行く処理
        function remove(){  
            quiz_count++;
            if (quiz_count < allData01) {
                QuizDisplay()
            } else {
                end()
            }
            
            questionDisplay.classList.remove('judgment')
            correctDisplay.classList.remove('judgment');
            wrongDisplay.classList.remove('judgment');
            }; 
        // クリックイベント設定
        submit0.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit1.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit2.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit3.addEventListener('click', function(e){
            clickEvent(e)
        });
        // 次の問題へ行くボタン
        function next(){
            correct.addEventListener('click', function(){
                remove()
            });
            wrong.addEventListener('click', function(){
                remove()
            });
        };
        next();
    };
    quiz01.addEventListener('click', function(){
        submited1()
    });
    // 2
    const submited2 = () => {
        const quizData02 = [
            {
                questionText: '私は何歳？',
                questionAnswers: [
                    '18歳',
                    '17歳',
                    '16歳',
                    '15歳'
                ],
                correct: '18歳'
            },
            {
                questionText: '私の出身地はどこ？',
                questionAnswers: [
                    '栃木県',
                    '埼玉県',
                    '東京都',
                    '長野県'
                ],
                correct: '栃木県'
            },
            {
                questionText: 'この中で最も私が好きな食べ物は何？',
                questionAnswers: [
                    '寿司',
                    'パスタ',
                    '焼肉',
                    'フランスパン'
                ],
                correct: 'パスタ'
            },
            {
                questionText: '私がこの中で好きなパスタの種類は何？',
                questionAnswers: [
                    'ペペロンチーノ',
                    'カルボナーラ',
                    'ジェノベーゼ',
                    'ボロネーゼ'
                ],
                correct: 'ボロネーゼ'
            },
            {
                questionText: '私が最も好きな寿司ネタは何？',
                questionAnswers: [
                    'マグロ',
                    '穴子',
                    'あじ',
                    'サーモン'
                ],
                correct: 'マグロ'
            },
            {
                questionText: '私のフランスパン好き度はどれくらい？',
                questionAnswers: [
                    '大好き',
                    '好き',
                    '普通',
                    '嫌い'
                ],
                correct: '普通'
            },
            {
                questionText: '私がまだ行ったことない場所は次のうちどれ？',
                questionAnswers: [
                    '横浜中華街',
                    '東京ディズニーランド',
                    '幕張メッセ',
                    'メガドンキ'
                ],
                correct: '幕張メッセ'
            },
            {
                questionText: 'この中で今後私が最も行きたいところはどこ？',
                questionAnswers: [
                    '清水寺',
                    'エスコンフィールド北海道',
                    '厳島神社',
                    '幕張メッセ'
                ],
                correct: 'エスコンフィールド北海道'
            },
            {
                questionText: '私の出身地で最も有名なところはどこ？',
                questionAnswers: [
                    '西武ドーム',
                    '原宿',
                    '富岡製糸場',
                    '日光東照宮'
                ],
                correct: '日光東照宮'
            },
            {
                questionText: '私が最も行きたい国はどこ？',
                questionAnswers: [
                    'アメリカ',
                    'イタリア',
                    '韓国',
                    'イギリス'
                ],
                correct: 'イタリア'
            },
            {
                questionText: 'この中で私の趣味ではないものはどれ？',
                questionAnswers: [
                    'youtubeを見る',
                    '散歩',
                    'TikTokを見る',
                    'プログラミング'
                ],
                correct: 'TikTokを見る'
            },
            {
                questionText: 'YouTubeでわたしが登録しているチャンネルは何個？',
                questionAnswers: [
                    '5個',
                    '6個',
                    '7個',
                    '10個'
                ],
                correct: '6個'
            },
            {
                questionText: '私がチャンネル登録しているYouTuber中で最も見ているのは誰？',
                questionAnswers: [
                    'からすまAチャンネル',
                    'Muttsun',
                    'SeikinTV',
                    'V.I.P'
                ],
                correct: 'V.I.P'
            },
            {
                questionText: '私がチャンネル登録していないYouTuber中で最も見ているのは誰？',
                questionAnswers: [
                    'サワヤン',
                    'レイクレ',
                    'ホモサピ',
                    'コムドット'
                ],
                correct: 'サワヤン'
            },
            {
                questionText: '私がかつて最もハマっていたゲームは何？',
                questionAnswers: [
                    '大乱闘スマッシュブラザーズ',
                    'ゼルダの伝説',
                    'マリオカート8DX',
                    '太鼓の達人'
                ],
                correct: '大乱闘スマッシュブラザーズ'
            },
            {
                questionText: '私がスマブラ（大乱闘スマッシュブラザーズ）で最もよく使っていたキャラは誰？',
                questionAnswers: [
                    'ガノンドロフ',
                    'メタナイト',
                    'カービー',
                    'デデデ'
                ],
                correct: 'デデデ'
            },
            {
                questionText: '私のマリオカートの得意度はどれくらい？',
                questionAnswers: [
                    'ものすごく得意',
                    '得意',
                    '普通',
                    '苦手'
                ],
                correct: '苦手'
            },
            {
                questionText: '私が最も好きなポケモンのキャラは何？',
                questionAnswers: [
                    'ピカチュウ',
                    'メタグロス',
                    'ポッチャマ',
                    'ハピナス'
                ],
                correct: 'メタグロス'
            },
            {
                questionText: '私が最も好きな飲み物は何？',
                questionAnswers: [
                    'カルピス',
                    '緑茶',
                    'メロンソーダ',
                    'アクエリアス'
                ],
                correct: 'メロンソーダ'
            },
            {
                questionText: '私が最近よく飲む飲み物は何？',
                questionAnswers: [
                    'メロンソーダ',
                    'アクエリアス',
                    'コーヒー',
                    '水'
                ],
                correct: '水'
            },
            {
                questionText: '私が最も好きな曲は何？',
                questionAnswers: [
                    'Mr.Children「HANABI」',
                    'なとり「Overdose」',
                    'サカナクション「新宝島」',
                    '乃木坂46「人は夢を二度見る」'
                ],
                correct: 'Mr.Children「HANABI」'
            },
            {
                questionText: '私が最も聴く音楽のジャンルは何？',
                questionAnswers: [
                    'ゲームBGM',
                    'J-pop',
                    'プロ野球の応援歌',
                    'K-pop'
                ],
                correct: 'プロ野球の応援歌'
            },
            {
                questionText: '私が最も好きなスポーツは何？',
                questionAnswers: [
                    'サッカー',
                    '野球',
                    'バスケットボール',
                    '卓球'
                ],
                correct: '野球'
            },
            {
                questionText: '私が最も得意なスポーツは何？',
                questionAnswers: [
                    'サッカー',
                    '野球',
                    'バスケットボール',
                    '卓球'
                ],
                correct: '卓球'
            },
            {
                questionText: '私が最も苦手なスポーツは何？',
                questionAnswers: [
                    'サッカー',
                    '野球',
                    'バスケットボール',
                    '卓球'
                ],
                correct: 'サッカー'
            },
            {
                questionText: '私の誕生日はいつ',
                questionAnswers: [
                    '1/23',
                    '4/1',
                    '5/11',
                    '7/19'
                ],
                correct: '5/11'
            },
            {
                questionText: '私は何人兄弟',
                questionAnswers: [
                    '1人',
                    '2人',
                    '3人',
                    '5人'
                ],
                correct: '2人'
            },
            {
                questionText: '私はアニメがどの位好きでしょう？',
                questionAnswers: [
                    '大好き',
                    '好き',
                    '普通',
                    '好きではない'
                ],
                correct: '普通'
            },
            {
                questionText: '私が最も好きなアニメは何？',
                questionAnswers: [
                    '斉木楠雄の災難',
                    'おそ松さん',
                    '銀魂',
                    'ポケモン'
                ],
                correct: '銀魂'
            },
            {
                questionText: '現在、私は何時に寝ることが多い？',
                questionAnswers: [
                    '21時半',
                    '22時',
                    '23時半',
                    '1時半'
                ],
                correct: '21時半'
            },
            {
                questionText: '現在、私は何時に起きることが多い？',
                questionAnswers: [
                    '6時半',
                    '7時',
                    '8時半',
                    '9時半'
                ],
                correct: '7時'
            },
            {
                questionText: '私が起きて最初にやることは何？',
                questionAnswers: [
                    '顔を洗う',
                    '散歩',
                    'スマホ見る',
                    '寝る'
                ],
                correct: 'スマホ見る'
            },
            {
                questionText: '私が最も嬉しかったのは何？（2023.3/29）時点',
                questionAnswers: [
                    '日本のWBC優勝',
                    '自分で作った料理が美味しかった',
                    '気に入った靴を手に入れた',
                    '花粉症が治った'
                ],
                correct: '日本のWBC優勝'
            },
            {
                questionText: 'この中で私の特徴として正しくないのはどれ？',
                questionAnswers: [
                    '花粉症',
                    '天然パーマ',
                    '座ってると眠くなる',
                    '冬に手が氷のように冷たくなる'
                ],
                correct: '天然パーマ'
            },
            {
                questionText: '私がかつて好きだったテレビ番組は何？',
                questionAnswers: [
                    '水曜日のダウンタウン',
                    'アメトーク',
                    'ロンドンハーツ',
                    '月曜から夜更かし'
                ],
                correct: '水曜日のダウンタウン'
            },
            {
                questionText: '私が最も好きなお笑い芸人は誰？',
                questionAnswers: [
                    '陣内智則',
                    'NON STYLE',
                    'アンジャッシュ',
                    '千鳥'
                ],
                correct: '陣内智則'
            },
            {
                questionText: '私が最後に映画館に行ったのはいつ？',
                questionAnswers: [
                    '4年前',
                    '6年前',
                    '8年前',
                    '10年前'
                ],
                correct: '8年前'
            },
            {
                questionText: '私が最後に映画館で見た映画は何？',
                questionAnswers: [
                    'ポケモン',
                    '名探偵コナン',
                    'ドラえもん',
                    'るろうに剣心'
                ],
                correct: 'ドラえもん'
            },
            {
                questionText: '私が最も苦手な食べ物は何？',
                questionAnswers: [
                    '納豆',
                    '栗',
                    'みかん',
                    'とうもろこし'
                ],
                correct: 'とうもろこし'
            },
            {
                questionText: '私が最も苦手な食べ物の苦手なところは何？',
                questionAnswers: [
                    '食感',
                    '味',
                    'におい',
                    '3つすべて'
                ],
                correct: '味'
            },
            {
                questionText: '私が最もよく使うアプリは何？',
                questionAnswers: [
                    'YouTube',
                    'Twitter',
                    'Google Chrome',
                    'Instagram'
                ],
                correct: 'YouTube'
            },
            {
                questionText: '私は買った商品の最高額はいくら？',
                questionAnswers: [
                    '1万円',
                    '5万円',
                    '17万円',
                    '38万円'
                ],
                correct: '17万円'
            },
            {
                questionText: '私が最も好きな季節は何？',
                questionAnswers: [
                    '春',
                    '夏',
                    '秋',
                    '冬'
                ],
                correct: '春'
            },
            {
                questionText: '私は今何人の仲間がいる？（2023.3/29）時点',
                questionAnswers: [
                    '0人',
                    '2人',
                    '4人',
                    '10人'
                ],
                correct: '2人'
            },
            {
                questionText: '私が初めて高校の同級生を見た時思ったことは次のうちどれ？',
                questionAnswers: [
                    'なんか怖い',
                    '面白そう',
                    'みんな顔が死んでいる',
                    '楽しそう'
                ],
                correct: '面白そう'
            },
            {
                questionText: '私が最もされたら嫌なのはどれ？',
                questionAnswers: [
                    'スマホを覗かれる',
                    '無視される',
                    '脅される',
                    '殴られる'
                ],
                correct: '殴られる'
            },
            {
                questionText: '私が今後やりたいことは何？',
                questionAnswers: [
                    '野球観戦',
                    '海外旅行',
                    '髪を染める',
                    '特にない'
                ],
                correct: '野球観戦'
            },
            {
                questionText: '私が初めて大学の同級生を見た時に思ったことは何？',
                questionAnswers: [
                    '怖い',
                    '楽しそう',
                    'みんな先輩に見える',
                    '髪染めている人多いなぁ'
                ],
                correct: 'みんな先輩に見える'
            },
            {
                questionText: '私のプライベートでの目標は何？',
                questionAnswers: [
                    '彼女を作る',
                    'たくさん旅行する',
                    '料理のレパートリーを増やす',
                    '特になし'
                ],
                correct: '特になし'
            },
            {
                questionText: '私の大学生活での目標は何？',
                questionAnswers: [
                    '友達を作る',
                    'サークル活動で結果を出す',
                    '過去最高の成績を残す',
                    'アルバイトをたくさんする'
                ],
                correct: '過去最高の成績を残す'
            },
        ];
        // 1
        let quiz_count = 0;
        const allData02 = quizData02.length;
        
        start()
        function QuizDisplay(){
        const quizNumber02 = quizData02[quiz_count];
        // クイズデータ
        question.innerText = quizNumber02.questionText;
        submit0.innerText = quizNumber02.questionAnswers[0];
        submit1.innerText = quizNumber02.questionAnswers[1];
        submit2.innerText = quizNumber02.questionAnswers[2];
        submit3.innerText = quizNumber02.questionAnswers[3];
        questionDisplay.classList.add('start');
        };
        QuizDisplay();
        // 正誤判定
        const clickEvent = (e) => {
            if(quizData02[quiz_count].correct === e.target.innerText){
                yes()
                score++;
            } else {
                no()
            }
        }; 
        // 次の問題へ行く処理
        function remove(){  
            quiz_count++;
            if (quiz_count < allData02) {
                QuizDisplay()
            } else {
                end()
            }
            
            questionDisplay.classList.remove('judgment')
            correctDisplay.classList.remove('judgment');
            wrongDisplay.classList.remove('judgment');
            }; 
        // クリックイベント設定
        submit0.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit1.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit2.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit3.addEventListener('click', function(e){
            clickEvent(e)
        });
        // 次の問題へ行くボタン
        function next(){
            correct.addEventListener('click', function(){
                remove()
            });
            wrong.addEventListener('click', function(){
                remove()
            });
        };
        next();
    };
    quiz02.addEventListener('click', function(){
        submited2()
    });
    // 3
    const submited3 = () => {
        const quizData03 = [
            {
                questionText: 'これはペンです',
                questionAnswers: [
                    'This is a pen.',
                    'This is the pen.',
                    'This are a pen.',
                    'This am a pen.'
                ],
                correct: 'This is a pen.'
            },
            {
                questionText: '私はりんごが好きです',
                questionAnswers: [
                    'I like apple.',
                    'I like ringo.',
                    'I liked apple.',
                    'I am like apple.'
                ],
                correct: 'I like apple.'
            },
            {
                questionText: '私は泳ぐことができる',
                questionAnswers: [
                    'I can swim.',
                    'I can swimming.',
                    'I swim.',
                    'You can swim.'
                ],
                correct: 'I can swim.'
            },
            {
                questionText: 'あなたは学生である',
                questionAnswers: [
                    'You am a student.',
                    'You were a student.',
                    'You is a student.',
                    'You are a student.'
                ],
                correct: 'You are a student.'
            },
            {
                questionText: '私は彼女にバラをあげた',
                questionAnswers: [
                    'I gived her a rose.',
                    'I am given her a rose.',
                    'I give her a rose.',
                    'I gave her a rose.'
                ],
                correct: 'I gave her a rose.'
            },
            {
                questionText: 'あなたは学生ですか？',
                questionAnswers: [
                    'Are you student?',
                    'Is you student?',
                    'Am you student?',
                    'Were you student?'
                ],
                correct: 'Are you student?'
            },
            {
                questionText: 'あなたは何が好きですか？',
                questionAnswers: [
                    'What did you like?',
                    'What do I like?',
                    'What done you like?',
                    'What do you like?'
                ],
                correct: 'What do you like?'
            },
            {
                questionText: '私はジョナサンと同じくらい賢い',
                questionAnswers: [
                    'I am as smart as Jonathan.',
                    'I am as knowing as Jonathan.',
                    'I am as good as Jonathan.',
                    'I am as well as Jonathan.'
                ],
                correct: 'I am as smart as Jonathan.'
            },
            {
                questionText: 'あなたはあきらよりマフラーを持っている',
                questionAnswers: [
                    'You have more scarves than Akira.',
                    'You have more muffler than Akira.',
                    'You have more scarves than Akira.',
                    'You have more scarves than Akira.'
                ],
                correct: 'You have more scarves than Akira.'
            },
            {
                questionText: 'このiphoneは壊れている',
                questionAnswers: [
                    'This iphone broken.',
                    'This iphone breaking.',
                    'This iphone are broken.',
                    'This iphone is broken.'
                ],
                correct: 'This iphone is broken.'
            },
            {
                questionText: '最近ティッシュの減りが早い',
                questionAnswers: [
                    'Tissues are running low for three years.',
                    'Tissues are running these days.',
                    'Tissues are running high these days.',
                    'Tissues are running low these days.'
                ],
                correct: 'Tissues are running low these days.'
            },
            {
                questionText: 'メルカリで小島よしおが2万円で売っていた',
                questionAnswers: [
                    'Yoshio Kojima sold for 20,000 yen in Mercari.',
                    'Yoshio Kojima sold for 20,000 yen on Mercari.',
                    'Yoshio Kojima sold for 20,000 yen to Mercari.',
                    'Yoshio Kojima sold for 20,000 yen into Mercari.'
                ],
                correct: 'Yoshio Kojima sold for 20,000 yen on Mercari.'
            },
            {
                questionText: 'どこにでもある卵',
                questionAnswers: [
                    'Eggs everywhere',
                    'Eggs everywhen',
                    'Eggs everywhat',
                    'Eggs everywho'
                ],
                correct: 'Eggs everywhere'
            },
            {
                questionText: '私は友達からどこにでもある卵をもらった',
                questionAnswers: [
                    'I got eggs everywhere from me friends.',
                    'I got eggs everywhere from I am friends.',
                    'I got eggs everywhere from my friends.',
                    'I get eggs everywhere from my friends.'
                ],
                correct: 'I got eggs everywhere from my friends.'
            },
            {
                questionText: '私が意見を言ったら、周りが黙ってしまった',
                questionAnswers: [
                    'I say my opinion and everyone around me shut down.',
                    'I voice my opinion and everyone around me shut down.',
                    'I voice my opinion and everyone around me shut up.',
                    'I voiced my opinion and everyone around me shut down.'
                ],
                correct: 'I voiced my opinion and everyone around me shut down.'
            },
            {
                questionText: 'なぜ私が話し始めると、みんな困った顔をするんだろう？',
                questionAnswers: [
                    'Why do people looking be troubled when I start talking?',
                    'Why do people look annoyed when I start talking?',
                    'Why do people look be troubled when I start talking?',
                    'Why do people look annoyed when I start speaking?'
                ],
                correct: 'Why do people look annoyed when I start talking?'
            },
            {
                questionText: '茶色のバナナが漏れた',
                questionAnswers: [
                    'Brown banana leacked.',
                    'Brown banana lerked.',
                    'Brown banana leaced.',
                    'Brown banana leaked.'
                ],
                correct: 'Brown banana leaked.'
            },
            {
                questionText: '岸田はいつも検討している',
                questionAnswers: [
                    'Kishida is always invading',
                    'Kishida is always thinking',
                    'Kishida is always considering',
                    'Kishida is always containing'
                ],
                correct: 'Kishida is always considering'
            },
            {
                questionText: '野々村は史上初の会見で泣いた人だ',
                questionAnswers: [
                    'Nonomura was the first person in history to cry at a press conference.',
                    'Nonomura was the first people in history to cry at a press conference.',
                    'Nonomura was the first person in history to cry in a press conference.',
                    'Nonomura was the first person in history for cry at a press conference.'
                ],
                correct: 'Nonomura was the first person in history to cry at a press conference.'
            },
            {
                questionText: 'なぜあなたは公共の場で黄色の水を放出したの？',
                questionAnswers: [
                    'Why did you digest yellow water in public?',
                    'Why did you release yellow water in public?',
                    'Why did you consume yellow water in private?',
                    'Why did you compare yellow water in public?'
                ],
                correct: 'Why did you release yellow water in public?'
            },
            {
                questionText: 'きゅうりを食べたら、骨折した',
                questionAnswers: [
                    'I ate a cucumber because broke a bone.',
                    'I ate a cucumber or broke a bone.',
                    'I ate a cucumber so broke a bone.',
                    'I ate a cucumber and broke a bone.'
                ],
                correct: 'I ate a cucumber and broke a bone.'
            },
            {
                questionText: 'STAP細胞はあります',
                questionAnswers: [
                    'There are STAP cells.',
                    'You are STAP cells.',
                    'There were STAP cells.',
                    'There is STAP cells.'
                ],
                correct: 'There are STAP cells.'
            },
            {
                questionText: '味噌汁を喉に詰まらせた',
                questionAnswers: [
                    'He required on his miso soup.',
                    'He combine on his miso soup.',
                    'He choked on his miso soup.',
                    'He sign in his miso soup.'
                ],
                correct: 'He choked on his miso soup.'
            },
            {
                questionText: 'とうもろこしは毒です',
                questionAnswers: [
                    'Corn is marvelous.',
                    'Corn is oxygen.',
                    'Corn is loyalty.',
                    'Corn is poisonous.'
                ],
                correct: 'Corn is poisonous.'
            },
            {
                questionText: 'あそこのおじさん、寝てない？',
                questionAnswers: [
                    'Is old man there asleep?',
                    'Is old man here there asleep?',
                    'Is old man over there asleep?',
                    'Is old man under there asleep?'
                ],
                correct: 'Is old man over there asleep?'
            },
            {
                questionText: 'スタバの入り口の前で泣いている女性は浮気をしているらしい',
                questionAnswers: [
                    'The woman crying in front of the Starbucks coffee entrance is having an affair, apparently.',
                    'The woman crying in front of the Starbucks coffee entrance is having an affair, primarily.',
                    'The woman crying in front of the Starbucks coffee entrance is having an affair, significantly.',
                    'The woman crying in front of the Starbucks coffee entrance is having an affair, mostly.'
                ],
                correct: 'The woman crying in front of the Starbucks coffee entrance is having an affair, apparently.'
            },
            {
                questionText: 'ジョナサンはいつも数学の授業だけ遅刻する',
                questionAnswers: [
                    'Jonathan is always late only for math class.',
                    'Jonathan is late always only for math class.',
                    'Jonathan is always low only for math class.',
                    'Jonathan is not always late only for math class.'
                ],
                correct: 'Jonathan is always late only for math class.'
            },
            {
                questionText: 'あそこの生肉を食べている佐藤さんの年収は10億円だよ',
                questionAnswers: [
                    'Mr.Sato, who eats fresh meat there, makes a yen a year.',
                    'Mr.Sato, who eats fresh meat there, makes a million yen a year.',
                    'Mr.Sato, who eats fresh meat there, makes a billion yen a year.',
                    'Mr.Sato, who eats fresh meat there, makes a 10 billion yen a year.'
                ],
                correct: 'Mr.Sato, who eats fresh meat there, makes a billion yen a year.'
            },
            {
                questionText: '公園に座っている注射器持っている男性は警察官だよ',
                questionAnswers: [
                    'The guy sitting in the park with the syringe is a police officer.',
                    'The guy sitting in the park with the syringe is an police officer.',
                    'The guy sitting in the park with the syringe will be a police officer.',
                    'The guy sitting in the park with the syringe are a police officer.'
                ],
                correct: 'The guy sitting in the park with the syringe is a police officer.'
            },
            {
                questionText: 'あのよくわからない曲はマツケンサンバと呼ばれている',
                questionAnswers: [
                    'That unable song is called Matsuken Samba.',
                    'That unknown song is called Matsuken Samba.',
                    'That unfamiliar song is called Matsuken Samba.',
                    'That undefined song is called Matsuken Samba.'
                ],
                correct: 'That unfamiliar song is called Matsuken Samba.'
            },
            {
                questionText: '井上、石田、2人合わせてNON STYLE',
                questionAnswers: [
                    'Inoue and Ishida, coalescence with NON STYLE',
                    'Inoue and Ishida, together with NON STYLE',
                    'Inoue and Ishida, familiar with NON STYLE',
                    'Inoue and Ishida, come up with NON STYLE'
                ],
                correct: 'Inoue and Ishida, together with NON STYLE'
            },
            {
                questionText: '何で私だけお年玉100円なの？',
                questionAnswers: [
                    'Why are you the only one with a 100 yen New Years gift?',
                    'Why am I the one of the 100 yen New Years gift?',
                    'Why am I the only one with a 100 yen New Years money?',
                    'Why am I the only one with a 100 yen New Years gift?'
                ],
                correct: 'Why am I the only one with a 100 yen New Years gift?'
            },
            {
                questionText: 'あの観覧車は時々故障する',
                questionAnswers: [
                    'That Ferris wheel breaks up sometimes.',
                    'That Ferris wheel breaks down sometimes.',
                    'That Ferris wheel breaks out sometimes.',
                    'That Ferris wheel breaks on sometimes.'
                ],
                correct: 'That Ferris wheel breaks down sometimes.'
            },
            {
                questionText: 'このぬいぐるみ、なんか臭くない？',
                questionAnswers: [
                    'Does not this aged toy smell kind of bad?',
                    'Does not this alarmed toy smell kind of bad?',
                    'Does not this illegal toy smell kind of bad?',
                    'Does not this stuffed toy smell kind of bad?'
                ],
                correct: 'Does not this stuffed toy smell kind of bad?'
            },
            {
                questionText: 'スターバックスで優雅にコーヒーを飲んでいるあの男性は無職だよ',
                questionAnswers: [
                    'That man drinking him coffee so elegantly at Starbucks coffee is unemployed.',
                    'That man drinking his coffee so elegantly at Starbucks coffee is unemployed.',
                    'That man drinking he coffee so elegantly at Starbucks coffee is unemployed.',
                    'That man drinking her coffee so elegantly at Starbucks coffee is unemployed.'
                ],
                correct: 'That man drinking his coffee so elegantly at Starbucks coffee is unemployed.'
            },
            {
                questionText: '君はいつも何か食べながら歩いているね',
                questionAnswers: [
                    'You are always walking around eating anything.',
                    'You are always walking around eating everything.',
                    'You are always walking around eating something.',
                    'You are always walking around eating nothing.'
                ],
                correct: 'You are always walking around eating something.'
            },
            {
                questionText: '私はゴキブリを食べながら「バックトゥーザ・フューチャー」を見るのが好きです',
                questionAnswers: [
                    'I like to watching "Back to the Future" while eating cockroach!',
                    'I like to watched "Back to the Future" while eating cockroach!',
                    'I am like to watch "Back to the Future" while eating cockroach!',
                    'I like to watch "Back to the Future" while eating cockroach!'
                ],
                correct: 'I like to watch "Back to the Future" while eating cockroach!'
            },
            {
                questionText: 'なぜ授業中に寝ていただけなのに、注意されたの？',
                questionAnswers: [
                    'Why was I warned for just sleeping in class?',
                    'Why was I angry for just sleeping in class?',
                    'Why was I developed for just sleeping in class?',
                    'Why was I hurt for just sleeping in class?'
                ],
                correct: 'Why was I warned for just sleeping in class?'
            },
            {
                questionText: 'T.ヨシザウルス・ムンチャクッパスが作るクッキーは他の誰のものより美味しい',
                questionAnswers: [
                    'Cookies made by T. Yoshisaurus Munchakpas are better than anyone elseS!',
                    'Cookies made by T. Yoshisaurus Munchakpas are better than someone elseS!',
                    'Cookies made by T. Yoshisaurus Munchakpas are better than one elseS!',
                    'Cookies made by T. Yoshisaurus Munchakpas are better than nothing elseS!'
                ],
                correct: 'Cookies made by T. Yoshisaurus Munchakpas are better than anyone elseS!'
            },
            {
                questionText: '彼は一人寂しくケーキを製造している',
                questionAnswers: [
                    'He is alone and lonely, making cakes.',
                    'He is alone and lonely, manufacturing cakes.',
                    'He is alone and lonely, hacking cakes.',
                    'He is alone and lonely, attracting cakes.'
                ],
                correct: 'He is alone and lonely, manufacturing cakes.'
            },
            {
                questionText: 'あの猫は毛が金色である',
                questionAnswers: [
                    'That cat has golden hair.',
                    'That cat has has golden hair.',
                    'That cat having golden hair.',
                    'That cat have golden hair.'
                ],
                correct: 'That cat has golden hair.'
            },
            {
                questionText: 'リモートワークのおかげでリモートワークができた',
                questionAnswers: [
                    'Remote work has allowed me work remotely.',
                    'Remote work has collected me work remotely.',
                    'Remote work has helped me work remotely.',
                    'Remote work has made me work remotely.'
                ],
                correct: 'Remote work has helped me work remotely.'
            },
            {
                questionText: '【衝撃】プラスチックの原料って、石油なんですよ',
                questionAnswers: [
                    'Shocking Facts, The raw institute for plastic is petroleum.',
                    'Shocking Facts, The raw employer for plastic is petroleum.',
                    'Shocking Facts, The raw saying for plastic is petroleum.',
                    'Shocking Facts, The raw material for plastic is petroleum.'
                ],
                correct: 'Shocking Facts, The raw material for plastic is petroleum.'
            },
            {
                questionText: '私が定期試験で1点を取ったことに誰もが驚き、祝ってくれた',
                questionAnswers: [
                    'Everyone was surprised and congratulated me for restoring a single point on my regular exam.',
                    'Everyone was surprised and congratulated me for achieving a single point on my regular exam.',
                    'Everyone was surprised and congratulated me for getting a single point on my regular exam.',
                    'Everyone was surprised and congratulated me for attempting a single point on my regular exam.'
                ],
                correct: 'Everyone was surprised and congratulated me for getting a single point on my regular exam.'
            },
            {
                questionText: '田中さんおめでとう、今まで0点しか取ったことないもんね',
                questionAnswers: [
                    'Congratulations to Tanaka, you have only ever scored zero points.',
                    'Congratulations to Tanaka, you have got only ever scored zero points.',
                    'Congratulations to Tanaka, you has only ever scored zero points.',
                    'Congratulations to Tanaka, you have only scored zero points.'
                ],
                correct: 'Congratulations to Tanaka, you have only ever scored zero points.'
            },
            {
                questionText: 'この隠された謎を解いたのはT.ヨシザウルス・ムンチャクッパスだ',
                questionAnswers: [
                    'This hidden mystery was solved by T.Yoshisaurus Munchakpas.',
                    'This hide mystery was solved by T.Yoshisaurus Munchakpas.',
                    'This hidded mystery was solved by T.Yoshisaurus Munchakpas.',
                    'This hidden mystery was solving by T.Yoshisaurus Munchakpas.'
                ],
                correct: 'This hidden mystery was solved by T.Yoshisaurus Munchakpas.'
            },
            {
                questionText: 'T.ヨシザウルス・ムンチャクッパスは蚊が嫌いだ',
                questionAnswers: [
                    'T. Yoshisaurus munchacuppus hates turtles.',
                    'T. Yoshisaurus munchacuppus hates lizards.',
                    'T. Yoshisaurus munchacuppus hates mosquitoes.',
                    'T. Yoshisaurus munchacuppus hates crickets.'
                ],
                correct: 'T. Yoshisaurus munchacuppus hates mosquitoes.'
            },
            {
                questionText: 'サラダにしますか、お肉しますか、それともわ・た・し？',
                questionAnswers: [
                    'Would you like a salad, meat, or me?',
                    'Will you like a salad, meat, or me?',
                    'Can you a salad, meat, or me?',
                    'May you like a salad, meat, or me?'
                ],
                correct: 'Would you like a salad, meat, or me?'
            },
            {
                questionText: 'サラダで！！',
                questionAnswers: [
                    'Salad, please.',
                    'Salad, giving.',
                    'Salad, making.',
                    'Salad, present.'
                ],
                correct: 'Salad, please.'
            },
            {
                questionText: 'このクイズに挑戦してくれた皆さんの幸運を祈っています！',
                questionAnswers: [
                    'Good luck to everyone who took this quiz!',
                    'Good luck to everyone where took this quiz!',
                    'Good luck to everyone what took this quiz!',
                    'Good luck to everyone how took this quiz!'
                ],
                correct: 'Good luck to everyone who took this quiz!'
            },
        ];
        // 1
        let quiz_count = 0;
        const allData03 = quizData03.length;
        
        start()
        function QuizDisplay(){
        const quizNumber03 = quizData03[quiz_count];
        // クイズデータ
        question.innerText = quizNumber03.questionText;
        submit0.innerText = quizNumber03.questionAnswers[0];
        submit1.innerText = quizNumber03.questionAnswers[1];
        submit2.innerText = quizNumber03.questionAnswers[2];
        submit3.innerText = quizNumber03.questionAnswers[3];
        questionDisplay.classList.add('start');
        };
        QuizDisplay();
        // 正誤判定
        const clickEvent = (e) => {
            if(quizData03[quiz_count].correct === e.target.innerText){
                yes()
                score++;
            } else {
                no()
            }
        }; 
        // 次の問題へ行く処理
        function remove(){  
            quiz_count++;
            if (quiz_count < allData03) {
                QuizDisplay()
            } else {
                end()
            }
            
            questionDisplay.classList.remove('judgment')
            correctDisplay.classList.remove('judgment');
            wrongDisplay.classList.remove('judgment');
            }; 
        // クリックイベント設定
        submit0.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit1.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit2.addEventListener('click', function(e){
            clickEvent(e)
        });
        submit3.addEventListener('click', function(e){
            clickEvent(e)
        });
        // 次の問題へ行くボタン
        function next(){
            correct.addEventListener('click', function(){
                remove()
            });
            wrong.addEventListener('click', function(){
                remove()
            });
        };
        next();
    };
    quiz03.addEventListener('click', function(){
        submited3()
    });
    // 4
    const submited4 = () => {
            const quizData04 = [
                {
                    questionText: '「とらどし」の次はなに年？',
                    questionAnswers: [
                        'さる',
                        'うさぎ',
                        'うし',
                        'たつ'
                    ],
                    correct: 'うさぎ'
                },
                {
                    questionText: '「白寿（はくじゅ）」とは何歳のこと？',
                    questionAnswers: [
                        '60歳',
                        '77歳',
                        '88歳',
                        '99歳'
                    ],
                    correct: '99歳'
                },
                {
                    questionText: '東京都庁があるのはどこ？',
                    questionAnswers: [
                        '千代田区',
                        '台東区',
                        '新宿区',
                        '中央区'
                    ],
                    correct: '新宿区'
                },
                {
                    questionText: '日本一長い川はどれ？',
                    questionAnswers: [
                        '信濃川',
                        '荒川',
                        '利根川',
                        '石狩川'
                    ],
                    correct: '信濃川'
                },
                {
                    questionText: '吾輩は猫である」の作者は誰？',
                    questionAnswers: [
                        '石川啄木',
                        '与謝野晶子',
                        '又吉直樹',
                        '夏目漱石'
                    ],
                    correct: '夏目漱石'
                },
                {
                    questionText: '奈良時代の次は何時代？',
                    questionAnswers: [
                        '飛鳥時代',
                        '平安時代',
                        '明治時代',
                        '室町時代'
                    ],
                    correct: '平安時代'
                },
                {
                    questionText: '「そうめん」と「ひやむぎ」の違いはなんでしょうか？',
                    questionAnswers: [
                        '製法',
                        '麺の太さ',
                        '麺の硬さ',
                        '関東では「そうめん」関西では「ひやむぎ」'
                    ],
                    correct: '麺の太さ'
                },
                {
                    questionText: '次の中で一番硬い鉛筆の芯はどれでしょうか？',
                    questionAnswers: [
                        'HB',
                        'G',
                        'B',
                        'H'
                    ],
                    correct: 'H'
                },
                {
                    questionText: '東京ディズニーランド・ディズニーシーがあるのはどこ？',
                    questionAnswers: [
                        '東京都',
                        '埼玉県',
                        '千葉県',
                        '神奈川県'
                    ],
                    correct: '千葉県'
                },
                {
                    questionText: 'スーパーなどで使われる「野菜と果物の総称」として正しいものはどれ？',
                    questionAnswers: [
                        '青果',
                        '菜果',
                        '野果',
                        '青物'
                    ],
                    correct: '青果'
                },
                {
                    questionText: '東京都にある空港はどれ？',
                    questionAnswers: [
                        '成田空港',
                        '羽田空港',
                        '中部国際空港',
                        '関西空港'
                    ],
                    correct: '羽田空港'
                },
                {
                    questionText: '世界三大珍味は「キャビア」「トリュフ」ともう１つはなに？',
                    questionAnswers: [
                        'フォアグラ',
                        'マツタケ',
                        'トリガラ',
                        'ウニ'
                    ],
                    correct: 'フォアグラ'
                },
                {
                    questionText: '60歳は還暦。では、70歳はなんでしょうか？',
                    questionAnswers: [
                        '卒寿',
                        '喜寿',
                        '傘寿',
                        '古希'
                    ],
                    correct: '古希'
                },
                {
                    questionText: '日本の初代内閣総理大臣は誰？',
                    questionAnswers: [
                        '小泉進次郎',
                        '伊藤博文',
                        '吉田茂',
                        '安倍晋三'
                    ],
                    correct: '伊藤博文'
                },
                {
                    questionText: '1年間の中で祝日が1日もない月はいくつある？',
                    questionAnswers: [
                        '1つ',
                        '2つ',
                        '3つ',
                        '4つ'
                    ],
                    correct: '1つ'
                },
                {
                    questionText: 'イギリスのお金の単位はどれ？',
                    questionAnswers: [
                        'ドル',
                        'ユーロ',
                        '円',
                        'ポンド'
                    ],
                    correct: 'ポンド'
                },
                {
                    questionText: '何歳からが高齢者？',
                    questionAnswers: [
                        '60歳',
                        '65歳',
                        '70歳',
                        '75歳'
                    ],
                    correct: '65歳'
                },
                {
                    questionText: '昭和時代は、昭和何年まで続いた？',
                    questionAnswers: [
                        '昭和63年',
                        '昭和64年',
                        '昭和65年',
                        '昭和66年'
                    ],
                    correct: '昭和64年'
                },
                {
                    questionText: '平成は平成何年まで続いた？',
                    questionAnswers: [
                        '平成28年',
                        '平成29年',
                        '平成30年',
                        '平成31年'
                    ],
                    correct: '平成31年'
                },
                {
                    questionText: '「金婚式」は、結婚何年目のお祝いでしょうか？',
                    questionAnswers: [
                        '20年目',
                        '30年目',
                        '40年目',
                        '50年目'
                    ],
                    correct: '50年目'
                },
                {
                    questionText: '次のうち、県名と県庁所在地名が同じ都道府県はどこか？',
                    questionAnswers: [
                        '栃木県',
                        '神奈川県',
                        '埼玉県',
                        '群馬県'
                    ],
                    correct: '埼玉県'
                },
                {
                    questionText: '大人気時代劇「暴れん坊将軍」の主人公のモデルとなったのは誰でしょうか？',
                    questionAnswers: [
                        '徳川家康',
                        '徳川家光',
                        '徳川吉宗',
                        '徳川慶喜'
                    ],
                    correct: '徳川吉宗'
                },
                {
                    questionText: '2024年（令和6年）からの新1000円札の肖像画は誰になるか？',
                    questionAnswers: [
                        '渋沢栄一',
                        '北里柴三郎',
                        '津田梅子',
                        '野口英世'
                    ],
                    correct: '北里柴三郎'
                },
                {
                    questionText: '「よみがえる」の正しい送り仮名は次のうちどれでしょうか？',
                    questionAnswers: [
                        '蘇る',
                        '蘇える',
                        '蘇がえる',
                        '蘇みがえる'
                    ],
                    correct: '蘇る'
                },
                {
                    questionText: 'いちごのつぶつぶは、次のうち何か？',
                    questionAnswers: [
                        '果実',
                        '花',
                        '茎',
                        '種'
                    ],
                    correct: '果実'
                },
                {
                    questionText: '次のうち「茶葉」が原料ではないお茶はどれ？',
                    questionAnswers: [
                        '麦茶',
                        '緑茶',
                        'ほうじ茶',
                        '紅茶'
                    ],
                    correct: '麦茶'
                },
                {
                    questionText: '次のうち一番古いテレビアニメはどれ？',
                    questionAnswers: [
                        '忍たま乱太郎',
                        '名探偵コナン',
                        'クレヨンしんちゃん',
                        'ポケットモンスター'
                    ],
                    correct: 'クレヨンしんちゃん'
                },
                {
                    questionText: 'スヌーピーが登場する漫画のタイトルは、次のうちどれ？',
                    questionAnswers: [
                        'ピーナッツ',
                        'アーモンド',
                        'ピスタチオ',
                        '銀杏'
                    ],
                    correct: 'ピーナッツ'
                },
                {
                    questionText: '為替相場において、「1ドル=100円」から「1ドル=110円」になりました。この現象を示す用語は次のうちどれ？',
                    questionAnswers: [
                        '円安',
                        'ドル安',
                        'ポンド安',
                        'ユーロ安'
                    ],
                    correct: '円安'
                },
                {
                    questionText: 'キリスト教においては最も重要とされる祭「イースター」とは、どのような日？',
                    questionAnswers: [
                        'イエス・キリストが誕生した日',
                        'イエス・キリストが処刑された日',
                        'イエス・キリストが復活した日',
                        'イエス・キリストが聖書を書いた日'
                    ],
                    correct: 'イエス・キリストが復活した日'
                },
                {
                    questionText: 'デザートを英語で表記するとどのようなスペルになる？',
                    questionAnswers: [
                        'deset',
                        'desert',
                        'desret',
                        'dessert'
                    ],
                    correct: 'dessert'
                },
                {
                    questionText: 'コオロギの耳はどこにある？',
                    questionAnswers: [
                        '顔の横',
                        'お尻',
                        '足',
                        'ない'
                    ],
                    correct: '足'
                },
                {
                    questionText: '学ラン」の「ラン」とはなに？',
                    questionAnswers: [
                        '花のラン',
                        'オランダ',
                        'ランダム',
                        'ランキング'
                    ],
                    correct: 'オランダ'
                },
                {
                    questionText: '世界一高いティッシュボックス、その1箱の値段はいくら？',
                    questionAnswers: [
                        '1000円',
                        '1万円',
                        '10万円',
                        '100万円'
                    ],
                    correct: '1万円'
                },
                {
                    questionText: 'カップ麺に入っている「かやく」を漢字で書くとどうなる？',
                    questionAnswers: [
                        '下薬',
                        '化薬',
                        '加薬',
                        '火薬'
                    ],
                    correct: '加薬'
                },
                {
                    questionText: '牛乳を温めた時にできる膜の正体はなに？',
                    questionAnswers: [
                        '砂糖',
                        'タンパク質',
                        '脂質',
                        'ミネラル'
                    ],
                    correct: 'タンパク質'
                },
                {
                    questionText: 'フルーツサンド発祥の国はどこ？',
                    questionAnswers: [
                        '日本',
                        'アメリカ',
                        'イタリア',
                        '韓国'
                    ],
                    correct: '日本'
                },
                {
                    questionText: '海上自衛隊は、毎週金曜日に必ずあるものを食べている、それはなに？',
                    questionAnswers: [
                        'クリームシチュー',
                        'カレー',
                        '寿司',
                        'うどん'
                    ],
                    correct: 'カレー'
                },
                {
                    questionText: '｢女の子だって暴れたい｣というコンセプトのもとで始まった女の子向けの大人気アニメシリーズは何？',
                    questionAnswers: [
                        'プリキュア',
                        'セーラームーン',
                        'アイカツ',
                        'たまごっち'
                    ],
                    correct: 'プリキュア'
                },
                {
                    questionText: '塾に通っている中学生の割合はどのくらい？',
                    questionAnswers: [
                        '20%',
                        '30%',
                        '40%',
                        '50%'
                    ],
                    correct: '50%'
                },
                {
                    questionText: '「中二病」という言葉を初めて使ったのは、ある芸能人です。それは誰？',
                    questionAnswers: [
                        '松本人志',
                        'ヒロミ',
                        '伊集院光',
                        '明石家さんま'
                    ],
                    correct: '伊集院光'
                },
                {
                    questionText: '東京ディズニーリゾートには、全部でいくつの隠れミッキーがある？',
                    questionAnswers: [
                        '50個',
                        '100個',
                        '200個',
                        'わからない'
                    ],
                    correct: 'わからない'
                },
                {
                    questionText: '太陽は東西南北どこから昇る？',
                    questionAnswers: [
                        '東',
                        '西',
                        '北',
                        '南'
                    ],
                    correct: '東'
                },
                {
                    questionText: '1987年に国鉄が分割民営化して誕生した企業といえば、その頭文字をとって何という？',
                    questionAnswers: [
                        'JC',
                        'JK',
                        'JR',
                        'JD'
                    ],
                    correct: 'JR'
                },
                {
                    questionText: '現在印刷中の日本のお札は何種類？',
                    questionAnswers: [
                        '1種類',
                        '2種類',
                        '3種類',
                        '4種類'
                    ],
                    correct: '3種類'
                },
                {
                    questionText: '日本の元号の中で最も長かった元号は？',
                    questionAnswers: [
                        '昭和',
                        '大化',
                        '寛永',
                        '明治'
                    ],
                    correct: '昭和'
                },
                {
                    questionText: '野球において2塁と3塁の間の守備のことを何という？',
                    questionAnswers: [
                        'ハーフ',
                        'ショート',
                        'シュート',
                        'レフトライン'
                    ],
                    correct: 'ショート'
                },
                {
                    questionText: '三権分立を構成する3つの権力に含まれないのは何？',
                    questionAnswers: [
                        '立法権',
                        '司法権',
                        '行政権',
                        '環境権'
                    ],
                    correct: '環境権'
                },
                {
                    questionText: 'オリンピックは何年に1回開催される？',
                    questionAnswers: [
                        '3年',
                        '4年',
                        '5年',
                        '6年'
                    ],
                    correct: '4年'
                },
                {
                    questionText: '笑っていいともの司会者は誰だった？',
                    questionAnswers: [
                        'とんねるず',
                        'ダウンタウン',
                        'タモリ',
                        '明石家さんま'
                    ],
                    correct: 'タモリ'
                },
            ];
            // 1
            let quiz_count = 0;
            const allData04 = quizData04.length;
            
            start()
            function QuizDisplay(){
            const quizNumber04 = quizData04[quiz_count];
            // クイズデータ
            question.innerText = quizNumber04.questionText;
            submit0.innerText = quizNumber04.questionAnswers[0];
            submit1.innerText = quizNumber04.questionAnswers[1];
            submit2.innerText = quizNumber04.questionAnswers[2];
            submit3.innerText = quizNumber04.questionAnswers[3];
            questionDisplay.classList.add('start');
            };
            QuizDisplay();
            // 正誤判定
            const clickEvent = (e) => {
                if(quizData04[quiz_count].correct === e.target.innerText){
                    yes()
                    score++;
                } else {
                    no()
                }
            }; 
            // 次の問題へ行く処理
            function remove(){  
                quiz_count++;
                if (quiz_count < allData04) {
                    QuizDisplay()
                } else {
                    end()
                }
                
                questionDisplay.classList.remove('judgment')
                correctDisplay.classList.remove('judgment');
                wrongDisplay.classList.remove('judgment');
                }; 
            // クリックイベント設定
            submit0.addEventListener('click', function(e){
                clickEvent(e)
            });
            submit1.addEventListener('click', function(e){
                clickEvent(e)
            });
            submit2.addEventListener('click', function(e){
                clickEvent(e)
            });
            submit3.addEventListener('click', function(e){
                clickEvent(e)
            });
            // 次の問題へ行くボタン
            function next(){
                correct.addEventListener('click', function(){
                    remove()
                });
                wrong.addEventListener('click', function(){
                    remove()
                });
            };
            next();
    };
    quiz04.addEventListener('click', function(){
        submited4()
    });
    // 5
    const submited5 = () => {
            const quizData05 = [
                {
                    questionText: ' NPB年間最多本塁打記録を持っている誰？',
                    questionAnswers: [
                        '王貞治',
                        '松井秀喜',
                        'バレンティン',
                        '村上宗隆'
                    ],
                    correct: 'バレンティン'
                },
                {
                    questionText: '現在NPB最長距離のホームランは推計何メートル？',
                    questionAnswers: [
                        '150メートル',
                        '160メートル',
                        '180メートル',
                        '200メートル'
                    ],
                    correct: '180メートル'
                },
                {
                    questionText: 'パ・リーグの「パ」は何の略？',
                    questionAnswers: [
                        'パシフィック',
                        'パントラル',
                        'パッシブ',
                        'パフェ'
                    ],
                    correct: 'パシフィック'
                },
                {
                    questionText: '札幌ドームの第一号ホームランを打った選手は？',
                    questionAnswers: [
                        '新庄剛志',
                        '小笠原道大',
                        '福留孝介',
                        '松中信彦'
                    ],
                    correct: '福留孝介'
                },
                {
                    questionText: '楽天イーグルスが初のリーグ優勝＆日本一になったのは何年？',
                    questionAnswers: [
                        '2003年',
                        '2009年',
                        '2013年',
                        'まだ優勝していない'
                    ],
                    correct: '2013年'
                },
                {
                    questionText: 'NPBで外国人を除くドラフト指名順位がもっとも低いホームラン王は誰？',
                    questionAnswers: [
                        '掛布雅之',
                        '新井貴浩',
                        '松中信彦',
                        '杉本裕太郎'
                    ],
                    correct: '杉本裕太郎'
                },
                {
                    questionText: '日本プロ野球史上で最多登板記録を持っているのは誰？',
                    questionAnswers: [
                        '久保田智之',
                        '藤川球児',
                        '岩瀬仁紀',
                        '平井克典'
                    ],
                    correct: '久保田智之'
                },
                {
                    questionText: '村上宗隆選手はドラフト何位で入団したか？',
                    questionAnswers: [
                        '1位',
                        '2位',
                        '3位',
                        '4位'
                    ],
                    correct: '1位'
                },
                {
                    questionText: 'この中で新人王を獲得していない選手は？',
                    questionAnswers: [
                        '田中将大',
                        'ダルビッシュ有',
                        '則本昂大',
                        '松坂大輔'
                    ],
                    correct: 'ダルビッシュ有'
                },
                {
                    questionText: 'イチローこと鈴木一郎の出身地は？',
                    questionAnswers: [
                        '静岡県',
                        '愛知県',
                        '三重県',
                        '兵庫県'
                    ],
                    correct: '愛知県'
                },
                {
                    questionText: '日本プロ野球で名球会入りを果たした外国人選手は誰でしょうか?',
                    questionAnswers: [
                        'ランディ・バース',
                        'アレックス・カブレラ',
                        'アレックス・ラミレス',
                        'タフィ・ローズ'
                    ],
                    correct: 'アレックス・ラミレス'
                },
                {
                    questionText: 'この選手の中に巨人に所属していなかった人がいます。誰でしょうか？',
                    questionAnswers: [
                        '村田兆治',
                        '原辰徳',
                        '武田一浩',
                        '丸佳浩'
                    ],
                    correct: '村田兆治'
                },
                {
                    questionText: 'この中でトリプルスリーを達成していないのは？',
                    questionAnswers: [
                        '秋山幸二',
                        '金本知憲',
                        '坂本勇人',
                        '山田哲人'
                    ],
                    correct: '坂本勇人'
                },
                {
                    questionText: 'オールスター戦で9打者連続三振を成し遂げたピッチャーは？',
                    questionAnswers: [
                        '江夏豊',
                        '江川卓',
                        '斎藤雅樹',
                        'ダルビッシュ有'
                    ],
                    correct: '江夏豊'
                },
                {
                    questionText: '日本で歴代3位のホームラン数を記録した選手は？',
                    questionAnswers: [
                        '野村克也',
                        '門田博光',
                        '落合博満',
                        '清原和博'
                    ],
                    correct: '門田博光'
                },
                {
                    questionText: '野村克也が監督をしていないチームは',
                    questionAnswers: [
                        'ヤクルト',
                        '大洋（DeNA）',
                        '阪神',
                        '南海（ソフトバンク）'
                    ],
                    correct: '大洋（DeNA）'
                },
                {
                    questionText: '一番長く現役を続けたプロ野球選手は？',
                    questionAnswers: [
                        '工藤公康',
                        '山本昌',
                        '中嶋聡',
                        '福留孝介'
                    ],
                    correct: '山本昌'
                },
                {
                    questionText: 'この中で阪神タイガースがリーグ優勝しなかった年は',
                    questionAnswers: [
                        '1985年',
                        '1992年',
                        '2003年',
                        '2005年'
                    ],
                    correct: '1992年'
                },
                {
                    questionText: '歴代でワンシーズン最も三振の数が多かった選手は誰でしょう？',
                    questionAnswers: [
                        'バース',
                        'ブライアント',
                        'エルドレッド',
                        '村上宗隆'
                    ],
                    correct: 'ブライアント'
                },
                {
                    questionText: 'NPBで最後の三冠王は誰？',
                    questionAnswers: [
                        '落合博満',
                        '松中信彦',
                        '柳田悠岐',
                        '村上宗隆'
                    ],
                    correct: '村上宗隆'
                },
                {
                    questionText: '松井秀喜がプロ入り初本塁打を打ったピッチャーは誰でしょうか?',
                    questionAnswers: [
                        '高津臣吾',
                        '佐々木主浩',
                        '大野豊',
                        '石井一久'
                    ],
                    correct: '高津臣吾'
                },
                {
                    questionText: 'NPBで通算登板数が1000試合超えている投手は？',
                    questionAnswers: [
                        '金田正一',
                        '江夏豊',
                        '岩瀬仁紀',
                        '久保田智之'
                    ],
                    correct: '岩瀬仁紀'
                },
                {
                    questionText: '1993年のオフにFA制度が導入されましたが、FAでの移籍第一号は誰でしょうか?',
                    questionAnswers: [
                        '落合博満',
                        '松永浩美',
                        '掛布雅之',
                        '古田敦也'
                    ],
                    correct: '松永浩美'
                },
                {
                    questionText: '原辰徳監督が初めて巨人の監督に就任したのはいつ？',
                    questionAnswers: [
                        '1995年',
                        '2002年',
                        '2006年',
                        '2019年'
                    ],
                    correct: '2002年'
                },
                {
                    questionText: '2010年「史上最大の下克上」と呼ばれ日本一を獲得したチームはどこでしょうか?',
                    questionAnswers: [
                        '横浜',
                        '広島',
                        'ロッテ',
                        'オリックス'
                    ],
                    correct: 'ロッテ'
                },
                {
                    questionText: '年間代打安打数の記録保持者は誰?',
                    questionAnswers: [
                        '立浪和義',
                        '八木裕',
                        '真中満',
                        '川端慎吾'
                    ],
                    correct: '真中満'
                },
                {
                    questionText: '日本シリーズ通算勝率が最も高いチームはどこ？',
                    questionAnswers: [
                        '巨人',
                        'DeNA',
                        'ヤクルト',
                        '西武'
                    ],
                    correct: 'DeNA'
                },
                {
                    questionText: '村田修一の自己最高シーズン本塁打数は？',
                    questionAnswers: [
                        '26本',
                        '36本',
                        '46本',
                        '56本'
                    ],
                    correct: '46本'
                },
                {
                    questionText: '元巨人の槙原寛己が甲子園で打たれた「バックスクリーン３連発」の時、打者三人に投じた投球数は全部で何球か？',
                    questionAnswers: [
                        '3球',
                        '5球',
                        '6球',
                        '8球'
                    ],
                    correct: '6球'
                },
                {
                    questionText: '日本プロ野球で高卒1年目選手の本塁打数が一番多い選手は誰？',
                    questionAnswers: [
                        '清原和博',
                        '松井秀喜',
                        '清宮幸太郎',
                        '村上宗隆'
                    ],
                    correct: '清原和博'
                },
                {
                    questionText: '2011年のシーズンオフにソフトバンクから巨人へと移籍して4年契約総額20億円の契約をした選手は？',
                    questionAnswers: [
                        '斉藤和巳',
                        '杉内俊哉',
                        '和田毅',
                        '新垣渚'
                    ],
                    correct: '杉内俊哉'
                },
                {
                    questionText: '両リーグ合わせて一番優勝回数が少ないチームは？',
                    questionAnswers: [
                        '広島',
                        '横浜',
                        '楽天',
                        '日本ハム'
                    ],
                    correct: '楽天'
                },
                {
                    questionText: '昨季ヤクルトは2ケタ勝利を挙げた投手ゼロで優勝しました。今年もここまだサイスニードの9勝が最高です。それでは2ケタ投手ゼロで優勝したもう一球団はどこでしょう？',
                    questionAnswers: [
                        '2000年、ダイエー',
                        '2001年、近鉄',
                        '1985年、阪神',
                        '2003年、ダイエー'
                    ],
                    correct: '2000年、ダイエー'
                },
                {
                    questionText: '原監督が日本一となった回数は？',
                    questionAnswers: [
                        '2回',
                        '3回',
                        '4回',
                        '5回'
                    ],
                    correct: '3回'
                },
                {
                    questionText: 'NPB打点歴代最高は誰が記録した？',
                    questionAnswers: [
                        '小鶴誠',
                        'ロバート・ローズ',
                        '今岡誠',
                        '浅村栄斗'
                    ],
                    correct: '小鶴誠'
                },
                {
                    questionText: '日本ファイターズが本拠地を北海道に移転したのは何年？',
                    questionAnswers: [
                        '1962年',
                        '1988年',
                        '1997年',
                        '2004年'
                    ],
                    correct: '2004年'
                },
                {
                    questionText: '日本人で初めてメジャーに行った人は？',
                    questionAnswers: [
                        '村上雅則',
                        '野茂英雄',
                        'イチロー',
                        '大谷翔平'
                    ],
                    correct: '村上雅則'
                },
                {
                    questionText: 'NPB歴代最多ホールド数の記録を持っているのは誰？',
                    questionAnswers: [
                        '江夏豊',
                        '大野豊',
                        '久保田智之',
                        '宮西尚生'
                    ],
                    correct: '宮西尚生'
                },
                {
                    questionText: 'NPB歴代シーズン最多打席数（打席に立った数）の記録を持っているのは誰？',
                    questionAnswers: [
                        '福本豊',
                        'イチロー',
                        '赤星憲広',
                        '西岡剛'
                    ],
                    correct: '西岡剛'
                },
                {
                    questionText: 'NPB歴代シーズン最多二塁打の記録を持っているのは誰？',
                    questionAnswers: [
                        '福本豊',
                        '立浪和義',
                        '谷佳知',
                        '島内宏明'
                    ],
                    correct: '谷佳知'
                },
                {
                    questionText: 'NPB歴代シーズン最多セーブの記録を持っているのは誰？',
                    questionAnswers: [
                        '佐々木主浩',
                        '岩瀬仁紀',
                        '藤川球児',
                        'サファテ'
                    ],
                    correct: 'サファテ'
                },
                {
                    questionText: '現在楽天に所属している岸孝之選手が最初に所属していたチームはどこ？',
                    questionAnswers: [
                        '阪神',
                        '西武',
                        'オリックス',
                        'ヤクルト'
                    ],
                    correct: '西武'
                },
                {
                    questionText: 'NPB歴代最多試合出場の記録を持っているのは誰？',
                    questionAnswers: [
                        '野村克也',
                        '谷繁元信',
                        '岩瀬仁紀',
                        '金本知憲'
                    ],
                    correct: '谷繁元信'
                },
                {
                    questionText: '日本人選手で歴代唯一100勝、、100セーブ、100ホールドを達成したのは誰？',
                    questionAnswers: [
                        '江夏豊',
                        '大野豊',
                        '斎藤明夫',
                        '上原浩治'
                    ],
                    correct: '上原浩治'
                },
                {
                    questionText: 'NPB歴代でトリプルスリー（3割、30本塁打、30盗塁）を複数回達成したのは誰？',
                    questionAnswers: [
                        '秋山幸二',
                        '金本知憲',
                        '山田哲人',
                        '松井稼頭央'
                    ],
                    correct: '山田哲人'
                },
                {
                    questionText: 'NPBにて3冠王（首位打者、本塁打王、打点王のタイトルを独占する）の達成回数が1番多いのは誰？',
                    questionAnswers: [
                        '野村克也',
                        '王貞治',
                        '落合博満',
                        '松中信彦'
                    ],
                    correct: '落合博満'
                },
                {
                    questionText: 'NPBにて日本一から最も遠ざかっているチームはどこ？',
                    questionAnswers: [
                        '広島',
                        '横浜',
                        '日本ハム',
                        'ロッテ'
                    ],
                    correct: '広島'
                },
                {
                    questionText: 'NPBにて日本シリーズ出場から最も遠ざかっているチームはどこ？',
                    questionAnswers: [
                        '巨人',
                        '阪神',
                        '西武',
                        '楽天'
                    ],
                    correct: '西武'
                },
                {
                    questionText: 'NPBにおける歴代最年長サイクルヒット（安打、二塁打、三塁打、本塁打の4種類を1試合でうつ）は誰？',
                    questionAnswers: [
                        '古田敦也',
                        '福留孝介',
                        'ロバート・ローズ',
                        '大島洋平'
                    ],
                    correct: '福留孝介'
                },
                {   
                    questionText: 'NPBにおける歴代最多サイクルヒットは誰？',
                    questionAnswers: [
                        '古田敦也',
                        '福留孝介',
                        'ロバート・ローズ',
                        '大島洋平'
                    ],
                    correct: 'ロバート・ローズ'
                },
            ];
            // 1
            let quiz_count = 0;
            const allData05 = quizData05.length;
            
            start()
            function QuizDisplay(){
            const quizNumber05 = quizData05[quiz_count];
            // クイズデータ
            question.innerText = quizNumber05.questionText;
            submit0.innerText = quizNumber05.questionAnswers[0];
            submit1.innerText = quizNumber05.questionAnswers[1];
            submit2.innerText = quizNumber05.questionAnswers[2];
            submit3.innerText = quizNumber05.questionAnswers[3];
            questionDisplay.classList.add('start');
            };
            QuizDisplay();
            // 正誤判定
            const clickEvent = (e) => {
                if(quizData05[quiz_count].correct === e.target.innerText){
                    yes()
                    score++;
                } else {
                    no()
                }
            }; 
            // 次の問題へ行く処理
            function remove(){  
                quiz_count++;
                if (quiz_count < allData05) {
                    QuizDisplay()
                } else {
                    end()
                }
                
                questionDisplay.classList.remove('judgment')
                correctDisplay.classList.remove('judgment');
                wrongDisplay.classList.remove('judgment');
                }; 
            // クリックイベント設定
            submit0.addEventListener('click', function(e){
                clickEvent(e)
            });
            submit1.addEventListener('click', function(e){
                clickEvent(e)
            });
            submit2.addEventListener('click', function(e){
                clickEvent(e)
            });
            submit3.addEventListener('click', function(e){
                clickEvent(e)
            });
            // 次の問題へ行くボタン
            function next(){
                correct.addEventListener('click', function(){
                    remove()
                });
                wrong.addEventListener('click', function(){
                    remove()
                });
            };
            next();
    };
    quiz05.addEventListener('click', function(){
        submited5()
    });



// 正解・不正解・結果発表画面 and クラスの付け外し
    // クイズへ行く処理
    function start(){
    display.classList.add('start')
    questionDisplay.classList.add('start')
    hamburger.classList.add('off')
    };
    // 正解だった場合の処理
    function yes(){
    questionDisplay.classList.remove('start');
    questionDisplay.classList.add('judgment');
    correctDisplay.classList.add('judgment');
    audio01();
    correct.innerText = '次の問題';
    };
    // 不正解だった場合の処理
    function no(){
    questionDisplay.classList.remove('start');
    questionDisplay.classList.add('judgment');
    wrongDisplay.classList.add('judgment');
    audio02()
    wrong.innerText = '次の問題';
    };
    // 結果発表
    function end(){
        resultDisplay.classList.add('end');
        questionDisplay.classList.remove('start');
        questionDisplay.classList.add('end')
        result.innerText = 'あなたの点数は' + score + '点だよ';
        if (score === 50) {
            resultDisplay.classList.add('gold')
        } else if (score >= 40) {
            resultDisplay.classList.add('silver')
        } else if (score >= 30) {
            resultDisplay.classList.add('bronze')
        } else if (score >= 1) {
            resultDisplay.classList.add('normal')
        } else {
            ;
        };
    };
    // 最初の画面に戻る処理
    function reset(){
    display.classList.remove('start')
    questionDisplay.classList.remove('start')
    hamburger.classList.remove('off')
    };


// BGN設定
window.addEventListener('load', () => {
    const audio = [
        new Audio("https://o289.github.io/Quiz50/audio/audio1.mp3"),
        new Audio("https://o289.github.io/Quiz50/audio/audio2.mp3"),
        new Audio("https://o289.github.io/Quiz50/audio/audio3.mp3"),
        new Audio("https://o289.github.io/Quiz50/audio/audio4.mp3"),
        new Audio("https://o289.github.io/Quiz50/audio/audio5.mp3"),
    ];
    // ボタンDOM操作
    const audio01 = document.getElementById('audio1');
    const audio02 = document.getElementById('audio2');
    const audio03 = document.getElementById('audio3');
    const audio04 = document.getElementById('audio4');
    const audio05 = document.getElementById('audio5');
    const audio_stop = document.getElementById('audio_stop');
    // 音楽のリセット
    function audioStop(){
        audio[0].pause();
        audio[0].currentTime = 0;
        audio[1].pause();
        audio[1].currentTime = 0;
        audio[2].pause();
        audio[2].currentTime = 0;
        audio[3].pause();
        audio[3].currentTime = 0;
        audio[4].pause();
        audio[4].currentTime = 0;
    }
    // 再生
    audio01.addEventListener('click', () => {
        audioStop();
        audio[0].play();
        audio[0].loop = true;
    });
    audio02.addEventListener('click', () => {
        audioStop();
        audio[1].play();
        audio[1].loop = true;
    });
    audio03.addEventListener('click', () => {
        audioStop();
        audio[2].play();
        audio[2].loop = true;
    });
    audio04.addEventListener('click', () => {
        audioStop();
        audio[3].play();
        audio[3].loop = true;
    });
    audio05.addEventListener('click', () => {
        audioStop();
        audio[4].play();
        audio[4].loop = true;
    });
    // 停止
    audio_stop.addEventListener('click', () => {
        audioStop()
    })
});
function audio01(){
    document.getElementById('correct_audio').currentTime = 0;
    document.getElementById('correct_audio').play();
};
function audio02(){
    document.getElementById('wrong_audio').currentTime = 0;
    document.getElementById('wrong_audio').play();
};

