import React from "react";
class MainPortfolio extends React.Component{
    render() {
        return (
            <div className="main-about">
                <div className="content-about">
                    <h2>Portfolio &#x1f5c3;&#xfe0f;</h2>
                    <h3>Some links to my projects.</h3>
                    <div className="item-portfolio">
                        <p><b>CMS and Web Public</b> A cms for the publication of current news from Peru, was carried out mainly through Laravel.</p>
                        <a href="https://willax.pe/">https://willax.pe/</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPortfolio;