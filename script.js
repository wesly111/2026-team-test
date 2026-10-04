/* =========================================================
   工具
========================================================= */

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function sample(array, count) {
    return shuffle(array).slice(0, count);
}


/* =========================================================
   四個分析向度
========================================================= */

const labels = {
    strategy: "策略",
    warmth: "暖心",
    rigor: "嚴謹",
    adapt: "應變"
};


/* =========================================================
   真實勞作案例題庫
   每次隨機抽 4 題
========================================================= */

const realQuestions = [
    {
        type: "real",
        tag: "📍 Day 1｜集合點名",

        text:
            "中午 12:10 勞作集合，預計有 15 位勞作生，但 12:20 時還有 3 個人沒出現，你會？",

        answers: [
            {
                trait: "warmth",
                text:
                    "先關心現場大家的狀況並準備開始，等遲到的同學到場後，再私下了解原因。"
            },
            {
                trait: "rigor",
                text:
                    "確認點名與時間紀錄，依規定記下未到狀況，同時照既定流程開始工作。"
            },
            {
                trait: "adapt",
                text:
                    "直接依目前到場人數調整今天的打掃範圍，讓現有人力先開始。"
            },
            {
                trait: "strategy",
                text:
                    "先重新排定今天最重要的區域與人力，確保即使少 3 個人，核心工作仍能完成。"
            }
        ]
    },

    {
        type: "real",
        tag: "📍 現場破冰與互動",

        text:
            "打掃到一半，發現有兩位勞作生站著發呆、聊天玩耍，你的溝通方式是？",

        answers: [
            {
                trait: "warmth",
                text:
                    "走過去先加入他們的話題，再自然把話題帶回今天的工作。"
            },
            {
                trait: "strategy",
                text:
                    "直接提醒剩餘時間與今天的目標，讓他們知道接下來要完成什麼。"
            },
            {
                trait: "adapt",
                text:
                    "換一種比較有趣的方式，例如設定小挑戰或重新調整工作節奏，讓大家重新投入。"
            },
            {
                trait: "rigor",
                text:
                    "清楚提醒工作標準與責任，確認他們知道自己負責的區域與完成條件。"
            }
        ]
    },

    {
        type: "real",
        tag: "📍 抱怨與情緒輔導",

        text:
            "勞作生抱怨：「天氣好熱，而且落葉好多，感覺掃這個根本沒有意義……」你會怎麼回應？",

        answers: [
            {
                trait: "warmth",
                text:
                    "先肯定他的感受，如果真的很熱，就讓大家短暫休息、補水，再一起繼續。"
            },
            {
                trait: "rigor",
                text:
                    "說明今天的工作內容、責任與安全原則，讓他知道為什麼仍需要完成。"
            },
            {
                trait: "adapt",
                text:
                    "重新調整工作方式，例如分區、輪替或設定短時間目標，降低疲勞感。"
            },
            {
                trait: "strategy",
                text:
                    "重新聚焦今天最重要的清掃目標，先完成主要區域，再視時間與體力調整其他工作。"
            }
        ]
    },

    {
        type: "real",
        tag: "📍 成果驗收與「做好」",

        text:
            "對於勞作教育中「有做」、「做完」與「做好」三者的定義，你的核心堅持是？",

        answers: [
            {
                trait: "warmth",
                text:
                    "成員願意投入、彼此合作，也能感受到被尊重，是很重要的成果。"
            },
            {
                trait: "strategy",
                text:
                    "在有限時間內完成最重要的區域，讓整體工作達到預期效果。"
            },
            {
                trait: "adapt",
                text:
                    "依現場人力與狀況彈性調整標準，確保最後能順利收尾。"
            },
            {
                trait: "rigor",
                text:
                    "除了完成工作，也要確認工具歸位、區域乾淨、安全與細節都符合標準。"
            }
        ]
    },

    {
        type: "real",
        tag: "📍 獨行型勞作生",

        text:
            "掃區內有一位總是戴著耳機、單獨工作、不太跟其他人說話的安靜勞作生，你習慣怎麼做？",

        answers: [
            {
                trait: "warmth",
                text:
                    "主動用簡單的話題跟他聊聊，慢慢讓他知道自己也是團隊的一份子。"
            },
            {
                trait: "strategy",
                text:
                    "觀察他的工作狀況，再安排適合他獨立完成、目標明確的區域。"
            },
            {
                trait: "adapt",
                text:
                    "不強迫他社交，只要工作能完成，就依他的節奏合作，必要時再調整。"
            },
            {
                trait: "rigor",
                text:
                    "清楚說明安全規定、工作範圍與完成標準，其他互動尊重他的個人空間。"
            }
        ]
    },

    {
        type: "real",
        tag: "📍 任務收尾",

        text:
            "今天的勞作任務順利結束後，你第一件最想做的事情通常是？",

        answers: [
            {
                trait: "warmth",
                text:
                    "感謝大家今天的付出，跟組員聊幾句，讓大家帶著好的氣氛離開。"
            },
            {
                trait: "rigor",
                text:
                    "確認掃區、工具、簽退與紀錄都完整無誤，再正式結束。"
            },
            {
                trait: "strategy",
                text:
                    "快速回顧今天目標有沒有完成，找出下次可以做得更有效率的地方。"
            },
            {
                trait: "adapt",
                text:
                    "觀察今天有哪些意外狀況，把有用的應變方式記下來，下次直接調整。"
            }
        ]
    }
];


