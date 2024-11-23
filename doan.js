//các chính sách và điều khoảng
const DKSD = document.getElementById('DKSD')//điều khoảng sử dụng
const CSBM = document.getElementById('CSBM')//chính sách bảo mật
const CSVC = document.getElementById('CSVC')//chính sác vận chuyển
function open_DKSD() {
    if (DKSD.style.display == 'block') {
        DKSD.style.display = 'none'
        return;
    }
    quan_ly_user_close()
    close_tab()
    close_cart_tab()
    close_add_tab()
    close_edit_tab()
    close_bill_tab()
    thong_ke_close()
    page_thuc_don.style.display = "none";
    page_thanh_toan.style.display = "none";
    page_deal.style.display = "none";
    page_dot.style.display = "none";
    page_main.style.display = "none";
    DKSD.style.display = 'block';
    CSBM.style.display = 'none';
    CSVC.style.display = 'none';
}
function open_CSBM() {
    if (CSBM.style.display == 'block') {
        CSBM.style.display = 'none'
        return;
    }
    quan_ly_user_close()
    close_tab()
    close_cart_tab()
    close_add_tab()
    close_edit_tab()
    close_bill_tab()
    thong_ke_close()
    page_thuc_don.style.display = "none";
    page_thanh_toan.style.display = "none";
    page_deal.style.display = "none";
    page_dot.style.display = "none";
    page_main.style.display = "none";
    CSBM.style.display = 'block';
    DKSD.style.display = 'none';
    CSVC.style.display = 'none';
}
function open_CSVC() {
    if (CSVC.style.display == 'block') {
        CSVC.style.display = 'none'
        return;
    }
    quan_ly_user_close()
    close_tab()
    close_cart_tab()
    close_add_tab()
    close_edit_tab()
    close_bill_tab()
    thong_ke_close()
    page_thuc_don.style.display = "none";
    page_thanh_toan.style.display = "none";
    page_deal.style.display = "none";
    page_dot.style.display = "none";
    page_main.style.display = "none";
    CSVC.style.display = 'block';
    DKSD.style.display = 'none';
    CSBM.style.display = 'none';
}
function close_DKSD_CSBM_CSVC() {
    DKSD.style.display = 'none'
    CSBM.style.display = 'none'
    CSVC.style.display = 'none'
}//ghi chú

