const mainContainer = document.getElementById('root');
const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : 'Click me visit google',  
}
function customRender(element,container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if(prop === 'children'){
            continue;
        }
        domElement.setAttribute(prop,element.props[prop]);
    }
    // domElement.setAttribute('href',element.props.href);
    // domElement.setAttribute('target',element.props.target); 
    container.appendChild(domElement);
}
customRender(reactElement, mainContainer);