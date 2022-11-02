import styled from "styled-components";

// 混入 => 这样做的话，只要在下面插入变量即可${boxShadow}; 实际做法抽到了theme
// const boxShadow = `
//     transition: box-shadow 200ms ease;
//     &:hover {
//         box-shadow: 0 2px 4px rgba(0,0,0,.18);
//     }
// `
/*
    box-shadow的参数： 当参数为4时：（1：x轴; 2:y轴; 3:模糊量blur-radius; 4:扩散程度spread；）
                       当参数为3时： 1：x轴; 2:y轴; 3:扩散程度spread）

    space-between：两端对齐，项目之间的间隔相等，两侧贴边
	space-around：每个项目两侧间隔相等，项目之间间隔比项目与边框的间隔大一倍
	space-evenly：每个项目两侧间隔相等，项目之间间隔比项目与边框的间隔相等
 */

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    box-sizing: content-box;
    .btn {
      box-sizing: content-box;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      z-index: 99;
      position: absolute;
      top: 70px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      color: #666;
      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
