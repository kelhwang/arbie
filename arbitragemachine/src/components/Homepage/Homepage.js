import React, { Component } from 'react';

export default class Homepage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => {
    return (
      <div className='about'>
        <div>
          <article>
            <div>
              <h2>About Arbie</h2>
              <p>Arbie is a web app which provides trading signals, enabling users to make use of inter-exchange arbitrage for Bitcoin and Ethereum cryptocurrencies.</p>
            </div>
            <div>
              <h2>What is Arbitrage?</h2>
              <p>"Arbitrage is basically buying a security in one market and simultaneously selling it in another market at a higher price, profiting from a temporary difference in prices. This is considered riskless profit for the investor/trader." <a href ="https://www.investopedia.com/ask/answers/04/041504.asp#ixzz53H4ptAmk">Read more from the source</a></p>
            </div>
          </article>
          <aside>
            <h3>Arbie's Future</h3>
            <p>Future plans are to include more exchanges, cryptocurrencies, and user settings. We'll also be adding more technical indicators to inform our trading signals.</p>
          </aside>
            
        </div>
      </div>
    );
  }
}