///////////////////////////
admin();
var slideIndex = 0;
showSlides();//trang ảnh động
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    setTimeout(showSlides, 4000);
}
//menu phân loại món trên giao diện user
function showMenu() {
    var List = [
        '<li class="items" id="items_burger" onclick="hien_thi_san_pham(`burger`)"><a href="#"><img src="./img/burger.jpg" class="thumnail"><p>Burger</p></a></li>',
        '<li class="items" id="items_combo" onclick="hien_thi_san_pham(`combo`)"><a href="#"><img src="./img/combo.jpg" class="thumnail"><p>Combo</p></a></li>',
        '<li class="items" id="items_chicken" onclick="hien_thi_san_pham(`garan`)"><a href="#"><img src="./img/garan.jpg" class="thumnail"><p>Gà rán</p></a></li>',
        '<li class="items" id="items_food" onclick="hien_thi_san_pham(`monankem`)"><a href="#"><img src="./img/monankem.jpg" class="thumnail" id="monankem"><p>Món ăn kèm</p></a></li>',
        '<li class="items" id="items_water"onclick="hien_thi_san_pham(`thucuong`)"><a href="#"><img src="./img/thucuong.jpg" class="thumnail" ><p>Thức uống</p></a></li>',
    ];
    var content = "";
    for (var i = 0; i < List.length; i++) {
        content += List[i];
    }
    document.getElementById("menuBar").innerHTML = content;
}//menu phân loại món trên giao diện admin tận dụng tài nguyên
function showMenu_admin() {
    var List = [
        '<li class="items" id="all" onclick="quan_ly_san_pham(`all`);sap_xep_product()"><a href="#"><img src="./img/list-stars.svg" class="thumnail"><p>Menu Chính</p></a></li>',
        '<li class="items" id="burger" onclick="quan_ly_san_pham(`burger`);sap_xep_product()"><a href="#"><img src="./img/burger.jpg" class="thumnail"><p>Burger</p></a></li>',
        '<li class="items" id="combo" onclick="quan_ly_san_pham(`combo`);sap_xep_product()"><a href="#"><img src="./img/combo.jpg" class="thumnail"><p>Combo</p></a></li>',
        '<li class="items" id="garan" onclick="quan_ly_san_pham(`garan`);sap_xep_product()"><a href="#"><img src="./img/garan.jpg" class="thumnail"><p>Gà rán</p></a></li>',
        '<li class="items" id="monankem" onclick="quan_ly_san_pham(`monankem`);sap_xep_product()"><a href="#"><img src="./img/monankem.jpg" class="thumnail" id="monankem"><p>Món ăn kèm</p></a></li>',
        '<li class="items" id="thucuong"onclick="quan_ly_san_pham(`thucuong`);sap_xep_product()"><a href="#"><img src="./img/thucuong.jpg" class="thumnail" ><p>Thức uống</p></a></li>',
    ];
    var content = "";
    for (var i = 0; i < List.length; i++) {
        content += List[i];
    }
    document.getElementById("menuBar_admin").innerHTML = content;
}
const el = document.getElementById("login");
if (el) {
    el.addEventListener("click", dangnhap)
}
let v = document.getElementById("login_form").classList;
let y = document.getElementById("page").classList;
let z = document.getElementById("register-form").classList;
function dangnhap() {
    v.remove("hide");
    v.add("appear-login");
    y.add("hide-page");
}
const exit = document.getElementById("iconX");
const exit2 = document.getElementById("iconX2");
exit.addEventListener("click", thoat);
exit2.addEventListener("click", thoat2);
var a = document.getElementById("register");
a.addEventListener("click", dangky);
function dangky() {
    v.remove("appear-login");
    v.add("hide");
    z.remove("hide");
    z.add("appear-register");
}
var b = document.getElementById("return_login");
//quay lại form đăng nhập
b.addEventListener("click", returnlog);
function returnlog() {
    v.remove("hide");
    v.add("appear-login")
    z.add("hide");
    z.remove("appear-register");
}
//thoát cái gì đó thì không biết (Nhật Nam commented)
function thoat() {
    v.add("hide");
    v.remove("appear-login");
    y.remove("hide-page");
}
function thoat2() {
    z.remove("appear-register");
    z.add("hide");
    y.remove("hide-page");
}
//sự kiện onclick gọi form đăng nhập đăng kí
document.getElementById("dangky").addEventListener("click", checkregister);
document.getElementById("dangky").addEventListener("click", signup);
//kiểm tra đăng ký bằng các biểu thức chính quy
function checkregister(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var idInput = document.getElementById("id_register");
    var passInput = document.getElementById("pass_register");
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phonenumb');
    var retypePassInput = document.getElementById("retype_pass");

    var nameCheck = document.getElementById("check-name");
    var idCheck = document.getElementById("check-id-register");
    var passCheck = document.getElementById("check-pass-register");
    var emailCheck = document.getElementById('check-email');
    var phoneCheck = document.getElementById('check-phone-num');
    var retypePassCheck = document.getElementById("check_retype");

    idCheck.innerText = "";
    passCheck.innerText = "";
    emailCheck.innerText = "";
    phoneCheck.innerText = "";
    retypePassCheck.innerText = "";
    var regexName = /\d|[@#$%^&*]/;
    if (regexName.test(nameInput.value)) {
        nameCheck.innerText = "Tên không phù hợp!";
        nameInput.focus();
        return false;
    }
    if (nameInput.value.length < 5) {
        nameCheck.innerText = "Tên phải trên 5 ký tự!";
        nameInput.focus();
        return false;
    }
    var regexMail = /^([a-z0-9]+)@([a-z]+)\.([a-z]{2,6})$/;
    var email = emailInput.value;
    if (email.length < 1) {
        emailCheck.innerText = "Email không được để trống!";
        emailInput.focus();
        return false;
    }
    if (!regexMail.test(email)) {
        emailCheck.innerText = "Email không hợp lệ!";
        emailInput.focus();
        return false;
    }
    var regexPhone = /^0[0-9]{9,10}$/;
    var phone = phoneInput.value;
    if (phone.length < 1) {
        phoneCheck.innerText = "Số điện thoại không được để trống!";
        phoneInput.focus();
        return false;
    }
    if (!regexPhone.test(phone)) {
        phoneCheck.innerText = "Số điện thoại không hợp lệ!";
        phoneInput.focus();
        return false;
    }
    if (idInput.value.length < 1) {
        idCheck.innerText = "Tên đăng nhập không được để trống !";
        idInput.focus();
        return false;
    }
    if (idInput.value.length < 5) {
        idCheck.innerText = "Độ dài tên đăng nhập phải từ 5-9 ký tự!";
        idInput.focus();
        return false;
    }
    var regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (passInput.value.length < 1) {
        passCheck.innerText = "Mật khẩu không được để trống!";
        passInput.focus();
        return false;
    }

    if (!regexPassword.test(passInput.value)) {
        passCheck.innerText = "Mật khẩu phải từ 8 kí tự, có một chữ hoa, kí tự đặc biệt, chữ số!";
        passInput.focus();
        return false;
    }


    var a = retypePassInput.value; var b = passInput.value;
    if (retypePassInput.value.length < 1) {
        retypePassCheck.innerText = "Bạn cần nhập lại mật khẩu!";
        retypePassInput.focus();
        return false;
    }
    if (a !== b) {
        retypePassCheck.innerText = "Nhập lại mật khẩu không khớp!";
        retypePassInput.focus();
        return false;
    }

    return true;
}
//form đăng ký
function signup(event) {
    if (checkregister(event) == true) {
        event.preventDefault();
        var date = new Date();
        var dateSignup = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phonenumb = document.getElementById("phonenumb").value;
        var username = document.getElementById("id_register").value;
        var password = document.getElementById("pass_register").value;
        var user = {
            name: name,
            email: email,
            phone_number: phonenumb,
            username: username,
            password: password,
            dateSignup: dateSignup
        };
        var storageUser = JSON.parse(localStorage.getItem('user'));
        for (var i = 0; i < storageUser.length; i++) {
            if (user.email == storageUser[i].email) {
                document.getElementById('check-email').innerText = "Email đã được sử dụng!";
                document.getElementById('email').focus();
                return false;
            }
            if (user.username == storageUser[i].username) {
                document.getElementById('check-id-register').innerText = "Tên đăng nhập đã có người sử dụng";
                document.getElementById("id_register").focus();
                return false;
            }
        }
        storageUser.push(user);
        localStorage.setItem('user', JSON.stringify(storageUser));
        alert("Đăng ký thành công! Hãy đăng nhập để mua sắm bạn nhé!");
        returnlog();
    }
    checkPermission();
}
//kiểm tra thông tin đăng nhập
function checkuser(event) {
    event.preventDefault();
    var username = document.getElementById("loginName").value;
    var password = document.getElementById("loginPass").value;
    var storageUser = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < storageUser.length; i++) {

        if (username == storageUser[i].username) {
            if (password == storageUser[i].password) {
                thoat();
                localStorage.setItem('userlogin', JSON.stringify(storageUser[i]));
                checkPermission()
                return;
            }
        }
    }
    document.getElementById("errorPassword").innerText = "Sai thông tin đăng nhập";

}
//kiểm tra user đăng nhập
function checkPermission() {

    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s = '';
        if (user.username == 'admin') {
            s = `<span style="display: none;" id="input_span" >
                    <li class="search"><input class="input" id="input" type="text" maxlength="25"
                            placeholder="tìm kiếm..." onkeyup="search()" >
                    </li>
                    <button id="searchbutton"><img src="./img/search.svg" alt=""
                            onclick="search()">
                    </button>
                </span>` +
                `<li><a href="#" class="hid" id="thuc_don_button" onclick="hien_thi_san_pham('all')" >Thực đơn </a></li>` +
                `<div class="cart_main"> <li onclick="open_cart_tab()"><a href="#"  class="menutop"> <img src="./img/shopping.svg" alt=""><p>Giỏ hàng</p></a></li></div>` +
                `<li><a href="#"class="hid" id="adminSetting" onclick="nameNlogout()"><img src="./img/tools.svg"></a></li>` +
                `<li id="user_name" class="hid"><button >${user.name}</button><button id="btnlogout" onClick="logOut(\'doan.html\')">Đăng Xuất</button></li>`
        }
        else {
            s = `<span style="display: none;" id="input_span" >
                    <li class="search"><input class="input" id="input" type="text" maxlength="25"
                            placeholder="tìm kiếm..." onkeyup="search()" >
                    </li>
                    <button id="searchbutton"><img src="./img/search.svg" alt=""
                            onclick="search()">
                    </button>
                </span>
                <li><a href="#" class="hid" id="thuc_don_button" onclick="hien_thi_san_pham('all')" >Thực đơn </a></li>
                <div class="cart_main"> <li onclick="open_cart_tab()"><a href="#"  class="menutop"> <img src="./img/shopping.svg" alt=""><p>Giỏ hàng</p></a></li></div>
                <li id="user_name" class="hid"><button onclick="nameNlogout_cs()" >${user.name}</button><button id="btnlogout" onClick="logOut(\'doan.html\')">LOG OUT</button></li>`
        }
        document.getElementById("toprightmenu").innerHTML = s;

    }
    location.reload;
}
//thanh công cụ user
function nameNlogout_cs() {
    document.getElementById("page").style.display = "none"
    document.getElementById("wrap_admin").style.display = "block"
    var user = JSON.parse(localStorage.getItem('userlogin'));

    document.getElementById('ulnav_admin').innerHTML =
        `<li class="nav_admin_li"><a href="doan.html" id="logo_admin"><img src="./img/logo-burger-1.png" alt=""></a></li>` +
        `<li class="nav_admin_li"><a href="doan.html">trang chủ</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="open_user_bill()" id="don_hang" >Quản lý đơn hàng</a></li>` +
        `<li class="nav_admin_li" id="nameUser">${user.name}<button id="btnLogout" onclick="logOut()">Đăng xuất</button></li>`;

}
function logOut(url) {
    localStorage.removeItem('userlogin');
    location.href = url;
}
//tài khoảng admin
function admin() {
    if (localStorage.getItem('user') == null) {
        var storageUser = [];
        var user = { name: 'Hà Trọng Nghĩa', email: 'mrtrongnghia204@gmail.com', phone_number: '0921465660', username: 'admin', password: 'admin', dateSignup: '12/5/2024' };
        var user2 = { name: 'Trần Ngô Nhật Nam', email: 'zzbestnamzz@gmail.com', phone_number: '0394852401', username: 'admin', password: 'adminnam', dateSignup: '12/5/2024' };
        storageUser.push(user);
        storageUser.push(user2);
        localStorage.setItem('user', JSON.stringify(storageUser));
    }
}
//thanh công cụ quản lý của admin
function nameNlogout() {
    close_DKSD_CSBM_CSVC()
    document.getElementById("page").style.display = "none"
    document.getElementById("wrap_admin").style.display = "block"
    var user = JSON.parse(localStorage.getItem('userlogin'));

    document.getElementById('ulnav_admin').innerHTML =
        `<li class="nav_admin_li"><a href="doan.html" id="logo_admin"><img src="./img/logo-burger-1.png" alt=""></a></li>` +
        `<li class="nav_admin_li"><a href="doan.html">trang chủ</a></li>` +
        `<li class="nav_admin_li" onclick="quan_ly_san_pham('all')" id="quan_ly_san_pham"><a href="#">Quản lý sản phẩm</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="open_bill_tab()" id="quan_ly_don_hang" >Quản lý đơn hàng</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="open_user_tab()" id="quan_ly_user" >Quản lý khách hàng</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="thong_ke_open()" id="thong_ke" >Thống Kê</a></li>` +
        `<li class="nav_admin_li" id="nameUser" onclick="nameNlogout()">${user.name}<button id="btnLogout" onclick="logOut()">Đăng xuất</button></li>`;

}
//đăng xuất
function logOut(url) {
    localStorage.removeItem('userlogin');
    location.href = './doan.html';
}
//khai báo cái thẻ để t65 cho việc thao tác đống mở tap
var page_deal = document.querySelector('#hoanh_chicken')
var page_thuc_don = document.querySelector('#thuc_don')
var page_main = document.querySelector('.slideshow-container')
var page_dot = document.querySelector('.dot_div')
var page_thanh_toan = document.querySelector(".page_main_thanh_toan")
showMenu();
checkPermission();
// Hàm để lấy dữ liệu từ tệp JSON và lưu vào Local Storage
function lay_du_lieu() {
    const storedData = localStorage.getItem("productData");

    if (storedData === null) {
        const jsonFilePath = './data.json';

        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('jsonData', JSON.stringify(data));
                console.log('Dữ liệu đã được lưu vào Local Storage.');
            })
            .catch(error => {
                console.error('Lỗi khi đọc tệp JSON:', error);
            });
    } else {
        const jsonData = JSON.parse(storedData);
        localStorage.setItem('jsonData', JSON.stringify(jsonData));
    }
}
lay_du_lieu();
//Hàm để lấy dữ liệu từ local storage đã lưu trước đó
function lay_du_lieu_tu_local_storage() {
    lay_du_lieu();
    const storedData = localStorage.getItem("jsonData");
    return storedData ? JSON.parse(storedData) : [];
}
const number_of_item = 6;// biến phân trang với số lượng item mỗi trang là 6
let page_number = document.getElementById("page_number").value;//lấy số trang của trang thực đơn
function page_next() {
    close_tab();
    const item = lay_du_lieu_tu_local_storage();
    if (item) {
        let limit = parseInt(item.length / number_of_item);
        var pageNumber = document.getElementById("page_number");
        pageNumber.value = parseInt(pageNumber.value) + 1;
        if (pageNumber.value > limit) {
            if (item.length % number_of_item == 0) {
                pageNumber.value = limit;
            }
            else {
                pageNumber.value = limit + 1;
            }
        }
        page_number = pageNumber.value;
        hien_thi_san_pham('all');
    }
}
function page_back() {
    close_tab();
    var pageNumber = document.getElementById("page_number");
    pageNumber.value = parseInt(pageNumber.value) - 1;
    if (pageNumber.value < 1) {
        pageNumber.value = 1;
    }
    page_number = pageNumber.value;
    hien_thi_san_pham('all');
}
let number_of_each_item;//lấy số lượng của mỗi loại sản phẩm để thuận tiện cho việc phân trang
let page_number_deal = document.getElementById("page_number_deal").value;//lấy số trang của trang phân loại
function page_next_deal() {
    close_tab();
    if (number_of_each_item) {
        let limit = parseInt(number_of_each_item / number_of_item);
        var pageNumber = document.getElementById("page_number_deal");
        pageNumber.value = parseInt(pageNumber.value) + 1;
        if (pageNumber.value > limit) {
            if (number_of_each_item % number_of_item == 0) {
                pageNumber.value = limit;
            } else {
                pageNumber.value = limit + 1;
            }
        }
        page_number_deal = pageNumber.value;
        hien_thi_san_pham(currentType);
    }
}
function page_back_deal() {
    close_tab();
    var pageNumber = document.getElementById("page_number_deal");
    pageNumber.value = parseInt(pageNumber.value) - 1;
    if (pageNumber.value < 1) {
        pageNumber.value = 1;
    }
    page_number_deal = pageNumber.value;
    hien_thi_san_pham(currentType);
}
//Hàm hiển thị sản phẩm theo phân loại
function hien_thi_san_pham(type) {
    //thể loại hiện tại
    if (currentType !== type.toString()) {
        currentType = type.toString();
        page_number_deal = 1;
    }
    close_DKSD_CSBM_CSVC()
    sap_xep_product();
    close_tab();
    const data = lay_du_lieu_tu_local_storage();
    let item = [];
    //nếu phân loại là tất cả
    if (type.toString() === "all") {
        open_search_input();
        let menuList = document.querySelector('#thuc_don .page_main_container .menu_list_ul');
        item = data;
        var page = parseInt(page_number);
        for (let i = 0; i < item.length; i++) {
            if (i == 0) {
                menuList.innerHTML = "";
            }
            const addcontent = document.createElement('li');
            addcontent.classList.add('menu_list_li');
            addcontent.innerHTML = `
                    <div class="menu_list_product" id=${item[i].type.toString() + item[i].id.toString()} >
                        <a href="#" class="menu_list_img">
                            <img src="${item[i].image}" onclick="get_order()" alt="${item[i].title}">
                        </a>
                        <h4 class="menu_list_title"><a href="#" onclick="get_order()">${item[i].title.toUpperCase()}</a></h4>
                        <p class="menu_list_decrible">${item[i].content}</p>
                        <div class="menu_list_bottom">
                            <h3 class="menu_price">${item[i].price}</h3>
                            <div class="menu_action">
                                <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                            </div>
                        </div>
                    </div>
                `;
            menuList.appendChild(addcontent);
            page_thuc_don.style.display = "block";
            page_thanh_toan.style.display = "none";
            page_deal.style.display = "none";
            page_dot.style.display = "none";
            page_main.style.display = "none";

        }
        for (let i = 0; i < item.length; i++) {
            let listItems = document.querySelectorAll('#thuc_don #content_page li');
            if (i >= number_of_item * (page - 1) && i < number_of_item * page) {
                listItems[i].style.display = "block";
            } else {
                listItems[i].style.display = "none";
            }
        }
    }
    //nếu phân loại là 1 loại duy nhất
    else {
        var page = parseInt(page_number_deal);
        close_search_input();
        let menuList = document.querySelector('#hoanh_chicken .page_main_container .menu_list_ul');
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].type == type)
                item.push(data[i])
        }
        number_of_each_item = item.length;
        for (let i = 0; i < item.length; i++) {
            if (i == 0) {
                menuList.innerHTML = ``;
            }
            const addcontent = document.createElement('li');
            addcontent.classList.add('menu_list_li');
            addcontent.innerHTML = `
                <div class="menu_list_product" id=${item[i].type.toString() + item[i].id.toString()} >
                    <a href="#" class="menu_list_img">
                        <img src="${item[i].image}" onclick="get_order()" alt="${item[i].title}">
                    </a>
                    <h4 class="menu_list_title"><a href="#" onclick="get_order()">${item[i].title.toUpperCase()}</a></h4>
                    <p class="menu_list_decrible">${item[i].content}</p>
                    <div class="menu_list_bottom">
                        <h3 class="menu_price">${item[i].price}</h3>
                        <div class="menu_action">
                            <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                        </div>
                    </div>
                </div>
            `;
            menuList.appendChild(addcontent);
            page_thuc_don.style.display = "none";
            page_thanh_toan.style.display = "none";
            page_deal.style.display = "block";
            page_dot.style.display = "none";
            page_main.style.display = "none";
        }
        for (let i = 0; i < item.length; i++) {
            let listItems = document.querySelectorAll('#hoanh_chicken #content_page li');
            if (i >= number_of_item * (page - 1) && i < number_of_item * page) {
                listItems[i].style.display = "block";
            } else {
                listItems[i].style.display = "none";
            }
        }
    }
}
//------------------------------------------------------------------------------page1
//------------------------------------------------------------------------------deal
//đóng mở tab sản phẩm
function close_tab() {
    document.getElementById("img_close").style.display = "none";
}
function open_tab() {
    document.getElementById("img_close").style.display = "block";
    close_DKSD_CSBM_CSVC();
}
//lấy data từ sản phẩm
function get_element(menu_list_product) {
    var img_src = menu_list_product.querySelector(".menu_list_img img").src;
    var title = menu_list_product.querySelector(".menu_list_title a").innerText;
    var decrible = menu_list_product.querySelector(".menu_list_decrible").innerText;
    var price = menu_list_product.querySelector(".menu_price").innerText;
    document.getElementById("combo_deal").innerText = title;
    document.getElementById("content_deal").innerText = decrible;
    document.getElementById("img_deal").src = img_src;
    document.getElementById("Sum_money").innerText = price;
    open_tab();
    price_parents = price;
}
//thêm vào giỏ hàng
function get_order() {
    if (isLogin() == true) {
        var listItem = event.target.closest('.menu_list_li');
        document.getElementById("count").value = 1;
        get_element(listItem);
    }
}
//---------------------------------------------------------------------------------xu ly deal
//tăng giảm số lượng khi chọn món hàng
function change_release() {
    var count = document.getElementById('count');
    var new_price = parseFloat(price_parents.replace(" VND", ""));
    count.value = (parseInt(count.value)) + 1;
    if (count.value < 0 || count.value % 1 != 0)
        count.value = 1;
    if (count.value > 100)
        count.value = 99;
    new_price = new_price * count.value;
    document.getElementById("Sum_money").innerText = (new_price * 1000).toLocaleString() + " VND";
}
function change_input() {
    var count = document.getElementById('count');
    new_price = parseFloat(price_parents.replace(" VND", ""));
    if (count.value < 0 || count.value % 1 != 0) count.value = 1;
    if (count.value > 100) count.value = 99;
    new_price = new_price * count.value;
    document.getElementById("Sum_money").innerText = (new_price * 1000).toLocaleString() + " VND";
}
function change_reduce() {
    var count = document.getElementById('count');
    new_price = parseFloat(price_parents.replace(" VND", ""));
    count.value = (parseInt(count.value)) - 1;
    if (count.value < 0)
        count.value = 1;
    if (count.value > 100)
        count.value = 99;
    new_price = new_price * count.value;
    document.getElementById("Sum_money").innerText = (new_price * 1000).toLocaleString() + " VND";
}
//--------------------------------------------------------------------------------------xu ly in trang
//---------------------------------------------------------------------------------------xu ly gio hang
//xem giỏ hàng nhỏ
function open_cart_tab() {
    if (currentType) {
        hien_thi_san_pham(currentType)
    }
    close_DKSD_CSBM_CSVC()
    var cart_tab = document.getElementById("cart");
    var check = document.querySelector(".cart_list_table");
    if (check.innerHTML.trim() == "") {
        cart_tab.style.display = "none";
        return;
    }
    if (cart_tab.style.display === "block") {
        cart_tab.style.display = "none";
        return;
    }
    cart_tab.style.display = "block";
    return;
}
function close_cart_tab() {
    var cart_tab = document.getElementById("cart");
    cart_tab.style.display = "none";
}
//tăng số lượng sản phẩm
function change_cart_release() {
    var element = event.target.closest('.cart_list_action');
    var count = element.querySelector(".cart_money_deal .cart_count");
    var price = parseFloat(element.querySelector(".cart_sum_money .cart_sum_money_p ").innerText.replace(" VND", ""));

    count.value = parseInt(count.value) + 1;

    if (count.value < 1) {
        count.value = 1;
    }
    if (count.value > 100) count.value = 99;
    var new_price = price * count.value;
    if (new_price < 0) {
        new_price = 0;
    }
    tmp_monney();
}
function change_cart_input() {
    var element = event.target.closest('.cart_list_action');
    var count = element.querySelector(" .cart_money_deal .cart_count");
    var price = parseFloat(element.querySelector(" .cart_sum_money .cart_sum_money_p ").innerText.replace(" VND", ""));

    if (count.value < 1 || count.value % 1 != 0) {
        count.value = 1;
    }
    if (new_price < 0) {
        new_price = 0;
    }
    if (count.value > 100) count.value = 99;
    var new_price = price * count.value;
    tmp_monney();
}
function change_cart_reduce() {
    var element = event.target.closest('.cart_list_action');
    var count = element.querySelector(" .cart_money_deal .cart_count");
    var price = parseFloat(element.querySelector(".cart_sum_money .cart_sum_money_p ").innerText.replace(" VND", ""));

    count.value = (parseInt(count.value)) - 1;
    if (count.value < 1) {
        count.value = 1;
    }
    var new_price = price * count.value;
    if (new_price < 0) {
        new_price = 0;
    }
    tmp_monney();
}
//tiền tạm tính trong giỏ hàng chưa bao gồm ship
function tmp_monney() {
    var tmp_price = 0;
    var len = document.querySelectorAll(".cart_sum_money_p");
    var coun = document.querySelectorAll(".cart_count");
    for (var i = 0; i < len.length; i++) {
        tmp_price += parseFloat(len[i].innerText.replace(" VND", "")) * coun[i].value;
    }
    document.getElementById("cart_tmp_cal_money").innerText = (tmp_price * 1000).toLocaleString() + " VND";
    document.getElementById("thanh_toan_tmp_cal_money").innerText = (tmp_price * 1000).toLocaleString() + " VND";
    return tmp_price * 1000;
}

