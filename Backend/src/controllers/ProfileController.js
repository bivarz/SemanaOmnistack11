import Conection from '../database/index';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await Conection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
