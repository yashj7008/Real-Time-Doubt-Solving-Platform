
import TutorAvailability from '../model/tutor.availability.js';

export const pollTutorAvailability = () => {
    setInterval(async () => {
      try {
        const allTutors = await TutorAvailability.find();
  
        
        const offlineThreshold = 30000; 
        const offlineTutors = allTutors.filter(
          (tutor) => tutor.isOnline && new Date() - tutor.lastPingTime > offlineThreshold
        );
  
        for (const tutor of offlineTutors) {
          tutor.isOnline = false;
          await tutor.save();
        }
      } catch (error) {
        console.error('Error polling tutor availability:', error);
      }
    }, 3000); 
  };