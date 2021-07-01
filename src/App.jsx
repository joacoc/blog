import React from 'react';
import Eth from 'web3-eth';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [eth, setEth] = useState(undefined);
  const [err, setErr] = useState(undefined);
  const [accounts, setAccounts] = useState([]);
  const [balances, setBalances] = useState(new Map());

  useEffect(() => {
    const ethClient = new Eth(Eth.givenProvider);
    setEth(ethClient);
  }, []);

  useEffect(() => {
    if (eth) {
      eth.getAccounts().then((ethAccounts) => {
        if (ethAccounts.length > 0) {
          setAccounts(ethAccounts);
        } else {
          const { ethereum } = window;
          if (ethereum) {
            ethereum.enable();
            ethereum.on('accountsChanged', function (accounts) {
              setAccounts(accounts);
            });
          }
        }
      }).catch((errAccounts) => {
        console.log(errAccounts);
        setErr('Error getting accounts.');
      })
    }
  }, [eth]);

  useEffect(() => {
    if (accounts.length > 0) {
      const balancesPromises = [];
      accounts.forEach((account) => {
        balancesPromises.push(eth.getBalance(account))
      });
      Promise.all(balancesPromises).then((allBalances) => {
        const newBalances = new Map();
        accounts.forEach((account, index) => {
          newBalances.set(account, allBalances[index]);
        });

        setBalances(newBalances);
      }).catch((errBalance) => {
        console.error(errBalance);
        setErr("Error getting balances.");
      });
    }
  }, [eth, accounts])

  return (<>
    <div style={{ backgroundColor: "black", height: "100%" }}>
      <h1 style={{ color: "green", textAlign: "center" }}>
        CENTRO DE INTELIGENCIA DE AXIE PEPOSO
      </h1>
      <div style={{ color: "white", marginLeft: "2rem" }}>
        {err
          ? <p>Error: {err}</p>
          : (
            <div style={{ display: "flex", flexFlow: "column" }}>
              <h3>Accounts: </h3>
              <p style={{}}>{accounts.map(account => <p>{account} - Balance: ${balances.get(account)}</p>)}</p>
            </div>
          )}
      </div>
      <div style={{ display: "flex", flexWrap: "column", marginLeft: "5%", marginRight: "5%" }}>
        <div style={{ borderRadius: 20, textAlign: "center", color: "turquoise" }}>
          <h3>Precio: Small love potion</h3>
          <iframe
            src="https://streaminy.io/share/511301c7-7875-43dc-a90a-e2dda065e2c9"
            title="smallLovePotionChart"
            width="600"
            height="300"
            frameborder="0"
            style={{ borderRadius: 5 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>

        <div style={{ borderRadius: 20, textAlign: "center", color: "blue", marginLeft: "3rem" }}>
          <h3>Precio: Axie Infinity</h3>
          <iframe
            src="https://streaminy.io/share/050d6fa5-fb32-46c8-aa09-02c32d058da9"
            title="axieInfinityChart"
            width="600"
            height="300"
            frameborder="0"
            style={{ borderRadius: 5 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
      <div style={{ marginTop: "5rem", textAlign: "center" }}>
        <h3 style={{ color: "white" }}>La tablita</h3>
        <iframe
          src="https://streaminy.io/share/894a870a-d8ce-4ee9-afef-4f32f0ae1b10"
          title="tableChart"
          width="600"
          height="400"
          frameborder="0"
          style={{ borderRadius: 5 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>

    </div>
  </>)
}

export default App;