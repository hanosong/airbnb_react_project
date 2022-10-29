import styled from "styled-components";

// MuiPaginationItem-icon 调整svg箭头的大小
export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;

    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        .Mui-selected.MuiPaginationItem-page{
            background-color: #222;
            color: #fff;
        }
        .MuiPaginationItem-page{
            margin: 0 8px;
            &:hover {
                text-decoration: underline
            }
        }
        .MuiPaginationItem-icon{
            font-size: 25px;
        }
        .desc{
            margin-top: 15px;
            color: #222;
        }
    }
`
