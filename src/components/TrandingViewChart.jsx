import React, { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: "tradingview_chart",
          autosize: true,
          symbol: "BINANCE:XRPUSDT", 
          interval: "15", 
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          details: true,
          hotlist: true,
          calendar: false,
          studies: ["MASimple@tv-basicstudies", "MACD@tv-basicstudies"],
        });
      }
    };

    container.current.appendChild(script);
  }, []);

  return <div id="tradingview_chart" style={{ height: "490px", width: "100%" }} ref={container}></div>;
};

export default TradingViewChart;
