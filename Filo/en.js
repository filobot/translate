"use strict";

exports.LANGUAGE = {
  CODE: "en",
  STANDARD_CODE: "en-US",
  FULL_CODE: "english",
  WIKI_CODE: "en",
  CONTRIBUTORS: ["iLxlo_"]
};

exports.ERROR_MESSAGES = {
  SOMETHING_WENT_WRONG: "Something went wrong while trying to execute that action",
  GENERIC_ERROR: "**[Contact us]({{url}})** for further instructions on what happened.",
  GUILD_REQUIRED: "This action requires the bot to be added to the guild.",
  ERROR_ID: "Error ID: {{error_id}}",
  MAINTENANCE_ENABLED: "A maintenance task is currently being carried out on this system.",

  INTERACTION_FAILED: "The interaction didn't receive a response after a while.",
  INTERACTION_CANCELLED: "The interaction has been canceled.",

  DISABLED_COMMAND: "The **{{command}}** command has been disabled by the Filo's Development Team.",
  UNKNOWN_COMMAND: "The **{{command}}** command doesn't exist or isn't currently supported.",
  DISCORD_MISSING_INFORMATION: "This interaction has been canceled due to Discord not providing the necessary information to continue.",

  ALTERNATIVE_PERMISSION: "Alternative permission",
  ALTERNATIVE_PERMISSIONS: "Alternative permissions",
  MISSING_CLIENT_PERMISSION: "This error has been caused because I don't have the [``{{permission}}``]({{url}}) permission.",
  MISSING_USER_PERMISSION: "This error has been caused because you don't have the ``{{permission}}`` permission.",
  MISSING_USER_PERMISSION_2: "You don't have permissions to carry out this action with **{{user}}** ({{user.id}}).",
  INVALID_USER: "The user you specified is invalid.",
  UNKNOWN_USER: "The user you specified doesn't exist or isn't on the server.",
  INVALID_ROLE: "The role you have specified is invalid.",
  UNKNOWN_ROLE: "The role you specified doesn't exist.",
  MANAGED_ROLE: "The role you have specified is managed by an integration.",
  USER_ALREADY_HAS_THE_ROLE: "**{{user}}** ({{user.id}}) already has the {{role}} role assigned.",
  USER_ALREADY_HAS_THAT_NICKNAME: "**{{user}}** ({{user.id}}) already has that nickname established.",
  INVALID_NUMBER: "The number you have specified is invalid.",
  MAX_NUMBER_REACHED: "The number you specified is greater than **{{number}}**.",
  MIN_NUMBER_REACHED: "The number you specified is less than **{{number}}**.",
  MAX_ARGUMENT_REACHED: "The arguments you have specified exceed **{{number}}** characters in length.",
  MIN_ARGUMENT_REACHED: "The arguments you have specified are less than **{{number}}** characters in length.",
  INVALID_CHANNEL: "The channel you have specified is invalid.",
  UNKNOWN_CHANNEL: "The channel you specified doesn't exist.",
  INVALID_CHANNEL_TYPE: "This action doesn't support the type of the channel that you specified. ({{valid_types}})"
};

exports.ANNOUNCEMENTS = {
  VOTE_INCENTIVE: "**Do you like the features of Filo?**" + "\n" + "Support Filo by voting for her and win some free rewards!",
  DONATE_INCENTIVE: "**Do you like the features of Filo?**" + "\n" + "Support Filo by donating and earn rewards!"
};

exports.BUTTON_LABELS = {
  SERVICE_STATUS: "Service status",
  CONTACT_US: "Contact us",
  INVITE_FILO: "Invite Filo",
  VOTE_NOW: "Vote now!",
  DONATE_NOW: "Donate now!"
};

exports.AUDIT_LOGS = {
  RESPONSIBLE: "Responsible: {{user}} ({{user.id}})",
  RESPONSIBLE_WITH_REASON: "Responsible: {{user}} ({{user.id}}). Reason: {{reason}}",
  DEFAULT_REASONS: {
    ROLE_VIA: "Role {{action}} via {{method}}."
  }
};

exports.TIME = {
  SECOND: "Second",
  SECONDS: "Seconds",
  MINUTE: "Minute",
  MINUTES: "Minutes",
  HOUR: "Hour",
  HOURS: "Hours",
  DAY: "Day",
  DAYS: "Days",
  WEEK: "Week",
  WEEKS: "Weeks",
  MONTH: "Month",
  MONTHS: "Months",
  YEAR: "Year",
  YEARS: "Years"
};

exports.GENERAL = {
  EXAMPLE: "Example",
  ADDED: "Added",
  COMMAND: "Command",
  OR: "Or",
  COOLDOWN: "You must wait **{{time}}** to be able to execute this action."
};

exports.COMMANDS = {
  ADDROLE: {
    MISSING_USER: "You must @Mention the user to add a role.",
    MISSING_ROLE: "You must specify the role you want to grant.",
    COMPLETED: "You have added the {{role}} role to **{{user}}** ({{user.id}})."
  },
  CLEAR: {
    MISSING_NUMBER_OF_MESSAGES: "You must specify the number of messages you want to purge.",
    COMPLETED: "You have purged **{{number}}** messages from the {{channel}} channel."
  },
  NICKNAME: {
    MISSING_USER: "You must @Mention the user to change the nickname.",
    MISSING_NICKNAME: "You must specify the new nickname that you want to set.",
    COMPLETED: "You have established the nickname of **{{user}}** ({{user.id}}) for **{{nickname}}**."
  }
};
