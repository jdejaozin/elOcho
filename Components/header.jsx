function Img(id, src, alt){
    return <img id={id} src={src} alt={alt}></img>;
}

function itemList(item){
    return <li id="navItemList">{item}</li>
}

function List(){
    return <ul id="navList">{itemList("Poker Stars")} {itemList("Teste sua gameplay")} {itemList("Conheça mais jogadores")}</ul>
}

function Header(){
    return <header>
        {Img("imgHeader", "../Images/barril.png", "barril")}  
        {Img("imgLogo", "../Images/ocho.png", "logo")}
        {List()}</header>
}

function App() {
    return React.createElement(React.Fragment, {}, Header());

}

ReactDOM.render(App(), document.getElementById("header"));