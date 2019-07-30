// express
const express = require('express');
const app = express();
const fs = require('fs');
app.listen(8080, '192.168.70.114', () => {
    console.log('服务器已启用，可通过 http://192.168.70.114:8080 访问')
})
// 处理静态资源  use(静态文件夹，静态文件夹的名字)
app.use('/assets', express.static('assets'))

// 动态资源---用ejs模板引擎
app.set('view engine', 'ejs');
app.get('/index', (req, res) => {
    fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
        if (err) console.log(err);
        let arr = JSON.parse(data);
        //  直接使用express生成动态结构
        res.render('index-ejs', {
            arr
        })
    })
})