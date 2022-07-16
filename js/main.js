/**
 * ?Tính ngày tháng năm
 * Khối 1: Input:
 * ngày tháng năm
 * Khối 2: 
 * Tạo biến : ngay, thang, nam
 * Gán giá trị
 * Lập công thức: Xác định số ngày trong mỗi tháng
 *                Dùng switch cho các tháng, nhóm các tháng cùng số ngày lại
 *                Dựa vào số ngày của tháng để tính ngày mai, ngày hôm qua
 *                Dùng function namNhuan để biết có phải năm nhuận hay không, từ đó tính số ngày tháng 2
 * Thông báo kq
 * Khối 3: Output:
 * ngày hôm qua
 * ngày mai
 */
 function todayprev() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var prevngay;

    if (day < 0) {
        prevngay = "Không xác định được";
    }
    else {
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day > 31) {
                    prevngay = "Không xác định được";
                }
                else if (day == 1) {
                    prevngay = 31 + "/" + 12 + "/" + --year;
                }
                else {
                    prevngay = --day + "/" + month + "/" + year;
                }
                break;
            case 4: case 6: case 9: case 11:
                if (day > 30) {
                    prevday = "Không xác định được";
                }
                else if (day == 1) {
                    prevday = 30 + "/" + --month + "/" + year;
                }
                else {
                    prevday = --day + "/" + month + "/" + year;
                }
                break;
            case 2:
                if (day > 28) {
                    prevday = "Không xác định được";
                }
                else if (day == 1) {
                    prevday = 28 + "/" + --month + "/" + year;
                }
                else {
                    prevday = --day + "/" + month + "/" + year;
                }

                break;

            default:
                prevday = "Không hợp lệ";
                break;
        }
    }
    document.getElementById("txtResultbai5").innerHTML = prevday;
}
document.getElementById("prevday").onclick = todayprev;

function todaynext() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var nextday;
    if (day < 0) {
        nextday = "Không xác định được";
    }
    else {
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day > 31) {
                    nextday = "Không xác định được";
                }
                else if (day == 1) {
                    nextday = 31 + "/" + 12 + "/" + ++year;
                }
                else {
                    nextday = ++day + "/" + month + "/" + year;
                }
                break;
            case 4: case 6: case 9: case 11:
                if (day > 30) {
                    nextday = "Không xác định được";
                }
                else if (day == 1) {
                    nextday = 30 + "/" + ++month + "/" + year;
                }
                else {
                    nextday = ++day + "/" + month + "/" + year;
                }
                break;
            case 2:
                if (day > 28) {
                    nextday = "Không xác định được";
                }
                else if (day == 1) {
                    nextday= 28 + "/" + ++month + "/" + year;
                }
                else {
                    nextday = ++day + "/" + month + "/" + year;
                }

                break;

            default:
                nextday= "Không hợp lệ";
                break;
        }
    }
    document.getElementById("txtResultbai5").innerHTML = nextday;
}
document.getElementById("nextday").onclick = todaynext;

/**
 * ? Tính ngày
 * Khối 1: Input
 * năm, tháng
 * Khối 2:
 * Tạo biến month, year
 * Gán giá trị cho biến
 * Lập công thức:
 *      tinhngay = "Tháng " + month + " Năm " + year + " có 31 Ngày"
 *     - Tháng 1,3,5,7,8,10,12 có 31 ngày
 *     - Tháng 2 có 28 hoặc 29 ngày
 *     - Các tháng còn lại có 30 ngày
 *     - Dùng switch theo biến month để tính số ngày
 * Thông báo kq
 * Khối 3: Output
 * tinh
 */
 function tinhNgay() {
    var month = parseInt(document.getElementById("nhapthang").value);
    var year = parseInt(document.getElementById("nhapnam").value);

    var tinhNgay;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            tinhNgay = "Tháng " + month + " năm " + year + " có 31 ngày";
            break;
        case 4: case 6: case 9: case 11:
            tinhNgay = "Tháng " + month + "năm " + year + " có 30 ngày";
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
                tinhNgay = "Tháng " + month + " năm " + year + " có 29 ngày";
            }
            else {
                tinhNgay = "Tháng " + month + " năm " + year + " có 28 ngày";
            }

        default:

            break;
    }
    document.getElementById("txtResultbai6").innerHTML = tinhNgay;
}

document.getElementById("btnTinh").onclick = tinhNgay;

