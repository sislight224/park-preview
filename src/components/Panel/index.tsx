import styled from "styled-components"

const LogoWrapper = styled.div`
    border-bottom: 1px solid rgb(79, 79, 79);

    img {
        width: 80%;
    }
`

const Detail = styled.div`
    border-bottom: 1px solid rgb(79, 79, 79);
`

const MenuWrapper = styled.div`
    position: relative;
`

const Menu = styled.div`
    position: relative;
    border-radius: 5px;
    
    &:hover {
        background: rgb(79, 79, 79);
    }

    .index {
        width: 35px !important;
        height: 35px !important;
        border-radius: 100vw;
        border: 3px solid #ff861a;
    }
`

export const Panel = () => {
    
    return (
        <div className="flex flex-col w-56 bg-gray-800 h-full">
            <LogoWrapper className="text-center text-white p-4 mt-4 cursor-pointer flex flex-col justify-center items-center">
                <img className="py-4" alt="pic" src="./assets/images/logo.png" />
                <div className="text-2xl">STUDIOSHED</div>
                <div className="text-sm">DESIGN CENTER</div>
            </LogoWrapper>

            <Detail className="p-4 text-white">
                <p>18x22 Summit 396 sq ft $53,478</p>
            </Detail>

            <MenuWrapper className="p-2">
                <Menu className="flex items-center text-white text-lg cursor-pointer p-2">
                    <div className="index flex justify-center items-center mr-2">1</div>
                    <div>Models</div>
                </Menu>

                <Menu className="flex items-center text-white text-lg cursor-pointer p-2">
                    <div className="index flex justify-center items-center mr-2">2</div>
                    <div>Interior</div>
                </Menu>

                <Menu className="flex items-center text-white text-lg cursor-pointer p-2">
                    <div className="index flex justify-center items-center mr-2">3</div>
                    <div>Exterior</div>
                </Menu>

                <Menu className="flex items-center text-white text-lg cursor-pointer p-2">
                    <div className="index flex justify-center items-center mr-2">4</div>
                    <div>Shipping & Install</div>
                </Menu>

                <Menu className="flex items-center text-white text-lg cursor-pointer p-2">
                    <div className="index flex justify-center items-center mr-2">5</div>
                    <div>Permits</div>
                </Menu>
            </MenuWrapper>
        </div>
    )
}

export default Panel