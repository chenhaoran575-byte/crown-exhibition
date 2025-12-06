// 礼冠数据中心
const crownsData = {
    'ming_9': {
        title: "明孝端皇后九龙九凤冠",
        img: "images/ming-9.jpg", // ⚠️ 确保文件夹名为 images
        desc: "通高48.5厘米，重2320克。前部饰有九条金龙，口衔珠滴，下有八只点翠金凤，后部一金凤。点翠工艺与红蓝宝石交相辉映，行走时珠滴摇曳生姿。",
        quiz: {
            question: "这顶凤冠上一共有多少只金凤？",
            options: ["6只", "9只", "12只"],
            answer: "9只"
        }
    },
    'ming_12': {
        title: "明代十二龙九凤冠",
        img: "images/ming-12.jpg",
        desc: "出土于定陵，重2595克。正面顶部饰一龙，中层七龙，下部五凤。全冠共有宝石121块，珍珠3588颗。龙凤之间插饰翠云、翠叶，是明代工艺的巅峰之作。",
        quiz: {
            question: "这顶凤冠上镶嵌了多少颗珍珠？",
            options: ["100多颗", "1000多颗", "3500多颗"],
            answer: "3500多颗"
        }
    },
    'sui_tang': {
        title: "隋/唐 萧皇后花树冠",
        img: "images/sui-tang.jpg",
        desc: "花树冠一共有十三株花树。一般皇后等级为十二株，显然萧皇后等级极高。除花树外，发冠前方还有十二水滴形的“钿”，下坠步摇，尽显大唐气象。",
        quiz: {
            question: "萧皇后的花树冠上有多少株‘花树’？",
            options: ["9株", "12株", "13株"],
            answer: "13株"
        }
    },
    'qing': {
        title: "清代貂皮嵌珠皇后冬朝冠",
        img: "images/qing.jpg",
        desc: "清代，通高30厘米。冠圆式，貂皮为地，缀朱纬。顶以三只金累丝凤叠压，顶尖镶大东珠。朱纬周围缀金累丝凤七只。清代皇后朝冠不再饰龙，并使用了大量珍贵的东珠。",
        quiz: {
            question: "这顶冬朝冠主要的保暖材质是什么？",
            options: ["棉布", "貂皮", "丝绸"],
            answer: "貂皮"
        }
    }
};

// --- 交互逻辑 ---

function openModal(id) {
    const data = crownsData[id];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-img').classList.remove('zoomed');

        // 生成题目
        const quizSection = document.getElementById('quiz-section');
        const resultText = document.getElementById('quiz-result');
        resultText.innerText = "";
        
        if (data.quiz) {
            quizSection.style.display = "block";
            document.getElementById('quiz-question').innerText = data.quiz.question;
            const optionsDiv = document.getElementById('quiz-options');
            optionsDiv.innerHTML = "";
            
            data.quiz.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.innerText = opt;
                btn.onclick = function() {
                    if (opt === data.quiz.answer) {
                        resultText.innerText = "✅ 回答正确！";
                        resultText.style.color = "green";
                    } else {
                        resultText.innerText = "❌ 答错了，再看看介绍吧！";
                        resultText.style.color = "#8E2323";
                    }
                };
                optionsDiv.appendChild(btn);
            });
        } else {
            quizSection.style.display = "none";
        }
        document.getElementById('modal').style.display = "block";
    }
}

function openCraftModal() {
    document.getElementById('craft-modal').style.display = "block";
}

function closeModal(modalId) {
    if (!modalId) modalId = 'modal';
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

document.getElementById('modal-img').onclick = function() {
    this.classList.toggle('zoomed');
};

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

function searchCrowns() {
    const input = document.getElementById('search-input');
    const filter = input.value.toUpperCase();
    const gallery = document.getElementById('gallery');
    const cards = gallery.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        const h3 = cards[i].getElementsByTagName("h3")[0];
        const span = cards[i].getElementsByClassName("dynasty")[0];
        if ((h3.innerText + " " + span.innerText).toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filterDynasty(dynasty, btnElement) {
    const cards = document.getElementsByClassName('card');
    const btns = document.getElementsByClassName('filter-btn');
    for (let btn of btns) btn.classList.remove('active');
    btnElement.classList.add('active');
    for (let i = 0; i < cards.length; i++) {
        const span = cards[i].getElementsByClassName("dynasty")[0];
        if (dynasty === 'all' || span.innerText.indexOf(dynasty) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

window.onscroll = function() {
    const btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
