import React, { Component } from 'react'


class AutomaticAds extends Component {
  componentDidMount() {
    let adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({
      google_ad_client: 'ca-pub-8118457789375955',
      enable_page_level_ads: true,
    })
  }

  render() {
    return <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  }
}

export default AutomaticAds