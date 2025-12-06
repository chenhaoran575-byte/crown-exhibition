// 礼冠数据中心
const crownsData = {
    'ming_9': {
        title: "明孝端皇后九龙九凤冠",
        img: "images/ming-9.jpg", 
        desc: "通高48.5厘米、冠高27厘米、径23.7厘米，重2320克。该冠是用漆竹扎成帽胎，面料以丝帛制成。前部饰有九条金龙，口衔珠滴，下有八只点翠金凤，后部也有一金凤，共九龙九凤。金凤凤首朝下，口衔珠滴，行走时如步摇般随步摇晃。翠凤下有3排红蓝宝石为中心的珠宝钿，点缀翠兰花叶，金翠交辉，富丽堂皇。"
    },
    'ming_12': {
        title: "明代十二龙九凤冠",
        img: "images/ming-12.jpg",
        desc: "冠总重2595克。正面顶部饰一龙，中层七龙，下部五凤；背面上部一龙，下部三龙；两侧上下各一凤。龙凤均口衔珠宝串饰，之间插饰翠云、翠叶。全冠共有宝石121块，珍珠3588颗，小红宝石18块。冠后面下部左右各嵌金龙首一个，龙口衔博鬓，左右各三扇，是明代工艺的巅峰之作。"
    },
    'sui_tang': {
        title: "隋/唐 萧皇后花树冠",
        img: "images/sui-tang.jpg",
        desc: "花树冠一共有十三株花树。一般根据等级不同，头冠上的花树数量会有所不同，皇后一般都会有十二株，显然萧皇后等级是超过皇后的。除花树外，发冠前方还有十二水滴形的“钿”，两侧有“博鬓”，带在头上满是金灿灿摇动的“花树”，非常富贵精美。"
    },
    'qing': {
        title: "清代貂皮嵌珠皇后冬朝冠",
        img: "images/qing.jpg",
        desc: "清代，通高30厘米，口径23厘米。冠圆式，貂皮为地，缀朱纬。顶以三只金累丝凤叠压，顶尖镶大东珠一，每层之间贯东珠各一，凤身均饰东珠各三，尾饰珍珠。朱纬周围缀金累丝凤七只。清代皇太后和皇后冬季所戴的朝冠形制与皇帝的冬朝冠基本一致，但装饰所用的珠宝更多。"
    }
};

// 下面的 openModal 等函数代码保持不变...

// 打开弹窗
function openModal(id) {
    const data = crownsData[id];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal').style.display = "block";
    }
}

// 关闭弹窗
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// 点击弹窗外部也可关闭
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 音乐控制
function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}