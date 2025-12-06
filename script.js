// 礼冠数据中心 (包含题目)
const crownsData = {
    'ming_9': {
        title: "明孝端皇后九龙九凤冠",
        // ⚠️如果你的文件夹是 image (不带s)，请手动改为 image/ming-9.jpg
        img: "images/ming-9.jpg", 
        desc: "通高48.5厘米，重2320克。前部饰有九条金龙，口衔珠滴，下有八只点翠金凤，后部一金凤，共九龙九凤。点翠工艺与红蓝宝石交相辉映，行走时珠滴摇曳生姿。",
        quiz: {
            question: "这顶凤冠上一共有多少只金凤？",
            options: ["6只", "9只", "12只"],
            answer: "9只"
        }
    },
    'ming_12': {
        title: "明代十二龙九凤冠",
        img: "images/ming-12.jpg",
        desc: "出土于定陵，重2595克。冠上饰十二龙九凤，龙凤口衔珠宝串饰。全冠共有宝石121块，珍珠3588颗。它是明代工艺的巅峰之作，现藏于中国国家博物馆。",
        quiz: {
            question: "这顶凤冠上镶嵌了多少颗珍珠？",
            options: ["100多颗", "1000多颗", "3500多颗"],
            answer: "3500多颗"
        }
    },
    'sui_tang': {
        title: "隋/唐 萧皇后花树冠",
        img: "images/sui-tang.jpg",
        desc: "花树冠饰有十三株花树。一般皇后为十二株，萧皇后因特殊地位使用了十三株。除花树外，还有博鬓、水滴形钿等装饰，金光璀璨，尽显大唐气象。",
        quiz: {
            question: "萧皇后的花树冠上有多少株‘花树’？",
            options: ["9株", "12株", "13株"],
            answer: "13株"
        }
    },
    'qing': {
        title: "清代貂皮嵌珠皇后冬朝冠",
        img: "images/qing.jpg",
        desc: "清代皇后冬季佩戴。以貂皮为地，缀朱纬。顶以三只金累丝凤叠压，镶大东珠。朱纬周围缀七只金凤。使用了大量东珠（淡水珍珠），彰显满清皇室特色。",
        quiz: {
            question: "这顶冬朝冠主要的保暖材质是什么？",
            options: ["棉布", "貂皮", "丝绸"],
            answer: "貂皮"
        }
    }
};

// 打开弹窗
function openModal(id) {
    const data = crownsData[id];
    if (data) {
        // 1. 填充基础信息
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-desc').innerText = data.desc;
        
        // 2. 重置图片大小 (防止上次放大后没缩回来)
        const imgEl = document.getElementById('modal-img');
        imgEl.classList.remove('zoomed');

        // 3. 生成问答逻辑
        const quizSection = document.getElementById('quiz-section');
        const resultText = document.getElementById('quiz-result');
        resultText.innerText = ""; // 清空上次结果

        if (data.quiz) {
            quizSection.style.display = "block"; // 显示答题区
            document.getElementById('quiz-question').innerText = data.quiz.question;
            
            const optionsDiv = document.getElementById('quiz-options');
            optionsDiv.innerHTML = ""; // 清空旧按钮

            // 创建选项按钮
            data.quiz.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.innerText = opt;
                btn.onclick = function() {
                    // 检查答案
                    if (opt === data.quiz.answer) {
                        resultText.innerText = "✅ 回答正确！眼力真好！";
                        resultText.style.color = "green";
                    } else {
                        resultText.innerText = "❌ 哎呀答错了，再看一眼介绍吧！";
                        resultText.style.color = "#8E2323";
                    }
                };
                optionsDiv.appendChild(btn);
            });
        } else {
            quizSection.style.display = "none"; // 没题目则隐藏
        }

        // 4. 显示弹窗
        document.getElementById('modal').style.display = "block";
    }
}

// 图片点击放大功能 (Toggle Zoom)
document.getElementById('modal-img').onclick = function() {
    this.classList.toggle('zoomed');
};

// 关闭弹窗
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// 点击弹窗背景关闭
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

// 音乐控制
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    
    if (music.paused) {
        music.play();
        btn.innerText = "🎵";
        btn.style.animationPlayState = "running";
    } else {
        music.pause();
        btn.innerText = "🔇";
        btn.style.animationPlayState = "paused";
    }
}
