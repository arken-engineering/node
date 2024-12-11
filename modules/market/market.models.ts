import * as mongo from '../../util/mongo';
import type * as Types from './market.types';

export const Market = mongo.createModel<Types.MarketDocument>('Market', {
  value: { type: String, required: true },
});

export const MarketPair = mongo.createModel<Types.MarketPairDocument>('MarketPair', {
  value: { type: String, required: true },
});

export const MarketExchange = mongo.createModel<Types.MarketExchangeDocument>('MarketExchange', {
  value: { type: String },
});

export const MarketAnalysis = mongo.createModel<Types.MarketAnalysisDocument>('MarketAnalysis', {
  action: { type: String, required: true },
  asset: { type: String, required: true },
  signalType: { type: String, required: true },
  confidence: { type: Number, required: true },
  riskLevel: { type: String, required: true },
  timeFrame: { type: String, required: true },
  source: { type: String, required: true },
  summary: { type: String, required: true },
  labels: {
    sector: { type: String },
    topic: { type: String },
    sentiment: { type: String },
  },
});

export const InvestorProfile = mongo.createModel<Types.InvestorProfileDocument>('MarketInvestor', {
  name: { type: String, required: true },
  portfolios: { type: mongo.Schema.Types.ObjectId, required: true },
  totalPnL: { type: Number },
});

export const InvestmentPortfolio = mongo.createModel<Types.InvestmentPortfolioDocument>('MarketInvestmentPortfolio', {
  name: { type: String, required: true },
  categoryGoals: [
    {
      category: { type: String, required: true },
      goalPercentage: { type: Number, required: true },
      currentPnL: { type: Number },
      historicalPnL: { type: Number },
    },
  ],
  investments: { type: mongo.Schema.Types.ObjectId, required: true },
  totalPnL: { type: Number },
});

export const Investment = mongo.createModel<Types.InvestmentDocument>('MarketInvestment', {
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  purchasePrice: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  pnl: { type: Number, required: true },
  transactions: [
    {
      date: { type: Date, required: true },
      type: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  stock: { type: mongo.Schema.Types.ObjectId },
  chainToken: { type: mongo.Schema.Types.ObjectId },
});

export const Stock = mongo.createModel<Types.StockDocument>('MarketStock', {
  ticker: { type: String, required: true },
  companyName: { type: String, required: true },
  companyId: { type: mongo.Schema.Types.ObjectId, required: true, ref: 'StockCompany' },
  currentPrice: { type: Number, required: true },
  marketCap: { type: Number },
  volume: { type: Number },
  currency: { type: String, required: true },
  AUM: { type: Number },
  quoteType: { type: String },
  dailyChange: { type: Number },
  dailyChangePercent: { type: Number },
});

export const ChainToken = mongo.createModel<Types.ChainDocument>('MarketToken', {
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  currentPrice: { type: Number, required: true },
});

export const StockCompany = mongo.createModel<Types.StockCompanyDocument>('MarketCompany', {
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  country: { type: String, required: true },
  industry: { type: String, required: true },
  sector: { type: String, required: true },
  type: { type: String, required: true },
  issuedETFs: [{ type: mongo.Schema.Types.ObjectId, ref: 'MarketETF' }],
});

export const ETF = mongo.createModel<Types.ETFDocument>('ETF', {
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  issuer: { type: mongo.Schema.Types.ObjectId, required: true },
  leverage: { type: Number, required: false },
});

export const StockSentiment = mongo.createModel<Types.StockSentimentDocument>('MarketStockSentiment', {
  ticker: { type: String, required: true },
  sentiment: {
    label: { type: String, required: true },
    score: { type: Number, required: true },
  },
  context: { type: String, required: true },
  confidence: { type: Number, required: true },
});
