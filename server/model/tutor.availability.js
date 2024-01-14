// tutorAvailabilityModel.js
import { Schema, model } from 'mongoose';

const TutorAvailabilitySchema = new Schema({
  tutor: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    unique: true,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  lastPingTime: {
    type: Date,
    default: null,
  },
});

const TutorAvailability = model('tutorAvailability', TutorAvailabilitySchema);

export default TutorAvailability;