/**
 * ?Đọc số có 3 chữ số
 *  Khối 1: Input
 * số có 3 chữ số
 *
 * Khối 2:
 * Tạo biến hangTram, hangChuc, hangDonVi
 * Gán giá trị cho biến count = 0, các biến còn lại lấy từ form
 * Lập công thức 
 *     -  hangTram = Math.floor(number / 100)
 *     -  hangChuc =  Math.floor((number % 100) / 10)
 *     -  hangDonVi =(number % 100) % 10
 *     - switch case để đọc số từng hàng
 *
 *Thông báo kq
 *
 *Khối 3:Kết quả (Output)
 * docSo
 * 
 */
 function docSo() {
    var so = Number(document.getElementById("nhap").value);
    hangTram = Math.floor(so / 100);
    hangChuc = Math.floor((so % 100) / 10);
    hangDonVi = (so % 100) % 10;
    var doc = '';

    switch (hangTram) {
        case 1:
            doc += 'một trăm ';
            break;
        case 2:
            doc += 'hai trăm ';
            break;
        case 3:
            doc += 'ba trăm ';
            break;
        case 4:
            doc += 'bốn trăm ';
            break;
        case 5:
            doc += 'năm trăm ';
            break;
        case 6:
            doc += 'sáu trăm ';
            break;
        case 7:
            doc += 'bảy trăm ';
            break;
        case 8:
            doc += 'tám trăm ';
            break;
        case 9:
            doc += 'chín trăm ';
            break;
        default:
            alert('chỉ nhập 3 số');
            break;
    }
    switch (hangChuc) {
        case 0:
            hangDonVi == 0 ? (doc += '') : (doc += 'lẻ ');
            break;
        case 1:
            doc += 'mười ';
            break;
        case 2:
            doc += 'hai mươi ';
            break;
        case 3:
            doc += 'ba mươi ';
            break;
        case 4:
            doc += 'bốn mươi ';
            break;
        case 5:
            doc += 'năm mươi ';
            break;
        case 6:
            doc += 'sáu mươi ';
            break;
        case 7:
            doc += 'bảy mươi ';
            break;
        case 8:
            doc += 'tám mươi ';
            break;
        case 9:
            doc += 'chín mươi ';
            break;
        default:
            alert('chỉ nhập 3 số ');
            break;
    }
    switch (hangDonVi) {
        case 0:
            doc += '';
            break;
        case 1:
            doc += 'mốt';
            break;
        case 2:
            doc += 'hai';
            break;
        case 3:
            doc += 'ba';
            break;
        case 4:
            doc += 'bốn';
            break;
        case 5:
            doc += 'năm';
            break;
        case 6:
            doc += 'sáu';
            break;
        case 7:
            doc += 'bảy';
            break;
        case 8:
            doc += 'tám';
            break;
        case 9:
            doc += 'chín';
            break;
        default:
            alert('chỉ nhập 3 số');
            break;
    }
    document.getElementById('txtResultbai7').innerHTML = doc;
}
document.getElementById("btnDoc").onclick = docSo;

/**
 * ?Tìm sinh viên xa trường nhất
 * Khối 1: Input
 * 3 sinh vien  
 * 
 * các toạ độ x1 ,y1 , x2 , y2 ,x3 , y3 ,x4 , y4
 * x1 ,y1 tọa dộ sinhVien1
 * x2 ,y2 tọa dộ sinhVien2
 * x3 ,y3 tọa dộ sinhVien3
 * x4 , y4 tọa dộ truongHoc
 * Khối 2:
 *  Tạo biến khoangCach
 *  Gán giá trị cho biến
 *  Lập công thức:
 *    truongHoc - sinhVien1
 *       khoangCachSV1 = Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));
 *      truongHoc - sinhVien2
 *       KhoangCachSV2 = Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));
 *      truongHoc- sinhVien3
 *      khoangCachSV3 = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));
 *      so sanh diệu kiệu if elsse
 * Thông báo kết quả ở website
 *  Sinh viên xa trường nhất
 *Khối 3:Output
 * kết quả sinh viên xa trường nhất
 * 
 */
 function toaDo() {
    var nguoi1 = document.getElementById('sv1').value;
    var x1 = document.getElementById('toadoX1').value;
    var y1 = document.getElementById('toadoY1').value;
    var nguoi2 = document.getElementById('sv2').value;
    var x2 = document.getElementById('toadoX2').value;
    var y2 = document.getElementById('toadoY2').value;
    var nguoi3 = document.getElementById('sv3').value;
    var x3 = document.getElementById('toadoX3').value;
    var y3 = document.getElementById('toadoY3').value;
    var x4 = document.getElementById('toadoX4').value;
    var y4 = document.getElementById('toadoY4').value;

    var khoangCach = '';

    khoangCachSV1 = Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));

    khoangCachSV2 = Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    khoangCachSV3 = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));

    if(khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3){
        khoangCach = nguoi1;
    }else if(khoangCachSV2 > khoangCachSV1 && khoangCachSV2 > khoangCachSV3){
        khoangCach= nguoi2;
    }else{
        khoangCach = nguoi3;
    }
    document.getElementById('txttim').innerHTML = "Sinh viên xa trường nhất: " + khoangCach ;
}
document.getElementById("btntim").onclick = toaDo;
