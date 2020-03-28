import Conection from '../database/index';

class IncidentsController {
  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await Conection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });
    return res.json({ id });
  }

  async index(req, res) {
    const incidents = await Conection('incidents').select('*');

    return res.json(incidents);
  }
}
export default new IncidentsController();
