import Navbar from "./components/NavBar"
import { Equation } from 'react-equation'
import clustering from "./assets/projects/clustering.png"
import firstLine from "./assets/projects/first_line.png"
import metaLabelBacktest from "./assets/projects/meta_label_backtest.png"
import simpleBacktest from "./assets/projects/simple_backtest.png"


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
                <div className="flex justify-center py-6">
                    <Equation className="text-[#f2fdff]"
                        value="trend score = mean percentage change at open + five day mean"
                    />
                </div>
                <p className="text-[#676767] py-4">
                    The mean reverting score for each cluster was determined as follows: 
                </p>
                <div className="flex justify-center py-6">
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
                <p className="text-[#676767] py-4">
                    Prior to moving to the second stage of back testing a model must be selected 
                    for meta labelling. Five models were tested including Logistic Regression, 
                    Random Forest, Support Vector Machine, XGBoost, and A shallow Neural Network. 
                    To determine the best model for the next stage of the back test both model 
                    accuracy and model recall were used to evaluate model performance. 
                </p>
                <p className="text-[#676767] py-4">
                    To train each of the trade history dataset developed in the previous part of 
                    the back test was used as the training and test set. Given that this is a time 
                    series problem, the data cannot be shuffled prior to training as that would 
                    result in information leakage. This limits the flexibility of fine tuning each 
                    model as techniques like k-fold cross validation cannot be used. 
                </p>
                <p className="text-[#676767] py-4">
                    Given this limit the default hyperparameters were used with a few exceptions. 
                    For logistic regression, and random forest the class weights were altered to give 
                    a true positive a weight of 1.1 and a true negative a weight of 1.0. This change 
                    incentivises the classifier to choose to make a trade over not making a trade. 
                    This decision was made since the strategy cannot be successful if there are not 
                    trades made and there is a believe that there are profitable trades to be made on 
                    any given day. For the logistic regression model the solver was changed to saga 
                    and the penalty to l1. Prior to training and after thinking through the problem it 
                    was decided to switch from the default l2 penalty to l1. L1 penalty puts less 
                    weight on outliers as it uses the absolute value of the error over the squared 
                    error in l2 error. Given that this feature set is giving incomplete information 
                    about any given stock on any given day there is a high probability that the 
                    sentiment around a company could change drastically with no correlation to the 
                    feature set selected. These outliers would have a much larger impact on the model 
                    when using l2 penalty vs l1 penalty. 
                </p>
                <p className="text-[#676767] py-4">
                    For the random forest classifier, the only change outside the class weight 
                    alteration discussed above was the selection of the max depth. Given the feature 
                    set consisted of 8 features and we are dealing with a noisy dataset where 
                    overfitting can be a major issue the decision was made to select a max depth of 
                    roughly the square root of the number of features or 3.
                </p>
                <p className="text-[#676767] py-4">
                    For the neural network the network architecture needed to be selected. Knowing that 
                    we were using a feature set of 8 features, the neither the depth nor the breadth of 
                    the network could be large. It is common practice to build a feed forward neural 
                    network with a triangular structure where the width of each layer in the network 
                    decreases as you get further into the network. Based on the 8 features in our input 
                    feature set the logical decision was made to have two hidden layers of widths four 
                    and two. The activation function was also switched to tanh to expand the output range 
                    of each node to (-1.0, 1.0) and to reduce the likelihood of the vanishing gradient problem.
                </p>
                <p className="text-[#676767] py-4">
                    The results from the model selection phase are as follows:
                </p>
                <table  className="text-[#f2fdff]">
                    <tr>
                        <th>Model</th>
                        <th>Recall</th>
                        <th>Accuracy</th>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Logistic Regression</td>
                        <td>0.6432</td>
                        <td>0.5322</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Shallow Neural Network</td>
                        <td>0.5432</td>
                        <td>0.5201</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Random Forest</td>
                        <td>0.6621</td>
                        <td>0.5054</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Support Vector Machine</td>
                        <td>0.2297</td>
                        <td>0.5094</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">XGBoost</td>
                        <td>0.6243</td>
                        <td>0.5067</td>
                    </tr>
                </table>
                <p className="text-[#676767] py-4">
                    Based on these results, Support Vector machine and the shallow neural network 
                    can be eliminated. XGboost was also eliminated as the results were not significantly 
                    better than those of the random forest or logistic regression. Given XGboost is a 
                    more complex model than both logistic regression and the random forest, it is less 
                    likely to generalize well to the next stage of the back test and the live trading. 
                    Finally, although the results were very close, Logistic Regression was selected over 
                    the random forest. 
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    <span className="highlight">Back Testing </span> 
                    and testing  
                    <span className="highlight"> Meta Labelling</span>
                </h2>
                <p className="text-[#676767] py-4">
                    After selecting logistic regression as the model used for meta labelling the second 
                    stage of the back test could begin. Prior to beginning the second stage of the back 
                    test the logistic regression meta labelling model was trained on the full trading 
                    history data set.
                </p>
                <p className="text-[#676767] py-4">
                    This second stage of the back test functioned the same as the first stage of the back 
                    test with one exception. After finding the three outlier stocks in each cluster to 
                    place trades on the features of these stocks were fed into the meta labelling model 
                    to predict if the trade should be placed. If the meta labelling model predicts the 
                    trade will be a winning trade the trade is placed if the meta labelling model predicts 
                    the trade will be a losing trade the trade is not placed. The results of the second 
                    stage of the back test can be seen below.
                </p>
                <table>
                    <tr>
                       <th></th>
                       <th></th>
                     </tr>
                     <tr>
                        <td className="text-[#0a9ef9]">Start Date</td>
                        <td className="text-[#f2fdff]">07-22-2020</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">End Date</td>
                        <td className="text-[#f2fdff]">02-17-2022</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Profit</td>
                        <td className="text-[#f2fdff]">$745,603.54</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Annualized Returns</td>
                        <td className="text-[#f2fdff]">2.8774</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Winrate</td>
                        <td className="text-[#f2fdff]">0.5514</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Percent Gain on Winning Trades</td>
                        <td className="text-[#f2fdff]">1.0333</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Percent Loss on Losing Trades</td>
                        <td className="text-[#f2fdff]">0.9611</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Sharpe Ratio</td>
                        <td className="text-[#f2fdff]">22.5308</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Max Drawdown</td>
                        <td className="text-[#f2fdff]">$1,094,274.57</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Max Drawdown Length</td>
                        <td className="text-[#f2fdff]">265 days</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Alpha</td>
                        <td className="text-[#f2fdff]">1.0698</td>
                    </tr>
                </table>
                <div className="flex justify-center py-4">
                    <img src={metaLabelBacktest} alt="Meta Label model backtest"/>
                </div>
                <p className="text-[#676767] py-4">
                    As one can see the strategy performs far better after meta labelling by every metric. 
                    To determine the actual impact of meta labelling on the strategy a back test was also 
                    run during the same time period without meta labelling. The results of this back test 
                    can be seen below.
                </p>
                <table>
                    <tr>
                       <th></th>
                       <th></th>
                     </tr>
                     <tr>
                        <td className="text-[#0a9ef9]">Start Date</td>
                        <td className="text-[#f2fdff]">07-22-2020</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">End Date</td>
                        <td className="text-[#f2fdff]">02-17-2022</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Profit</td>
                        <td className="text-[#f2fdff]">-$23,468.85</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Annualized Returns</td>
                        <td className="text-[#f2fdff]">-0.1561</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Winrate</td>
                        <td className="text-[#f2fdff]">0.4963</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Percent Gain on Winning Trades</td>
                        <td className="text-[#f2fdff]">0.543</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Percent Loss on Losing Trades</td>
                        <td className="text-[#f2fdff]">0.4255</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Sharpe Ratio</td>
                        <td className="text-[#f2fdff]">-0.3652</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Max Drawdown</td>
                        <td className="text-[#f2fdff]">$120,062.81</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Max Drawdown Length</td>
                        <td className="text-[#f2fdff]">267 days</td>
                    </tr>
                    <tr>
                        <td className="text-[#0a9ef9]">Alpha</td>
                        <td className="text-[#f2fdff]">0.1334</td>
                    </tr>
                </table>
                <div className="flex justify-center py-4">
                    <img src={simpleBacktest} alt="Simple model backtest"/>
                </div>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    <span className="highlight">Results</span>
                </h2>
                <p className="text-[#676767] py-4">
                    There are two main avenues to evaluate the algorithmic trading strategy outlined 
                    in this project: the financial analysis of the strategy and the machine learning 
                    evaluation of the model.
                </p>

                <h3 
                    className="text-xl sm:text-4xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Financial </span>
                    Evaluation
                </h3>
                <p className="text-[#676767] py-4">
                    Based on the results in the section above, meta labelling can have a profound impact 
                    on a trading strategy. The two main metrics used to evaluate are annualized returns 
                    a Sharpe ratio. Annualized returns are self explanatory: the percentage gain per year. 
                    This is obviously important for any investment strategy as the goal of any algorithmic 
                    trading strategy is to make money. The second metric, Sharpe ratio, is a little more 
                    complex. The equation of Sharpe ratio is as follows:
                </p>
                <div className="flex justify-center py-6">
                    <Equation className="text-[#f2fdff]"
                        value="Sharpe Ratio = (return of portfolio - risk free rate) / (standard deviation of portfolio's excess return)"
                    />
                </div>
                <p className="text-[#676767] py-4">
                    As one can see, Sharpe ratio considers not only the rate of return of a portfolio but 
                    also the risk-free rate and the standard deviation of the portfolio. In our example 
                    we assumed the risk-free rate was 3% which was higher than treasury bond yields during 
                    this period. Strategies with a high Sharpe ratio are typically profitable and good for 
                    investors looking for a strategy that can produce regular cash flow. As the trade 
                    frequency increases the number of samples in a set increase and there is an inverse 
                    relationship between the number of samples in a set and the standard deviation of the set.
                </p>
                <p className="text-[#676767] py-4">
                    When comparing the results of the final meta labelled strategy to the unlabelled strategy 
                    over the same period the impact of meta labelling is outstanding from a financial 
                    perspective. The original strategy is still a losing strategy in the second period between 
                    July 2020 and March 2022 whereas the meta labelled model has annualized returns of about 
                    288%. This massive change is mainly due to one number in the results table: winrate. 
                    Winrate or the percentage of trades that are money making trades increases from 49.63% to 
                    55.14%. This change may not seem like much, but one must remember that the returns from 
                    each winning or losing trade compound with each trade. Given that this strategy trades daily, 
                    this minor change leads to massive changes in the profitability of the strategy.
                </p>
                
                <h3 
                    className="text-xl sm:text-4xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Machine Learning </span>
                    Evaluation
                </h3>
                <p className="text-[#676767] py-4">
                    With almost any application a binary classifier with less than 60% accuracy and about 60% 
                    recall would be considered a complete failure, but in the field of quantitative finance a 
                    model with these modest metrics can have profound changes on the profitability of a trading 
                    strategy. Financial data is extremely noisy as financial markets are complex adaptive systems 
                    that are affected by not only the decisions of the people within these companies but also all 
                    people across the globe. Given the adaptive nature of financial markets building a classifier 
                    with a traditionally high accuracy (80%-90%) is nearly impossible as it would have to take 
                    into consideration information from all corners of the globe.
                </p>
                <p className="text-[#676767] py-4">
                    When evaluating a model in the quantitative finance space one should take into consider the 
                    area specific maximal accuracy. In theory, across applications one might think an ideal model 
                    could produce an accuracy greater than 95%. In algorithmic trading the realistic maximal 
                    attainable accuracy with an optimal model is probably more like 70%.
                </p>
                <p className="text-[#676767] py-4">
                    This leads to another consideration: further hyperparameter optimization. In this experiment 
                    some hyperparameters were set prior to training based on some application specific assumptions, 
                    but no hyperparameter tuning was done. The reason for this is simple: time-series data limits 
                    the ways hyperparameter optimization can be done without introducing bias.
                </p>
                <p className="text-[#676767] py-4">
                    Consider the following example on how hyperparameter tuning could be performed for an 
                    algorithmic trading strategy. Assume that there are 6 months of executed trade history and 
                    there are five different hyperparameter options a data scientist would like to consider. 
                    Instead of using k-fold cross validation the data scientist would have use much smaller 
                    one-month training and testing batches. This is due to the nature of time series data as 
                    one cannot give a model information from trades made after any trade in the test set. To 
                    give each of the five potential models an equal amount of training data the data would need 
                    to be split as follows:
                </p>
                <table  className="text-[#f2fdff]">
                    <tr className="text-[#0a9ef9]">
                        <th>Model Number</th>
                        <th>Training Month Number</th>
                        <th>Testing Month Number</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                </table>
                <p className="text-[#676767] py-4">
                    As one can see, to reduce bias and to prevent data leakage each model has a small amount of 
                    training data. Even though this solution solves the problem of allowing a data scientist to 
                    do some hyperparameter tuning on a time-series it introduces a new problem in the case of 
                    financial time-series data. Our solution above assumes the data is stationary and with time 
                    series data this is not the case. Even if one were to take the first difference of a stock’s 
                    performance the results in the short term would look stationary, but in the long term it is 
                    unlikely the performance would continue to be stationary. There is lots of evidence indicating 
                    that financial markets are not stationary in the long term. Firstly, if the stock market was 
                    stationary or even weakly stationary past performance would be an indicator of future 
                    performance. Many traders and investors know this is not true as the market is an adaptive 
                    system.
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    Conclusion and 
                    <span className="highlight"> Future Work</span>
                </h2>
                <p className="text-[#676767] py-4">
                    In conclusion, the algorithmic trading strategy using both unsupervised and supervised 
                    learning in this project proved to be extremely successful in the back test. As experienced 
                    investors we cannot say that the returns found in the back test could be expected in the 
                    future as a back test is not considered a complete out of sample test. These back test 
                    results did show the impact of using meta-labelling in a trading strategy. In the stage two 
                    back test time frame from July 2020 to February 2022 the strategy utilizing meta-labelling 
                    produced an annualized return of about 288% whereas the same strategy not utilizing 
                    meta-labelling over the same period saw annualized returns of about -15.6%. A stark contrast 
                    showing the power of meta-labelling.
                </p>
                <p className="text-[#676767] py-4">
                    The next logical step for this project would be to paper trade this strategy for a few 
                    months. If the strategy continues to outperform the S&P 500 over the paper trading period, 
                    the strategy could by used in a live trading environment using real money.
                </p>
                <p className="text-[#676767] py-4">
                    From a machine learning and data science standpoint the strategy can also be improved 
                    updating the trade history and retraining the model on a daily or weekly basis. One could 
                    do this using an online learning approach but given the amount of time between when the 
                    market closes and when the market opens, an online learning approach is unnecessary. One can 
                    see from the plot of portfolio returns over time that the returns flatten over time. Given 
                    that the classifier is only trained on data up to the beginning of the second stage of the 
                    back test it is likely that the information the model used to train on over a year later is 
                    out of date. Retraining the model each day on the last year’s trades would likely produce 
                    more consistently profitable returns and would allow the model to adapt to macro changes in 
                    the market to an extent.
                </p>
            </div>
        </div>
    </div>
  )
}

export default TradingBot