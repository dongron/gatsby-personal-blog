import React, { Component } from 'react'

class AutomaticAds extends Component {
  render() {
    return (
      <React.Fragment>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8118457789375955"
          crossOrigin="anonymous"
        ></script>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-8118457789375955",
          enable_page_level_ads: true
          });`}
        </script>
      </React.Fragment>
    )
  }
}

export default AutomaticAds
