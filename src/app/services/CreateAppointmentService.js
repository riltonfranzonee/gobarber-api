import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import Appointment from '../models/Appointment';

import Notification from '../schemas/Notification';

import Cache from '../../lib/Cache';

class CreateAppointmentService {
  async run({ provider_id, user_id, date }) {
    // check if provider_id is a  provider

    const isProvider = await User.findOne({
      where: { provider: true, id: provider_id },
    });

    if (!isProvider) {
      throw new Error('You can only create appointments with providers');
    }

    // check if userId is equal to provider_id

    if (provider_id === user_id) {
      throw new Error('Action denied');
    }
    // check if the date has passed

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not allowed');
    }

    // check provider availability

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      throw new Error('Appointment date is not available');
    }

    // Everything OK here

    const appointment = await Appointment.create({
      user_id,
      provider_id,
      date: hourStart,
    });

    // notify appointment provider

    const user = await User.findByPk(user_id);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt }
    );

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    // invalidate cache

    await Cache.invalidatePrefix(`user:${user.id}:appointments`);
    return appointment;
  }
}

export default new CreateAppointmentService();
