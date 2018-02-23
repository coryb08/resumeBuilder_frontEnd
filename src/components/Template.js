import React from "react"

const Template = props => {
  const image = require(`../template-imgs/${props.template.name}.jpg`)
  return (
    <div>
      <div
        className={`templateCard${props.i}`}
        onClick={props.handleTemplateClick}
      >
        <h1 className="cardTitle">{props.template.name.toUpperCase()}</h1>
        <div
          className="templateImage"
          id={props.template.id}
          style={{
            backgroundImage: `url(${image})`
          }}
          alt={props.template.name}
        />
      </div>
    </div>
  )
}

export default Template

//
//
// .centered {
//   height: 100%;
//   width: 100%;
//   min-width: 50px !important;
//   position: relative;
// }
//
// .App-intro {
//   font-size: large;
// }
//
// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
//
// .smallerDiv {
//   margin-top: -220px !important;
//   transform: scale(0.1, 0.1);
//   -ms-transform: scale(0.8, 0.8); /* IE 9 */
//   -webkit-transform: scale(0.7, 0.7); /* Safari and Chrome */
//   -o-transform: scale(0.8, 0.8); /* Opera */
//   -moz-transform: scale(0.8, 0.8); /* Firefox */
// }
//
// .smaller {
//   /* margin-top: -220px !important; */
//   transform: scale(0.1, 0.1);
//   -ms-transform: scale(0.9, 0.9); /* IE 9 */
//   -webkit-transform: scale(0.9, 0.9); /* Safari and Chrome */
//   -o-transform: scale(0.9, 0.9); /* Opera */
//   -moz-transform: scale(0.9, 0.9); /* Firefox */
// }
//
// .leftAlign {
//   text-align: left !important;
//   margin-left: 20px !important;
// }
//
// * {
//   box-sizing: border-box;
// }
//
// body {
//   margin: 0;
// }
//
// /* Create two equal columns that floats next to each other */
// .column-1 {
//   float: left;
//   width: 43%;
//   padding: 60px;
//   margin-left: 10%;
// }
// .column-templates {
//   float: left;
//   width: 43%;
//   padding: 16px;
//   margin-left: 10%;
// }
//
// .column-2 {
//   float: left;
//   width: 36%;
//   padding: 20px;
//   margin-left: 11%;
// }
//
// /* Clear floats after the columns */
// .row:after {
//   content: "";
//   display: table;
//   clear: both;
// }
//
// #dashImg {
//   height: 10px;
//   width: 18px;
// }
//
// .jobDescription {
//   text-align: left;
// }
//
// img {
//   width: 20em;
//   height: 15em;
//   font-size: 14pt;
// }
//
// .containCards {
//   display: grid;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   text-align: center;
//   margin: auto 0;
// }
//
// .imageArrow {
//   height: 90px;
//   width: 500px;
//   margin-right: 5%;
//   margin-top: 5%;
// }
//
// .bgImage {
//   background-image: url(https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/26220850_10154934018286459_1344738331328459490_o.jpg?oh=0d401eb2110c3a7da9a977e17491086e&oe=5ADC8C0E);
//   height: 100%;
//   position: relative;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
//   z-index: 0;
// }
//
// .zindex {
//   z-index: 3;
// }
//
// .texth3 {
//   vertical-align: top;
// }
//
// .mask {
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   opacity: 0.2;
//   z-index: 2;
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
// }
//
// .cardChild {
//   width: 100%;
//   display: auto;
//   position: auto;
//   margin-left: auto;
//   margin-right: auto;
// }
//
// .moveUp {
//   bottom: 2.5em;
// }
//
// .templateChoose {
//   padding-top: 100%; /* 1:1 Aspect Ratio */
// }
//
// .iup {
// }
//
// label {
//   color: green;
//   font-size: 14pt;
//   padding: 10px;
// }
//
// input[type="text"] {
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
// }
//
// .customLabel {
//   overflow: auto;
//   word-wrap: break-word;
// }
//
// .ui.cards {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   margin: -0.3275em 4.2em;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   left: 1%;
// }
//
// li {
//   color: black;
// }