let abc = 0;
//lấy thông tin từ sản phẩm và tạo sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
    const click_add = document.getElementById('buy_deal');
    const menuList = document.querySelector('.cart_list_table');

    click_add.addEventListener('click', function () {
        var img_src = document.querySelector(".chicken_deal .img_deal img").src;
        var title = document.querySelector(".content .combo_deal").innerText;
        var count = document.querySelector(".content .money_deal .count").value;
        var price = document.querySelector(".content .Sum_money h3").innerText;
        var ghi_chu = document.querySelector('.input_deal').value;
        price = (parseFloat(price.replace(/[^\d]/g, '')) / count).toLocaleString() + " VND"
        var money = parseFloat(price.replace(/[^\d]/g, ''));
        abc = abc + money;
        var tam_tinh = new Intl.NumberFormat('vi-VN').format(abc) + ' VND';
        document.getElementById('cart_tmp_cal_money').innerHTML = tam_tinh;
        const addcontent = document.createElement('tr');
        addcontent.classList.add("cart_list_table_tr")
        addcontent.innerHTML = `
            <td style="width: 25%;">
                <img style="border-radius: 10px;" class="cart_img" src="${img_src}" alt="">
            </td>
            <td class="Bill_check">
                <p class="cart_title">${title}</p>
                <div class="cart_list_action">
                    <div class="cart_money_deal">
                        <button class="cart_reduce" onclick="change_cart_reduce()">
                            <div>-</div>
                        </button>
                        <input type="text" class="cart_count" id="cart_count" value="${count}" onkeyup="change_cart_input()">
                        <button class="cart_release" onclick="change_cart_release()">
                            <div>+</div>
                        </button>
                    </div>
                    <div class="ghi_chu" style="visibility: hidden;"> ${ghi_chu}</div>
                    <p class="cart_update" >
                        <i class="cart_update_icon"></i>
                    </p>
                    <div class="cart_sum_money">
                        <h4 class="cart_sum_money_p" id="cart_sum_money" >${price}</h4>
                    </div>
                    <button class="cart_delete"  onclick="deleteRow(this)">
                    <img src="./img/trash.svg" alt="Delete">
                    </button>
                </div>
            </td>
        `;
        menuList.appendChild(addcontent);
        tmp_monney();
    });
});
//----------------------------------------------------------------xu ly thanh toan bự
//xác nhận thanh toán
function check_final() {
    var inputaccress = document.getElementById("accress_order").value;
    if (inputaccress.trim() === "") {
        document.getElementById("error").innerHTML = "*Bắt buộc";
        document.getElementById("accress_order").focus;
        inputaccress.focus
        return;
    }
    else {
        document.getElementById("error").innerHTML = "";
        thanh_toan();
        alert("Mua hàng thành công")
        window.location.href = "doan.html";
    }
}
//mở trang thanh toán
function open_payment() {
    close_DKSD_CSBM_CSVC();
    document.getElementById("page_main_thanh_toan").style.display = "block";
    document.getElementById("page_payment").style.display = "block";
    page_deal.style.display = "none";
    page_main.style.display = "none";
    page_dot.style.display = "none";
    page_thuc_don.style.display = "none";
    close_search_input();
    close_cart_tab();
    close_tab();
    tong_cong();
}
//lấy thông tin từ giỏ hàng nhỏ cho thanh toán
document.addEventListener("DOMContentLoaded", function () {
    const click_add = document.getElementById('thanh_toan');
    const menuList = document.getElementById('no-data');


    click_add.addEventListener('click', function () {
        var titleElements = document.querySelectorAll(".Bill_check");
        var items = [];
        menuList.innerHTML = "";
        titleElements.forEach(function (titleElement) {
            var title = titleElement.querySelector(".cart_title").innerText;
            var count = titleElement.querySelector(".cart_count").value;
            var price = titleElement.querySelector(".cart_sum_money_p").innerText;
            var money = parseFloat(price.replace(/[^\d]/g, ''));
            var thanh_tien = (money * count).toLocaleString('vi-VN') + " VND";
            var ghi_chu = "";
            if (titleElement.querySelector(".ghi_chu")) {
                ghi_chu = titleElement.querySelector(".ghi_chu").textContent
            }
            items.push({
                title: title,
                price: price,
                count: count,
                thanh_tien: thanh_tien,
                ghi_chu: ghi_chu
            });
        });
        let textareaElement = document.getElementById("ghi_chu_deal");


        let ghi_chu_tong = "";

        items.forEach(function (item) {

            const addcontent = document.createElement('tr');
            addcontent.innerHTML = `
                <td id="bill_title" >${item.title}</td>
                <td id="bill_price" style="color: rgb(243, 124, 2);text-align: center;">${item.price}</td>
                <td id="bill_count" style="text-align: center;">${item.count}</td>
                <td id="bill_thanh_tien" style="color: rgb(243, 124, 2);text-align: right;">${item.thanh_tien}</td>
            `;

            // Thêm hàng vào bảng
            menuList.appendChild(addcontent);

            ghi_chu_tong += item.ghi_chu.toString();
        });

        textareaElement.value = ghi_chu_tong;


        tmp_monney();
    });
});
//xóa 1 món trong giỏ hàng nhỏ
function deleteRow(button) {
    var row = button.closest("tr");
    if (row) {
        row.parentNode.removeChild(row);
    }
    tmp_monney();
}
//tính phí vận chuyển
function van_chuyen() {
    var choose = parseInt(document.querySelector("#hinh_thuc_van_chuyen").value);
    var phi = document.getElementById("phi_van_chuyen");
    switch (choose) {
        case 1: phi.innerText = 10000 + " VND";
            break;
        case 2: phi.innerText = 20000 + " VND";
            break;
        case 3: phi.innerText = 30000 + " VND";
            break;
    }
    return parseFloat(phi.innerText.replace(" VND", ""));
}
//tổng giá trị đơn hàng
function tong_cong() {
    return document.getElementById("tong_cong").innerText = (tmp_monney() + van_chuyen()).toLocaleString() + " VND";
}
//người dùng hủy đơn hàng
function deleteRow_user_bill(button) {
    const row = button.closest("tr");
    const username = row.querySelector("#user_bill_name").textContent;
    const billid = row.id.toString();

    const billKey = "allBills";
    const allBills = JSON.parse(localStorage.getItem(billKey)) || {};

    if (allBills.hasOwnProperty(username)) {
        const userBills = allBills[username];
        for (let i = 0; i < userBills.length; i++) {
            if (userBills[i].trang_thai && userBills[i].trang_thai.toString() !== "Đã hủy" && userBills[i].timeid === billid) {
                alert("Đã xác nhận đơn không thể hủy")
                return;
            }
        }
        if (!aks_before_delete()) {
            return;
        }
        const updatedBills = userBills.filter(item => item.timeid.toString() !== billid);
        allBills[username] = updatedBills;
        localStorage.setItem(billKey, JSON.stringify(allBills));
        console.log("Đã xóa hóa đơn thành công.");
        open_user_bill();
    }
    row.remove();
}
//xác nhận hủy đơn hoặc mua lại
function aks_before_cancel(value, timeid, ngay_mua) {
    const allBills = JSON.parse(localStorage.getItem("allBills")) || {};
    const userName = JSON.parse(localStorage.getItem("userlogin")) || {};
    const username = userName.username;

    let confirmationMessage = "";
    let newStatus = "";
    if (value === 5) {
        confirmationMessage = "Bạn có chắc chắn muốn hủy không?";
        newStatus = "Đã hủy";
    } else if (value === 1) {
        confirmationMessage = "Xác nhận mua không?";
        newStatus = "Vừa đặt";
    }

    if (confirmationMessage && newStatus) {
        const result = window.confirm(confirmationMessage);

        if (result) {
            alert("Thực hiện thành công!");
            updateBillStatus(allBills[username], timeid, ngay_mua, newStatus);
            localStorage.setItem("allBills", JSON.stringify(allBills));
            return true;
        } else {
            alert("Thao tác đã bị hủy.");
            return false;
        }
    } else {
        alert("Giá trị không hợp lệ hoặc không được hỗ trợ.");
        return false;
    }
}

