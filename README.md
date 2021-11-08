# BSC NFT rarity tool

The website is hosted on [heroku](https://bsc-nft.herokuapp.com/). It is an appraisal tool similar to [rarity.tools](https://rarity.tools/) with a few [stats](https://bsc-nft.herokuapp.com/).

If you see the following error message. Kindly refresh the page a couple of times. I'll look into it and probably upgrade soon.

<img src='https://i.stack.imgur.com/ZDBwR.png' alt='nothing here yet error' width='500px' style='text-align: center;' />

## Features
**Watch [demo video](https://youtu.be/NXlo9a9J-Wk)**

The site is similar to rarity.tools where you compare attributes and their rarities. rarity tools wrote a great [article](https://raritytools.medium.com/ranking-rarity-understanding-rarity-calculation-methods-86ceaeb9b98c) in which they compare different methods of calculating NFTs.

BSC-NFT contain these methods and we might upgrade to version 2 like [rarity did](https://raritytools.medium.com/introducing-rarity-tools-9b0138e992b3) by extracting new attributes and collaborating with NFT projects to see what they value more.

Analysis of Sales and Volume is ongoing with 3 marketplace kickstarted. Please let me know of any NFT project or Marketplace you find interesting. The most important thing is they have a contract on Binance chain that can be decoded and read.


## Criteria for choosing NFTs

There are several NFTs on the binance blockchain. But the plan is to select from the best and that's why each indexed NFTs must meet the following criterias:

* Is a collectible with more than one attributes
* Has a total and max supply of 100 to 25,000
* Has at least 10 % holders
* Has been fully minted or at least the metadata for all token are available
* Has ABI on bscscan.com
* Is not for games, because their value are not usually based on traits rarity.
* URI should be verifiable from reading the smart contract.

I've seen a number of NFTs that fell short by a single criteria like less than 10% holders. With time, the criteria might be relaxed. We just need to start with the best of the best.

