const express = require('express');
const app = express();

app.get('/download/:file', (req, res) => {
    const file = req.params.file;

    // 添加逻辑，例如权限检查、记录下载次数等

    // 设置响应头，告诉浏览器要下载文件
    res.attachment(file);

    // 输出文件内容
    res.sendFile('./downloads/111.json' + file);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