function updateBillStatus(bills, timeid, ngay_mua, newStatus) {
    console.log(bills)
    if (bills && Array.isArray(bills)) {
        for (let i = 0; i < bills.length; i++) {
            const bill = bills[i];
            if (bill && bill.timeid === timeid && bill.Ngay_mua === ngay_mua) {
                bill.trang_thai = newStatus;
                localStorage.setItem("allBills", JSON.stringify(bills)); // Cập nhật local storage
            }
        }
    }
}

//người dùng xem lại đơn hàng đã đặt
function open_user_bill() {
    close_DKSD_CSBM_CSVC();
    document.getElementById("page_bill").style.display = "block";
    const menuList = document.querySelector(".box_bill .data_bill");
    var rows = menuList.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
        rows[i].parentNode.removeChild(rows[i]);
    }

    const allBills = JSON.parse(localStorage.getItem("allBills")) || {};
    const userName = JSON.parse(localStorage.getItem("userlogin")) || {};
    const nameuser = userName.username;

    if (userName) {
        let previousTimeId = null;
        const userBills = allBills[userName.username];

        for (let j = 0; j < userBills.length; j++) {
            const billItem = userBills[j];
            if (billItem.timeid !== previousTimeId) {
                const addcontent = document.createElement("tr");
                addcontent.classList.add("infor_bill_user");
                addcontent.id = billItem.timeid.toString();
                const totalPrice = toTal(userBills, billItem.timeid);
                menuList.appendChild(addcontent);
                if (billItem.trang_thai && billItem.trang_thai == "Đã hủy") {
                    addcontent.innerHTML = `
                <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${nameuser}</th>
                <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}">
                    <button onClick="openListBill(${j},'${billItem.timeid}')">...</button>
                </th>
                <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                <th rowspan="1" style="width: 10%;" id="trang_thai_user">
                     <select onchange="Billstatus('${billItem.timeid}','${billItem.Ngay_mua}')" name="choose" id="id${billItem.timeid.toString()}" class="trang_thai">
                     <option value=5>Đã hủy</option>
                     <option value=1>Mua lại</option>
                    </select>
                </th>
                <th class="box_last" rowspan="1" style="width: 7.5%;">
                    <button class="delete-button" onclick="deleteRow_user_bill(this)">
                        <img src="./img/trash.svg" style="width:20px;height:20px;">
                    </button>
                </th>
            `;
                }
                else if (billItem.trang_thai && billItem.trang_thai != "Vừa đặt") {
                    addcontent.innerHTML = `
                <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${nameuser}</th>
                <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}">
                    <button onClick="openListBill(${j},'${billItem.timeid}')">...</button>
                </th>
                <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                <th rowspan="1" style="width: 10%;" id="trang_thai_user">
                    ${billItem.trang_thai || `<select onchange="Billstatus('${billItem.timeid}','${billItem.Ngay_mua}')" name="choose" id="id${billItem.timeid.toString()}" class="trang_thai">
                    <option value=1>Vừa đặt</option>
                    <option value=5>Đã hủy</option>
                    </select>`}
                </th>
                <th class="box_last" rowspan="1" style="width: 7.5%;">
                    <button class="delete-button" onclick="deleteRow_user_bill(this)">
                        <img src="./img/trash.svg" style="width:20px;height:20px;">
                    </button>
                </th>
            `;
                } else {
                    addcontent.innerHTML = `
                <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${nameuser}</th>
                <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}">
                    <button onClick="openListBill(${j},'${billItem.timeid}')">...</button>
                </th>
                <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                <th rowspan="1" style="width: 10%;" id="trang_thai_user">
                    <select onchange="Billstatus('${billItem.timeid}','${billItem.Ngay_mua}')" name="choose" id="id${billItem.timeid.toString()}" class="trang_thai">
                    <option value=1>Vừa đặt</option>
                    <option value=5>Đã hủy</option>
                    </select>
                </th>
                <th class="box_last" rowspan="1" style="width: 7.5%;">
                    <button class="delete-button" onclick="deleteRow_user_bill(this)">
                        <img src="./img/trash.svg" style="width:20px;height:20px;">
                    </button>
                </th>
            `;
                }

                if (menuList && addcontent) {
                    menuList.appendChild(addcontent);
                }
            }
            previousTimeId = billItem.timeid;
        }
    }
}
//đăng nhập để mua hàng
function isLogin() {
    if (localStorage.getItem('userlogin') == null) {
        alert("Bạn cần phải đăng nhập để mua hàng!");
        dangnhap();
        return false;
    }

    return true;
}
//các hàm chức năng tim kiem thong tin sản phẩm và phân trang
function open_search_input() {
    close_DKSD_CSBM_CSVC()
    document.getElementById("input_span").style.display = "flex";
}
function close_search_input() {
    document.getElementById("input_span").style.display = "none";
}
function page_next_search() {
    close_tab();
    const item = search_item;
    if (item) {
        let limit = parseInt(item.length / number_of_item);
        var pageNumber = document.getElementById("page_number");
        pageNumber.value = parseInt(pageNumber.value) + 1;
        if (pageNumber.value > limit) {
            if (item.length % number_of_item == 0) {
                pageNumber.value = limit;
            }
            else {
                pageNumber.value = limit + 1
            }
        }
        page_number = pageNumber.value;
    }
    show_item_search()
}
function page_back_search() {
    close_tab();
    var pageNumber = document.getElementById("page_number");
    pageNumber.value = parseInt(pageNumber.value) - 1;
    if (pageNumber.value < 1) {
        pageNumber.value = 1;
    }
    page_number = pageNumber.value;
    show_item_search()
}
let search_item;
//thực hiện phân trang
function show_item_search() {
    let item = search_item;
    let menuList = document.querySelector('#thuc_don .page_main_container .menu_list_ul');
    var page = parseInt(page_number);
    for (let i = 0; i < item.length; i++) {
        if (i == 0) {
            menuList.innerHTML = "";
        }
        const addcontent = document.createElement('li');
        addcontent.classList.add('menu_list_li');
        addcontent.innerHTML = `
                    <div class="menu_list_product" id=${item[i].type.toString() + item[i].id.toString()} >
                        <a href="#" class="menu_list_img">
                            <img src="${item[i].image}" onclick="get_order()" alt="${item[i].title}">
                        </a>
                        <h4 class="menu_list_title"><a href="#" onclick="get_order()">${item[i].title.toUpperCase()}</a></h4>
                        <p class="menu_list_decrible">${item[i].content}</p>
                        <div class="menu_list_bottom">
                            <h3 class="menu_price">${item[i].price}</h3>
                            <div class="menu_action">
                                <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                            </div>
                        </div>
                    </div>
                `;
        menuList.appendChild(addcontent);
        page_thuc_don.style.display = "block";
        page_thanh_toan.style.display = "none";
        page_deal.style.display = "none";
        page_dot.style.display = "none";
        page_main.style.display = "none";

    }
    for (let i = 0; i < item.length; i++) {
        let listItems = document.querySelectorAll('#thuc_don #content_page li');
        if (i >= number_of_item * (page - 1) && i < number_of_item * page) {
            listItems[i].style.display = "block";
        } else {
            listItems[i].style.display = "none";
        }
    }

}
//tìm kiếm item bằng key
function search() {
    close_tab();
    var searchTerm = document.getElementById('input').value.toLowerCase();
    var listItems = lay_du_lieu_tu_local_storage();
    const menuList = document.getElementById("pagination");
    menuList.innerHTML = ''
    search_item = [];
    page_number = 1;
    if (searchTerm && listItems.length > 0) {

        for (var i = 0; i < listItems.length; i++) {
            var search = searchTerm.toLowerCase();
            var type = listItems[i].type.toLowerCase();
            var price = listItems[i].price.toLowerCase();
            var title = listItems[i].title.toLowerCase();
            var content = listItems[i].content.toLowerCase();
            if (type.includes(search) || price.includes(search) || title.includes(search) || content.includes(search)) {
                search_item.push(listItems[i]);
            }
        }
        menuList.innerHTML =
            `<button id="left" onclick="page_back_search()"></button>
            <input id="page_number" value=1></input>
            <button id="right" onclick="page_next_search()"></button>`
        show_item_search();
    } else {
        menuList.innerHTML =
            `<button id="left" onclick="page_back()"></button>
            <input id="page_number" value=1></input>
            <button id="right" onclick="page_next()"></button>`
        hien_thi_san_pham('all')
    }
}
// các hàm sắp xếp sản phẩm
function sap_xep_product() {
    const productList = lay_du_lieu_tu_local_storage();
    productList.sort((a, b) => a.id - b.id);
    localStorage.setItem("productData", JSON.stringify(productList));
    lay_du_lieu();
}
function sap_xep_product_price_up() {
    const productList = lay_du_lieu_tu_local_storage();
    productList.sort((a, b) => parseFloat(a.price.replace(" VND", "")) - parseFloat(b.price.replace(" VND", "")));
    localStorage.setItem("productData", JSON.stringify(productList));
    console.log("Dữ liệu đã được sắp xếp theo giá tăng dần");
    quan_ly_san_pham(currentType);
}
function sap_xep_product_price_down() {
    const productList = lay_du_lieu_tu_local_storage();
    productList.sort((a, b) => parseFloat(b.price.replace(" VND", "")) - parseFloat(a.price.replace(" VND", "")));
    localStorage.setItem("productData", JSON.stringify(productList));
    console.log("Dữ liệu đã được sắp xếp theo giá giảm dần");
    quan_ly_san_pham(currentType);
}
//quản lý sản phẩm cho admin
let number_of_each_item_admin = 6;
let number_of_item_admin;
let currentPage = 1;
let currentType;
//kiểm tra id sản phẩm 
function check_id_product(type) {
    const productList = lay_du_lieu_tu_local_storage();
    let i = 1;
    const data = [];
    for (let j = 0; j < productList.length; j++) {
        if (productList[j] && productList[j].type == type) {
            data.push(productList[j])
        }
    }
    while (i <= 100) {
        const existsInProductList = data.some(item => item !== null && item.id === i);

        if (!existsInProductList) {
            return i;
        }

        i++;
    }
    return -1;
}
//gáng id cho sản phẩm
function set_id_product() {
    var kind_of_product = document.querySelector("#choose_product");
    var product_id = document.getElementById("productId");

    var type = kind_of_product.value;

    var id = check_id_product(type);
    if (id == -1) {
        alert("Sản phẩm đã vượt quá số lượng (100)");
    } else {
        product_id.value = id;
    }

}
//hàm xuất thông tin sảng phẩm// comment hết đống này đuối quá
function quan_ly_san_pham(type) {
    close_bill_tab();
    quan_ly_user_close();
    close_edit_tab();
    thong_ke_close();
    close_add_tab();
    showMenu_admin();
    close_DKSD_CSBM_CSVC();
    if (currentType !== type.toString()) {
        currentType = type.toString();
        currentPage = 1;
    }
    const page = document.getElementById("quan_ly_san_pham_child");
    const menuList = document.querySelector('.new-cart-list-table');
    page.style.display = "block"
    const startIndex = (currentPage - 1) * number_of_each_item_admin;// mỗi trang có 6 sản phẩm
    const endIndex = startIndex + number_of_each_item_admin;
    const data = lay_du_lieu_tu_local_storage();
    let item = [];
    if (type == `all`) {
        item = data;
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].type == type)
                item.push(data[i])
        }
    }
    const itemsOnCurrentPage = item.slice(startIndex, endIndex);
    menuList.innerHTML = '';
    number_of_item_admin = item.length;
    for (let i = 0; i < itemsOnCurrentPage.length; i++) {
        deal = itemsOnCurrentPage[i];
        const addcontent = document.createElement('tr');
        addcontent.classList.add("new-cart-list-table-tr")
        addcontent.innerHTML = `
            <td class="new-cart-list-img">
                <img style="border-radius: 10px;" class="new-cart-img" src="${deal.image}" alt="">
            </td>
            <td class="new-Bill-check">
                <p class="new-cart-title" id="${deal.type.toString() + deal.id.toString()}">${deal.title}</p>
            </td>
            <td class="cart-sum-money">
                <h4 class="new-cart-sum-money" id="new-cart-sum-money" >${deal.price}</h4>
            </td>
            <td >
                <button class="new-cart-update"  onclick="edit_product(this)">
                    <img src="./img/pencil.svg" alt="Delete">
                    </button>
            </td>
            <td>
                <button class="new-cart-delete" onclick="delete_product(this)">
                    <img src="./img/trash.svg" alt="Delete">
                </button>
            </td>
        `;
        menuList.appendChild(addcontent);
    }
}
//đóng cửa sổ sản phẩm
function quan_ly_san_pham_close() {
    close_edit_tab();
    close_add_tab();
    document.getElementById("quan_ly_san_pham_child").style.display = "none"
}
//tiến trang sản phẩm
function page_next_product() {
    let limit = parseInt(number_of_item_admin / number_of_each_item_admin);
    currentPage++;
    if (currentPage > limit) {
        if (number_of_item_admin % number_of_each_item_admin == 0) {
            currentPage = limit;
        } else {
            currentPage = limit + 1;
        }
    }
    quan_ly_san_pham(currentType);
}
//lùi trang sản phẩm
function page_back_product() {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    changePage(currentPage);
}
//đọc sự thay đổi trên trang(số trang)
function changePage(pageNumber) {
    currentPage = pageNumber;

    quan_ly_san_pham(currentType);
}
//đóng tab thêm sản phẩm
function close_add_tab() {
    document.getElementById("page_productForm").style.display = "none";
}
//hàm gọi chức năng thêm sản phẩm
function open_add_item() {
    close_edit_tab();
    var page = document.getElementById("page_productForm");
    if (page.style.display === "block") {
        page.style.display = "none";
    } else {
        page.style.display = "block"
    }
    currentId = document.getElementById('productId').value
}
//thêm sản phẩm
async function add_item() {
    const input = document.getElementById('productImage');
    var type = document.querySelector("#choose_product").value.toString();
    let imageDataURL = "";
    //xử lý src ảnh
    if (input.files.length > 0) {
        const file = input.files[0];
        imageDataURL = await docFileAnhAsync(file);
    }
    let productList = lay_du_lieu_tu_local_storage();
    const productId = document.getElementById('productId').value;
    const item = [];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].type.toString() === type) {
            item.push(productList[i])
        }
    }
    var dem = 0;
    for (let i = 0; i < item.length; i++) {
        if (isNaN(productId)) {
            document.getElementById("productId_small").innerText = "ID mới không hợp lệ(ID phải là 1 số nguyên)";
            document.getAnimations("productId").focus;
            return;
        }
        if ((productId == item[i].id)) {
            dem++;
        }
    }
    if (dem !== 0) {
        document.getElementById("productId_small").innerText = "ID mới không hợp lệ(ID đã có trong danh sách sản phẩm)";
        document.getAnimations("productId").focus;
        return;
    } else {
        document.getElementById("productId_small").innerText = "ID mới hợp lệ";
    }
    const productTitle = document.getElementById('productTitle').value.toUpperCase();
    const productContent = document.getElementById('productContent').value;
    const productPrice = document.getElementById('productPrice').value;
    //kiểm tra ảnh
    if (!imageDataURL || imageDataURL == "") {
        document.getElementById("productImage_small").innerText = "Thiếu tệp ảnh (ảnh không được để trống)";
        document.getElementById("productImage").focus();
        return;
    } else {
        document.getElementById("productImage_small").innerText = "Tệp ảnh hợp lệ";
    }
    //kiểm tra tiêu đề
    if (!productTitle) {
        document.getElementById("productTitle_small").innerText = "Tiêu đề không hợp lệ (tiêu đề không được để trống)";
        document.getElementById("productTitle").focus();
        return;
    } else {
        document.getElementById("productTitle_small").innerText = "Tiêu đề hợp lệ";
    }

    //kiểm tra mô tả
    if (!productContent) {
        document.getElementById("productContent_small").innerText = "Mô tả không hợp lệ (mô tả không được để trống)";
        document.getElementById("productContent").focus();
        return;
    } else {
        document.getElementById("productContent_small").innerText = "Mô tả hợp lệ";
    }

    //kiểm tra giá bán
    if (isNaN(productPrice) || parseFloat(productPrice) <= 0 || !productPrice) {
        document.getElementById("productPrice_small").innerText = "Giá Bán không hợp lệ (giá bán phải là 1 số nguyên > 0 và không có lẫn các kí tự đặt biệt)";
        document.getElementById("productPrice").focus();
        return;
    } else {
        document.getElementById("productPrice_small").innerText = "Giá Bán hợp lệ";
    }

    const product = {
        type: type,
        id: parseInt(productId),
        image: imageDataURL,
        title: productTitle,
        content: productContent,
        price: parseFloat(productPrice).toLocaleString() + " VND"
    };
    productList.push(product);
    localStorage.setItem("productData", JSON.stringify(productList));
    const menuList = document.querySelector('.page_main_container .menu_list_ul');
    const addcontent = document.createElement('li');
    addcontent.classList.add('menu_list_li');
    addcontent.innerHTML = `
        <div class="menu_list_product" id=${product.type.toString() + product.id.toString()}>
            <a href="#" class="menu_list_img">
                <img src="${product.image}" onclick="get_order()" alt="${product.title}">
            </a>
            <h4 class="menu_list_title"><a href="#" onclick="get_order()">${product.title}</a></h4>
            <p class="menu_list_decrible">${product.content}</p>
            <div class="menu_list_bottom">
                <h3 class="menu_price">${product.price}</h3>
                <div class="menu_action">
                    <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                </div>
            </div>
        </div>
    `;
    menuList.appendChild(addcontent);

    alert("Thêm sản phẩm thành công");
    sap_xep_product();
    if (type) {
        quan_ly_san_pham(type)
    }
    thong_ke_san_pham()
    close_add_tab();
}
// Hàm hỗ trợ đọc file ảnh bất đồng bộ asyns/await để đợi hàm đọc xong file
async function docFileAnhAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}
//xóa sản phẩm
function delete_item(productId) {
    productId = productId.toString();
    const productList = lay_du_lieu_tu_local_storage();

    const index = productList.findIndex(product => (product.type.toString() + product.id.toString()) === productId);

    if (index !== -1) {
        productList.splice(index, 1);

        localStorage.setItem("productData", JSON.stringify(productList));
        const productElement = document.getElementById(productId);
        if (productElement) {
            productElement.remove();
            sap_xep_product();
        }

        console.log(`Đã xóa sản phẩm có ID ${productId} thành công.`);
    } else {
        console.log(`Không tìm thấy sản phẩm có ID ${productId}.`);
    }
    thong_ke_san_pham()
}
//hỏi trước khi xóa
function aks_before_delete() {
    var result = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (result) {
        alert("Đã xóa!");
        return true;
    } else {
        alert("Không xóa.");
        return false;
    }

}
//hàm gọi chức năng xóa sản phẩm
function delete_product(button) {
    close_add_tab();
    close_edit_tab();
    if (!aks_before_delete()) {
        return;
    }
    var row = button.closest("tr");
    if (row) {
        var pElement = row.querySelector('p[id]');

        if (pElement && pElement.id) {
            delete_item(pElement.id);
            row.parentNode.removeChild(row);
        }
    }
}
//id hiện tại của sản phẩm cần sửa
let currentId;
//kiểm tra id truyển vào 
function isValidString(input) {
    // Danh sách từ khóa bắt đầu chuỗi
    const keywords = ["burger", "combo", "garan", "monankem", "thucuong"];
    const regex = new RegExp("^(" + keywords.join("|") + ")[1-9]\\d*$", "i"); //"$" đảm bảo chuỗi kết thúc sau số
    // Kiểm tra 
    return regex.test(input);
}
//ghi chú

