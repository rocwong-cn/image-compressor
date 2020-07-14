; (function (undefined) {
  "use strict"
  var _global;

  // 插件构造函数 - 返回数组结构
  function ImageCompresor(opt) {
    this.initial(opt);
  };

  ImageCompresor.prototype = {
    constructor: this,
    initial: function (opt) {
      // 默认参数 和 初始化 暴露的内部方法
      var def = {
        width: 300,
        height: 150,
        image: null,
        ratio: 0.8,
      };

      this.options = Object.assign({}, def, opt);
    },

    compress: function () {
      var width = this.options.width,
          height = this.options.height,
          image = this.options.image,
          ratio = this.options.ratio;

      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, width, height);

      return canvas.toDataURL("image/jpeg", ratio); // 压缩后的base64串
    }
  };

  // 将插件对象暴露给全局对象（考虑兼容性）
  _global = (function () { return this || (0, eval)('this'); }());
  if (typeof module !== "undefined" && module.exports) {
    module.exports = ImageCompresor;
  } else if (typeof define === "function" && define.amd) {
    define(function () { return ImageCompresor; });
  } else {
    !('ImageCompresor' in _global) && (_global.ImageCompresor = ImageCompresor);
  }
}());