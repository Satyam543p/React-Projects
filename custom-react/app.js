function customRender(reactElement,container){
   const domElement=document.createElement(reactElement.type);
   for(prop in reactElement.props){
    domElement.style[prop]=reactElement.props[prop];
   }
   domElement.innerHTML=reactElement.children;
   container.appendChild(domElement);
};
const reactElement={
    type:"button",
    props:{
       height:"200px",
       width:"200px",
       color:"Green",
       border:'none',
       fontWeight:"900",
       fontSize:"30px",
       backgroundColor:"aqua",
       position:"absolute",
       top:"calc(50% - 100px)",
       left:"calc(50% - 100px)",
       borderRadius:"20px",
       
    },
    children:"Hello"
};
const mainContainer=document.querySelector("#root");
customRender(reactElement,mainContainer);