//hàm sửa thông tin sản phẩm
async function edit_item() {
    const input = document.getElementById('productImage_edit');

    let imageDataURL = document.getElementById("productImage_edit").name;
    if (input.files.length > 0) {
        const file = input.files[0];
        imageDataURL = await docFileAnhAsync(file);
    }
    var id = document.getElementById("productId_edit").value;
    var title = document.getElementById("productTitle_edit").value;
    var content = document.getElementById("productContent_edit").value;
    var price = document.getElementById("productPrice_edit").value;
    const productList = lay_du_lieu_tu_local_storage();
    const index = productList.findIndex(product => (product.type.toString() + product.id.toString()) === id.toString());


    for (let i = 0; i < productList.length; i++) {
        if ((id.toString() === (productList[i].type.toString() + productList[i].id.toString()) && id !== currentId) || !isValidString(id)) {
            document.getElementById("productId_edit_small").innerText = `ID mới không hợp lệ, bị trùng hoặc sai định dạng (id phải có dạng 'loại sản phẩm + 1 số nguyên ví dụ: combo1) 
                Loại sản phẩm gồm: Burger(burger), Combo(combo), Gà rán(garan), Món ăn kèm(monankem),Thức uống(thucuong)`;
            document.getAnimations("productId_edit").focus;
            return;
        }
        else {
            document.getElementById("productId_edit_small").innerText = "ID mới hợp lệ";
        }
    }
    productList[index].type = id.toString().replace(/\d+/g, "")
    productList[index].id = parseInt(id.match(/\d+/g));

    //kiểm tra ảnh
    if (!imageDataURL || imageDataURL == "") {
        document.getElementById("productImage_edit_small").innerText = "Thiếu tệp ảnh (ảnh không được để trống)";
        document.getElementById("productImage_edit").focus();
        return;
    } else {
        document.getElementById("productImage_edit_small").innerText = "Tệp ảnh hợp lệ";
    }
    productList[index].image = imageDataURL;

    //kiểm tra tiêu đề
    if (!title) {
        document.getElementById("productTitle_edit_small").innerText = "Tiêu đề không hợp lệ (tiêu đề không được để trống)";
        document.getElementById("productTitle_edit").focus();
        return;
    } else {
        document.getElementById("productTitle_edit_small").innerText = "Tiêu đề hợp lệ";
    }
    productList[index].title = title;

    //kiểm tra mô tả
    if (!content) {
        document.getElementById("productContent_edit_small").innerText = "Mô tả không hợp lệ (mô tả không được để trống)";
        document.getElementById("productContent_edit").focus();
        return;
    } else {
        document.getElementById("productContent_edit_small").innerText = "Mô tả hợp lệ";
    }
    productList[index].content = content;

    //kiểm tra giá bán
    if (isNaN(price) || parseFloat(price) <= 0) {
        document.getElementById("productPrice_edit_small").innerText = "Giá Bán không hợp lệ (giá bán phải là 1 số nguyên > 0 và không có lẫn các kí tự đặt biệt)";
        document.getAnimations("productPrice_edit").focus;
        return;
    } else {
        document.getElementById("productPrice_edit_small").innerText = "Giá Bán hợp lệ";
    }
    productList[index].price = parseFloat(price).toLocaleString() + " VND";
    localStorage.setItem("productData", JSON.stringify(productList));
    if (id.toString().replace(/\d+/g, "")) {
        quan_ly_san_pham(id.toString().replace(/\d+/g, ""))
    }
    sap_xep_product();
    close_edit_tab();
    alert(`Đã cập nhật thông tin của sản phẩm có ID ${id} thành công.`);

}
//hàm gọi chức năng sửa thôn tin
function edit_product(button) {
    close_add_tab();
    var row = button.closest("tr");
    if (row) {
        var pElement = row.querySelector('p[id]');
        if (pElement && pElement.id) {
            const data = search_product(pElement.id)
            if (data == null) {
                return;
            }
            document.getElementById("productImage_edit").name = data.image;
            document.getElementById("productId_edit").value = currentId = data.type.toString() + data.id.toString();
            document.getElementById("productTitle_edit").value = data.title;
            document.getElementById("productContent_edit").value = data.content;
            document.getElementById("productPrice_edit").value = parseFloat(data.price.replace(" VND", "")) * 1000;
        }
    }
    document.getElementById("page_productForm_edit").style.display = "block"
}
//đóng tab sửa thông tin
function close_edit_tab() {
    document.getElementById("page_productForm_edit").style.display = "none";
}
//tìm thông tin sản phẩm qua mã sản phẩm 
function search_product(productId) {
    const data = lay_du_lieu_tu_local_storage();
    productId = productId.toString();
    for (var i = 0; i < data.length; i++) {
        if ((data[i].type.toString() + data[i].id.toString()) === productId) {
            return data[i];
        }
    }
    return null;
}
//quản lý user
function quan_ly_user_close() {
    document.getElementById("sections").style.display = "none"
}
//mở cửa sổ người dùng
function open_user_tab() {
    close_DKSD_CSBM_CSVC()
    var user = document.getElementById("sections");
    user.style.display = "flex"
    showUserList();
    quan_ly_san_pham_close();
    thong_ke_close();
    close_bill_tab();
}
//xem thông tin người dùng
function showUserList() {
    var s = '';
    var List = document.getElementById('UserList');
    var storageUser = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < storageUser.length; i++) {
        if (storageUser[i].username != 'admin') {
            s += `<tr id="tr">` +
                `<td class="td">${i}</td>` +
                `<td class="td">${storageUser[i].name}</td>` +
                `<td class="td">${storageUser[i].username}</td>` +
                `<td class="td">${storageUser[i].dateSignup}</td>` +
                `<td class="td"><button id="deleteUserBtn" onClick="deleteUser('${storageUser[i].username}')"><img src="./img/person-x-fill.svg"></button></td>` +
                `</tr>`

        }
        document.getElementById('UserList').innerHTML = s;

    }

}
//xóa người dùng
function deleteUser(n) {
    var storageUser = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < storageUser.length; i++) {
        if (storageUser[i].username == n) {
            if (confirm('Bạn có muốn xóa tài khoản này?')) {
                storageUser.splice(i, 1);

            }
        }
    }
    localStorage.setItem('user', JSON.stringify(storageUser));
    showUserList();

}
//tìm kiếm thông tin người dùng
function searchUser() {
    var storageUser = JSON.parse(localStorage.getItem('user'));
    var List = document.getElementById('UserList');
    var keyname = document.getElementById('name_user').value.toLowerCase();
    var keyusername = document.getElementById('username').value.toLowerCase();
    var keydate = document.getElementById('date').value.toLowerCase();
    List.innerHTML = "";
    var foundMatch = false;
    console.log('keyname:', keyname);
    console.log('keyusername:', keyusername);
    console.log('date:', date);
    console.log('storageUser:', storageUser);

    for (var i = 0; i < storageUser.length; i++) {
        if (storageUser[i].username != 'admin') {
            if (
                storageUser[i].name.includes(keyname) && keyname != '' ||
                storageUser[i].username.includes(keyusername) && keyusername != '' ||
                storageUser[i].dateSignup.includes(keydate) && keydate != ''
            ) {
                var s = `<tr id="tr">` +
                    `<td class="td">${i}</td>` +
                    `<td class="td">${storageUser[i].name}</td>` +
                    `<td class="td">${storageUser[i].username}</td>` +
                    `<td class="td">${storageUser[i].dateSignup}</td>` +
                    `<td class="td"><button id="deleteUserBtn" onClick="deleteUser('${storageUser[i].username}')"><img src="./img/person-x-fill.svg"></button></td>` +
                    `</tr>`;
                List.innerHTML += s;
                foundMatch = true;
            }

        }
    }
    console.log(foundMatch)

    if (!foundMatch) {
        List.innerHTML = "<tr><td colspan='5'>Không tìm thấy kết quả.</td></tr>";
    }
}
/*đơn hàng*/
//NHẬN DỮ LIỆU ĐƠN HÀNG 

