# image-compressor

> 基于canvas进行图片压缩；

## 预览
[预览地址](http://htmlpreview.github.io/?)

## 关键步骤

- 获取img元素，即为压缩的图片
- 创建canvas对象
- 使用canvas的drawImage方法绘制图片
- 通过canvas toDataURl方法获取图像base64编码，设置quality参数，实现压缩

## 用法

主要的图片压缩逻辑在`ImageCompresor.js`文件中，使用方法：

```js
var image = new Image();
image.src = ''; // 设置图片相关属性

var compresor = new ImageCompresor({
  width: 500,
  height: 250,
  image: image, // image 对象
  ratio: 0.2,
});

var base64 = compresor.compress();
```
