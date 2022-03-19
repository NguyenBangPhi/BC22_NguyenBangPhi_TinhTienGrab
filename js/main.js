//GrabX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

//GrabSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

//GrabBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhTien").onclick = function () {
    var soKM = document.getElementById("soKM").value * 1;
    var tgCho = document.getElementById("tgCho").value * 1;

    var loaiXe = layLoaiXe();
    // if(loaiXe === "grabX"){

    // }else if(loaiXe === "grabSUV"){

    // }else{

    // }
    // console.log(loaiXe);
    switch (loaiXe) {
        case "grabX":
            // tienCho = tinhTienCho(tgCho,GRABX_WAIT);
            // if(0 <= soKM && soKM <= 1){
            //     tienKm_1 = tinhKm_1(soKM,GRABX_1);
            //     tongTien = tienKm_1 + tienCho;
            //     console.log("Tong tien",tongTien);
            // }else if(soKM > 1 && soKM <= 19){
            //     tienKm_1 = tinhKm_1(1,GRABX_1);
            //     tienKm_2 = tinhKm_2(soKM, GRABX_2);
            //     tongTien = tienKm_1 + tienKm_2 + tienCho;
            //     console.log("Tong tien",tongTien);
            // }else if(soKM > 19){
            //     tienKm_1 = tinhKm_1(1,GRABX_1);
            //     tienKm_2 = tinhKm_2(19, GRABX_2);
            //     tienKm_3 = tinhKm_3(soKM, GRABX_3);
            //     tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
            //     console.log("Tong tien",tongTien);
            // }
            tinhTongTien(GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3, soKM, tgCho);
            document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerHTML = tinhTongTien(GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3, soKM, tgCho);
            break;
        case "grabSUV":
            tinhTongTien(
                GRAB_SUV_WAIT,
                GRAB_SUV_1,
                GRAB_SUV_2,
                GRAB_SUV_3,
                soKM,
                tgCho
            );
            document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerHTML = tinhTongTien(
                GRAB_SUV_WAIT,
                GRAB_SUV_1,
                GRAB_SUV_2,
                GRAB_SUV_3,
                soKM,
                tgCho
            );
            break;
        case "grabBLACK":
            tinhTongTien(
                GRAB_BLACK_WAIT,
                GRAB_BLACK_1,
                GRAB_BLACK_2,
                GRAB_BLACK_3,
                soKM,
                tgCho
            );
            document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerHTML = tinhTongTien(
                GRAB_BLACK_WAIT,
                GRAB_BLACK_1,
                GRAB_BLACK_2,
                GRAB_BLACK_3,
                soKM,
                tgCho
            );
            break;
        default:
            alert("Vui lòng chọn loại xe !");

            break;
    }
};

function layLoaiXe() {
    var grabX = document.getElementById("grabX");
    var grabSUV = document.getElementById("grabSUV");
    var grabBLACK = document.getElementById("grabBLACK");
    var loaiXe = "";
    if (grabX.checked) {
        loaiXe = "grabX";
    } else if (grabSUV.checked) {
        loaiXe = "grabSUV";
    } else if (grabBLACK.checked) {
        loaiXe = "grabBLACK";
    }
    return loaiXe;
}

function tinhTienCho(tgCho, giaCho) {
    var kq = 0;
    if (tgCho >= 3) {
        kq = Math.floor(tgCho / 3) * giaCho;
    }
    return kq;
}

function tinhKm_1(soKM, giaKM) {
    var kq = soKM * giaKM;
    return kq;
}
function tinhKm_2(soKM, giaKM) {
    var kq = (soKM - 1) * giaKM;
    return kq;
}
function tinhKm_3(soKM, giaKM) {
    var kq = (soKM - 19) * giaKM;
    return kq;
}

function tinhTongTien(wait, grab_1, grab_2, grab_3, soKM, tgCho) {
    tienCho = tinhTienCho(tgCho, wait);
    if (0 <= soKM && soKM <= 1) {
        tienKm_1 = tinhKm_1(soKM, grab_1);
        tongTien = tienKm_1 + tienCho;
        
    } else if (soKM > 1 && soKM <= 19) {
        tienKm_1 = tinhKm_1(1, grab_1);
        tienKm_2 = tinhKm_2(soKM, grab_2);
        tongTien = tienKm_1 + tienKm_2 + tienCho;
        
    } else if (soKM > 19) {
        tienKm_1 = tinhKm_1(1, grab_1);
        tienKm_2 = tinhKm_2(19, grab_2);
        tienKm_3 = tinhKm_3(soKM, grab_3);
        tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
    }
    return tongTien;
}

