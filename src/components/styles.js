import styled from "styled-components";

export const Header = styled.section `
padding: 20px 10vw;
background-color: #0f111d;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.left-header img{
    width: 130px
}
ul{
    display: flex;
    align-items: center;
    gap: 25px;
    color: #fff;
    font-size: 1.2em;
}

a{
    color: #fff;
    text-decoration: none;
}
ul img{
    width: 35px;
    display: none;
    cursor: pointer;
}

.right-header-mobile{
    display: none;
}

.right-header-mobile{
    position: absolute;
    background: #37353e;
    top: 80px;
    right: 5vw;
}
.right-header-mobile{
    border-radius: 20px
}
.right-header-mobile ul{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 30px 60px 30px 25px;
}



.right-header-mobile {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}




@media screen and (max-width: 820px) {
    padding: 20px 5vw;
    .right-header li{
        display:none;
    }
    ul img{
        display: block;
    }
}

`;