const row2empty = document.querySelector(".empty");
const row2navi = document.querySelector(".row2-navi");
const row2NaviLeft = document.querySelector(".avartar-over-left");
const row2NaviRight = document.querySelector(".avartar-over-right");
const row3 = document.querySelector(".row3");
const row3Info = document.querySelector(".row3-info");
const row5Certificate = document.querySelectorAll("div.certificate-items");
const row5CertificateInside = document.querySelectorAll(
  "div.certificate-items-1"
);
const row6ProjectItems = document.querySelectorAll(".project-items");
const row6Tablet = document.querySelector(".tablet");
const requestForm = document.querySelector(".request-form");
const btnForm = requestForm.querySelector('button[type="submit"]');
const information = document.querySelector(".infomation");
const inputForm = document.querySelector("#input-form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Đây là một biểu thức chính quy

// /^          : bắt đầu chuỗi.
// [^\s@]+    : bất kỳ ký tự nào không phải là khoảng trắng, hoặc ký tự @, xuất hiện một hoặc nhiều lần.
// @          : ký tự @
// \.         : Dấu chấm.
// $/ kết thúc chuỗi.
// Đoạn code trên có thể hiểu rằng
//    -/^- (các ký tự ngoại trừ @ và phím cách '') -@- (các ký tự ngoại trừ @ và phím cách '') -.- (các ký tự ngoại trừ @ và phím cách '')-$-
// Vd:Mở chuỗi   -   "OnePiece                      @              Oda                          .                    Manga"               - Kết chuỗi
// Vậy format của biểu thức này là OnePiece@Oda.Manga đây là một format hợp lý
// Hover vào sẽ có thanh Viewmore xuất hiện.

const hoverViewmore = document.querySelectorAll(".hover-viewmore");
// Đặt biến hoverViewmore là bao gồm tấc cả  (All) Các phần tử có class là hover-viewmore
const viewMoreLabel = document.querySelectorAll("#viewmore");
// Đặt viến viewMoreLabel là bao gồm tấc cả (All) các phần tử có id là viewmore
const row4Hidden = document.querySelectorAll(".row4-hidden");
const btn = document.querySelectorAll(".btn-hidden");
const arrow = document.querySelectorAll(".arrow");
const links = [
  {
    url: "https://khoilhvl.github.io/digitalcv/",
    target: "_blank",
  },
  {
    url: "projectcharter.html",
    target: "_blank",
  },
];

// Sử dụng forEach để thêm event listener cho mỗi project item
row6ProjectItems.forEach((div, index) => {
  div.addEventListener("click", function () {
    window.open(links[index].url, links[index].target);
  });
});

// Function để xóa class khi màn hình nhỏ
function removeClassOnSmallScreen(mql) {
  if (mql.matches) {
    row2navi.classList.remove("row");
    row2navi.classList.add("d-flex", "flex-column");
    row2empty.classList.add("d-none");
    row2NaviLeft.classList.add("flex-column");
    row2NaviRight.classList.add("flex-column");
    row3Info.classList.remove("px-5", "py-5");
    row3.classList.remove("row");
    row5Certificate.forEach((certificate) => {
      certificate.classList.remove("row");
    });
    row5CertificateInside.forEach((certificate) => {
      certificate.classList.add("flex-column");
    });
    row6Tablet.classList.remove("row");

    //Ở màng hình nhỏ, sẽ ẩn luôn cả nhút Viewmore chỉ cần chạm vào khung biểu tượng là được.
    hoverViewmore.forEach((div, index) => {
      let viewMoreStatus = true;
      div.addEventListener("click", () => {
        if (viewMoreStatus === true) {
          row4Hidden[index].classList.remove("hidden");
          row4Hidden[index].classList.add("reveal");
          row4Hidden[index].classList.remove("hide");
          btn[index].textContent = `Viewless`;
          arrow[index].textContent = "arrow_circle_up";
          hoverViewmore[index].classList.add("highlight");
          viewMoreStatus =
            viewMoreStatus === true
              ? (viewMoreStatus = false)
              : (viewMoreStatus = true);
        } else {
          row4Hidden[index].classList.add("hide");
          row4Hidden[index].classList.remove("reveal");
          btn[index].textContent = "Viewmore";
          arrow[index].textContent = "arrow_circle_down";
          hoverViewmore[index].classList.remove("highlight");

          viewMoreStatus =
            viewMoreStatus === true
              ? (viewMoreStatus = false)
              : (viewMoreStatus = true);
        }
      });
    });
  }
}
function removeClassOnTablet(mql) {
  if (mql.matches) {
    row6Tablet.classList.remove("row");
    row6ProjectItems.forEach((items) => {
      items.classList.remove("col");
    });
  }
}

// Kiểm tra kích thước màn hình khi tải trang và khi thay đổi
const tablet = window.matchMedia("(min-width: 768px) and (max-width: 991px)"); // Xác định kích thước màn hình là tablet
removeClassOnTablet(tablet);
tablet.addListener(removeClassOnTablet);
// Kiểm tra kích thước màn hình khi tải trang
const mql = window.matchMedia("(max-width: 767px)"); // Xác định kích thước màn hình nhỏ
removeClassOnSmallScreen(mql);
// Sử dụng event listener để xử lý khi kích thước màn hình thay đổi
mql.addListener(removeClassOnSmallScreen);

// Nhập email để hiển thị thông tin.

btnForm.addEventListener("click", function (event) {
  // Ngăn chặn tải lại trang khi ấn vào nút Submit.
  event.preventDefault();
  if (
    // .value.trim()==="" đây là cách để lấy giá trị của một input và loại bỏ khoảng trắng ở đầu và cuối chuỗi.
    //Điều này để xác định xem người cùng có thật sự nhập dữ liệu hay không
    inputForm.value.trim() === ""
  ) {
    alert("Vui lòng nhập email để xác nhận");
  } else if (
    //!emailPattern.test(inputForm.value) .test(inputForm.value) sử dụng để kiểm tra input có khớp với biểu thức !email.Pattern hay không?
    !emailPattern.test(inputForm.value) //
  ) {
    alert("Vui lòng nhập đúng định dạng  ví dụ: ...@gmail.com");
  } else {
    requestForm.classList.add("d-none");
    information.classList.remove("d-none");
  }
});

hoverViewmore.forEach((div, index) => {
  // Ta sẽ chiếc xuất các phần tử div trong hoverViewmore.
  div.addEventListener("mouseover", () => {
    //Khi hover chuột vào các div dược chỉ dịnh index
    viewMoreLabel[index].classList.remove("opacity"); //Chúng sẽ lấy thứ tự index của div đang được hover chuột
    // vào và lấy index đó là thứ tự của biến viewMoreLabel, vì mỗi biến đều có một hover tương ứng, nên số thứ tự củng sẽ không bị sai lệch ;
  });
  div.addEventListener("mouseout", () => {
    viewMoreLabel[index].classList.add("opacity");
  });
});
viewMoreLabel.forEach((div, index) => {
  let viewMoreStatus = true;
  div.addEventListener("click", () => {
    if (viewMoreStatus === true) {
      row4Hidden[index].classList.remove("hidden");
      row4Hidden[index].classList.add("reveal");
      row4Hidden[index].classList.remove("hide");
      btn[index].textContent = `Viewless`;
      arrow[index].textContent = "arrow_circle_up";
      hoverViewmore[index].classList.add("highlight");
      viewMoreStatus =
        viewMoreStatus === true
          ? (viewMoreStatus = false)
          : (viewMoreStatus = true);
    } else {
      row4Hidden[index].classList.add("hide");
      row4Hidden[index].classList.remove("reveal");
      btn[index].textContent = "Viewmore";
      arrow[index].textContent = "arrow_circle_down";
      hoverViewmore[index].classList.remove("highlight");

      viewMoreStatus =
        viewMoreStatus === true
          ? (viewMoreStatus = false)
          : (viewMoreStatus = true);
    }
  });
});
