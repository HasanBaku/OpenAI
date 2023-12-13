import styled from "styled-components";

export const Header = styled.section `
padding: 20px 15vw;
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


@media screen and (max-width: 1700px) {
    padding: 20px 5vw;
}

@media screen and (max-width: 820px) {
    .right-header li{
        display:none;
    }
    ul img{
        display: block;
    }
}

`;


export const Homes = styled.section `
padding: 20px 15vw;
background-color: #0f111d;
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
align-items: center;
position: relative;


.home-left{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 650px;
}
.discount{
    color: #aeaeb3;
    display:flex;
    align-items: center;
    background: linear-gradient(to bottom right, #2e2c2f 5%, #1e1d28 50%);
    padding: 3px 0px 3px 15px;
    border-radius: 10px;
    width: 350px;
    font-size: 1.1em;
}
.discount img{
    width: 12%;
}
.discount span{
    color: #fff;
    padding: 5px
}
.title-section{
    display: flex;
    align-items: center;
}
.title-section h1{
    font-size: 4em;
    color: #fff;
    font-weight: bold;
    line-height: 1.5em;
}
.title-section h1 span{
    background: -webkit-linear-gradient(80deg, #3fbcd2, #daf6f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.home-right img{
    width: 100%;
}


@media screen and (max-width: 1700px) {
    padding: 70px 0vw 40px 5vw;

}


`;