document.getElementById("btnHoaDon").onclick = function(){
    var content = "";
    var soKM = document.getElementById("soKM").value * 1;
    var tgCho = document.getElementById("tgCho").value * 1;
    var donGia = 0;
    var giaCho = 0;
    var gia2 = 0;
    var gia3 = 0;
    if(layLoaiXe() === "grabX"){
        donGia = GRABX_1;
        giaCho = GRABX_WAIT;
        if(soKM > 1 && soKM <= 19){
            gia2 = GRABX_2;
        }
        if(soKM > 19){
            gia2 = GRABX_2;
            gia3 = GRABX_3;
        }
    }else if(layLoaiXe() === "grabSUV"){
        donGia = GRAB_SUV_1;
        giaCho = GRAB_SUV_WAIT;
        if(soKM > 1 && soKM <= 19){
            gia2 = GRAB_SUV_2;
        }
        if(soKM > 19){
            gia2 = GRAB_SUV_2;
            gia3 = GRAB_SUV_3;
        }
    }else if(layLoaiXe() === "grabBLACK"){
        donGia = GRAB_BLACK_1;
        giaCho = GRAB_BLACK_WAIT;
        if(soKM > 1 && soKM <= 19){
            gia2 = GRAB_BLACK_2;
        }
        if(soKM > 19){
            gia2 = GRAB_BLACK_2;
            gia3 = GRAB_BLACK_3;
        }
    }
    


    if(soKM >= 0 && soKM <= 1){
        content += "<tr>";
        content +=      "<td>Km đầu tiên</td>";
        content +=      "<td>" + soKM + "</td>";
        content +=      "<td>" + donGia + "</td>";
        content +=      "<td>" + tienKm_1+ "</td>";
        content += "</tr>";
        content += "<tr>";
        content +=      "<td>Thời gian chờ</td>";
        content +=      "<td>" + tgCho + "</td>";
        content +=      "<td>" + giaCho + "</td>";
        content +=      "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Tổng tiền</td>";
        content +=      "<td>" + tongTien +"</td>";
        content += "</tr>";

        
    }else if(soKM > 1 && soKM <= 19){
        content += "<tr>";
        content +=      "<td>Km đầu tiên</td>";
        content +=      "<td>" + 1 + "</td>";
        content +=      "<td>" + donGia + "</td>";
        content +=      "<td>" + tienKm_1+ "</td>";
        content += "</tr>";
        content += "<tr>";
        content +=      "<td>Từ 1 đến 19</td>";
        content +=      "<td>" + (soKM - 1) + "</td>";
        content +=      "<td>" + gia2 + "</td>";
        content +=      "<td>" + tienKm_2 + "</td>";
        content += "</tr>";
        content += "<tr>";
        content +=      "<td>Thời gian chờ</td>";
        content +=      "<td>" + tgCho + "</td>";
        content +=      "<td>" + giaCho + "</td>";
        content +=      "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Tổng tiền</td>";
        content +=      "<td>" + tongTien +"</td>";
        content += "</tr>";
    }else if(soKM > 19){
        content += "<tr>";
        content +=      "<td>Km đầu tiên</td>";
        content +=      "<td>" + 1 + "</td>";
        content +=      "<td>" + donGia + "</td>";
        content +=      "<td>" + tienKm_1+ "</td>";
        content += "</tr>";
        content += "<tr>";
        content +=      "<td>Từ 1km đến 19km</td>";
        content +=      "<td>" + 18 + "</td>";
        content +=      "<td>" + gia2 + "</td>";
        content +=      "<td>" + tienKm_2 + "</td>";
        content += "</tr>";
        content +=      "<td>Từ 19km</td>";
        content +=      "<td>" + (soKM - 19) + "</td>";
        content +=      "<td>" + gia3 + "</td>";
        content +=      "<td>" + tienKm_3 + "</td>";
        content += "</tr>";
        content += "<tr>";
        content +=      "<td>Thời gian chờ</td>";
        content +=      "<td>" + tgCho + "</td>";
        content +=      "<td>" + giaCho + "</td>";
        content +=      "<td>" + tienCho + "</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Tổng tiền</td>";
        content +=      "<td>" + tongTien +"</td>";
        content += "</tr>";
    }

    document.getElementById("tbody").innerHTML = content;
}