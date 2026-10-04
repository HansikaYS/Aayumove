// AayuMove Local Storage & State Service
// Handles user authentication, session, profile updates, activity logs, streaks, and smart reminders

const USERS_KEY = 'aayumove_users_db_v1';
const SESSION_KEY = 'aayumove_current_session_v1';

// Seed demo user with rich stats for instant evaluation & SIH judging
const DEFAULT_DEMO_USER = {
  id: 'user_demo_01',
  username: 'student',
  password: 'password123',
  name: 'Aarav Sharma',
  age: 20,
  hasCompletedOnboarding: true,
  fitnessStage: 'Intermediate', // Beginner, Intermediate, Advanced
  goal: 'Stay Active', // Stay Active, Build Strength, Improve Fitness, Lose Weight, General Wellness, Flexibility, Endurance, Mobility, Improve Energy, Reduce Sedentary Time
  preferredActivities: ['Mobility & Stretching', 'HIIT', 'Calisthenics'],
  availableTime: '10 minutes', // 5 minutes, 10 minutes, 15 minutes, 30+ minutes
  preferredTime: 'Morning', // Morning, Afternoon, Evening, Custom
  activityLevel: 'Moderately Active', // Sedentary, Lightly Active, Moderately Active, Very Active
  dietaryPreference: 'Vegetarian', // Vegetarian, Non-Vegetarian, No Preference
  budgetFriendly: 'No', // Yes, No
  wellnessPreferences: ['Stress relief', 'Posture reset', 'Focus boost'],
  streakDays: 5,
  totalActiveMinutes: 145,
  totalWorkoutsCompleted: 14,
  remindersEnabled: true,
  reminderInterval: '2 hours',
  reminderPreferredTime: '14:30',
  completedActivities: [
    {
      id: 'log-1',
      activityId: 'act-10-1',
      title: 'Hostel Core & Abs Blaster',
      duration: 10,
      calories: 68,
      timestamp: new Date(Date.now() - 86400000 * 4).toISOString(),
      dateStr: '4 days ago'
    },
    {
      id: 'log-2',
      activityId: 'act-5-1',
      title: 'Desk Neck & Spine Decompression',
      duration: 5,
      calories: 18,
      timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
      dateStr: '3 days ago'
    },
    {
      id: 'log-3',
      activityId: 'act-15-1',
      title: 'Dorm Room Calisthenics Power Circuit',
      duration: 15,
      calories: 120,
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
      dateStr: '2 days ago'
    },
    {
      id: 'log-4',
      activityId: 'act-10-2',
      title: 'Express HIIT Study-Break Torch',
      duration: 10,
      calories: 95,
      timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
      dateStr: 'Yesterday'
    },
    {
      id: 'log-5',
      activityId: 'act-5-2',
      title: '5-Min Dorm Energy Burst',
      duration: 5,
      calories: 35,
      timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
      dateStr: 'Today'
    }
  ],
  weeklyActivity: [
    { day: 'Mon', minutes: 15, completed: true },
    { day: 'Tue', minutes: 20, completed: true },
    { day: 'Wed', minutes: 10, completed: true },
    { day: 'Thu', minutes: 25, completed: true },
    { day: 'Fri', minutes: 15, completed: true },
    { day: 'Sat', minutes: 30, completed: true },
    { day: 'Sun', minutes: 30, completed: true }
  ]
};

class StorageService {
  constructor() {
    this.init();
  }

  init() {
    try {
      // Ensure session is cleared so the app always opens to login page first
      localStorage.removeItem(SESSION_KEY);

      const users = this.getUsers();
      if (!users || users.length === 0) {
        localStorage.setItem(USERS_KEY, JSON.stringify([DEFAULT_DEMO_USER]));
      } else {
        // Ensure demo user has hasCompletedOnboarding flag set
        const demoIdx = users.findIndex(u => u.username === 'student');
        if (demoIdx !== -1 && users[demoIdx].hasCompletedOnboarding === undefined) {
          users[demoIdx].hasCompletedOnboarding = true;
          this.saveUsers(users);
        }
      }
    } catch (e) {
      console.warn('LocalStorage error in init:', e);
    }
  }

