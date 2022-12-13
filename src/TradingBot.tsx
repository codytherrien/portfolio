import Navbar from "./components/NavBar"
import { Equation } from 'react-equation'
import clustering from "./assets/projects/clustering.png"
import firstLine from "./assets/projects/first_line.png"


function TradingBot() {
  return (
    <div>
        <Navbar />
        <div className="project-div">
            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a9ef9]">
                    Automated Trading Bot
                </h1>
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    Using  
                    <span className="highlight"> Machine Learning </span> 
                    and the
                    <span className="highlight"> Alpaca Markets api </span>
                    to build a 
                    <span className="highlight"> fully automated </span> 
                    trading bot
                </h2>
                <p className="text-[#676767] py-4">
                    Developing algorithmic trading strategies has grown more popular in the 
                    past decade by both institutional investors and retail investors alike. 
                    Algorithmic trading strategies can be used to take the emotion out of 
                    investing resulting in more sound decision making and investing. Unlike 
                    many other fields where the growth of a technology in the space can 
                    lead to more prosperous results for the whole community, trading is 
                    the opposite as it is a competitive space. Algorithmic strategies that 
                    were once profitable can become less profitable over time as other 
                    investors discover the strategy and use them to their own advantage. 
                </p>

                <p className="text-[#676767] py-4">
                    The goal of this project was to develop a new algorithmic trading 
                    strategy that produces risk adjusted returns greater than that of 
                    the S&P 500 index. Beating the S&P 500 index constantly, or generating 
                    alpha, is a difficult task that only few investors manage to accomplish 
                    consistently.
                </p>
                
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6"> 
                    <span className="highlight">Clustering </span>
                    for Stock Segmentation
                </h2>
                <p className="text-[#676767] py-4">
                    Prior to making any trades in any algorithmic trading strategy an algorithm 
                    must be developed to select the positions. As discussed earlier the 
                    algorithm rebalances positions on a daily basis using a clustering algorithm. 
                    The decision was made to use a Hierarchical Agglomerative Clustering (HAC). 
                    I believe HAC is a good choice for this application because HAC works by 
                    splitting the clusters by the dissimilarities between the stocks that need 
                    to be grouped.    
                </p>
                <p className="text-[#676767] py-4">
                    There are three main steps to the HAC process. First, the dissimilarity or 
                    distance between the stocks is calculated in the feature space. Second, the 
                    two stocks with the minimal agglomeration criterion are grouped together. 
                    There are multiple different agglomeration criteria that one can use in HAC. 
                    I tested ward linkage, average linkage, complete linkage, and single linkage. 
                    When testing multiple sample dates ward linkage proved to produce the most even 
                    distribution in the Dendrogram. A more balanced dendrogram will give a more even 
                    distribution of the stocks into their four main groups. Finally, the dissimilarity 
                    distance between the created group in step two and the other N-2 stocks is 
                    calculated using the agglomeration criteria. The two stocks or groups of stocks 
                    whose clustering minimized the agglomeration criteria ae the grouped together. These 
                    three steps are then repeated until all stocks have been grouped with the root of the 
                    dendrogram contains all stocks for a single day. 
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Backtesting </span>
                    and trade data collection
                </h2>
                <p className="text-[#676767] py-4">
                    As with any algorithmic trading strategy, this strategy must be back tested 
                    prior to live trading to simulate historical returns. In this case the HAC 
                    algorithm outlined above was used group stocks into four clusters: trending 
                    up, trending down, mean reverting up and mean reverting down. Since the 
                    clustering algorithm does not consistently label stocks with similar feature 
                    sets from a day-to-day basis a sorting algorithm needed to be developed to 
                    label the four clusters for a given day.    
                </p>

                <h3 
                    className="text-xl sm:text-4xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Cluster Sorting</span>
                </h3>
                <p className="text-[#676767] py-4">
                    Each day, after the percentage change at open, five day mean of percentage change 
                    at open, five day variance of percentage change at open, 20 day mean of percentage 
                    change at open, and 20 day variance of percentage change at open were calculated, 
                    and the stocks were clustered based on these features the stock clusters needed to 
                    be labelled. To do this the days were split into four dataframes based on their 
                    cluster. The centroids of these four clusters were then calculated along with a 
                    “trend score” and a “mean reverting score”. The trend score for each cluster was 
                    calculated as follows: 
                </p>
                <div className="flex justify-center">
                    <Equation className="text-[#f2fdff]"
                        value="trend score = mean percentage change at open + five day mean"
                    />
                </div>
                <p className="text-[#676767] py-4">
                    The mean reverting score for each cluster was determined as follows: 
                </p>
                <div className="flex justify-center">
                    <Equation className="text-[#f2fdff]"
                        value="mean reverting score=mean five day mean-mean percentage change at open"
                    />
                </div>
                <p className="text-[#676767] py-4">
                    Any cluster with a negative percent change and negative five day mean of percentage 
                    change at open was added to the possible trending down list. Any cluster with a 
                    positive percent change and positive five day mean of percentage change at open was 
                    added to the possible trending up list. Any cluster with a positive percentage change 
                    and a negative five day mean of percentage change at open was added to the possible 
                    mean reverting down list. Any cluster with a negative percentage change at open and a 
                    positive five day mean of percentage change at open was added to the possible mean 
                    reverting down list. 
                </p>
                <p className="text-[#676767] py-4">
                    The trend lists were then sorted by the trend score and the mean reverting lists were 
                    sorted by the mean reverting score. For both of the above cases the potential short 
                    centroids were shorted in ascending score values and the potential long centroids were 
                    sorted in descending score values. After sorting the correct centroid and label could 
                    be matched to each of the four stock groups.  
                </p>

                <h3 
                    className="text-xl sm:text-4xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Placing Positions</span>
                </h3>
                <p className="text-[#676767] py-4">
                    After matching the four clusters to their correct labels the three stocks from each group 
                    needed to be selected to place positions on. There are two schools of thought that could 
                    be used in this step. The first, and simpler approach would be to find the 3 stocks 
                    closest to the centroids of each cluster. Looking at the plot below that doesn’t 
                    necessarily seem to be the best approach. 
                </p>
                <div className="flex justify-center py-4">
                    <img src={clustering} alt="Stock Clustering Plot"/>
                </div>
                <p className="text-[#676767] py-4">
                    As one can see from the plot above, the centroids of the four clusters are relatively 
                    close together. This would imply that the feature values of the stocks near the centroids 
                    are not all that dissimilar. 
                </p>
                <p className="text-[#676767] py-4">
                    Consider the example of a stock that has been rapidly rising over the past three or four 
                    days. This stock would be strongly trending upward, and logically, a trader would like 
                    to capitalize on this opportunity by placing a long position on this stock. In the plot 
                    about this stock would be an outlier to the top righthand corner of the plot. This though 
                    experiment lead to the second school of thought in placing positions: look for the outliers 
                    in each cluster. 
                </p>
                <p className="text-[#676767] py-4">
                    When looking for an outlier the traditional approach is to find the datapoints that are 
                    furthest away from the cluster center of the cluster they are a child of. In this case 
                    I took a slightly different approach, I found the stocks that were furthest from the 
                    cluster centers of the other 3 clusters. This would mean that the three stocks that this 
                    algorithm would select to place long positions in the trending up category would be the 
                    three stocks in the trending up cluster that have a combined L2 distance furthest away 
                    from the trending down, mean reverting up, and mean reverting down cluster centers. 
                </p>
                <p className="text-[#676767] py-4">
                    Following the outlier algorithm described above three stocks from each of the four groups 
                    were selected and the positions could be entered.  
                </p>
                <p className="text-[#676767] py-4">
                    When each position was entered the following information about the trade was stored in a 
                    trade history dataframe: entry date, ticker, side, if the trade was mean reverting or 
                    trending, the percentage change, the five day mean of the percentage change, the five 
                    day variance of the percentage change, the twenty day mean of the percentage change, and 
                    the twenty day variance of the percentage change. When closing a position the exit price, 
                    percentage gain or loss, and if the trade was a winning trade or not was added to each 
                    respective row in the dataframe. 
                </p>
                <p className="text-[#676767] py-4">
                    The results of back testing this strategy on the Mid Cap 400 stock collection between 
                    February 7th 2019 and June 20th 2020 are as follows:
                </p>
                <table>
                <tr>
                   <th></th>
                   <th></th>
                 </tr>
                 <tr>
                    <td className="text-[#0a9ef9]">Start Date</td>
                    <td className="text-[#f2fdff]">02-07-2019</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">End Date</td>
                    <td className="text-[#f2fdff]">07-20-2020</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Profit</td>
                    <td className="text-[#f2fdff]">-$8,963.97</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Annualized Returns</td>
                    <td className="text-[#f2fdff]">-0.06727</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Winrate</td>
                    <td className="text-[#f2fdff]">0.4883</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Percent Gain on Winning Trades</td>
                    <td className="text-[#f2fdff]">0.5445</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Percent Loss on Losing Trades</td>
                    <td className="text-[#f2fdff]">0.4548</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Sharpe Ratio</td>
                    <td className="text-[#f2fdff]">-0.1836</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Max Drawdown</td>
                    <td className="text-[#f2fdff]">$36,918.28</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Max Drawdown Length</td>
                    <td className="text-[#f2fdff]">258 days</td>
                </tr>
                <tr>
                    <td className="text-[#0a9ef9]">Alpha</td>
                    <td className="text-[#f2fdff]">-0.064</td>
                </tr>
                </table>
                <div className="flex justify-center py-4">
                    <img src={firstLine} alt="Initial Backtest Plot"/>
                </div>
                <p className="text-[#676767] py-4">
                As one can see from the table and plot above this strategy 
                is not successful prior to meta labelling. 
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    Training  
                    <span className="highlight"> Meta Labelling </span> 
                    Model
                </h2>
            </div>
        </div>
    </div>
  )
}

export default TradingBot