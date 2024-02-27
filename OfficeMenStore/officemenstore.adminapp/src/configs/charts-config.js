export const chartsConfig = {
// toolbar: Cấu hình thanh công cụ của biểu đồ.
// show: false: Ẩn thanh công cụ của biểu đồ
  chart: {
    toolbar: {
      show: false,
    },
  },
  // show: "": Cấu hình tiêu đề của biểu đồ.
  // Giá trị rỗng có thể ngụ ý là không hiển thị tiêu đề.
  title: {
    show: "",
  },
  // enabled: false: Cấu hình cho nhãn dữ liệu trên biểu đồ.
  // Với giá trị false, nhãn dữ liệu sẽ không được hiển thị.
  dataLabels: {
    enabled: false,
  },
//  axisTicks: Cấu hình gạch trên trục x.
// show: false: Không hiển thị gạch trên trục x.
// axisBorder: Cấu hình đường viền của trục x.
// show: false: Không hiển thị đường viền trục x.
// labels: Cấu hình cho nhãn trục x.
// Màu sắc, kích thước, font chữ được đặt.
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "13px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
// labels: Cấu hình cho nhãn trục y.
// Màu sắc, kích thước, font chữ được đặt.
  yaxis: {
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "13px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
// show: true: Cấu hình hiển thị lưới trên biểu đồ.
// borderColor: "#dddddd": Màu sắc của đường biên của lưới.
// strokeDashArray: 5: Kiểu đường nét của lưới.
// xaxis: Cấu hình cho lưới trục x.
// lines.show: true: Hiển thị đường lưới trên trục x.
// padding: Cấu hình kích thước đệm của lưới.
  grid: {
    show: true,
    borderColor: "#dddddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  // opacity: 0.8: Cấu hình độ mờ của màu fill.
  fill: {
    opacity: 0.8,
  },
  // theme: "dark": Cấu hình chủ đề của tooltip.
  // Chọn giao diện nền tối cho tooltip.
  tooltip: {
    theme: "dark",
  },
};

export default chartsConfig;
