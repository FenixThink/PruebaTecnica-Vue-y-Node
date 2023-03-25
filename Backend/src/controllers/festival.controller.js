import Festival from '../models/festival.model.js'
class festivalsController
{
    static createFestival = async (req, res)=> {
        const { nameEvent, eventDate, timeEvent, max_capacity, location, available_tickets } = req.body;
        try {
          const dateEvent = `${eventDate}T${timeEvent}Z`
            const festival = new Festival({ nameEvent, dateEvent, max_capacity, location, available_tickets });
            await festival.save();
            res.status(201).json(festival);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    }
    static AllFestivals = async (req, res)=> {
      try {
        const festival = await Festival.find();
        if (festival.length == 0) {
          res.status(404).json({message: "Festivals not found"});
          return;
        }
        res.status(200).json(festival);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
    static searchFestival = async (req, res)=> {
      try {
        const festival = await Festival.findById(req.params.id);
        if (festival==null) {
          res.status(404).json({message:"Festival Not Found"});
          return;
        }
        res.status(200).json(festival);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
    static deleteFestival = async (req, res)=> {
      try {
        const festival = await Festival.deleteOne({_id: req.params.id});
        if (festival.deletedCount == 0) {
          res.status(200).json({message:"Festival Not Found"});
          return;
        }
        res.status(200).json({message:"Festival Deleted"});
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
}

export default festivalsController;