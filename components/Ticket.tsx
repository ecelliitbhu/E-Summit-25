import React from "react";

const Ticket = () => {
  return (
    <div>
      <style jsx>{`
        :root {
          --ticket-color: #ebebeb;
          /* --body-color: #6d6d6d; */
          --body-color: #f0ba96;
          --background-text-color: #f0ba96;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          min-width: 100%;
          min-height: 100vh;
        }

        body {
          background: var(--body-color);
          background: -moz-radial-gradient(
            circle,
            rgba(240, 186, 150, 1) 69%,
            rgba(245, 175, 128, 1) 100%
          );
          background: -webkit-radial-gradient(
            circle,
            rgba(240, 186, 150, 1) 69%,
            rgba(245, 175, 128, 1) 100%
          );
          background: radial-gradient(
            circle,
            rgba(240, 186, 150, 1) 69%,
            rgba(245, 175, 128, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f0ba96", endColorstr="#f5af80", GradientType=1);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.7); /*to fit in the preview*/
        }

        .ticket-container {
          display: flex;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          position: absolute;
          /*   top: 200px */
        }

        .ticket-container.behind {
          animation: move-ticket 0.8s ease-in forwards;
        }

        .ticket-divider {
          height: 250px;
          border-left: 4px dotted var(--ticket-color);
        }

        .ticket-background,
        .ticket-text {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ticket {
          background-color: var(--ticket-color);
          position: relative;
        }

        .ticket.bigger {
          width: 500px;
          height: 250px;
        }

        .ticket.smaller {
          width: 150px;
          height: 250px;
        }

        .ticket-content {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .ticket-text {
          justify-content: space-between;
        }

        .ticket-background h1 {
          font-size: 180px;
          text-transform: uppercase;
          font-family: "Oswald", sans-serif;
          color: var(--background-text-color);
          -webkit-transform: scaleY(1.3);
          transform: scaleY(1.3);
        }

        .ticket-text h2 {
          font-family: "Share Tech Mono", monospace;
          text-transform: uppercase;
          font-size: 34px;
          font-weight: 200;
        }

        .left {
          width: 220px;
          transform: rotate(-90deg);
        }

        .right {
          width: 200px;
          transform: rotate(-90deg);
          text-align: end;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .decoration-divider {
          position: relative;
          width: 50px;
          height: 5px;
          background-color: black;
        }

        .smaller .ticket-content {
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .small-left {
          width: 100px;
          transform: rotate(-90deg);
          display: flex;
          flex-direction: column;
        }

        .small-left h2 {
          font-size: 15px;
          font-family: "Share Tech Mono", monospace;
          text-transform: uppercase;
          text-align: center;
        }

        .barcode {
          height: 2em;
          width: 0;
          margin: 1.2em 0 0 0.8em;
          box-shadow:
            1px 0 0 1px black,
            5px 0 0 1px black,
            10px 0 0 1px black,
            11px 0 0 1px black,
            15px 0 0 1px black,
            18px 0 0 1px black,
            22px 0 0 1px black,
            23px 0 0 1px black,
            26px 0 0 1px black,
            30px 0 0 1px black,
            35px 0 0 1px black,
            37px 0 0 1px black,
            41px 0 0 1px black,
            44px 0 0 1px black,
            47px 0 0 1px black,
            51px 0 0 1px black,
            56px 0 0 1px black,
            59px 0 0 1px black,
            64px 0 0 1px black,
            68px 0 0 1px black,
            72px 0 0 1px black,
            74px 0 0 1px black,
            77px 0 0 1px black,
            81px 0 0 1px black;
        }

        .small-right {
          width: 100px;
          transform: rotate(-90deg);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .small-right h1 {
          text-transform: uppercase;
          font-family: "Oswald", sans-serif;
          font-weight: 100;
          font-size: 40px;
          line-height: 60px;
          -webkit-transform: scaleY(1.6);
          transform: scaleY(1.6);
          color: var(--background-text-color);
        }

        @keyframes move-ticket {
          0% {
            transform: rotate(0deg);
            transform-origin: left;
          }
          100% {
            transform: rotate(15deg);
            transform-origin: left;
          }
        }

        /* Rest of the CSS code... */
      `}</style>
      <div className="ticket-container behind">
        <div className="ticket bigger">
          <div className="ticket-content">
            <div className="ticket-background">
              <h1>Ticket</h1>
            </div>
            <div className="ticket-text">
              <div className="left">
                <div className="decoration-divider"></div>
                <h2>SEATTLE</h2>
                <h2>WA</h2>
                <h2>AUGUST</h2>
                <h2>CHALLENGE</h2>
                <div className="decoration-divider"></div>
              </div>
              <div className="right">
                <div className="decoration-divider"></div>
                <h2>DATE</h2>
                <h2>09-13</h2>
                <h2>AUGUST</h2>
                <h2>2021</h2>
                <div className="decoration-divider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-divider"></div>
        <div className="ticket smaller">
          <div className="ticket-content">
            <div className="small-right">
              <h1>admit</h1>
              <h1>one</h1>
            </div>
            <div className="small-left">
              <h2>CodePen</h2>
              <h2>&</h2>
              <h2>Algolia</h2>
              <div className="barcode"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ticket-container">
        <div className="ticket bigger">
          <div className="ticket-content">
            <div className="ticket-background">
              <h1>Ticket</h1>
            </div>
            <div className="ticket-text">
              <div className="left">
                <div className="decoration-divider"></div>
                <h2>SEATTLE</h2>
                <h2>WA</h2>
                <h2>AUGUST</h2>
                <h2>CHALLENGE</h2>
                <div className="decoration-divider"></div>
              </div>
              <div className="right">
                <div className="decoration-divider"></div>
                <h2>DATE</h2>
                <h2>09-13</h2>
                <h2>AUGUST</h2>
                <h2>2021</h2>
                <div className="decoration-divider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-divider"></div>
        <div className="ticket smaller">
          <div className="ticket-content">
            <div className="small-right">
              <h1>admit</h1>
              <h1>one</h1>
            </div>
            <div className="small-left">
              <h2>CodePen</h2>
              <h2>&</h2>
              <h2>Algolia</h2>
              <div className="barcode"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
