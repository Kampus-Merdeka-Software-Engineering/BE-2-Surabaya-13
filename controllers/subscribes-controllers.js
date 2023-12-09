const HotelSubscribe = require ('../models').subscribes;

const Subscribe = async (req, res) => {
    try {
      const { Email } = req.body;

      if (!Email) {
        return res.status(400).json({ message: 'Email is a required field for subscription' });
      }

      const subscription = new HotelSubscribe({ Email });

      const addedSubscription = await subscription.save();

      res.status(201).json({ message: 'Subscription created successfully', data: addedSubscription });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add subscription', error: error.message });
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