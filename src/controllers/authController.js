class  AuthController{
    login(req, res) {
        res.render("pages/login");
    }   
    check (req, res){
        const login = req.body.taikhoan;
        const password = req.body.matkhau;
    
        res.send('Tài khoản mật khẩu là: ' + login + ',' + password)
    }    
}
module.exports = new AuthController();

