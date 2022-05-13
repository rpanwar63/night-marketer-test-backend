import user from "../models/user.js";

export const users = async (req, res) => {
    try {
      const limit = 15;
      const data = await user.find().limit(limit).skip(req.params.page*limit);
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
};

export const addUser = async (req, res) => {
    try {
      let data = await user.create(req.body);
      res.status(200).json(data);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const userDelete = async (req, res, next) => {
    try {
        let data = await user.findById(req.params.id);
        await data.remove();
        return res.status(200).json(data);
    } catch (err) {
        return next(err);
    }
};

export const updateUser = async (req, res) => {
    try {
      let data = await user.findById(req.params.id);
      console.log(req.body)
      data.name = req.body.name;
      data.phone = req.body.phone;
      data.hobbies = req.body.hobbies;
      await data.save();
      return res.status(200).json(data);
    } catch (error) {
      
    }
  }