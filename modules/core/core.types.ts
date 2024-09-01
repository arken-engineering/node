import * as schema from './core.schema';
import { z, Model, Document } from '../../util/mongo';
export type * from './core.service';

// TypeScript types for each schema

export type Account = z.infer<typeof schema.Account>;
export type Achievement = z.infer<typeof schema.Achievement>;
export type Act = z.infer<typeof schema.Act>;
export type Agent = z.infer<typeof schema.Agent>;
export type Application = z.infer<typeof schema.Application>;
export type Badge = z.infer<typeof schema.Badge>;
export type BattlePass = z.infer<typeof schema.BattlePass>;
export type Biome = z.infer<typeof schema.Biome>;
export type BiomeFeature = z.infer<typeof schema.BiomeFeature>;
export type Bounty = z.infer<typeof schema.Bounty>;
export type Collection = z.infer<typeof schema.Collection>;
export type Comment = z.infer<typeof schema.Comment>;
export type Community = z.infer<typeof schema.Community>;
export type Company = z.infer<typeof schema.Company>;
export type Conversation = z.infer<typeof schema.Conversation>;
export type Data = z.infer<typeof schema.Data>;
export type Discussion = z.infer<typeof schema.Discussion>;
export type Energy = z.infer<typeof schema.Energy>;
export type Event = z.infer<typeof schema.Event>;
export type Exchange = z.infer<typeof schema.Exchange>;
export type File = z.infer<typeof schema.File>;
export type Galaxy = z.infer<typeof schema.Galaxy>;
export type Guide = z.infer<typeof schema.Guide>;
export type Idea = z.infer<typeof schema.Idea>;
export type Leaderboard = z.infer<typeof schema.Leaderboard>;
export type Log = z.infer<typeof schema.Log>;
export type Lore = z.infer<typeof schema.Lore>;
export type Market = z.infer<typeof schema.Market>;
export type Memory = z.infer<typeof schema.Memory>;
export type Message = z.infer<typeof schema.Message>;
export type Metaverse = z.infer<typeof schema.Metaverse>;
export type NewsArticle = z.infer<typeof schema.NewsArticle>;
export type Npc = z.infer<typeof schema.Npc>;
export type Offer = z.infer<typeof schema.Offer>;
export type Omniverse = z.infer<typeof schema.Omniverse>;
export type Order = z.infer<typeof schema.Order>;
export type Payment = z.infer<typeof schema.Payment>;
export type Permission = z.infer<typeof schema.Permission>;
export type Person = z.infer<typeof schema.Person>;
export type Planet = z.infer<typeof schema.Planet>;
export type Poll = z.infer<typeof schema.Poll>;
export type Project = z.infer<typeof schema.Project>;
export type Proposal = z.infer<typeof schema.Proposal>;
export type Quest = z.infer<typeof schema.Quest>;
export type Rating = z.infer<typeof schema.Rating>;
export type Realm = z.infer<typeof schema.Realm>;
export type RecordUpdate = z.infer<typeof schema.RecordUpdate>;
export type Referral = z.infer<typeof schema.Referral>;
export type Review = z.infer<typeof schema.Review>;
export type Role = z.infer<typeof schema.Role>;
export type Season = z.infer<typeof schema.Season>;
export type Server = z.infer<typeof schema.Server>;
export type Session = z.infer<typeof schema.Session>;
export type SolarSystem = z.infer<typeof schema.SolarSystem>;
export type Star = z.infer<typeof schema.Star>;
export type Stash = z.infer<typeof schema.Stash>;
export type Stock = z.infer<typeof schema.Stock>;
export type Suggestion = z.infer<typeof schema.Suggestion>;
export type Tag = z.infer<typeof schema.Tag>;
export type Team = z.infer<typeof schema.Team>;
export type Tournament = z.infer<typeof schema.Tournament>;
export type Trade = z.infer<typeof schema.Trade>;
export type Universe = z.infer<typeof schema.Universe>;
export type Validator = z.infer<typeof schema.Validator>;
export type Vote = z.infer<typeof schema.Vote>;
export type WorldEvent = z.infer<typeof schema.WorldEvent>;
export type Stat = z.infer<typeof schema.Stat>;
export type StatDocument = Stat & Document;

