const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Dùng body-parser để phân tích JSON
app.use(bodyParser.json());

// Giả lập cơ sở dữ liệu người dùng oke nhéo
const users = [
    { username: 'admin', password: '123456' },
    { username: 'user', password: 'password' }
];

// Xử lý yêu cầu đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Server lắng nghe ở cổng 3000
app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});
