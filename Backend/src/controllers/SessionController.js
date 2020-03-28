import Conection from '../database/index';

class SessionController {
  async store(req, res) {
    const { id } = req.body;
    const ong = await Conection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(404).json({ erro: `No Ong found with this id: ${id}` });
    }
    return res.json(ong);
  }
}

export default new SessionController();
