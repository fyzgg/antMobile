
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-antdMobile',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
    ["import", { 
      libraryName: "antd-mobile", 
      style: "css" 
    }]
  ],
}
