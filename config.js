var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "迷你",      
        "今天是你的生日呀",  
        "这是我们在一起之后",
        "你的第一个生日",
        "也是你自己过的最后一个生日啦",
        "以后的每个生日",
        "我们都要一起过呀",
        "这可是",
        "wzy",
        "给",
        "wl",
        "许下的承诺呢",
        "你快答应呀",
        "我最喜欢你啦",
        "我们要永远永远在一起呀",
        "然后然后",
        "mua",
        "生日快乐！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "迷你": "./imgs/yellow.JPG",
        "今天是你的生日呀": "./imgs/eat.JPG",
        "这是我们在一起之后": "./imgs/together.JPG",
        //"你的第一个生日": "./imgs/yellow.JPG",
        //"也是你自己过的最后一个生日啦": "./imgs/yellow.JPG",
        //"以后的每个生日": "./imgs/yellow.JPG",
        "我们都要一起过呀": "./imgs/drink.JPG",
        //"这可是": "./imgs/yellow.JPG",
        "wzy": "./imgs/me.JPG",
        "wl": "./imgs/you.JPG",
        "许下的承诺呢": "./imgs/promise.JPG",
        "你快答应呀": "./imgs/agree.JPG",
        "我最喜欢你啦": "./imgs/love.JPG",
        "我们要永远永远在一起呀": "./imgs/forever.JPG",
        //"然后然后": "./imgs/birthday.jpg",
        "mua": "./imgs/mua.JPG",
        //"生日快乐！": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始啦",
        play: "你听呀",
        bannar_coming: "那这个呢？",
        balloons_flying: "点他点他点他",
        cake_fadein: "蛋糕？",
        light_candle: "还有还有",
        wish_message: "生日快乐！",
        story: "见字如面呀",
    }
};
