
import TutorAvailability from '../model/tutor.availability.js';

export const countOnlineTutor = () => {
    setInterval(async () => {
      try {
        const onlineTutorsCount = await TutorAvailability.countDocuments({ isOnline: true });
        return onlineTutorsCount;
      } catch (error) {
        throw new Error('Error counting online tutors');
      }
    },1000 ); 
  };