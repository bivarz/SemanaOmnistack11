import crypto from 'crypto';
import Conection from '../database/index';

class OngController {
  async store(req, res) {
    const { name, email, city, whatsapp, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await Conection('ongs').insert({
      id,
      name,
      email,
      city,
      whatsapp,
      uf,
    });
    return res.json(id);
  }

  async index(req, res) {
    const ongs = await Conection('ongs').select('*');

    return res.json(ongs);
  }
}

export default new OngController();