// Document types for Mongoose models
export type AccountDocument = Account & Document;
export type AchievementDocument = Achievement & Document;
export type ActDocument = Act & Document;
export type AgentDocument = Agent & Document;
export type ApplicationDocument = Application & Document;
export type BadgeDocument = Badge & Document;
export type BattlePassDocument = BattlePass & Document;
export type BiomeDocument = Biome & Document;
export type BiomeFeatureDocument = BiomeFeature & Document;
export type BountyDocument = Bounty & Document;
export type CollectionDocument = Collection & Document;
export type CommentDocument = Comment & Document;
export type CommunityDocument = Community & Document;
export type CompanyDocument = Company & Document;
export type ConversationDocument = Conversation & Document;
export type DataDocument = Data & Document;
export type DiscussionDocument = Discussion & Document;
export type EnergyDocument = Energy & Document;
export type EventDocument = Event & Document;
export type ExchangeDocument = Exchange & Document;
export type FileDocument = File & Document;
export type GalaxyDocument = Galaxy & Document;
export type GuideDocument = Guide & Document;
export type IdeaDocument = Idea & Document;
export type LeaderboardDocument = Leaderboard & Document;
export type LogDocument = Log & Document;
export type LoreDocument = Lore & Document;
export type MarketDocument = Market & Document;
export type MemoryDocument = Memory & Document;
export type MessageDocument = Message & Document;
export type MetaverseDocument = Metaverse & Document;
export type NewsArticleDocument = NewsArticle & Document;
export type NpcDocument = Npc & Document;
export type OfferDocument = Offer & Document;
export type OmniverseDocument = Omniverse & Document;
export type OrderDocument = Order & Document;
export type PaymentDocument = Payment & Document;
export type PermissionDocument = Permission & Document;
export type PersonDocument = Person & Document;
export type PlanetDocument = Planet & Document;
export type PollDocument = Poll & Document;
export type ProjectDocument = Project & Document;
export type ProposalDocument = Proposal & Document;
export type QuestDocument = Quest & Document;
export type RatingDocument = Rating & Document;
export type RealmDocument = Realm & Document;
export type RecordUpdateDocument = RecordUpdate & Document;
export type ReferralDocument = Referral & Document;
export type ReviewDocument = Review & Document;
export type RoleDocument = Role & Document;
export type SeasonDocument = Season & Document;
export type ServerDocument = Server & Document;
export type SessionDocument = Session & Document;
export type SolarSystemDocument = SolarSystem & Document;
export type StarDocument = Star & Document;
export type StashDocument = Stash & Document;
export type StockDocument = Stock & Document;
export type SuggestionDocument = Suggestion & Document;
export type TagDocument = Tag & Document;
export type TeamDocument = Team & Document;
export type TournamentDocument = Tournament & Document;
export type TradeDocument = Trade & Document;
export type UniverseDocument = Universe & Document;
export type ValidatorDocument = Validator & Document;
export type VoteDocument = Vote & Document;
export type WorldEventDocument = WorldEvent & Document;

// Model mappings for Mongoose models
export type Mappings = {
  Account: Model<AccountDocument>;
  Achievement: Model<AchievementDocument>;
  Act: Model<ActDocument>;
  Agent: Model<AgentDocument>;
  Application: Model<ApplicationDocument>;
  Badge: Model<BadgeDocument>;
  BattlePass: Model<BattlePassDocument>;
  Biome: Model<BiomeDocument>;
  BiomeFeature: Model<BiomeFeatureDocument>;
  Bounty: Model<BountyDocument>;
  Collection: Model<CollectionDocument>;
  Comment: Model<CommentDocument>;
  Community: Model<CommunityDocument>;
  Company: Model<CompanyDocument>;
  Conversation: Model<ConversationDocument>;
  Data: Model<DataDocument>;
  Discussion: Model<DiscussionDocument>;
  Energy: Model<EnergyDocument>;
  Event: Model<EventDocument>;
  Exchange: Model<ExchangeDocument>;
  File: Model<FileDocument>;
  Galaxy: Model<GalaxyDocument>;
  Guide: Model<GuideDocument>;
  Idea: Model<IdeaDocument>;
  Leaderboard: Model<LeaderboardDocument>;
  Log: Model<LogDocument>;
  Lore: Model<LoreDocument>;
  Market: Model<MarketDocument>;
  Memory: Model<MemoryDocument>;
  Message: Model<MessageDocument>;
  Metaverse: Model<MetaverseDocument>;
  NewsArticle: Model<NewsArticleDocument>;
  Npc: Model<NpcDocument>;
  Offer: Model<OfferDocument>;
  Omniverse: Model<OmniverseDocument>;
  Order: Model<OrderDocument>;
  Payment: Model<PaymentDocument>;
  Permission: Model<PermissionDocument>;
  Person: Model<PersonDocument>;
  Planet: Model<PlanetDocument>;
  Poll: Model<PollDocument>;
  Project: Model<ProjectDocument>;
  Proposal: Model<ProposalDocument>;
  Quest: Model<QuestDocument>;
  Rating: Model<RatingDocument>;
  Realm: Model<RealmDocument>;
  RecordUpdate: Model<RecordUpdateDocument>;
  Referral: Model<ReferralDocument>;
  Review: Model<ReviewDocument>;
  Role: Model<RoleDocument>;
  Season: Model<SeasonDocument>;
  Server: Model<ServerDocument>;
  Session: Model<SessionDocument>;
  SolarSystem: Model<SolarSystemDocument>;
  Star: Model<StarDocument>;
  Stash: Model<StashDocument>;
  Stock: Model<StockDocument>;
  Suggestion: Model<SuggestionDocument>;
  Tag: Model<TagDocument>;
  Team: Model<TeamDocument>;
  Tournament: Model<TournamentDocument>;
  Trade: Model<TradeDocument>;
  Universe: Model<UniverseDocument>;
  Validator: Model<ValidatorDocument>;
  Vote: Model<VoteDocument>;
  WorldEvent: Model<WorldEventDocument>;
  Stat: Model<StatDocument>;
};
