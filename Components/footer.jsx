function Paragraph(item, itemId){
    return <p className={itemId}>{item}</p>
}

function Footer(){
    return <footer>
                {Paragraph("Chaves Master Play", "siteID")}
                {Paragraph("CNPJ: 12.345.678/0001-11", "siteID")}
                {Paragraph("Criado por: João Pedro Teixeira Justino", "authorID")}
                {Paragraph("3° Período ADS", "authorID")}
            </footer>
}

function App() {
    return React.createElement(React.Fragment, {}, Footer());

}

ReactDOM.render(App(), document.getElementById("footer"));