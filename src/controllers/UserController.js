import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'João',
        email: 'joao.silva@example.com',
        password: '123456',
      });
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        error: e.message ? e.error.map((err) => err.message) : [e.message],
      });
    }
  }
}

export default new UserController();
