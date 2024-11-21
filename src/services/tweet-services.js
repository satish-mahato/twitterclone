const { TweetRepository } = require("../repository/index");
class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }
  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // this is regex extracted hashtgs
    tags = tags.map((tags) => tags.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    return tweet;
  }
}
module.exports = TweetService;
