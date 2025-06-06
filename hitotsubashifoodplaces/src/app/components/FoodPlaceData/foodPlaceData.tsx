import { FoodPlace } from "../dataTypes/FoodPlace";

const FoodLocations: FoodPlace[] = [
    {
        id: 1,
        name: "鳥貴族 国立店",
        image: "/torikizoku.jpeg",
        coordinates: [139.4413, 35.6999],
        description: "焼き鳥や串焼きを提供する人気の居酒屋チェーン。",
        link: "https://www.torikizoku.co.jp/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 2,
        name: "サイゼリヤ 国立店",
        image: "/saizeriya.jpeg",
        coordinates: [139.4416, 35.6997],
        description: "お手頃価格のイタリアンと和風のフュージョン料理。",
        link: "https://www.saizeriya.co.jp/",
        cusine: ["italian", "japanese"],
    },
    {
        id: 3,
        name: "やまと寿司",
        image: "/yamatoSushi.jpeg",
        coordinates: [139.4442, 35.7004],
        description: "キャンパス近くの新鮮で美味しい寿司店。",
        link: "https://tabelog.com/tokyo/A1325/A132503/13046270/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 4,
        name: "中華そば とみ田",
        image: "/tomita.jpeg",
        coordinates: [139.4420, 35.7010],
        description: "濃厚な味わいのラーメンとつけ麺で有名。",
        link: "https://tabelog.com/tokyo/A1325/A132503/13053361/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 5,
        name: "ブルースカイコーヒー",
        image: "/blueSkyCoffee.jpeg",
        coordinates: [139.4407, 35.6995],
        description: "ハンドドリップコーヒーとペストリーが楽しめる居心地の良いカフェ。",
        link: "https://www.instagram.com/blueskycoffee_tokyo/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 6,
        name: "CoCo壱番屋 国立店",
        image: "/cocoIchibanya.jpeg",
        coordinates: [139.4425, 35.6998],
        description: "カスタマイズ可能な日本風カレーで有名。",
        link: "https://www.ichibanya.co.jp/",
        cusine: ["chinese", "french"],
    },
    {
        id: 7,
        name: "スシロー 国立店",
        image: "/sushiro.jpeg",
        coordinates: [139.4389, 35.7023],
        description: "グループにもおすすめの人気回転寿司チェーン。",
        link: "https://www.akindo-sushiro.co.jp/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 8,
        name: "ガスト 国立店",
        image: "/gusto.jpeg",
        coordinates: [139.4431, 35.7012],
        description: "和洋食の幅広いメニューを提供するカジュアルダイナー。",
        link: "https://www.skylark.co.jp/gusto/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 9,
        name: "Rベーカー 国立店",
        image: "/rbaker.jpeg",
        coordinates: [139.4436, 35.6996],
        description: "新鮮なパンやサンドイッチ、ドリンクが楽しめるベーカリーカフェ。",
        link: "https://www.rbaker.jp/",
        cusine: ["chinese", "japanese"],
    },
    {
        id: 10,
        name: "インド料理サプナ",
        image: "/sapna.jpeg",
        coordinates: [139.4401, 35.7009],
        description: "地元で人気のインドカレー、ナン、ランチセット。",
        link: "https://sapna.jp/",
        cusine: ["chinese", "japanese"],
    },
];

export default FoodLocations;
