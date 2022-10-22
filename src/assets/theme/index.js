// 用styled components 管理主题
// 什么可以制定为主题？ => 参考antd中的定制主题
const theme = {
    color:{
        primaryColor: "#ff385c",
        secondaryColor: "#00848A"
    },
    text:{
        primaryColor: '#484848',
        secondaryColor: '#222'
    },
    mixin:{
        boxShadow: `
        transition: box-shadow 200ms ease;
        &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,.18);
        }
    `
    }
}

export default theme