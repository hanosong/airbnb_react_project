import styled from "styled-components";

// svg 中默认的用到了current Color，默认会继承自离他最近的父元素的color

// 使用variables里面的主题色 => var(--primary-color) : color: var(--primary-color);
// 下面是用styledComponent 管理主题色
export const LeftWrapper = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    color: ${props => props.theme.color.primaryColor};
    .logo{
        margin-left:24px;
        cursor: pointer;
    }
`