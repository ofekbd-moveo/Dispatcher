import { ChartType, IDoughnutChart, TChartCard } from "../types";

export const apiMock = {
  status: "ok",
  totalResults: 9425,
  articles: [
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Neil Winton, Senior Contributor, \n Neil Winton, Senior Contributor\n https://www.forbes.com/sites/neilwinton/",
      title: "Lithium Shortage May Stall Electric Car Revolution And Embed China’s Lead: Report",
      description:
        "The electric car revolution will stall if supplies of battery elements like lithium fail to keep up with the forecast huge increase in demand. This will drive battery prices higher, decimate profit margins, and the coveted $100 per kWh battery will remain on …",
      url:
        "https://www.forbes.com/sites/neilwinton/2021/11/14/lithium-shortage-may-stall-electric-car-revolution-and-embed-chinas-lead-report/",
      urlToImage:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6190ef69c7a3d27c4393c0c6%2F0x0.jpg",
      publishedAt: "2021-11-12T14:34:02Z",
      content:
        "Evaporation pools of the new state-owned lithium extraction complex, in the southern zone of the ... [+] Uyuni Salt Flat, Bolivia. (Photo by PABLO COZZAGLIO/AFP via Getty Images)\r\nAFP via Getty Image… [+6433 chars]",
    },
    {
      source: {
        id: null,
        name: "Cracknewz.com",
      },
      author: "Neha",
      title: 'As Housing Market Boom Drags On, Just 13% Of Gen Z Say Owning A Home Is "Extremely Important"',
      description: "",
      url: "https://www.cracknewz.com/2021/11/as-housing-market-boom-drags-on-just-13.html",
      urlToImage:
        "https://lh4.googleusercontent.com/proxy/PyMr_gvHKSJdQ_MBeOmLNZZkOk5G87rSafMB6zTvFNQbxP8H1pCr4rl-J0XDrOZT1acXKMxP5F2WJfNJgpBKXAwXIKvcCZHC0kD_ZEGes2GSOfHxkpqG0pVmoGJSBI41z1yEBuNVbF9Ccjoi088jouq9qBl_OMKn2l5kElzAvkhfFKA=w1200-h630-p-k-no-nu",
      publishedAt: "2021-11-12T14:16:46Z",
      content:
        "When it comes to the housing market, millennials and Gen Z have something in common: both generations came of age during particularly turbulent times for housing markets. Millennials faced the housin… [+3009 chars]",
    },
    {
      source: {
        id: null,
        name: "The Times of Israel",
      },
      author: null,
      title: "WeLaugh: Israeli satire show skewers excesses and fantasy in tech sector",
      description:
        "'Eretz Nehederet' takes aim at some of the colorful tendencies in an industry awash with cash and eccentric leaders",
      url: "https://www.timesofisrael.com/welaugh-israeli-satire-show-skewers-excesses-and-fantasy-in-tech-sector/",
      urlToImage: "https://static.timesofisrael.com/www/uploads/2021/11/ballpit-1024x640.jpg",
      publishedAt: "2021-11-14T14:16:30Z",
      content:
        "Israeli tech startup Webos just hit a valuation of $1 billion and its eccentric founder, Nadir Hackerman, was only too happy to be interviewed for a local Israeli TV news channel about the company’s … [+8645 chars]",
    },
    {
      source: {
        id: "the-next-web",
        name: "The Next Web",
      },
      author: "The Conversation",
      title: "What is Bitcoin’s fundamental value?",
      description:
        "As it hits new highs, there is no shortage of bold predictions about Bitcoin reaching US$100,000 or more. Often these are based on not much more than extrapolations by people with vested interests: the price has gone up a lot so it will keep going up. If it g…",
      url: "https://thenextweb.com/news/what-is-bitcoin-fundamental-value-syndication",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F10%2FBitcoinRock.jpg&signature=45bce8af956740e654366d53b87be38b",
      publishedAt: "2021-11-09T14:00:35Z",
      content:
        "As it hits new highs, there is no shortage of bold predictions about Bitcoin reaching US$100,000 or more.\r\nOften these are based on not much more than extrapolations by people with vested interests: … [+5299 chars]",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "Vardah Gill",
      title: "Reddit Stock Portfolio: 10 Most Popular Stocks To Consider",
      description:
        "In this article, we discuss the 10 most popular Reddit stocks to consider. You can skip our comprehensive analysis of these famous stocks, and go directly to...",
      url: "https://finance.yahoo.com/news/reddit-stock-portfolio-10-most-134254004.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/tVZ9KVznK2gRf.fs.lhm3Q--~B/aD01MTI7dz03Njg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/adcab1fb307f33215738e52aa8f734f1",
      publishedAt: "2021-11-09T13:42:54Z",
      content:
        "In this article, we discuss the 10 most popular Reddit stocks to consider. You can skip our comprehensive analysis of these famous stocks, and go directly to Reddit Stock Portfolio: 5 Most Popular St… [+9178 chars]",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "Trends Desk",
      title: "Tractor trolley collides with pole, turns street light on",
      description:
        "An unsecured cargo trolley kept rolling back on a busy street, crashing onto an electrical pole and turning on a light.",
      url:
        "https://indianexpress.com/article/trending/viral-videos-trending/tractor-trolley-collides-turns-on-street-light-7622306/",
      urlToImage: "https://images.indianexpress.com/2021/11/truck-hits-lamp-post-lights-on.jpg",
      publishedAt: "2021-11-14T13:16:57Z",
      content:
        "There is no dearth of hilarious, desi content on Twitter, including random whacky things that have the potential to start a laughing riot online. Joining the list is a moving tractor trolley that hel… [+2053 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "News24",
      },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "'Shark Tank' star Kevin O'Leary defends Elon Musk's nearly $300 billion fortune - and predicts many workers won't return to offices",
      description:
        "The serial investor argued the Tesla and SpaceX CEO shouldn't be punished for changing people's lives and making the economy greener.",
      url: "https://www.businessinsider.com/shark-tank-kevin-oleary-elon-musk-wealth-offices-remote-work-2021-11",
      urlToImage: "https://i.insider.com/5fc7fd9d50e71a0011558878?width=1200&format=jpeg",
      publishedAt: "2021-11-14T12:53:04Z",
      content:
        '"Shark Tank" investor Kevin O\'Leary defended Tesla CEO Elon Musk\'s massive fortune in an interview on "Real Time with Bill Maher" on Saturday.\r\nThe O\'Leary Funds boss whose nickname is "Mr Wonderful"… [+2240 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "News24",
      },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "'Shark Tank' star Kevin O'Leary defends Elon Musk's nearly $300 billion fortune - and predicts many workers won't return to offices",
      description:
        "The serial investor argued the Tesla and SpaceX CEO shouldn't be punished for changing people's lives and making the economy greener.",
      url:
        "https://markets.businessinsider.com/news/stocks/shark-tank-kevin-oleary-elon-musk-wealth-offices-remote-work-2021-11",
      urlToImage: "https://images2.markets.businessinsider.com/5fc7fd9d50e71a0011558878?format=jpeg",
      publishedAt: "2021-11-14T12:53:04Z",
      content:
        "Kevin O'Leary.\r\nMike Blake/Reuters\r\n\"Shark Tank\" investor Kevin O'Leary defended Tesla CEO Elon Musk's massive fortune in an interview on \"Real Time with Bill Maher\" on Saturday.\r\nThe O'Leary Funds b… [+2292 chars]",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "Lance Roberts",
      title: "Inflation In Irrational Exuberance",
      description:
        "The combination of the sell signals, very light volume, and weak breadth certainly warrants some caution heading into next week.",
      url: "https://seekingalpha.com/article/4469309-inflation-in-irrational-exuberance",
      urlToImage: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1307600158/large_image_1307600158.jpg",
      publishedAt: "2021-11-14T12:35:00Z",
      content:
        "Thibault Renard/iStock via Getty Images\r\nMarket Stalls Ahead Of Options Expiration\r\n Unlike recent weeks, this past week saw the market begin to consolidate recent gains ahead of options expiration n… [+10077 chars]",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "feedfeeder",
      title: "Elon Musk sold nearly $7 billion of Tesla stock, wanted higher taxes - Markets Insider",
      description:
        "Elon Musk sold nearly $7 billion of Tesla stock, wanted higher taxesMarkets Insider Elon Musk ends the week selling another $1.2 billion of Tesla sharesCNN Billionaires: Elon Musk's net worth plunges by a record $50bn in two daysThe National Elon Musk sells n…",
      url: "https://slashdot.org/firehose.pl?op=view&amp;id=155146429",
      urlToImage: null,
      publishedAt: "2021-11-14T12:32:33Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "newsfeedback@fool.com (Neha Chamaria)",
      title: "3 Hot Electric Vehicle Stocks to Buy and Hold for the Next Decade",
      description: "These EV stocks could grow exponentially as their growth plans materialize.",
      url: "https://www.fool.com/investing/2021/11/14/3-hot-electric-vehicles-stocks-to-buy-hold-decade/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/653039/a-person-using-a-mobile-phone-while-waiting-to-charge-electric-car.jpg",
      publishedAt: "2021-11-14T12:25:00Z",
      content:
        "Electric vehicles are the future. In a report dated Nov. 10 and prepared for the big United Nations climate conference that just concluded in Glasgow, BloombergNEF projects annual EV sales to hit 5.6… [+6652 chars]",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "WSJ",
      title: "Elon Musk sells additional Tesla stock worth more than $1.2 billion",
      description:
        "The sales were disclosed in a regulatory filing late Friday and came on top of roughly $5.6 billion in stock disposals earlier in the week",
      url:
        "https://www.livemint.com/companies/news/elon-musk-sells-additional-tesla-stock-worth-more-than-1-2-billion-11636892098771.html",
      urlToImage: "https://images.livemint.com/img/2021/11/14/600x338/TESLA-CHINA--0_1631345023021_1636892246200.JPG",
      publishedAt: "2021-11-14T12:22:10Z",
      content:
        "Elon Musk sold roughly $6.9 billion worth of Tesla Inc. stock this week in one of the largest-ever stock disposals by a chief executive over a several-day period.\r\nThe Tesla CEO reported selling 1.2 … [+4273 chars]",
    },
    {
      source: {
        id: null,
        name: "News24",
      },
      author: "Sandeep G. Rao",
      title: "Rivian: Trends, Forecasts And Challenges For The EV Industry Weigh Heavily On Its Prospects",
      description:
        "Model forecasts for Rivian's addressable markets are positive but competition is ferocious. Externalities limit growth of BEV market. Read how they impact RIVN stock.",
      url:
        "https://seekingalpha.com/article/4469306-rivian-trends-forecasts-challenges-ev-industry-weigh-on-stock-prospects",
      urlToImage: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1352479047/large_image_1352479047.jpg",
      publishedAt: "2021-11-14T12:18:00Z",
      content:
        "Michael M. Santiago/Getty Images News\r\nGores Guggenheim Inc. (NASDAQ:GGPI) filed a preliminary proxy last night to take EV carmaker Polestar public with a valuation of $20 billion. Rivian (NASDAQ:RIV… [+12562 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "News24",
      },
      author: "PTI",
      title: "Niti Aayog member bats for Hyperloop trials by foreign firms in India",
      description:
        "India has the capacity to design its own Hyperloop, Niti Aayog member VK Saraswat says, but since it will take time to develop the technology indigenously, the country should allow foreign companies to showcase the transportation system here.",
      url:
        "https://economictimes.indiatimes.com/tech/tech-bytes/niti-aayog-member-bats-for-hyperloop-trials-by-foreign-firms-in-india/articleshow/87699753.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-87699731,width-1070,height-580,imgsize-567353,overlay-ettech/photo.jpg",
      publishedAt: "2021-11-14T12:09:58Z",
      content:
        "New Delhi: India has the capacity to design its own hyperloop for ultra high-speed travel, Niti Aayog member VK Saraswat said, but since it will take time to develop the technology indigenously, the … [+2561 chars]",
    },
    {
      source: {
        id: null,
        name: "Futurism",
      },
      author: "Futurism Creative",
      title: "Save on Science Toys And DIY Kits During This Pre-Black Friday Sale",
      description:
        "Put some science into the gift mix this year, with an additional 15% off our best science and DIY kits for a limited time in our Pre-Black Friday sale! TinyTesla Musical Tesla Coil Kit This teeny coil is easy to assemble and can play any MIDI file from your l…",
      url: "https://futurism.com/save-on-science-toys-and-diy-kits-during-this-pre-black-friday-sale",
      urlToImage: "https://wp-assets.futurism.com/2021/11/sale_183434_article_image.jpeg",
      publishedAt: "2021-11-14T12:03:49Z",
      content:
        "Put some science into the gift mix this year, with an additional 15% off our best science and DIY kits for a limited time in our Pre-Black Friday sale!\r\nTinyTesla Musical Tesla Coil Kit\r\nThis teeny c… [+5495 chars]",
    },
    {
      source: {
        id: null,
        name: "Futurism",
      },
      author: "Sarah Kessler",
      title: "The Week in Business: Conglomerates Break Up - The New York Times",
      description:
        "First G.E. and then J&J decide to split up their businesses. Inflation is rising. And the Biden administration's vaccine mandate faces court challenges.",
      url: "https://www.nytimes.com/2021/11/14/business/the-week-in-business-conglomerates-break-up.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/11/14/business/14Withinterest1-illo/14Withinterest1-illo-facebookJumbo.jpg",
      publishedAt: "2021-11-14T12:00:07Z",
      content:
        "Credit...Giacomo Bagnara\r\nOn Tuesday, General Electric said it will spin off its health care division in early 2023 and its energy business a year later. Only its aviation division will remain. The 1… [+3189 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "News24",
      },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Elon Musk sold nearly $7 billion worth of Tesla stock this week - and says he's incurring higher taxes on purpose",
      description:
        'The Tesla CEO, who has committed to selling 10% of his stake, described his stock-selling strategy as "closer to tax maximization than minimization."',
      url:
        "https://markets.businessinsider.com/news/stocks/elon-musk-tesla-stock-sales-higher-taxes-electric-vehicles-billionaires-2021-11",
      urlToImage: "https://images2.markets.businessinsider.com/6001f3bf660f6c0018349821?format=jpeg",
      publishedAt: "2021-11-14T10:46:54Z",
      content:
        "Elon Musk.\r\nSusan Walsh/AP\r\nElon Musk cashed in nearly $7 billion worth of Tesla stock this week, and indicated on Twitter that he's intentionally incurring higher taxes on the sales.\r\nThe Tesla CEO … [+1662 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Futurism",
      },
      author: "kshalvey@insider.com (Kevin Shalvey)",
      title:
        "A Tesla owner whose vehicle crashed in Full Self-Driving mode has filed a complaint with federal safety regulators, reports say",
      description:
        "A Tesla Model Y using FSD software crashed in California, multiple reports said. The driver complained that the car drove itself into the wrong lane.",
      url: "https://www.businessinsider.com/tesla-full-self-driving-crash-complaint-nhtsa-electric-vehicles-2021-11",
      urlToImage: "https://i.insider.com/6190cb9ad6722800192442ba?width=1200&format=jpeg",
      publishedAt: "2021-11-14T10:29:47Z",
      content:
        "A Tesla driver filed a complaint with federal safety investigators after his vehicle crashed in California while using its Full Self-Driving software, Reuters reported. \r\nThe 2021 Model Y's owner fil… [+1860 chars]",
    },
    {
      source: {
        id: null,
        name: "Futurism",
      },
      author: "Reuters",
      title: "Musk Sells Nearly $7 Billion Worth Of Tesla Shares This Week",
      description:
        "Tesla CEO Elon Musk has sold 6.36 million shares this week - around 37% of 17 million. He now needs to offload about 10 million more shares to fulfill his pledge to sell 10% of his holdings.",
      url: "https://www.carandbike.com/news/musk-sells-nearly-7-billion-worth-of-tesla-shares-this-week-2610378",
      urlToImage: "https://c.ndtvimg.com/2021-06/1emns4p8_elon-musk_650x400_28_June_21.jpg",
      publishedAt: "2021-11-14T08:44:47Z",
      content:
        "Tesla CEO Elon Musk offloaded a combined $6.9 billion worth of shares in the electric car company this week, taking advantage of a meteoric rally that vaulted the firm's value to over $1 trillion. Th… [+3038 chars]",
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Akshat Rathi, Jess Shankleman and John Ainger",
      title: "News24.com | COP26 seals breakthrough climate deal after major compromises",
      description:
        "The Glasgow Climate Pact rests on the huge assumption that the biggest polluters will follow through on their promises to zero out their emissions over the next decades.",
      url:
        "https://www.news24.com/fin24/Economy/cop26-seals-breakthrough-climate-deal-after-major-compromises-20211114",
      urlToImage: "https://cdn.24.co.za/files/Cms/General/d/11712/1dba7e5039ee4a72a85c33a3e5bbd008.jpg",
      publishedAt: "2021-11-14T08:06:45Z",
      content:
        '<ul><li>Delegates of COP26 agreed to reduce the use of coal, end "inefficient" fossil-fuel subsidies and boost climate targets sooner.</li><li>The accord came despite last-minute objections from Chin… [+5696 chars]',
    },
  ],
};
export const countries = ["Israel", "France", "London", "Germany", "Greece"];
export const categories = ["Medical", "Politics", "Music", "Sport"];
export const sources = ["NBC", "CNN", "ESPN", "Vulture"];
export const country = "Israel";
export const dispatchersDatabase = "Top Headline";
export const tagsMock: string[] = ["#Covid-19", "Israel", "+2"];