function thanh_toan() {
    var product = document.querySelectorAll("#no-data tr");
    const user = JSON.parse(localStorage.getItem("userlogin"));
    const allBills = JSON.parse(localStorage.getItem("allBills")) || {};
    var date = new Date();
    var date_bill = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    var timeid = date.getHours() + '' + date.getMinutes() + '' + date.getSeconds();

    for (let i = 0; i < product.length; i++) {
        const title = product[i].querySelector("#bill_title").innerText;
        const count = parseInt(product[i].querySelector("#bill_count").innerText);
        const price = product[i].querySelector("#bill_price").innerText;
        const total_money = product[i].querySelector("#bill_thanh_tien").innerText;

        if (!isNaN(count)) {
            const item = {
                title: title,
                count: count,
                price: price,
                total_money: total_money,
                address: document.getElementById("accress_order").value,
                van_chuyen: document.getElementById("hinh_thuc_van_chuyen").value,
                Ngay_mua: date_bill,
                timeid: timeid
            };

            if (!allBills[user.username]) {
                allBills[user.username] = [];
            }

            allBills[user.username].push(item);
        }
    }

    localStorage.setItem("allBills", JSON.stringify(allBills));

}
//Xem trạng thái đơn hàng
function Billstatus(timeid, Ngay_mua) {
    const date = Ngay_mua;
    var id = `#id${timeid.toString()}`;

    // Sử dụng document.querySelector để chọn một phần tử duy nhất
    var element = document.querySelector(id);

    // Kiểm tra xem element có tồn tại không
    if (element) {
        var status = parseInt(element.value);
        const allBills = JSON.parse(localStorage.getItem("allBills"));
        for (var userName in allBills) {
            if (allBills.hasOwnProperty(userName)) {
                var userBills = allBills[userName];
                for (var j = 0; j < userBills.length; j++) {
                    var bill = userBills[j];

                    if (bill.timeid === timeid && bill.Ngay_mua === date) {
                        switch (status) {
                            case 1: if (aks_before_cancel(1, bill.timeid, bill.Ngay_mua)) {
                                return;
                            } else {
                                bill.trang_thai = "Vừa đặt";
                            }
                                break;
                            case 2:
                                bill.trang_thai = "Đang giao";
                                break;
                            case 3:
                                bill.trang_thai = "Đã giao";
                                break;
                            case 4:
                                bill.trang_thai = "Đã nhận";
                                break;
                            case 5: if (aks_before_cancel(5, bill.timeid, bill.Ngay_mua)) {
                                return;
                            } else {
                                bill.trang_thai = "Đã hủy";
                            }
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }

        // Di chuyển localStorage.setItem ra khỏi vòng lặp for để cập nhật tất cả các bills
        localStorage.setItem("allBills", JSON.stringify(allBills));
    }
}



//mở đơn hàng trong admin
checkBillBoxAdmin();
function checkBillBoxAdmin() {
    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));

        if (user.username == 'admin') {
            document.getElementById('isAdminBillBox').innerHTML = `<div class="tim_kiem_theo_ma"> Tìm kiếm theo mã đơn
           <input onkeypress="checkOpenTab()" id="searchCodeInput">
           <button onclick="SearchByCodeInPut()"><img src="./img/search.svg" id="searchCodeInputBtn"></button>
       </div>
       <div class="date_1">
           <div class="date_2">
               <label for="startDate">Từ</label>
               <input type="date" id="startDate" />
           </div>
           <div class="date_2">
               <label for="endDate">Đến</label>
               <input type="date" id="endDate" />
           </div>
           <button onclick="searchByDateRange()"><img src="./img/search.svg" id="searchByDateBtn"></button>
           <div class="reset">
           </div>
       </div>`;
        }
    }
}
function open_bill_tab() {
    close_DKSD_CSBM_CSVC()
    quan_ly_user_close();
    quan_ly_san_pham_close();
    thong_ke_close();
    document.getElementById("page_bill").style.display = "block";
    const menuList = document.querySelector(".box_bill .data_bill");
    var rows = menuList.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
        rows[i].parentNode.removeChild(rows[i]);
    }
    const allBills = JSON.parse(localStorage.getItem("allBills")) || {};

    for (const username in allBills) {
        if (allBills.hasOwnProperty(username)) {
            const userBills = allBills[username];

            let previousTimeId = null;
            let addcontent = null;

            for (let j = 0; j < userBills.length; j++) {
                const billItem = userBills[j];

                if (billItem.timeid !== previousTimeId) {
                    addcontent = document.createElement("tr");
                    addcontent.classList.add("infor_bill_user");
                    addcontent.id = billItem.timeid.toString();
                    menuList.appendChild(addcontent);
                    const totalPrice = toTal(userBills, billItem.timeid);
                    if (billItem.trang_thai && billItem.trang_thai.toString() === "Đã hủy") {
                        addcontent.innerHTML = `
                        <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                        <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${username}</th>
                        <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                        <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                        <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}"><button onClick="openListBill(${j},'${billItem.timeid}')">...</button></th>
                        <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                        <th rowspan="1" style="width: 10%;"id="id${billItem.timeid.toString()}" class="trang_thai">
                            Đã hủy
                        </th>
                        <th class="box_last" rowspan="1" style="width: 7.5%;">
                            <button class="delete-button" onclick="deleteRow_dh(this)"><img src="./img/trash.svg" style="width:20px;height:20px;"></button>
                        </th>
                    `;
                    }
                    else {
                        addcontent.innerHTML = `
                        <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                        <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${username}</th>
                        <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                        <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                        <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}"><button onClick="openListBill(${j},'${billItem.timeid}')">...</button></th>
                        <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                        <th rowspan="1" style="width: 10%;">
                            <select onchange="Billstatus('${billItem.timeid}','${billItem.Ngay_mua}')" name="choose" id="id${billItem.timeid.toString()}" class="trang_thai">
                            ${`<option value=0>${billItem.trang_thai}</option>` ||
                            `<option value=1>Vừa đặt</option>`}
                                <option value=2>Đang giao</option>
                                <option value=3>Đã giao</option>
                                <option value=4>Đã nhận</option>
                                <option value=5>Đã hủy</option>
                            </select>
                        </th>
                        <th class="box_last" rowspan="1" style="width: 7.5%;">
                            <button class="delete-button" onclick="deleteRow_dh(this)"><img src="./img/trash.svg" style="width:20px;height:20px;"></button>
                        </th>
                    `;
                    }
                }
                if (menuList && addcontent) {
                    menuList.appendChild(addcontent);
                }

                previousTimeId = billItem.timeid;
            }
        }
    }
}
function openListBill(i, timeId) {
    const allBills = JSON.parse(localStorage.getItem("allBills")) || {};
    const itemList = [];
    for (const username in allBills) {
        if (allBills.hasOwnProperty(username)) {
            const userBills = allBills[username];

            for (let j = i; j < userBills.length; j++) {
                const billItem = userBills[j];

                if (billItem.timeid === timeId) {
                    itemList.push(`${billItem.title} x${billItem.count}`);
                } else {
                    break;
                }
            }
            const userBillItemElement = document.getElementById(`user_bill_item_${timeId}`);
            if (userBillItemElement) {
                userBillItemElement.innerHTML = itemList.join('<br>');
            }
        }
    }
}
function toTal(userBills, timeId) {
    const filteredBills = userBills.filter(bill => bill.timeid === timeId);
    const totalPrice = filteredBills.reduce((sum, bill) => {
        const itemPrice = parseFloat(bill.price.replace(" VND", ""));
        return sum + itemPrice * bill.count * 1000;
    }, 0);

    return totalPrice;
}
//tổng hóa đơn
function toTal(userBills, timeId) {
    const filteredBills = userBills.filter(bill => bill.timeid === timeId);
    const totalPrice = filteredBills.reduce((sum, bill) => {
        const itemPrice = parseFloat(bill.price.replace(" VND", ""));
        return sum + itemPrice * bill.count * 1000;
    }, 0);

    return totalPrice;
}
//Xóa 1 hóa đơn
function deleteRow_dh(button) {
    if (!aks_before_delete()) {
        return;
    }
    const row = button.closest("tr");
    const username = row.querySelector("#user_bill_name").textContent;
    const billid = row.id.toString();
    row.remove();

    const billKey = "allBills";
    const allBills = JSON.parse(localStorage.getItem(billKey)) || {};

    if (allBills.hasOwnProperty(username)) {
        const userBills = allBills[username];
        const updatedBills = userBills.filter(item => item.timeid.toString() !== billid);
        allBills[username] = updatedBills;
        localStorage.setItem(billKey, JSON.stringify(allBills));
        console.log("Đã xóa hóa đơn thành công.");
        open_bill_tab();
    }
    thong_ke_doanh_thu()
    doanh_thu_trong_ngay();
}
//đóng cửa sổ đơn hàng trong admin
function close_bill_tab() {
    document.getElementById("page_bill").style.display = "none";
}
//sắp xếp đơn hàng theo ngày tháng năm
function sap_xep_theo_ngay_tang() {
    const allBills = JSON.parse(localStorage.getItem("allBills"));
    for (const username in allBills) {
        if (allBills.hasOwnProperty(username)) {
            const billList = allBills[username];
            for (let i = 0; i < billList.length - 1; i++) {
                for (let j = i + 1; j < billList.length; j++) {
                    const dateA = billList[i].Ngay_mua;
                    const dateB = billList[j].Ngay_mua;
                    if (dateA > dateB) {
                        const temp = billList[i];
                        billList[i] = billList[j];
                        billList[j] = temp;
                    }
                }
            }
            allBills[username] = billList;
        }
    }
    localStorage.setItem("allBills", JSON.stringify(allBills));
    console.log("Đã sắp xếp toàn bộ theo Ngay_mua tăng dần trong Local Storage.");
    open_bill_tab();
}
function sap_xep_theo_ngay_giam() {
    const allBills = JSON.parse(localStorage.getItem("allBills"));
    for (const username in allBills) {
        if (allBills.hasOwnProperty(username)) {
            const billList = allBills[username];
            for (let i = 0; i < billList.length - 1; i++) {
                for (let j = i + 1; j < billList.length; j++) {
                    const dateA = billList[i].Ngay_mua;
                    const dateB = billList[j].Ngay_mua;
                    if (dateA < dateB) {
                        const temp = billList[i];
                        billList[i] = billList[j];
                        billList[j] = temp;
                    }
                }
            }
            allBills[username] = billList;
        }
    }
    localStorage.setItem("allBills", JSON.stringify(allBills));
    console.log("Đã sắp xếp toàn bộ theo Ngay_mua tăng dần trong Local Storage.");
    open_bill_tab();
}
function searchByDateRange() {
    const menuList = document.querySelector(".box_bill .data_bill");
    var rows = menuList.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
        rows[i].parentNode.removeChild(rows[i]);
    }
    const allBills = JSON.parse(localStorage.getItem('allBills')) || {};
    const startDate = new Date(document.getElementById('startDate').value);
    var a = startDate.getDate();
    var b = startDate.getMonth();
    var c = startDate.getFullYear();
    var startDateString = a + (b + 1) + c;
    const endDate = new Date(document.getElementById('endDate').value);
    var d = endDate.getDate();
    var e = endDate.getMonth();
    var f = endDate.getFullYear();
    var endDateString = d + (e + 1) + f;
    for (const userName in allBills) {
        if (allBills.hasOwnProperty(userName)) {
            const userBills = allBills[userName];

            let previousTimeId = null;
            let addcontent = null;

            for (let j = 0; j < userBills.length; j++) {
                const billItem = userBills[j];

                if (billItem.timeid !== previousTimeId) {
                    var splitdate = billItem.Ngay_mua.split('/');
                    const day = parseInt(splitdate[0]);
                    const month = parseInt(splitdate[1]);
                    const year = parseInt(splitdate[2]);
                    const sum = day + month + year;
                    if (startDateString <= sum && endDateString >= sum) {
                        addcontent = document.createElement("tr");
                        addcontent.classList.add("infor_bill_user");
                        addcontent.id = billItem.timeid.toString();
                        menuList.appendChild(addcontent);
                        const totalPrice = toTal(userBills, billItem.timeid);
                        addcontent.innerHTML = `
                        <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                        <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${userName}</th>
                        <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                        <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                        <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}"><button onClick="openListBill(${j},'${billItem.timeid}')">...</button></th>
                        <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                        <th rowspan="1" style="width: 10%;">
                            <select onchange="Billstatus('${billItem.timeid}','${billItem.Ngay_mua}')" name="choose" id="id${billItem.timeid.toString()}" class="trang_thai">
                                <option value=1>Vừa đặt</option>
                                <option value=2>Đang giao</option>
                                <option value=3>Đã giao</option>
                                <option value=4>Đã nhận</option>
                                <option value=5>Đã hủy</option>
                            </select>
                        </th>
                        <th class="box_last" rowspan="1" style="width: 7.5%;">
                            <button class="delete-button" onclick="deleteRow_dh(this)"><img src="./img/trash.svg" style="width:20px;height:20px;"></button>
                        </th>
                    `;
                    }

                }

                if (menuList && addcontent) {
                    menuList.appendChild(addcontent);
                }

                previousTimeId = billItem.timeid;
            }
        }
    }


}
function SearchByCodeInPut() {
    const menuList = document.querySelector(".box_bill .data_bill");
    var user = JSON.parse(localStorage.getItem('userlogin'));
    var rows = menuList.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
        rows[i].parentNode.removeChild(rows[i]);
    }
    const allBills = JSON.parse(localStorage.getItem('allBills')) || {};
    var searchCodeInPut = document.getElementById('searchCodeInput').value;
    if (user.username == 'admin') {
        for (const userName in allBills) {
            if (allBills.hasOwnProperty(userName)) {
                const userBills = allBills[userName];

                let previousTimeId = null;
                let addcontent = null;

                for (let j = 0; j < userBills.length; j++) {
                    const billItem = userBills[j];
                    if (billItem.timeid !== previousTimeId) {
                        if (billItem.timeid.includes(searchCodeInPut) || searchCodeInPut == '') {
                            addcontent = document.createElement("tr");
                            addcontent.classList.add("infor_bill_user");
                            addcontent.id = billItem.timeid.toString();
                            menuList.appendChild(addcontent);
                            const totalPrice = toTal(userBills, billItem.timeid);


                            addcontent.innerHTML = `
                            <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                            <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${userName}</th>
                            <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                            <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                            <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}"><button onClick="openListBill(${j},'${billItem.timeid}')">...</button></th>
                            <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                            <th rowspan="1" style="width: 10%;">
                                <select onchange="Billstatus('${billItem.timeid}','${billItem.Ngay_mua}')" name="choose" id="id${billItem.timeid.toString()}" class="trang_thai">
                                    <option value=1>Vừa đặt</option>
                                    <option value=2>Đang giao</option>
                                    <option value=3>Đã giao</option>
                                    <option value=4>Đã nhận</option>
                                    <option value=5>Đã hủy</option>
                                </select>
                            </th>
                            <th class="box_last" rowspan="1" style="width: 7.5%;">
                                <button class="delete-button" onclick="deleteRow_dh(this)"><img src="./img/trash.svg" style="width:20px;height:20px;"></button>
                            </th>
                        `;
                        }


                        if (menuList && addcontent) {
                            menuList.appendChild(addcontent);
                        }

                        previousTimeId = billItem.timeid;
                    }
                }
            }



        }
    }
    else {
        const userName = JSON.parse(localStorage.getItem("userlogin")) || {};
        const username = userName.username;
        if (userName) {

            const userBills = allBills[username];
            if (!userBills) {
                return;

            }
            let previousTimeId = null;
            let addcontent = ""
            for (let j = 0; j < userBills.length; j++) {
                const billItem = userBills[j];
                if (billItem.timeid !== previousTimeId) {
                    if (billItem.timeid.includes(searchCodeInPut) || searchCodeInPut == '') {
                        addcontent = document.createElement("tr");
                        addcontent.classList.add("infor_bill_user");
                        addcontent.id = billItem.timeid.toString();
                        const totalPrice = toTal(userBills, billItem.timeid);
                        menuList.appendChild(addcontent)
                        if (billItem.trang_thai) {
                            addcontent.innerHTML = `
                    <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                    <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${username}</th>
                    <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                    <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                    <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}"><button onClick="openListBill(${j},'${billItem.timeid}')">...</button></th>
                    <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                    <th rowspan="1" style="width: 10%;" id="trang_thai_user">${billItem.trang_thai} </th>
                    <th class="box_last" rowspan="1" style="width: 7.5%;">
                    <button class="delete-button" onclick="deleteRow_user_bill(this)"><img src="./img/trash.svg" style="width:20px;height:20px;"></button>
                    `;

                        }
                        else {

                            addcontent.innerHTML = `
                    <th rowspan="1" style="width: 5%;" id="user_bill_code">${billItem.timeid}</th>
                    <th rowspan="1" style="width: 12.5%;" id="user_bill_name">${nameuser}</th>
                    <th colspan="1" style="width: 30%;" id="user_bill_address">${billItem.address}</th>
                    <th rowspan="1" style="width: 10%;" id="user_bill_date">${billItem.Ngay_mua}</th>
                    <th rowspan="1" style="width: 30%;" id="user_bill_item_${billItem.timeid}"><button onClick="openListBill(${j},'${billItem.timeid}')">...</button></th>
                    <th rowspan="1" style="width: 10%;" id="user_bill_total">${totalPrice.toLocaleString()} VND</th>
                    <th rowspan="1" style="width: 10%;" id="trang_thai_user">Vừa đặt</th>
                    <th class="box_last" rowspan="1" style="width: 7.5%;">
                    <button class="delete-button" onclick="deleteRow_user_bill(this)"><img src="./img/trash.svg" style="width:20px;height:20px;"></button>
                    </th>
                     `;
                        }
                        if (menuList && addcontent) {
                            menuList.appendChild(addcontent);
                        }
                    }
                    previousTimeId = billItem.timeid;

                }
            }
        }
    }

}
function checkOpenTab() {
    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));

        if (user.username == 'admin') {
            return open_bill_tab();
        }
        else {
            return open_user_bill();
        }
    }
}

