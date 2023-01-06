import styled from 'styled-components';

export const StyleRentHistory = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px 30px 0px 30px;
    overflow: hidden;
    overflow-x: scroll;
    align-items: center;
    background: #ffffff;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;

    #box-table {
        width: 100%;
    };

    table {
        width: 100%;
        margin: 10px 0px;
        margin-top: 20px;
        border-spacing: 0;
        border-collapse: collapse;
    };

    thead {
        width: 100%;
        height: 50px;
        font-family: 'Roboto';
        background-color: #FFC501;
    }

    .title-thead-border-left {
        border-radius: 8px 0px 0px 0px;
    }

    .title-thead-border-right {
        border-radius: 0px 8px 0px 0px;
    }

    th, td {
        padding: 10px 20px;
        text-align: start;
    }

    tr {
        width: 100%;
        height: 41px;
        border-bottom: 2px solid #CDCDCD;
    }

    .filter-td{
        width: 100px;
        border-bottom: 2px solid #000000;

        img{
            cursor: pointer;
            object-fit: cover;
        }
    }

    .line-thead{
        border-bottom: none;
    }
`;