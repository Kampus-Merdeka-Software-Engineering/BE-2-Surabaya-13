const HotelSubscribe = require ('../models').subscribe;

const Subscribe = async (req, res) => {
  try {
    const { Email } = req.body;

    const subscribe = new HotelSubscribe({
      Email
    });

    const addSubscribe = await subscribe.save();

    res.status(201).json({ message: 'Subscribe created successfully', data: addSubscribe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add subscribe' });
  }
};

const getSubscribes = async (req, res) => {
  try {
    const subscribes = await HotelSubscribe.findAll();
    res.status(200).json(subscribes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get subscribes' });
  }
};
  module.exports ={Subscribe, getSubscribes}