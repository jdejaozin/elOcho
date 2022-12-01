function Title2(item){
    return <h2>{item}</h2>
}

function Paragraph(item, itemId){
    return <p className={itemId}>{item}</p>
}

function CardButton(text){
    return <button className="cardButton">{text}</button>
}

function ImageCard(src, alt){
    return <img className="image" src={src} alt={alt}></img>
}

function CardBody(title, text, textID, textButton, src, alt){
    return <div className="card blue">
        {Title2(title)} 
        {Paragraph(text, textID)} 
        {CardButton(textButton)}
        {ImageCard(src, alt)}
        </div>
}

function Row(){
    return <div className="row">
        {CardBody("Chaves", "Um jogador periculoso com um toque de requinte", "chavesBox", "Saiba mais..", "../Images/chaves.jpg", "Chaves")}
        {CardBody("Chiquinha", "Jogadora firme e pé no chão em suas metas", "chiquinhaBox", "Saiba mais..", "../Images/chiquinha.jpg", "Chiquinha")}
        {CardBody("Kiko", "Jogador diferenciado com intuição e táticas próprias", "kikoBox", "Saiba mais..", "../Images/kiko.jpg", "Kiko")}
    </div>
}

function App() {
    return React.createElement(React.Fragment, {}, Row());

}

ReactDOM.render(App(), document.getElementById("conteudo"));