//debounce 防抖动
export function debounce(func, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 时间戳转换
export function formatDate(date, fmt) {
  //1、获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  //2、获取
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
//图片预加载
export class ImgLoad {
  constructor(imageUrl) {
    this.imageUrl = imageUrl;
  }
  preloadImages() {
    let loadeImageCount = 0; //加载成功的img数量
    return new Promise((resolve, reject) => {
      for (let index = 0; index < this.imageUrl.length; index++) {   
        const src = this.imageUrl[index];
        // 创建一个新的图片标签
        const newImages = new Image();
        // 将传进来的src赋值给新的图片
        newImages.src = src;
        // 图片加载完成调用成功状态
        newImages.addEventListener(
          "load",
          () => {
            loadeImageCount+=1;
            if (loadeImageCount === this.imageUrl.length) {
              console.log(loadeImageCount);
              
              resolve(loadeImageCount)
            }
          },
          false
        );
        // 图片加载完成调用失败状态
        newImages.addEventListener("error", () => reject(), false);
      }
    });
  }
}
export function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