  getUsers() {
    try {
      const data = localStorage.getItem(USERS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [DEFAULT_DEMO_USER];
    }
  }

  saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to save users:', e);
    }
  }

  getCurrentUser() {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  setCurrentUser(user) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
      // also keep user synced in the users array
      const users = this.getUsers();
      const idx = users.findIndex(u => u.id === user.id || u.username === user.username);
      if (idx !== -1) {
        users[idx] = user;
      } else {
        users.push(user);
      }
      this.saveUsers(users);
    } catch (e) {
      console.error('Failed to set current user:', e);
    }
  }

  logout() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) {
      console.error('Failed to logout:', e);
    }
  }

  login(username, password) {
    const users = this.getUsers();
    const user = users.find(
      u => u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password
    );
    if (!user) {
      return { success: false, error: 'Invalid username or password.' };
    }
    this.setCurrentUser(user);
    return { success: true, user };
  }

  register(username, password, onboardingData = {}) {
    const cleanUsername = username.trim().toLowerCase();
    if (!cleanUsername || cleanUsername.length < 3) {
      return { success: false, error: 'Username must be at least 3 characters.' };
    }
    if (!password || password.length < 4) {
      return { success: false, error: 'Password must be at least 4 characters.' };
    }

    const users = this.getUsers();
    if (users.some(u => u.username.toLowerCase() === cleanUsername)) {
      return { success: false, error: 'Username already taken. Please choose another.' };
    }

    const newUser = {
      id: 'user_' + Date.now(),
      username: cleanUsername,
      password: password,
      name: onboardingData.name || cleanUsername,
      age: onboardingData.age || 20,
      fitnessStage: onboardingData.fitnessStage || 'Beginner',
      goal: onboardingData.goal || 'Stay Active',
      preferredActivities: onboardingData.preferredActivities || ['Mobility & Stretching', 'Cardio'],
      availableTime: onboardingData.availableTime || '10 minutes',
      preferredTime: onboardingData.preferredTime || 'Morning',
      activityLevel: onboardingData.activityLevel || 'Sedentary',
      dietaryPreference: onboardingData.dietaryPreference || 'Vegetarian',
      budgetFriendly: onboardingData.budgetFriendly || 'No',
      wellnessPreferences: onboardingData.wellnessPreferences || ['Stress relief'],
      streakDays: 1,
      totalActiveMinutes: 0,
      totalWorkoutsCompleted: 0,
      remindersEnabled: true,
      reminderInterval: '2 hours',
      reminderPreferredTime: '15:00',
      hasCompletedOnboarding: onboardingData.hasCompletedOnboarding !== undefined ? onboardingData.hasCompletedOnboarding : true,
      completedActivities: [],
      weeklyActivity: [
        { day: 'Mon', minutes: 0, completed: false },
        { day: 'Tue', minutes: 0, completed: false },
        { day: 'Wed', minutes: 0, completed: false },
        { day: 'Thu', minutes: 0, completed: false },
        { day: 'Fri', minutes: 0, completed: false },
        { day: 'Sat', minutes: 0, completed: false },
        { day: 'Sun', minutes: 0, completed: false }
      ],
      ...onboardingData
    };

    users.push(newUser);
    this.saveUsers(users);
    this.setCurrentUser(newUser);
    return { success: true, user: newUser };
  }

  updateProfile(updates) {
    const user = this.getCurrentUser();
    if (!user) return null;
    const updatedUser = { ...user, ...updates };
    this.setCurrentUser(updatedUser);
    return updatedUser;
  }

  logCompletedWorkout(activity, minutesElapsed = null) {
    const user = this.getCurrentUser();
    if (!user) return null;

    const duration = minutesElapsed !== null ? minutesElapsed : activity.duration;
    const calories = activity.burnedCalories || Math.round(duration * 6.5);

    const logEntry = {
      id: 'log-' + Date.now(),
      activityId: activity.id,
      title: activity.title,
      duration: duration,
      calories: calories,
      timestamp: new Date().toISOString(),
      dateStr: 'Just now'
    };

    const newCompleted = [logEntry, ...(user.completedActivities || [])];
    const newTotalMinutes = (user.totalActiveMinutes || 0) + duration;
    const newTotalCount = (user.totalWorkoutsCompleted || 0) + 1;
    
    // Fix streak: count unique calendar days only
    // Multiple workouts on the same day = 1 streak day
    const allLogs = [logEntry, ...(user.completedActivities || [])];
    const uniqueDates = [...new Set(allLogs.map(log => {
      const d = new Date(log.timestamp);
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    }))].sort().reverse(); // most recent first

    // Count consecutive streak days backwards from today
    let newStreak = 0;
    const today = new Date();
    for (let i = 0; i < uniqueDates.length; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(checkDate.getDate() - i);
      const checkStr = `${checkDate.getFullYear()}-${String(checkDate.getMonth()+1).padStart(2,'0')}-${String(checkDate.getDate()).padStart(2,'0')}`;
      if (uniqueDates.includes(checkStr)) {
        newStreak++;
      } else {
        break;
      }
    }

    // Update today's entry in weeklyActivity
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayName = dayNames[new Date().getDay()];
    const newWeekly = (user.weeklyActivity || []).map(w => {
      if (w.day === todayName) {
        return { ...w, minutes: w.minutes + duration, completed: true };
      }
      return w;
    });

    const updatedUser = {
      ...user,
      streakDays: newStreak,
      totalActiveMinutes: newTotalMinutes,
      totalWorkoutsCompleted: newTotalCount,
      completedActivities: newCompleted,
      weeklyActivity: newWeekly
    };

    this.setCurrentUser(updatedUser);
    return { user: updatedUser, logEntry };
  }

  toggleReminders(enabled) {
    return this.updateProfile({ remindersEnabled: enabled });
  }

  resetDemo() {
    const users = this.getUsers();
    let demoUser = users.find(u => u.username === 'student');
    if (!demoUser) {
      demoUser = { ...DEFAULT_DEMO_USER };
      users.push(demoUser);
      this.saveUsers(users);
    }
    demoUser.hasCompletedOnboarding = true;
    this.setCurrentUser(demoUser);
    return demoUser;
  }
}

export const storage = new StorageService();
