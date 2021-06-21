import React from 'react';
import './styles.css';
export default App;

function App() {
  return (<>
    <body>
      <h1 style={{ color: "white" }}>
        CENTRO DE INTELIGENCIA DE AXIE PEPOSO
      </h1>
      <div style={{ display: "flex", flex: "row" }}>
        <div style={{ borderRadius: 20, textAlign: "center", color: "turquoise", marginLeft: "10rem" }}>
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

        <div style={{ borderRadius: 20, textAlign: "center", color: "turquoise", marginLeft: "10rem" }}>
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

    </body>
  </>)
}