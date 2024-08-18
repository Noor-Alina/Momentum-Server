/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('workouts').del();
  await knex('workouts').insert([  
    {
      workout_name: "Incline Hammer Curls",
      workout_type: "Strength",
      muscle: "Biceps",
      equipment: "Dumbbell",
      difficulty: "Beginner",
      instructions: "Seat yourself on an incline bench with a dumbbell in each hand. You should be pressed firmly against the back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      image_path: "/images/incline_hammer_curls.jpg"
    },
    {
      workout_name: "Push-ups",
      workout_type: "Strength",
      muscle: "Chest",
      equipment: "None",
      difficulty: "Beginner",
      instructions: "Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor. Push back up to the starting position.",
      image_path: "/images/push_ups.jpg"
    },
    {
      workout_name: "Squats",
      workout_type: "Strength",
      muscle: "Legs",
      equipment: "None",
      difficulty: "Beginner",
      instructions: "Stand with feet shoulder-width apart. Lower your body as if sitting back into a chair, keeping your chest up and knees over your toes. Return to standing.",
      image_path: "/images/squats.jpg"
    },
    {
      workout_name: "Deadlifts",
      workout_type: "Strength",
      muscle: "Hamstrings",
      equipment: "Barbell",
      difficulty: "Intermediate",
      instructions: "Stand with feet hip-width apart, barbell over your feet. Bend at the hips and knees to grasp the bar. Keep your back straight, lift the bar by extending your hips and knees, and stand tall.",
      image_path: "/images/deadlifts.jpg"
    },
    {
      workout_name: "Bench Press",
      workout_type: "Strength",
      muscle: "Chest",
      equipment: "Barbell",
      difficulty: "Intermediate",
      instructions: "Lie on a bench with a barbell above your chest. Lower the bar to your chest and then press it back up to the starting position.",
      image_path: "/images/bench_press.jpg"
    },
    {
      workout_name: "Plank",
      workout_type: "Core",
      muscle: "Core",
      equipment: "None",
      difficulty: "Beginner",
      instructions: "Lie face down, then lift your body off the ground with your forearms and toes. Keep your body in a straight line from head to heels.",
      image_path: "/images/plank.jpg"
    },
    {
      workout_name: "Lunges",
      workout_type: "Strength",
      muscle: "Legs",
      equipment: "None",
      difficulty: "Beginner",
      instructions: "Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Push back to the starting position and repeat with the other leg.",
      image_path: "/images/lunges.jpg"
    },
    {
      workout_name: "Dumbbell Rows",
      workout_type: "Strength",
      muscle: "Back",
      equipment: "Dumbbell",
      difficulty: "Intermediate",
      instructions: "With one knee on a bench and a dumbbell in the opposite hand, pull the dumbbell towards your hip while keeping your back straight.",
      image_path: "/images/dumbbell_rows.jpg"
    },
    {
      workout_name: "Bicycle Crunches",
      workout_type: "Core",
      muscle: "Abs",
      equipment: "None",
      difficulty: "Beginner",
      instructions: "Lie on your back with your hands behind your head. Bring your knees to a 90-degree angle and alternate touching your elbows to the opposite knee.",
      image_path: "/images/bicycle_crunches.jpg"
    },
    {
      workout_name: "Jump Rope",
      workout_type: "Cardio",
      muscle: "Full body",
      equipment: "Jump rope",
      difficulty: "Beginner",
      instructions: "Jump over the rope as it swings under your feet. Maintain a steady rhythm and keep your elbows close to your sides.",
      image_path: "/images/jump_rope.jpg"
    },
    {
      workout_name: "Mountain Climbers",
      workout_type: "Cardio",
      muscle: "Core",
      equipment: "None",
      difficulty: "Intermediate",
      instructions: "Start in a plank position and quickly bring one knee towards your chest, then switch legs in a running motion.",
      image_path: "/images/mountain_climbers.jpg"
    },
    {
      workout_name: "Leg Press",
      workout_type: "Strength",
      muscle: "Legs",
      equipment: "Leg press machine",
      difficulty: "Intermediate",
      instructions: "Sit on the leg press machine with your back against the pad. Place your feet on the platform and push the weight away by extending your legs.",
      image_path: "/images/leg_press.jpg"
    },
    {
      workout_name: "Kettlebell Swings",
      workout_type: "Strength",
      muscle: "Full body",
      equipment: "Kettlebell",
      difficulty: "Intermediate",
      instructions: "Stand with your feet shoulder-width apart, holding a kettlebell with both hands. Swing the kettlebell between your legs and then thrust your hips forward to swing it up to shoulder height.",
      image_path: "/images/kettlebell_swings.jpg"
    },
    {
      workout_name: "Seated Shoulder Press",
      workout_type: "Strength",
      muscle: "Shoulders",
      equipment: "Dumbbell",
      difficulty: "Beginner",
      instructions: "Sit on a bench with back support, holding a dumbbell in each hand at shoulder height. Press the weights overhead until your arms are fully extended.",
      image_path: "/images/seated_shoulder_press.jpg"
    },
    {
      workout_name: "Burpees",
      workout_type: "Cardio",
      muscle: "Full body",
      equipment: "None",
      difficulty: "Intermediate",
      instructions: "From a standing position, squat down and place your hands on the ground. Jump your feet back into a plank position, perform a push-up, then jump your feet back to your hands and explode into a jump.",
      image_path: "/images/burpees.jpg"
    },
    {
      workout_name: "Chest Fly",
      workout_type: "Strength",
      muscle: "Chest",
      equipment: "Dumbbell",
      difficulty: "Intermediate",
      instructions: "Lie on a flat bench holding dumbbells above your chest. Lower the weights out to the sides in a wide arc until you feel a stretch in your chest, then bring them back to the starting position.",
      image_path: "/images/chest_fly.jpg"
    },
    {
      workout_name: "Tricep Dips",
      workout_type: "Strength",
      muscle: "Triceps",
      equipment: "Bench",
      difficulty: "Beginner",
      instructions: "Sit on the edge of a bench with your hands next to your hips. Slide off the bench and lower your body by bending your elbows, then push back up.",
      image_path: "/images/tricep_dips.jpg"
    },
    {
      workout_name: "Cable Rows",
      workout_type: "Strength",
      muscle: "Back",
      equipment: "Cable machine",
      difficulty: "Intermediate",
      instructions: "Sit at a cable machine with your feet on the platform. Grasp the handle with both hands and pull it towards your torso while keeping your back straight.",
      image_path: "/images/cable_rows.jpg"
    },
    {
      workout_name: "Russian Twists",
      workout_type: "Core",
      muscle: "Abs",
      equipment: "None",
      difficulty: "Beginner",
      instructions: "Sit on the floor with your knees bent and lean back slightly. Hold your hands together and twist your torso to the right, then to the left to complete one rep.",
      image_path: "/images/russian_twists.jpg"
    },
    {
      workout_name: "Box Jumps",
      workout_type: "Cardio",
      muscle: "Legs",
      equipment: "Box",
      difficulty: "Advanced",
      instructions: "Stand in front of a sturdy box or platform. Bend your knees and swing your arms back, then jump onto the box, landing softly with your knees slightly bent.",
      image_path: "/images/box_jumps.jpg"
    }
  ]);
};