function close_bill_tab() {
    document.getElementById("page_bill").style.display = "none";
}
//thống kê 
function thong_ke_open() {
    close_DKSD_CSBM_CSVC()
    close_bill_tab();
    quan_ly_san_pham_close();
    quan_ly_user_close();
    document.getElementById("page_dt").style.display = "block";

}
function thong_ke_close() {
    thong_ke_doanh_thu_close()
    thong_ke_san_pham_close()
    doanh_thu_trong_ngay_close()
    document.getElementById("page_dt").style.display = "none";

}
function thong_ke_san_pham() {
    doanh_thu_trong_ngay_close()
    thong_ke_doanh_thu_close()
    const product = lay_du_lieu_tu_local_storage();
    let loai = ["burger", "combo", "garan", "monankem", "thucuong"];
    let burger = 0;
    let combo = 0;
    let garan = 0;
    let monankem = 0;
    let thucuong = 0;
    let tong_dau_tu = 0;
    for (let i = 0; i < product.length; i++) {
        if (product[i]) {
            switch (product[i].type.toString()) {
                case loai[0].toString(): burger++;

                    break;
                case loai[1].toString(): combo++;

                    break;
                case loai[2].toString(): garan++;

                    break;
                case loai[3].toString(): monankem++;

                    break;
                case loai[4].toString(): thucuong++;

                    break;
                default:
                    break;
            }
            tong_dau_tu += parseFloat(product[i].price.replace(" VND", ""))
        }
    }
    document.getElementById("so_luong_burger").innerText = burger;
    document.getElementById("so_luong_combo").innerText = combo;
    document.getElementById("so_luong_garan").innerText = garan;
    document.getElementById("so_luong_monankem").innerText = monankem;
    document.getElementById("so_luong_thucuong").innerText = thucuong;
    document.getElementById("so_luong_all").innerText = product.length.toString();
    document.getElementById("tong_dau_tu").innerText = parseFloat(tong_dau_tu * 1000 * 0.7).toLocaleString() + " VND";
    document.getElementById("thong_ke_san_pham").style.display = "block"
}
function thong_ke_san_pham_close() {
    document.getElementById("thong_ke_san_pham").style.display = "none"
}
function thong_ke_doanh_thu() {
    thong_ke_san_pham_close()
    doanh_thu_trong_ngay_close()
    const data = localStorage.getItem("allBills");
    const allBills = JSON.parse(data)
    const data_user = localStorage.getItem("user");
    const user = JSON.parse(data_user)
    if (user && allBills) {
        let doanh_thu = 0;
        let so_luong_da_ban = 0;
        for (let i = 0; i < user.length; i++) {
            if (allBills[user[i].username]) {
                const bill = allBills[user[i].username];
                for (let j = 0; j < bill.length; j++) {
                    const trang_thai = bill[j].trang_thai;
                    if (trang_thai && (trang_thai === "Đã giao" || trang_thai === "Đã nhận")) {
                        const total_money = parseFloat(bill[j].total_money.replace(" VND", "")); // Xóa dấu phẩy để chuyển thành số
                        doanh_thu = doanh_thu + parseFloat(total_money * 1000);
                        so_luong_da_ban += parseInt(bill[j].count);
                    }
                }
            }
        }
        document.getElementById("so_luong_san_pham_da_ban").innerText = so_luong_da_ban;
        document.getElementById("doanh_thu_san_pham_da_ban").innerText = doanh_thu.toLocaleString() + " VND";
    }
    else {
        document.getElementById("so_luong_san_pham_da_ban").innerText = 0;
        document.getElementById("doanh_thu_san_pham_da_ban").innerText = "0" + " VND";
    }
    document.getElementById("thong_ke_doanh_thu").style.display = "block"

}
function thong_ke_doanh_thu_close() {
    document.getElementById("thong_ke_doanh_thu").style.display = "none"
}
function doanh_thu_trong_ngay() {
    thong_ke_san_pham_close()
    thong_ke_doanh_thu_close()
    const data = localStorage.getItem("allBills") || '[]';
    const allBills = JSON.parse(data);
    const data_user = localStorage.getItem("user") || '[]';
    const user = JSON.parse(data_user);
    const dateMap = {};
    const menuList = document.querySelector("#page_dt #DTTN #doanh_thu_trong_ngay")
    menuList.innerHTML = ``
    for (let i = 0; i < user.length; i++) {
        const username = user[i].username;
        if (username && allBills[username]) {
            const userBills = allBills[username];

            for (let j = 0; j < userBills.length; j++) {
                const bill = userBills[j];
                if (bill && (bill.trang_thai === "Đã nhận" || bill.trang_thai === "Đã giao")) {
                    const total_money = parseFloat(bill.total_money.replace(" VND", ""));
                    const ngay_mua = bill.Ngay_mua;

                    if (!dateMap[ngay_mua]) {
                        dateMap[ngay_mua] = {
                            so_don_trong_ngay: 0,
                            doanh_thu: 0
                        };
                    }
                    if (j == 0) {
                        dateMap[ngay_mua].so_don_trong_ngay++;
                    } else if (userBills[j - 1] && bill.timeid !== userBills[j - 1].timeid) {
                        dateMap[ngay_mua].so_don_trong_ngay++;
                    }
                    dateMap[ngay_mua].doanh_thu += parseFloat(total_money * 1000);
                }
            }
        }
    }
    for (const ngay_mua in dateMap) {
        if (dateMap.hasOwnProperty(ngay_mua)) {
            const infoNgay = dateMap[ngay_mua];
            const addcontent = document.createElement("tr")
            addcontent.classList.add(`${ngay_mua}`)
            addcontent.innerHTML = `
                        <th style="width: 25%;">${ngay_mua}</th>
                        <th style="width: 25%;">${infoNgay.so_don_trong_ngay}</th>
                        <th>${infoNgay.doanh_thu.toLocaleString() + " VND"}</th>`

            menuList.appendChild(addcontent)
        }
    }
    document.getElementById("doanh_thu_trong_ngay").style.display = "block"
}
function doanh_thu_trong_ngay_close() {
    document.getElementById("doanh_thu_trong_ngay").style.display = "none"
}