/* =========================================================
   假想團隊案例題庫
   每次隨機抽 4 題
========================================================= */

const hypotheticalQuestions = [
    {
        type: "hypothetical",
        tag: "💭 新任務開始",

        text:
            "面對一個全新且時間緊迫的團隊任務，你的第一反應是？",

        answers: [
            {
                trait: "strategy",
                text:
                    "迅速釐清核心目標，規劃優先順序並分配分工。"
            },
            {
                trait: "warmth",
                text:
                    "關心大家目前的狀態，確認團隊有信心再開始。"
            },
            {
                trait: "rigor",
                text:
                    "先確認流程、時間表與品質標準，避免之後出錯。"
            },
            {
                trait: "adapt",
                text:
                    "先開始行動，同時保留彈性，遇到變化再快速調整。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 突發狀況",

        text:
            "執行過程中突然遇到重大變數，你會怎麼做？",

        answers: [
            {
                trait: "strategy",
                text:
                    "重新評估優先順序，快速決定新的方向。"
            },
            {
                trait: "warmth",
                text:
                    "先確認大家的情緒與狀況，避免團隊陷入混亂。"
            },
            {
                trait: "rigor",
                text:
                    "分析變數原因與影響範圍，再修改原本流程。"
            },
            {
                trait: "adapt",
                text:
                    "接受現況，快速找出現在最可行的替代方案。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 成員低潮",

        text:
            "團隊有人進度落後、失去動力時，你通常會？",

        answers: [
            {
                trait: "strategy",
                text:
                    "重新設定明確目標與期限，必要時調整工作分配。"
            },
            {
                trait: "warmth",
                text:
                    "先私下關心他遇到什麼困難，給予支持與鼓勵。"
            },
            {
                trait: "rigor",
                text:
                    "找出流程中的卡點，提供具體的方法與改善步驟。"
            },
            {
                trait: "adapt",
                text:
                    "給他一點空間，視情況調整工作量或合作方式。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 意見分歧",

        text:
            "團隊討論時大家意見分歧、爭執不下，你會？",

        answers: [
            {
                trait: "strategy",
                text:
                    "回到最終目標，必要時直接做出決定。"
            },
            {
                trait: "warmth",
                text:
                    "協助彼此理解不同觀點，尋找可以接受的折衷點。"
            },
            {
                trait: "rigor",
                text:
                    "整理各方案優缺點，用資料與邏輯進一步比較。"
            },
            {
                trait: "adapt",
                text:
                    "先讓情緒降溫，再視局勢提出新的融合作法。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 組織變動",

        text:
            "面對突如其來的組織架構調整或流程變更，你的態度是？",

        answers: [
            {
                trait: "rigor",
                text:
                    "先仔細分析新制度的優缺點，確認它是否真的有效。"
            },
            {
                trait: "strategy",
                text:
                    "先找出新制度對目標與工作效率會造成什麼影響。"
            },
            {
                trait: "adapt",
                text:
                    "接受變化，把它當成新的挑戰，邊做邊調整。"
            },
            {
                trait: "warmth",
                text:
                    "先關心夥伴能不能適應，一起度過磨合期。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 團隊角色",

        text:
            "你最希望自己在團隊中扮演什麼樣的角色？",

        answers: [
            {
                trait: "adapt",
                text:
                    "帶來新點子、敢嘗試不同做法的人。"
            },
            {
                trait: "warmth",
                text:
                    "支持大家、讓團隊氣氛更好的潤滑劑。"
            },
            {
                trait: "strategy",
                text:
                    "掌握方向、整合資源並帶大家往目標前進的人。"
            },
            {
                trait: "rigor",
                text:
                    "把細節、品質與流程顧好的可靠角色。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 最不喜歡的合作模式",

        text:
            "你最受不了哪一種工作環境或合作模式？",

        answers: [
            {
                trait: "adapt",
                text:
                    "所有事情都僵化不變，完全沒有嘗試新方法的空間。"
            },
            {
                trait: "strategy",
                text:
                    "一直開會討論，但沒有結論、沒有進度。"
            },
            {
                trait: "rigor",
                text:
                    "沒有邏輯與標準，大家想到什麼就做什麼。"
            },
            {
                trait: "warmth",
                text:
                    "充滿冷漠競爭，彼此缺乏尊重與同理心。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 新成員加入",

        text:
            "遇到新加入、比較安靜或不熟悉團隊的夥伴，你通常會？",

        answers: [
            {
                trait: "strategy",
                text:
                    "先讓他知道團隊目標、負責內容與期待。"
            },
            {
                trait: "warmth",
                text:
                    "主動聊天、邀請他參與，讓他更快融入團隊。"
            },
            {
                trait: "rigor",
                text:
                    "提供清楚完整的資料與流程，讓他可以自己理解。"
            },
            {
                trait: "adapt",
                text:
                    "不急著要求他融入，先觀察他的節奏再調整合作方式。"
            }
        ]
    },

    {
        type: "hypothetical",
        tag: "💭 做完與做好",

        text:
            "面對「做完」與「做好」之間的取捨，你比較傾向？",

        answers: [
            {
                trait: "strategy",
                text:
                    "先完成最重要的部分，再持續改善。"
            },
            {
                trait: "warmth",
                text:
                    "只要大家合作順利、過程舒服，不必追求完美。"
            },
            {
                trait: "rigor",
                text:
                    "細節與品質不能妥協，寧可多花一點時間。"
            },
            {
                trait: "adapt",
                text:
                    "依時間、資源與需求決定做到什麼程度最合理。"
            }
        ]
    }
];


/* =========================================================
   每次產生 8 題
   真實案例 4 題 + 假想案例 4 題
========================================================= */

function generateQuestions() {
    const realPart =
        sample(realQuestions, 4);

    const hypotheticalPart =
        sample(hypotheticalQuestions, 4);

    return shuffle([
        ...realPart,
        ...hypotheticalPart
    ]).map(question => {
        /*
          每題的選項也重新洗牌。
          trait 跟著選項一起走，所以不影響計分。
        */
        return {
            ...question,
            answers:
                shuffle(question.answers)
        };
    });
}


/* =========================================================
   正式作答題目
========================================================= */

let questions = [];

let current = 0;
let picks = [];

const profiles = {
    strategy: {
        title: "策略導向型",
        en: "The Direction Setter",
        emoji: "🎯",
        summary:
            "你習慣先看目標，再快速決定優先順序，帶大家往前走。",
        strengths: [
            "決策速度快，目標清楚",
            "推進力強，能快速建立方向",
            "面對混亂時容易抓住重點"
        ],
        blinds: [
            "可能太快做決定，忽略成員感受",
            "容易把速度放在細節之前",
            "高效率有時會讓別人感到壓力"
        ],
        growth:
            "做決定前，多確認一次成員狀況與關鍵細節，會讓你的帶隊更完整。"
    },

    warmth: {
        title: "暖心協作型",
        en: "The People Connector",
        emoji: "🤝",
        summary:
            "你會先顧好人與關係，讓團隊在有安全感的情況下一起往前走。",
        strengths: [
            "同理心強，容易建立信任",
            "擅長維持團隊氣氛",
            "能讓較安靜的成員感到被看見"
        ],
        blinds: [
            "可能過度在意和諧，不容易做強硬決定",
            "有時會延後處理衝突",
            "容易把別人的需求放在自己之前"
        ],
        growth:
            "在需要時練習更明確地設定界線、期限與責任分工。"
    },

    rigor: {
        title: "嚴謹執行型",
        en: "The Reliable Builder",
        emoji: "🧩",
        summary:
            "你習慣把流程、細節與品質顧好，讓事情穩穩地完成。",
        strengths: [
            "細節敏銳，品質穩定",
            "流程與風險意識高",
            "讓人覺得可靠、放心"
        ],
        blinds: [
            "可能花太多時間確認細節",
            "容易對自己或別人要求過高",
            "遇到模糊情況時可能較難快速決定"
        ],
        growth:
            "練習分辨「一定要做到」與「做到夠好即可」，能讓你兼顧品質與速度。"
    },

    adapt: {
        title: "沉穩應變型",
        en: "The Adaptive Anchor",
        emoji: "🛡️",
        summary:
            "你擅長在變動中維持冷靜，找到最務實、可行的處理方式。",
        strengths: [
            "抗壓性高，遇到變化不慌張",
            "臨場反應佳，能快速找替代方案",
            "給團隊穩定感"
        ],
        blinds: [
            "可能因為太隨機應變而前期規劃不足",
            "有時會避免正面衝突",
            "容易邊走邊看，忽略長期安排"
        ],
        growth:
            "保留彈性的同時，先準備最低限度的優先順序與備案，會更穩。"
    }
};

const $ = id => document.getElementById(id);

const show = id => {
    document
        .querySelectorAll(".screen")
        .forEach(screen => screen.classList.remove("active"));

    $(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

$("startBtn").onclick = () => {
    current = 0;
    picks = [];

    // 每次重新開始測驗，都重新抽題
    questions = generateQuestions();

    renderQ();
    show("quizScreen");
};


$("backBtn").onclick = () => {
    if (current === 0) {
        show("startScreen");
        return;
    }

    current--;
    picks.pop();

    renderQ();
};

$("restartBtn").onclick = () => {
    current = 0;
    picks = [];

    questions = generateQuestions();

    renderQ();
    show("quizScreen");
};

$("copyBtn").onclick = copyResult;
$("submitBtn").onclick = submitResult;

function renderQ() {
    const q =
        questions[current];

    const pct =
        Math.round(
            ((current + 1) /
                questions.length) *
            100
        );

    $("questionCount").textContent =
        `QUESTION ${String(current + 1).padStart(2, "0")}/${String(
            questions.length
        ).padStart(2, "0")}`;

    $("progressPercent").textContent =
        `${pct}%`;

    $("progressBar").style.width =
        `${pct}%`;

    $("questionTag").textContent =
        q.tag;

    $("questionText").textContent =
        q.text;

    $("answers").innerHTML =
        "";

    const letters =
        ["A", "B", "C", "D"];

    q.answers.forEach(
        (answer, index) => {
            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer";

            button.innerHTML = `
        <span class="answer-key">
          ${letters[index]}
        </span>

        <span>
          ${answer.text}
        </span>
      `;

            button.onclick =
                () => pick(
                    answer.trait
                );

            $("answers")
                .appendChild(
                    button
                );
        }
    );
}
function pick(trait) {
    picks.push(
        trait
    );
    if (
        current <
        questions.length - 1
    ) {
        current++;

        renderQ();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }
    renderResult();
    show(
        "resultScreen"
    );
}

function scores() {
    const scoreData = {
        strategy: 0,
        warmth: 0,
        rigor: 0,
        adapt: 0
    };

    picks.forEach(
        trait => {
            scoreData[trait]++;
        }
    );

    return scoreData;
}

function result(scoreData) {
    const max = Math.max(
        ...Object.values(scoreData)
    );

    const tops = Object
        .keys(scoreData)
        .filter(
            key => scoreData[key] === max
        );

    return {
        kind:
            tops.length === 1
                ? "single"
                : tops.length === 2
                    ? "mixed"
                    : "balanced",

        keys: tops
    };
}

function renderResult() {
    const scoreData = scores();
    const resultData = result(scoreData);

    const primaryProfile =
        profiles[resultData.keys[0]];

    if (resultData.kind === "single") {
        $("resultTitle").textContent =
            primaryProfile.title;

        $("resultEn").textContent =
            primaryProfile.en;

        $("resultEmoji").textContent =
            primaryProfile.emoji;

        $("resultSummary").textContent =
            primaryProfile.summary;
    } else if (resultData.kind === "mixed") {
        $("resultTitle").textContent =
            `${labels[resultData.keys[0]]} × ${labels[resultData.keys[1]]} 混合型`;

        $("resultEn").textContent =
            "Balanced Dual Style";

        $("resultEmoji").textContent =
            "🔀";

        $("resultSummary").textContent =
            `你的最高向度同時落在「${labels[resultData.keys[0]]}」與「${labels[resultData.keys[1]]}」，代表你會依情境切換不同的帶隊方式。`;
    } else {
        $("resultTitle").textContent =
            "平衡型";

        $("resultEn").textContent =
            "Balanced Team Style";

        $("resultEmoji").textContent =
            "⚖️";

        $("resultSummary").textContent =
            "你的分數分布較平均，代表你不容易只用單一方式處理所有情境。";
    }

    const selectedProfiles =
        resultData.keys
            .slice(0, 2)
            .map(key => profiles[key]);

    const strengths = [
        ...new Set(
            selectedProfiles.flatMap(
                profile => profile.strengths
            )
        )
    ].slice(0, 3);

    const blinds = [
        ...new Set(
            selectedProfiles.flatMap(
                profile => profile.blinds
            )
        )
    ].slice(0, 3);

    $("strengthList").innerHTML =
        strengths
            .map(item => `<li>${item}</li>`)
            .join("");

    $("blindList").innerHTML =
        blinds
            .map(item => `<li>${item}</li>`)
            .join("");

    $("growthText").textContent =
        resultData.kind === "single"
            ? primaryProfile.growth
            : "保留你的多元反應優勢，同時練習辨認：當下最需要的是目標、關係、品質，還是彈性。";

    $("scoreText").textContent =
        `策略 ${scoreData.strategy}｜暖心 ${scoreData.warmth}｜嚴謹 ${scoreData.rigor}｜應變 ${scoreData.adapt}`;

    drawRadar(scoreData);

    window.__lastResult = {
        scores: scoreData,
        result: resultData,
        title: $("resultTitle").textContent
    };
}

function drawRadar(scoreData) {
    const canvas = $("radar");
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    const centerX = width / 2;
    const centerY = height / 2 + 8;

    const radius = 128;

    const maxValue = Math.max(
        4,
        ...Object.values(scoreData)
    );

    const axes = [
        [
            "strategy",
            "策略",
            -Math.PI / 2
        ],
        [
            "warmth",
            "暖心",
            0
        ],
        [
            "rigor",
            "嚴謹",
            Math.PI / 2
        ],
        [
            "adapt",
            "應變",
            Math.PI
        ]
    ];

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    ctx.strokeStyle =
        "#d8dee8";

    for (
        let ring = 1;
        ring <= 4;
        ring++
    ) {
        const ringRadius =
            radius * ring / 4;

        ctx.beginPath();

        axes.forEach(
            ([, , angle], index) => {
                const x =
                    centerX +
                    Math.cos(angle) *
                    ringRadius;

                const y =
                    centerY +
                    Math.sin(angle) *
                    ringRadius;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
        );

        ctx.closePath();
        ctx.stroke();
    }

    axes.forEach(
        ([, label, angle]) => {
            ctx.beginPath();

            ctx.moveTo(
                centerX,
                centerY
            );

            ctx.lineTo(
                centerX +
                Math.cos(angle) *
                radius,
                centerY +
                Math.sin(angle) *
                radius
            );

            ctx.stroke();

            ctx.fillStyle =
                "#52627a";

            ctx.font =
                "22px sans-serif";

            ctx.textAlign =
                "center";

            ctx.textBaseline =
                "middle";

            ctx.fillText(
                label,
                centerX +
                Math.cos(angle) *
                (radius + 44),
                centerY +
                Math.sin(angle) *
                (radius + 30)
            );
        }
    );

    ctx.beginPath();

    axes.forEach(
        ([key, , angle], index) => {
            const valueRadius =
                radius *
                scoreData[key] /
                maxValue;

            const x =
                centerX +
                Math.cos(angle) *
                valueRadius;

            const y =
                centerY +
                Math.sin(angle) *
                valueRadius;

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
    );

    ctx.closePath();

    ctx.fillStyle =
        "rgba(79,70,229,.18)";

    ctx.fill();

    ctx.strokeStyle =
        "#4f46e5";

    ctx.lineWidth = 4;

    ctx.stroke();

    axes.forEach(
        ([key, , angle]) => {
            const valueRadius =
                radius *
                scoreData[key] /
                maxValue;

            const x =
                centerX +
                Math.cos(angle) *
                valueRadius;

            const y =
                centerY +
                Math.sin(angle) *
                valueRadius;

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                6,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#4f46e5";

            ctx.fill();
        }
    );
}

function txt() {
    const resultData =
        window.__lastResult;

    if (!resultData) {
        return "";
    }

    return `
我的小組長 Team Style：
${resultData.title}

策略 ${resultData.scores.strategy}
暖心 ${resultData.scores.warmth}
嚴謹 ${resultData.scores.rigor}
應變 ${resultData.scores.adapt}

這只是團隊情境中的偏好，
不是能力高低判定。
  `.trim();
}

async function copyResult() {
    try {
        await navigator.clipboard.writeText(
            txt()
        );

        $("copyBtn").textContent =
            "✓ 已複製";

        setTimeout(
            () => {
                $("copyBtn").textContent =
                    "複製測驗結果";
            },
            1500
        );
    } catch {
        alert(
            txt()
        );
    }
}

async function submitResult() {
    const endpoint =
        window.RESULTS_ENDPOINT || "";

    if (!endpoint) {
        $("submitStatus").textContent =
            "尚未設定 Google Sheet 回傳網址。";

        return;
    }

    const resultData =
        window.__lastResult;

    const payload = {
        timestamp:
            new Date().toISOString(),

        name:
            $("nameInput")
                .value
                .trim(),

        className:
            $("classInput")
                .value
                .trim(),

        result:
            resultData.title,

        strategy:
            resultData.scores.strategy,

        warmth:
            resultData.scores.warmth,

        rigor:
            resultData.scores.rigor,

        adapt:
            resultData.scores.adapt
    };

    $("submitStatus").textContent =
        "傳送中…";

    try {
        await fetch(
            endpoint,
            {
                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body:
                    JSON.stringify(
                        payload
                    )
            }
        );

        $("submitStatus").textContent =
            "✓ 已送出結果";
    } catch {
        $("submitStatus").textContent =
            "送出失敗，請稍後再試。";
    }
}