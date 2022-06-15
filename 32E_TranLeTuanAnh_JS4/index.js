// Bài Tập 1 : Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần

// Sơ đồ 3 khối
// +input : Số thực a , b , c : number
// +progress :
// Nếu a lớn hơn b và b lớn hơn c thì a>b> c

// Nếu a lớn hơn c và c lớn hơn b thì a>c>b

// Nếu b lớn hơn a và a lớn hơn c thì b>a>c

// Nếu b lớn hơn c và c lớn hơn a thì b>c>a

// Nếu c lớn hơn b và b lớn hơn a thì c>b>a

// Nếu c lớn hơn a và a lớn hơn b thì c>a>b

// +output : thứ tự 3 số nguyên

document.getElementById('btnTinhSo').onclick = function(event) {
    event.preventDefault()
    var a = Number(document.getElementById('soThuc1').value);
    var b = Number(document.getElementById('soThuc2').value);
    var c = Number(document.getElementById('soThuc3').value);

    var ketQuaB1 = '';

    if (a > b && b > c) {
        ketQuaB1 = c + '<' + b + '<' + c;
    } else if (a > c && c > b) {
        ketQuaB1 = b + '<' + c + '<' + a;
    } else if (b > a && a > c) {
        ketQuaB1 = c + '<' + a + '<' + b;
    } else if (b > c && c > a) {
        ketQuaB1 = a + '<' + c + '<' + b;
    } else if (c > a && a > b) {
        ketQuaB1 = b + '<' + a + '<' + c;
    } else {
        ketQuaB1 = a + '<' + b + '<' + c;
    }
    document.getElementById('ketQua_b1').innerHTML = ketQuaB1;
}


// Bài tâp 2 : Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)

// Sơ đồ 3 khối :
// + Input : chọn thông tin bố , mẹ , anh trai , em gái : String
// + Progress : thông tin = B => Xin chào Bố!
// thông tin = M => Xin chào Mẹ!
// thông tin = A => Xin chào Anh Trai !
// Thông tin = E => Xin chào Em Gái!
// OutPut : hiện thị Xin chào Bố! \ Xin Chào Mẹ! \ Xin Chào Anh Trai! \ Xin Chào Em Gái!


document.getElementById('btnChao').onclick = function() {
    var thongTin = document.getElementById('nhapTen').value;

    var ketQuaB2 = '';

    switch (thongTin) {
        case 'B':
            {
                ketQuaB2 = 'Xin Chào Bố!'
            };
            break;
        case 'M':
            {
                ketQuaB2 = 'Xin Chào Mẹ!'
            };
            break;
        case 'A':
            {
                ketQuaB2 = 'Xin Chào Anh Trai!'
            };
            break;
        case 'E':
            {
                ketQuaB2 = 'Xin Chào Em Gái!'
            };
            break;
    }
    document.getElementById('ketQua_b2').innerHTML = ketQuaB2;
}


// Bài tập 3 : Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
// input : Số thứ 1 , 2 , 3 = number;
// +progress : Kiểm tra chẵn hay lẻ : Chia hết cho 2 là chẵn , không chia hết là lẻ
// Dùng toán tử count++ đếm bao nhiêu số chẵn => số lẻ ( 3 - số lượng số chẵn)
// Output : có bao nhiêu số chẵn bao nhiêu số lẻ.

document.getElementById('demSo').onclick = function() {
    var number1 = Number(document.getElementById('number1').value)
    var number2 = Number(document.getElementById('number2').value)
    var number3 = Number(document.getElementById('number3').value)

    var demSoChan = 0;


    if (number1 % 2 == 0) {
        demSoChan++
    }
    if (number2 % 2 == 0) {
        demSoChan++
    }
    if (number3 % 2 == 0) {
        demSoChan++
    }
    var demSoLe = 3 - demSoChan;
    document.getElementById('ketQua_b3').innerHTML = 'Có ' + demSoChan + ' số chẵn,' + demSoLe + ' số lẻ';

}


// Bài tập 4 > Viết chương trình cho nhập 3 cạnh của tam giác . Hãy cho biết đó là tam giác gì ?

// +Input : Cạnh dài 1 , 2 , 3 : Number

// +Progress : Nếu cạnh dài 1 = cạnh dài 2 = cạnh dài 3 => là tam giác đều
// Nếu cạnh dài 1 = cạnh dài 2 != cạnh dài 3 => là tam giác cân
//   Nếu CD1*CD1 = CD2*CD2 + CD3*CD3 => là tam giác vuông

// +Output : Tên tam giác ( tam giác cân , vuông , đều ) hoặc một loại tam giác khác

document.getElementById('duDoan').onclick = function() {
    var canhDai1 = Number(document.getElementById('canhDai1').value);
    var canhDai2 = Number(document.getElementById('canhDai2').value);
    var canhDai3 = Number(document.getElementById('canhDai3').value);

    var tenTamGiac = '';

    if (canhDai1 === canhDai2 && canhDai1 === canhDai3) {
        tenTamGiac = 'Đây là tam giác đều!';
    } else if (canhDai1 === canhDai2 && canhDai1 !== canhDai3) {
        tenTamGiac = 'Đây là tam giác cân!';
    } else if (canhDai1 === canhDai3 && canhDai1 !== canhDai2) {
        tenTamGiac = 'Đây là tam giác cân!';
    } else if (canhDai2 === canhDai3 && canhDai1 !== canhDai2) {
        tenTamGiac = 'Đây là tam giác cân!';
    } else if (canhDai1 * canhDai1 === canhDai2 * canhDai2 + canhDai3 * canhDai3) {
        tenTamGiac = 'Đây là tam giác vuông!';
    } else if (canhDai2 * canhDai2 === canhDai1 * canhDai1 + canhDai3 * canhDai3) {
        tenTamGiac = 'Đây là tam giác vuông!';
    } else if (canhDai3 * canhDai3 === canhDai1 * canhDai1 + canhDai2 * canhDai2) {
        tenTamGiac = 'Đây là tam giác vuông!';
    } else {
        tenTamGiac = 'Một loại tam giác nào đó!';
    }
    document.getElementById('ketQua_b4').innerHTML = tenTamGiac;
}