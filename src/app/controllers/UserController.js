import User from '../models/User';
import File from '../models/File';

import Cache from '../../lib/Cache';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'user already exists' });
    }
    const { id, email, name, provider } = await User.create(req.body);

    if (provider) {
      // everytime a new provider is created we dissolve the cache
      await Cache.invalidate('providers');
    }

    return res.json({
      id,
      email,
      name,
      provider,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: {
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      },
    });

    return res.json({
      id,
      email,
      name,
      avatar,
    });
  }
}

export default new UserController();
