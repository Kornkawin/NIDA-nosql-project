import mongoose, {Schema} from "mongoose";

// mongoose connect to the database by .env.local file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully to server");
});

const ticketSchema = new Schema(
{
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  },
);

const Ticket = db.models.Ticket || db.model("Ticket", ticketSchema);
export default Ticket;