export const doughnutDataMock = {
  labels: ["NBC", "Vulture", "CNN", "ESPN"],
  datasets: [
    {
      label: "Sum",
      data: [15, 15, 30, 48],
      backgroundColor: [
        "rgba(221, 243, 254, 0.5)",
        "rgba(255, 152, 0, 0.5)",
        "rgba(3, 0, 53, 0.5)",
        "rgba(52, 58, 110, 0.5)",
      ],
      borderColor: ["rgba(221, 243, 254, 1)", "rgba(255, 152, 0, 1)", "rgba(3, 0, 53, 1)", "rgba(52, 58, 110, 1)"],
      borderWidth: 2,
      hoverBackgroundColor: [
        "rgba(221, 243, 254, 0.8)",
        "rgba(255, 152, 0, 0.8)",
        "rgba(3, 0, 53, 0.8)",
        "rgba(52, 58, 110, 0.8)",
      ],
      hoverOffset: 5,
    },
  ],
};

export const lineDataMock = {
  labels: ["MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
  datasets: [
    {
      label: "# of dispatchers",
      data: [20, 10, 17, 30, 34, 26],
      fill: true,
      backgroundColor: "rgba(0, 88, 185, 0.2)",
      borderColor: "rgba(0, 88, 185, 0.7)",
      tension: 1,
    },
  ],
};

export const barDataMock = {
  labels: ["Crypto", "Chine", "Tech", "Israel", "Politics", "Economy"],
  datasets: [
    {
      label: "# of tags",
      data: [32, 12, 58, 40, 20, 30],
      backgroundColor: [
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
      ],
      borderRadius: 10,
      borderWidth: 1,
      indexAxis: "y",
    },
  ],
};

export const doughnutChartMock: IDoughnutChart = {
  title: "Sources",
  type: ChartType.DOUGHNUT,
  data: doughnutDataMock,
};
export const lineChartMock: TChartCard = {
  title: "Dates",
  type: ChartType.LINE,
  data: lineDataMock,
};

export const barChartMock: TChartCard = {
  title: "Tags",
  type: ChartType.BAR,
  data: barDataMock,
};

export const chartsMock: TChartCard[] = [doughnutChartMock, lineChartMock, barChartMock];

export const recentSearchesMock = ["crypto", "soccer", "soc", "fdaad", "dgdf", "asddsf"];
