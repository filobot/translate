exports.language = {
  code: "en",
  full_code: "english"
}

exports.announcements = {
  title: "Important announcement",
  description: "We have made changes to the configuration structure of all servers.\nAlong the way, some servers have lost all their settings.\n\nIf your server has lost all the settings and you want us to reset them, please **[contact us](https://discord.gg/tGphdcu)**.\n\nSorry for the inconvenience."
};

exports.general = {
    error_author: "{emoji} Something went wrong while trying to execute that action",
    error_contact: "Contact",
    error_description: "**{contact}** our support team for further instructions on what has happened.",
    error_permissions_commands: "You don't have permissions to execute the command **{command}**.",
    error_permissions_command: "You don't have permissions to execute the command **{command}**.\nYou need the permission `{permission}`.",
    cooldown_commands: "Please wait **{time}** {unit} to be able to execute this command again.",
    error_permissions_description: "This error was caused because I don't have the `{permission}` permission.",
    only_guild: "You must be on a server to be able to execute the command **{command}**.",
};

exports.modules = {
  disable_commands: {
    notification: "The command you are trying to execute is disabled by the server administration."
  }
};

exports.time = {
  second: "second",
  seconds: "seconds",
  minute: "minute",
  minutes: "minutes",
  hour: "hour",
  hours: "hours",
  day: "day",
  days: "days",
  week: "week",
  weeks: "weeks"
};

exports.moderation = {
  administrator: "Administrator",
  moderator: "Moderator",
  responsible: "Responsible: {member}.",
  responsible_and_reason: "Responsible: {user}. Reason: {reason}",
  notification_description: "You have received this informational message because you have been {sanction_type} from the server: **{guild}**.",
  default_reason: "The staff has not specified any reason",
  reason: "Reason",
  completed: "{user} has been {sanction_type} from the server.",
  sanction_expired: "The sanction has expired"
};

exports.channel = {
  type: {
    dm: "DM",
    group: "DM group",
    text: "Text channel",
    voice: "Voice channel",
    category: "Category",
    news: "News channel",
    store: "Store channel",
    unknown: "Unknown channel"
  },
  channel: "Channel",
  channel_id: "Channel ID",
  channel_type: "Channel type",
  category: "Category",
  without_category: "Without category",
  channel_position: "Channel position",
  slowmode: "Slowmode",
  channel_topic: "Channel topic",
  default_topic: "Channel without defined theme."
};

exports.nsfw = {
  nsfw: "NSFW",
  noNSFW: "This channel does not meet the criteria for displaying adult content.\n\nIf you want to activate the adult mode (NSFW) use **{command}**.",
  notAllowed: "What are you trying to do to me? ばか！ {emoji}"
};

exports.log = {
  registered_event: "Registered event",
  channel: "Channel",
  executor: "Executor",
  reason: "Reason",
  enabled: "Enabled",
  disabled: "Disabled",
  ineligible: "Ineligible",
  any: "Any",
  default_reason: "The staff has not specified any reason",
  messages: {
    completed_title: "Message log",
    purged_messages: "Purged messages"
  },
  channel: {
    title: "Channel log",
    channelCreate: "Created channel",
    channelDelete: "Deleted channel",
    channel_name: "Channel name",
    text: "Text channel",
    voice: "Voice channel",
    news: "News channel",
    store: "Store channel",
    category: "Category",
    unknown_category: "Unknown category",
    unknown_channel: "Unknown channel",
    type: "Channel type",
    position: "Channel position",
    nsfw: "NSFW",
    slowmode: "Slowmode",
    topic: "Channel topic",
    default_topic: "There is no defined topic."
  },
  sanction: {
    title: "Sanction log",
    guildMemberWarn: "Warned member",
    guildBanAdd: "Banned member",
    guildBanRemove: "Unbanned member",
  },
  message: {
    title: "Message log",
    messageDelete: "Deleted message",
    message: "Message",
    message_link: "Message link",
    messageUpdate: "Updated message",
    oldMessage: "Old message",
    newMessage: "New message",
    messagePinned: "Pinned message updated",
    channel: "Channel"
  },
  member: {
    title: "Member log",
    guildMemberAdd: "Joined member",
    guildMemberRemove: "Leaved member",
    member: "Member",
    registration_date: "Registration date",
    account_type: "Account type",
    bot_account: "Bot account",
    normal_account: "Normal account"
  }
};

exports.secret_menu_help = {
  title: "Secret help menu",
  prefix: "Prefix",
  help_command: "Help command",
  support_server: "Support server",
  language: "Language",
  command_language: "Command to change the language",
  invite: "Filo's invite",
  vote: "Vote for Filo",
  click_here: "Click here"
};

exports.anti_invites = {
  reason: "The sent message contains an external server invitation.",
  reason_2: "The updated message contains an external server invitation.",
};

exports.auto_mod = {
  pre_reason: "Filo auto-moderation system",
  reason: "Exceeding the {limit} warnings.",
  server_invite: "Server invite"
};

exports.anti_evasion = {
  reason: "Evade an active sanction."
};

exports.anti_spam = {
  reason_1: "Sending too many messages in a short time.",
  reason_2: "Sending too many similar messages in a short time.",
};

exports.anti_mass_mentions = {
  reason: "You mention too many users in the same message."
};

exports.anti_repeated_text = {
  reason: "The message contains repeating text."
};

exports.games = {
  "won": "won",
  "lost": "lost"
};

exports.commands = {
  "general": {
    example: "Example",
    example_1: "Am i kawaii?",
    example_2: "To be too kawaii!",
    unknown: "Unknown",
    search_limit: "You can't search more than **{limit}** characters.",
    args_limit: "Written arguments exceed the limit of **{limit}** characters.",
    args_invalid: "The specified arguments are not valid.",
    reason_limit: "You can't set a reason greater than **{limit}** characters.",
    reason_less: "You can't set a reason less than **{limit}** characters.",
    no_user_perms: "You don't have permission to use the command **{command}** with {user}.",
    hastebin_check: "The result exceeds {limit} characters, but you can check the result **[here]({link})**.",
    author: "Author",
    two_options: "You must choose between **{option_1}** and **{option_2}** in order to execute the command correctly.",
    canceled: "The pending action has been canceled.",
    nsfw: "NSFW",
    creation_date: "Creation date",
    yes: "Yes",
    no: "No",
    disabled_module_title: "The **{module}** module is disabled.",
    disabled_module_description: "**[Here]({link})** you will find more information about this module."
  },
  "eight_ball": {
    noArgs: "You must ask the ball number 8 something.",
    reply_1: "It is certain.",
    reply_2: "It is decidedly so.",
    reply_3: "Without a doubt.",
    reply_4: "Yes - definitely.",
    reply_5: "You may rely on it.",
    reply_6: "As I see it, yes.",
    reply_7: "Most likely.",
    reply_8: "Outlook good.",
    reply_9: "Yes.",
    reply_10: "Signs point to yes.",
    reply_11: "Reply hazy, try again.",
    reply_12: "Ask again later.",
    reply_13: "Better not tell you now.",
    reply_14: "Can't predict now.",
    reply_15: "Concentrate and ask again.",
    reply_16: "Don't count on it.",
    reply_17: "My reply is no.",
    reply_18: "My sources say no.",
    reply_19: "Outlook not so good.",
    reply_20: "Very doubtful.",
    sendReply: "The ball responds with wisdom to your question:\n\n**{reply}**"
  },
  "addrole": {
    noArgs: "You must @Mention the person you want to give a role.",
    noArgs_2: "You must write the name of the role to be able to give it a role.",
    invalid_role: "The {role} role is managed by an integration.",
    alreadyRole: "{member} already has the assigned {role} role.",
    bellowRole: "My roles is below the {role} role.",
    completed: "You have given {member} the {role} role correctly."
  },
  "anal": {
    noArgs: "You must @Mention a person to be able to fuck him anally.",
    invalidArgs: "You can't anally fuck yourself.",
    completed: "{user} fucks {user_2} anally!"
  },
  "angry": {
    completed: "{user} is very angry!"
  },
  "anime": {
    noArgs: "You must write the name of the anime you want to consult.",
    loading: "Please wait while I get the requested anime data.",
    noData: "No results could be found for the anime **{search}**.",
    status_type: {
      on_broadcast: "On broadcast",
      finished: "Finished",
      unreleased: "Unreleased"
    },
    ages: {
      general_audiences: "General Audiences",
      children: "Children",
      pg_13: "Parental Guidance Suggested (Teens 13 or older)",
      r_17: "Restricted (Violence & Profanity)",
      r_18: "Restricted (Mild Nudity)",
      rx_18: "Explicit (Hentai)"
    },
    status: "Status",
    unknown_status: "Unknown status",
    type: "Type",
    popularity: "Popularity",
    ratings: "Ratings",
    chapters: "Chapters",
    duration: "{minutes} minutes per chapter",
    transmission_date: "Transmission date",
    unknown_date: "Unknown date",
    genres: "Genres",
    unknown_genres: "Unknown genres",
    recommended_age: "Recommended age",
    unknown_age: "Unknown age",
    studios: "Studios",
    producers: "Producers",
    type_staff: "{type}'s Staff",
    main_characters: "Main characters",
    support_characters: "Support characters"
  },
  "ascii": {
    noArgs: "You must write something in order to transform it to ASCII.",
    completed_title: "Conversion of the text \"{args}\" to ASCII"
  },
  "avatar": {
    noAvatar: "An error occurred while trying to get {user}'s avatar.",
    completed_title: "Watching {user}'s avatar"
  },
  "baka": {
    noArgs: "You must @Mention the person you want to call baka.",
    noBaka: "You can't call yourself baka. ばか！",
    noFilo: "Forgive me if I have failed at my job. {emoji}",
    completed: "{user} calls {user2} baka! ばか！"
  },
  "ban": {
    noArgs: "You must @Mention the person you want to ban.",
    notification_title: "Permanently banned from the server **{guild}**",
    permanently_banned: "permanently banned",
    ban_id: "Ban's ID"
  },
  "binary": {
    encode: {
      noArgs: "You must write the text you want to encode to binary code.",
      completed_title: "Text to binary code conversion"
    },
    decode: {
      noArgs: "You must write the text you want to decode from the binary code.",
      completed_title: "Binary Code to Text Conversion"
    }
  },
  "bite": {
    noArgs: "You must @Mention the person you want to bite.",
    noBite: "You can't bite yourself.",
    noFilo: "Please don't bite me, you're going to hurt me! {emoji}",
    completed: "{user} bites {user_2}!"
  },
  "blush": {
    completed: "{user} has blushed!"
  },
  "bored": {
    completed: "{user} feels bored!"
  },
  "bugs": {
    noArgs: "You must explain the bug you want to report.",
    example: "The statistics command does not work",
    warning: "{emoji} Are you sure you want to report this bug to the Filo's Development Team?\n\n{emoji_2} **WARNING**: Be aware that intentional misuse of this command may result in a violation of **[Filo's Terms and Conditions]({link})**.\n\nIf you want to send it click on ✅, otherwise click on ❎.",
    bug_explanation: "Bug explanation",
    completed: "The report #**{report_id}** has been sent to the Filo's Development Team correctly."
  },
  "channel": {
    completed_title: "Channel information"
  },
  "clear": {
    noArgs: "You must indicate the number of messages you want to delete.",
    clear_limit: "You can't delete more than **{limit}** messages at a time.",
    completed: "**{number}** messages from the {channel} channel have been deleted."
  },
  "clearwarns": {
    noArgs: "You must @Mention a person to remove all their warnings.",
    completed: "You have removed all of {user}'s warnings."
  },
  "coinflip": {
    noArgs: "You must choose **{option_1}** or **{option_2}** to play.",
    noArgs_2: "You must indicate the amount of {emoji} credits you want to bet.",
    noMoney: "You don't have **{credits}** {emoji} credits to bet.",
    heads: "heads",
    tails: "tails",
    completed: "You've **{game_status}** the bet! Now you have **{newBalance}** {emoji} credits."
  },
  "cold": {
    completed: "{user} has a terrible cold!"
  },
  "color": {
    loading: "Please wait while a random color is generated.",
    completed_title: "Results of the random color generated",
    hex: "HEX",
    rgb: "RGB"
  },
  "conf": {
    minimum_value: "The value must be equal to or greater than **{number}**.",
    maximum_value: "The value must be equal to or less than **{number}**.",
    question_description: "If so, click on ✅, if you don't want to set it click on ❎.",
    webhook: {
      noArgs_1: "You must specify for which module you want to create a webhook.",
      noArgs_2: "You must specify the channel where you want to create the webhook.",
      limit: "The webhook could not be created because the channel exceeds the maximum number of webhooks allowed.",
      completed: "The webhook has been created in the {channel} channel."
    },
    enable: {
      noArgs_1: "You must specify the name of the module you want to enable.",
      completed: "The **{module}** module has been successfully enabled."
    },
    disable: {
      noArgs_1: "You must specify the name of the module you want to disable.",
      completed: "The **{module}** module has been successfully disabled."
    },
    lang: {
      noArgs_1: "You must specify the language you want to set.",
      invalid_language: "The selected language is not valid. More information **[here]({link})**.",
      completed: "You have changed the language of Filo to **{language}**."
    },
    prefix: {
      noArgs_1: "You must specify the new prefix you want to set.",
      completed: "You have set the Filo's prefix to **{prefix}**."
    },
    guild: {
      noArgs_1: "You must specify what you want to configure.",
      invite: {
        noArgs_2: "You must specify the channel to create the invitation.",
        completed: "You have created invitation **{invite}** in the {channel} channel."
      }
    },
    role: {
      noArgs_1: "You must specify what you want to configure.",
      noArgs_2: "You must specify the role you want to set.",
      invalid_role: "The role you specified is managed by an integration.",
      error_perms_role: "The hierarchy of the mentioned role is greater than or equal to that of Filo.",
      completed: "You have set the {role} role for the **{module}** module."
    },
    channel: {
      noArgs_1: "You must specify what you want to configure.",
      noArgs_2: "You must specify the channel to set it.",
      invalid_channel: "The channel you have selected is not suitable for this configuration.",
      completed: "You have set the {channel} channel for the **{module}** module."
    },
    message: {
      noArgs_1: "You must specify the module you want to configure.",
      noArgs_2: "You must specify the message you want to set.",
      question_title: "Are you sure you want to set this message?",
      completed: "You have set a new message for the **{module}** module.",
      type: {
        completed: "You have set the **{type}** message type for the **{module}** module."
      }
    },
    counter: {
      noArgs_1: "You must specify the option you want to configure.",
      noArgs_2: "You must specify which member counter you want to set.",
      noArgs_3: "You must specify the channel to set it.",
      invalid_channel: "The channel you have selected is not suitable for this configuration.",
      completed: "You have set the **{channel}** channel for the **{counter}** counter.",
      name: {
        noArgs_1: "You must specify the counter you want to rename.",
        noArgs_2: "You must specify the variable **{members}** where you want the number of members of the counter to appear.",
        question_title: "Are you sure you want to set that name for that counter?",
        completed: "You have renamed the **{counter}** counter channel to **{name}**."
      },
      nick: {
        noArgs_1: "You must specify the nickname you want to set.",
        noArgs_2: "You must specify the variable **{members}** where you want the number of members of the counter to appear.",
        question_title: "Are you sure you want to set this nickname?",
        completed: "You have set the nickname **{nick}** for the member counter."
      }
    },
    anti_invites: {
      noArgs_1: "You must specify the action you want to carry out.",
      add: {
        noArgs_1: "You must specify the server ID you want to whitelist.",
        already_set: "The ID you specified is already whitelisted.",
        completed: "You have added the server with ID **{server_id}** to the whitelist."
      },
      remove: {
        noArgs_1: "You must specify the server ID you want to remove from the whitelist.",
        not_found: "The ID you specified is not whitelisted.",
        completed: "You have to remove the server with ID **{server_id}** from the whitelist."
      }
    },
    auto_mod: {
      noArgs_1: "You must specify which option you want to configure.",
      noArgs_2: "You must specify the level you want to configure.",
      noArgs_3: "You must specify the maximum number of warnings a user must reach to reach that level.",
      invalid_number: "The number you have indicated is not valid.",
      completed: "You have set **{warnings}** warnings to reach level **{level}**.",
      action: {
        noArgs_1: "You must specify the level you want to configure.",
        noArgs_2: "You must specify the action you want to take when you reach that level.",
        completed: "You have set the **{action}** sanction for level **{level}**."
      },
      time: {
        noArgs_1: "You must specify the level you want to configure.",
        noArgs_2: "You must specify the time of the sanction.",
        minimum_time: "The minimum time of the sanction must be greater than **{time}**.",
        limit_time: "The time of the sanction can't exceed **{time}**.",
        completed: "You have set **{time}** to expire the level **{level}** sanction."
      }
    },
    anti_evasion: {
      noArgs_1: "You must specify which option you want to configure.",
      action: {
        noArgs_2: "You must specify the action you want to take when someone tries to evade a sanction.",
        completed: "You have set the **{action}** action."
      },
      time: {
        noArgs_2: "You must specify the time of the sanction.",
        minimum_time: "The minimum time of the sanction must be greater than **{time}**.",
        limit_time: "The time of the sanction can't exceed **{time}**.",
        completed: "You have set **{time}** to expire the sanction."
      }
    },
    anti_spam: {
      noArgs_0: "You must specify the action you want to carry out.",
      bots: {
        noArgs_1: "You must specify if you want to enable immunity for bots or if you want to disable it.",
        enabled: "enabled",
        disabled: "disabled",
        completed: "You have **{action}** immunity for bots."
      },
      channel: {
        noArgs_1: "You must specify the action you want to carry out.",
        add: {
          noArgs_2: "You must specify the channel you want to add to the whitelist.",
          already_set: "The channel you specified is already in the whitelist.",
          completed: "You have added the {channel} channel to the whitelist."
        },
        remove: {
          noArgs_2: "You must specify the channel you want to remove from the whitelist.",
          unknown_set: "This channel is not added to the whitelist.",
          completed: "You have removed the {channel} channel from the whitelist."
        }
      },
      role: {
        noArgs_1: "You must specify the action you want to carry out.",
        add: {
          noArgs_2: "You must specify the role you want to add to the whitelist.",
          already_set: "The role you specified is already in the whitelist.",
          completed: "You have added the {role} role to the whitelist."
        },
        remove: {
          noArgs_2: "You must specify the role you want to remove from the whitelist.",
          unknown_set: "This role is not added to the whitelist.",
          completed: "You have removed the {role} role from the whitelist."
        }
      },
      rules: {
        noArgs_1: "You must specify the action you want to carry out.",
        duplicates: {
          noArgs_2: "You must specify the maximum number of similar messages that a user can send.",
          noArgs_3: "You must specify the time in seconds that must pass to consider duplicate messages as spam.",
          completed: "You have established that **{messages}** similar messages can be sent every **{seconds}** seconds."
        }
      }
    },
    anti_mass_mentions: {
      noArgs_1: "You must specify the maximum number of mentions allowed.",
      completed: "You have set a maximum of **{number}** mentions to be considered mass mentions."
    },
    commands: {
      noArgs_0: "You must specify the action you want to carry out.",
      invalid_args: "The action you want to take is invalid.",
      enable: {
        noArgs_1: "You must specify the command you want to enable.",
        invalid_command: "The specified command doesn't exist.",
        no_exist: "The command you specified isn't disabled.",
        completed: "The **{command}** command has been successfully enabled."
      },
      disable: {
        noArgs_1: "You must specify the command you want to disable.",
        invalid_command: "The specified command doesn't exist.",
        no_exist: "The command you have specified is already disabled.",
        privileged_command: "The **{command}** command is in a protected category and can't be disabled.",
        completed: "The **{command}** command has been successfully disabled."
      },
    },
    anti_bad_words: {
      add: {
        noArgs_1: "You must specify the word you want to add.",
        args_limit: "The word you have specified exceeds **{limit}** characters in length.",
        already_exist: "The word **{word}** is already added to the list.",
        completed: "You have added the word **{word}** to the list."
      },
      remove: {
        noArgs_1: "You must specify the word you want to remove.",
        args_limit: "The word you have specified exceeds **{limit}** characters in length.",
        unknown_word: "The word **{word}** is missing from the list.",
        completed: "You have removed the word **{word}** to the list."
      }
    },
    reset: {
      question_title: "Are you sure you want to reset all server settings?",
      completed: "You have reset all server settings."
    },
    view: {
      description: "If you need help consult **[our wiki]({link})** and if you can't understand it, feel free to **[contact us]({link_2})**.",
      module: "Module",
      module_status: "Module status",
      current_language: "Current language",
      supported_languages_title: "Supported languages",
      supported_languages_description: "Get a complete list of all languages supported by Filo by **[clicking here]({link})**.",
      current_prefix: "Current prefix",
      server_invite: "Server invite",
      reporting_channel: "Reporting channel",
      cooldown: "Cooldown",
      administrator_role: "Administrator role",
      welcome_channel: "Welcome channel",
      welcome_role: "Welcome role",
      welcome_message: "Welcome message",
      limit_embed: "Too much to show.",
      all_counter: "Total member counter",
      all_counter_name: "Total member name",
      nick_counter: "All member nickname",
      farewells_channel: "Farewell channel",
      farewells_message: "Farewell message",
      logging_channel: "Logging channel",
      whitelist: "Whitelist",
      level: "Level",
      action: "Action",
      time: "Time",
      embed_title: "Viewing server settings",
      bots_inmunity: "Immunity for bots",
      duplicates_messages: "Duplicates messages",
      anti_mass_mentions_allowed: "Mass mentions allowed",
      channels_whitelist: "Channels whitelist",
      roles_whitelist: "Roles whitelist",
      message_type: "Message type",
      embed_color: "Embed color",
      disabled_commands: "Disabled commands",
      disable_commands: {
        no_commands_disabled: "There are no disabled commands."
      },
      bad_words: "Bad words",
      anti_bad_words: {
        no_words: "There is no word in the list."
      },
      modules_title: {
        languages: "Languages",
        prefix: "Prefix",
        server: "Server",
        reports: "Reports",
        welcomes: "Welcomes",
        membercounter: "Member Counter",
        farewells: "Farewells",
        logs: "Logs",
        anti_invites: "Anti Invites",
        auto_mod: "Auto Mod",
        anti_evasion: "Anti Evasion",
        anti_spam: "Anti Spam",
        anti_mass_mentions: "Anti Mass Mentions",
        anti_repeated_text: "Anti Repeated Text",
        disable_commands: "Disable commands",
        anti_bad_words: "Anti Bad Words"
      }
    },
    embed_title: "Quick help menu",
    embed_description: "With this command you can configure some aspects of Filo, including his language, prefix, modules, etc.",
    warn_args: "(Do not include <> when executing any command)",
    wiki: "Filo's Wiki",
    discord: "Filo's Discord",
    module_title: "Module",
    command: "Command",
    question_enable: "How to enable a module?",
    question_disable: "How to disable a module?",
    question_command_enable: "How to enable a command?",
    question_command_disable: "How to disable a command?",
    question_language: "How to change the language?",
    language_title: "Language",
    question_prefix: "How to change the prefix?",
    prefix_title: "Prefix",
    auto_mod_modules: "Automatic moderation modules",
    anti_invites_title: "Anti Invites",
    auto_mod_title: "Auto Moderation",
    anti_evasion_title: "Anti Evasion",
    anti_spam_title: "Anti Spam",
    anti_mass_mentions_title: "Anti Mass Mentions",
    anti_repeated_text_title: "Anti Repeated Text",
    anti_bad_words_title: "Anti Bad Words",
    welcomes_farewells_modules: "Welcome and farewell modules",
    welcomes_title: "Welcomes",
    farewells_title: "Farewells",
    welcome_role_title: "Welcome role",
    reports_modules: "Reports modules",
    reports_title: "Reports",
    logs_membercounter_modules: "Logging and member counter modules",
    logs_title: "Logs",
    membercounter_title: "Member Counter",
    help: "Help"
  },
  "confused": {
    completed: "{user} is confused!"
  },
  "convert": {
    noArgs: "You must paste the URL of the video you want to convert to MP3.",
    error_domain: "The URL you have entered is invalid.",
    loading: "Please wait while the requested video is processed.",
    error: "An error occurred while trying to process this video.",
    max_size: "The video you indicated exceeds **{limit}** minutes.",
    discord_limit: "The file could not be uploaded because it exceeds the Discord upload limit.",
    completed_title: "Results of conversion to MP3",
    completed_description: "The video conversion **[{title}]({link})** has been completed successfully. You can download the file **[here]({link_2})**.",
    cooldown: "Please wait **{minutes}** minutes, **{seconds}** seconds to convert another video."
  },
  "cookie": {
    completed: "{user} gives {user_2} a cookie!",
    noValid: "You can't give yourself a cookie."
  },
  "covid": {
    error_api: "An error occurred while trying to contact the API.",
    info: {
      completed_title: "Viewing information relevant to the coronavirus",
      completed_description: "COVID-19 is an infectious disease caused by a new virus that has not been detected in humans to date.\nIt was first detected in the Chinese city of Wuhan (Hubei province) in December 2019. Having reached more than 100 territories, the World Health Organization declared it a pandemic on March 11, 2020.",
      question: "Do you have any of these symptoms?",
      runny_nose: "Runny nose",
      sore_throat: "Sore throat",
      cough: "Cough",
      fever: "Fever",
      breathing: "Difficulty breathing (in severe cases)",
      more_info: "More information about the coronavirus **[here]({link})**.",
      warning: "**WARNING**: In the case that you have fever, cough and shortness of breath you should seek medical attention.",
      prevent_title: "How can coronavirus be prevented?",
      prevent_one: "Regularly washing your hands with soap and water or an alcohol-based hand sanitizer.",
      prevent_two: "Covering the nose and mouth when coughing and sneezing with a disposable tissue or the inside of the elbow.",
      prevent_three: "Avoiding direct contact (1 meter or 3 feet) with anyone with symptoms of a cold or flu.",
      last_update: "**WARNING**: As of today there is no vaccine against coronavirus (Last update: {date})."
    },
    search: {
      completed_title: "Viewing information related to the coronavirus in **{country}**",
      total_cases: "Total cases",
      total_deaths: "Total deaths",
      total_recovered: "Total recovered",
      active_cases: "Active cases",
      new_cases: "New cases",
      new_deaths: "New deaths",
      averange: "Average per 1 million population",
      averange_description: "**{number}** out of **1** million.",
      important_title: "Important information about the coronavirus",
      important_description: "Use the **{command}** command to get more information about the coronavirus."
    },
    total_cases: "Total cases",
    total_deaths: "Total deaths",
    total_recovered: "Total recovered",
    active_cases: "Active cases",
    not_found: "No other countries have been reported with cases of coronavirus.",
    important_title: "Important information about the coronavirus",
    important_description: "Use the **{command}** command to get more information about the coronavirus.",
    completed_title: "Viewing information regarding the coronavirus worldwide"
  },
  "credits": {
    completed: "{user} has **{credits}** {emoji} credits in the bank."
  },
  "cry": {
    completed: "{user} feels sad!"
  },
  "csgo": {
    noArgs: "You must specify the player's name to see their statistics.",
    loading: "Please wait while the statistics API information is collected.",
    noPlayerFound: "The player you mentioned does not exist or isn't registered in the statistics pages.",
    completed_title: "Viewing **{player}**'s statistics",
    ign: "IGN",
    uuid: "UUID",
    general_stats: "General statistics",
    kills: "Kills",
    melee_kills: "Melee kills",
    deaths: "Deaths",
    headshots: "Headshots",
    wins: "Wins",
    mvp: "MVP",
    round_played: "Rounds played",
    total_damage: "Total damage inflicted",
    planted_bombs: "Planted bombs",
    desactivated_bombs: "Deactivated bombs",
    hostage_extraction: "Hostage extractions",
    kills_statistics: "Kills statistics",
    he_grenades: "HE grenades",
    glock: "Glock",
    deagle: "Deagle",
    elite: "Elite",
    fsN: "Five-seveN",
    xm1014: "XM1014",
    mac10: "MAC10",
    ump45: "UMP45",
    p90: "P90",
    awp: "AWP",
    ak47: "AK47",
    aug: "AUG",
    famas: "FAMAS",
    g3sg1: "G3SG1",
    m249: "M249",
    enemy_weapons: "Enemy weapons",
    fired_bullets: "Statistics of fired bullets",
    successful_bullets: "Statistics of successful bullets"
  },
  "cuddle": {
    noArgs: "You must @Mention another person to cuddle.",
    noAuthor: "You can't cuddle yourself.",
    noCuddle: "Sorry, I can't let you do that. {emoji}",
    completed: "{user} cuddles {user_2}!"
  },
  "daily": {
    completed: "**{user}**, you have received your **{credits}** daily {emoji} credits!",
    completed_2: "{user}, you've received {user_2}'s **{credits}** daily {emoji} credits!",
    cooldown: "{user}, you can claim your daily {emoji} credits in **{hours} hours**, **{minutes} minutes**, **{seconds} seconds**."
  },
  "dance": {
    completed: "{user} starts dancing!"
  },
  "drake": {
    noArgs: "You must @Mention a person to do the meme.",
    invalidMention: "You can't do the drake yourself, you must mention another person.",
    invalidAvatar: "A valid avatar could not be found."
  },
  "ecotop": {
    completed_title: "Watching the TOP millionaires of Discord",
    no_one_has_come: "No one has come!",
    credits: "credits"
  },
  "emoji": {
    noArgs: "You must enter the name or ID of an emoji.",
    loading: "Please wait while I search for the specified emoji.",
    error_search: "No results found for emoji **{search}**.",
    completed_title: "Results for the search \"**{search}**\".",
    name: "Emoji name",
    id: "Emoji ID",
    type: "Emoji type",
    normal: "Normal",
    animated: "Animated"
  },
  "emojis": {
    noEmojisFound: "There is no emoji available on the server.",
    max_emojis_limit: "There are too many emojis on the server to show them.",
    completed_title: "Watching server emojis"
  },
  "esay": {
    noArgs: "You must specify the message you want to send.",
    example: "Hello everyone!"
  },
  "expand": {
    noArgs: "You must enter the link you want to expand.",
    expand_error: "An error occurred while trying to expand that link.",
    loading: "Wait while the request to expand the URL is sent.",
    completed_title: "Results of the url expansion",
    shortened_url: "Shortened URL",
    original_url: "Original URL"
  },
  "feed": {
    completed: "{user} feeds {user2}!",
    noAuthor: "You can't feed yourself."
  },
  "fish": {
    enough_money: "You don't have enough {emoji} credits to pay the hook.",
    completed: "You have thrown the hook, but unfortunately you haven't caught anything and you have had to pay **{credits}** {emoji} credits for your attempt. You have now **{balance}** {emoji} credits.",
    completed_2: "You have cast the hook, and... you have caught one! You've won **{reward}** {emoji} credits and you had to pay **{credits}** {emoji} credits for your attempt. You have now **{balance}** {emoji} credits."
  },
  "floor": {
    completed: "The floor is lava!"
  },
  "fortnite": {
    noArgs: "You must specify the platform to see the statistics of a player.",
    noArgs_2: "You must specify the player's name to see their statistics.",
    invalidPlatform: "The platform you have written isn't valid, please write a valid platform ({platforms}).",
    loading: "Please wait while the statistics API information is collected.",
    noPlayerFound: "The player you mentioned does not exist or isn't registered in the statistics pages.",
    error_api: "An error occurred while trying to contact the API.",
    completed_title: "Viewing **{player}**'s statistics on **{platform}**",
    ign: "IGN",
    uuid: "UUID",
    kills: "Kills",
    general_stats: "General statistics",
    kd: "K/D",
    wins: "Wins",
    wins_percent: "Percentage of games won",
    played: "Played",
    total_score: "Total score",
    recent_stats: "Recent statistics",
    time_played: "Time played",
    players_alive: "Players left alive"
  },
  "fortnitestore": {
    loading: "Please wait while the API data is obtained.",
    error_api: "An error occurred while trying to contact the API.",
    completed_title: "Viewing a random item from the Fortnite store",
    name: "Name",
    rarity: "Rarity",
    vbucks: "vBucks"
  },
  "fuck": {
    noArgs: "You must @Mention a person to be able to fuck.",
    noAuthor: "You can't fuck yourself.",
    noFuck: "What are you trying to do to me? ばか！",
    completed: "{user} fucked {user2}!"
  },
  "giphy": {
    noArgs: "You must specify the gif you want to search.",
    loading: "Please wait while the API information is collected.",
    error_api: "An unexpected error occurred while trying to contact the API.",
    notFound: "Could not find any results for the specified search.",
    completed_title: "Results for the search \"**{search}**\""
  },
  "giveaway": {
    example: "Super kawaii giveaway!",
    invalidTime: "The time you entered isn't valid.",
    noArgs_0: "You must specify the action you want to carry out {options}.",
    noArgs: "You must specify the number of possible winners of the giveaway.",
    noArgs_2: "You must specify the prize of the giveaway.",
    invalidWinners: "The number of possible winners you have specified isn't valid.",
    giveaway: "GIVEAWAY",
    giveaway_ended: "GIVEAWAY ENDED",
    timeRemaining: "Time remaining: **{duration}**.",
    inviteToParticipate: "React with {emoji} to participate!",
    winMessage: "Congratulations, {winners}! You won **{prize}**!",
    noWinner: "The giveaway has been canceled because there is no valid participation.",
    hostedBy: "Hosted by: {user}",
    winners: "winner(s)",
    create: {
      noArgs: "You must specify the time you want the giveaway to last."
    },
    reroll: {
      noArgs: "You must specify the ID of the giveaway, which is usually the ID of the message.",
      completed: "¡New winner(s): {winners}! Congratulations!",
      error: "There is no valid participation, so the reroll has not been carried out.",
      error_id: "Could not find any giveaway with the ID **{giveaway_id}**."
    },
    edit: {
      noArgs: "You must specify the ID of the giveaway, which is usually the ID of the message.",
      noArgs_2: "You must specify the time you want the giveaway to last.",
      completed: "You have edited the giveaway correctly.",
      error: "No active giveaways could be found with the ID provided."
    }
  },
  "greet": {
    noArgs: "You must @Mention the person you want to greet.",
    noAuthor: "You can't greet yourself.",
    completed: "{user} greets {user_2}!"
  },
  "happy": {
    completed: "{user} is happy!"
  },
  "help": {
    completed_title: "Full list of Filo's commands",
    completed_description: "My prefix in **{guild}** is **{prefix}**.",
    administration: "Administration",
    animals: "Animals",
    anime: "Anime",
    core: "Core",
    fun: "Fun",
    economy: "Economy",
    game_stats: "Game statistics",
    interaction: "Interaction",
    games: "Games",
    minecraft: "Minecraft",
    miscellaneous: "Miscellaneous",
    moderation: "Moderation",
    reaction: "Reaction",
    server: "Server",
    social: "Social",
    nsfw: {
      nsfw_title: "NSFW",
      nsfw_description: "You must be on an **NSFW** channel to see these commands."
    },
    restricted: "Restricted",
    question_title: "This server does not speak {lang}?",
    question_description: "If so, you can change the language of Filo using the command **{command}**.\nYou can get a complete list of Filo supported languages **[here]({link})** or using the **{command_2}** command."
  },
  "history": {
    noArgs: "You must @Mention a person to see their history.",
    completed_title: "Viewing **{user}**'s warnings history",
    noWarns: "The user you specified has no warning.",
    warnings: "{time} ago",
    warnings_2: "{reason}. By: {staff}",
    fields_limit: "The message exceeds **{limit}** fields, but you can check it **[here]({link})**."
  },
  "hot": {
    completed: "{user} has a terrible heat!"
  },
  "hug": {
    completed: "{user} hugs {user_2} amicably.",
    noHug: "You can't give yourself a hug."
  },
  "info": {
    footer: "Serving Discord servers since 2019"
  },
  "jojo": {
    completed: "{user} poses like a jojo!"
  },
  "joke": {
    joke_0: "**What's Whitney Houston's favourite type of coordination?**\nHAAAAND EEEEEEEEEYYYYEEE!",
    joke_1: "**What's better than Ted Danson?**\nTed singing and Danson!",
    joke_2: "**What did the the drummer call his twin daughters?** Anna one, Anna two!",
    joke_3: "**I bought some shoes from a drug dealer.**\nI don't know what he laced them with, but I was tripping all day!",
    joke_4: "**What does a nosey pepper do?**\nIt gets jalapeño business!",
    joke_5: "**What does a baby computer call his father?**\nData!",
    joke_6: "**What do you call a bear without any teeth?**\nA gummy bear!",
    joke_7: "**Why did the golfer change his pants?**\nBecause he got a hole in one!",
    joke_8: "**Does anyone need an ark?**\nI Noah guy!",
    joke_9: "**How do you make holy water?**\nYou boil the hell out of it.",
    joke_10: "**I bought a ceiling fan the other day. Complete waste of money.**\nHe just stands there applauding and saying:\n'Ooh, I love how smooth it is.'",
    joke_11: "**What do you get when you cross a snowman with a vampire?**\nFrostbite.",
    joke_12: "**Why did Cinderella get kicked off the football team?**\nBecause she kept running from the ball!",
    joke_13: "**What does a zombie vegetarian eat?**\n“GRRRAAAIIINNNNS!”",
    joke_14: "**What's at the bottom of the ocean and shivers?**\nA nervous wreck!",
    joke_15: "**What's the difference between a well dressed man on a unicycle and a poorly dressed man on a bike?**\nAttire!",
    joke_16: "**How many ears does Spock have? Three.**\nThe left ear, the right ear, and the final front-ear!",
    joke_17: "**Why don’t they play poker in the jungle?**\nToo many cheetahs!",
    joke_18: "**How did Darth Vader know what Luke got him for Christmas?**\nHe felt his presents!",
    joke_19: "**What time did the man go to the dentist?**\nTooth hurt-y!",
    joke_20: "**What do you call someone with no body and no nose?**\nNobody knows!"
  },
  "kick": {
    noArgs: "You must @Mention to the person you want to kick.",
    kick: "kicked",
    completed_title: "Kicked from the server **{guild}**",
    kick_id: "Kick's ID",
    server_invite: "Server invite"
  },
  "kickbutts": {
    noArgs: "You must @Mention a person to kick butts.",
    noAuthor: "You can't kick butts yourself.",
    noFilo: "Please don't kick butts me, you're going to hurt me! {emoji}",
    completed: "{user} kick butts {user_2}!"
  },
  "kiss": {
    noArgs: "You must @Mention a person to kiss.",
    noAuthor: "You can't give yourself a kiss.",
    noFilo: "I'm sorry but my heart belongs to someone else.",
    completed: "{user} kisses {user_2}!"
  },
  "lang": {
    completed_title: "Viewing server language",
    completed_description: "**{guild}** is currently using the **{lang}** language.",
    languages_title: "Languages compatible with Filo",
    question_title: "This server does not speak {lang}?",
    question_description: "If so, you can change the language of Filo using the command **{command}**.\nYou can get a complete list of Filo supported languages **[here]({link})** or using the **{command_2}** command."
  },
  "langs": {
    completed_title: "Translator's language list",
    language: "Language",
    code: "Code"
  },
  "laugh": {
    completed: "{user} starts laughing uncontrollably!",
    completed_2: "{user} laughs at himself!",
    completed_3: "{user} makes {user_2} laugh uncontrollably!"
  },
  "like" : {
    completed: "{user} gives his thumbs up!"
  },
  "love": {
    noArgs: "You have to @Mention to another person to generate the image of love.",
    loading: "Wait while a super kawaii image is generated.",
    invalidAvatar: "A mentioned user does not have a valid avatar.",
    error_api: "An error occurred while trying to contact the API."
  },
  "lyrics": {
    noArgs: "You must enter the name of the song you want to search.",
    invalidSong: "No lyric could be found for the arguments introduced.",
    completed_title: "Watching the lyric of the song **{song}**",
    completed_title_secondary: "Watching the lyrics of a song",
    message_limit: "The lyrics exceed **{limit}** characters, but you can check it **[here]({link})**."
  },
  "manga": {
    noArgs: "You must write the name of the manga you want to consult.",
    loading: "Please wait while I get the requested manga data.",
    noData: "No results could be found for the manga **{search}**.",
    status_type: {
      publishing: "Publishing",
      finished: "Finished",
      unreleased: "Unreleased"
    },
    unknown_date: "Unknown date",
    genres: "Genres",
    unknown_genres: "Unknown genres",
    status: "Status",
    unknown_status: "Unknown status",
    type: "Type",
    popularity: "Popularity",
    ratings: "Ratings",
    chapters: "Chapters",
    start_date: "Date of first publication",
    main_characters: "Main characters",
    support_characters: "Support characters"
  },
  "masturbate": {
    completed: "{user} masturbates thinking himself!",
    completed_2: "{user} masturbates thinking of {user2}!",
    noMasturbate: "What are you trying to do to me? ばか！"
  },
  "mcbanner": {
    noArgs: "You must type the IP address of the server you want to check."
  },
  "mcbody": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s body",
    error_player: "The player you mentioned isn't premium."
  },
  "mcbust": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s bust",
    error_player: "The player you mentioned isn't premium."
  },
  "mcface": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s face",
    error_player: "The player you mentioned isn't premium."
  },
  "mcfront": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s front",
    error_player: "The player you mentioned isn't premium."
  },
  "mcfrontbody": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s front",
    error_player: "The player you mentioned isn't premium."
  },
  "mchead": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s head",
    error_player: "The player you mentioned isn't premium."
  },
  "mcskin": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed_title: "Watching **{user}**'s skin",
    error_player: "The player you mentioned isn't premium."
  },
  "mcuuid": {
    noArgs: "You must write the nickname of a premium player.",
    error_api: "An error occurred while trying to get **{user}**'s information.",
    completed: "The uuid of the player **{user}** is **{uuid}**.",
    error_player: "The player you mentioned isn't premium."
  },
  "mcserver": {
    noArgs: "You must type the IP address of the server you want to check.",
    loading: "Please wait while I get the API information.",
    error_api: "An unexpected error occurred while trying to contact the API.",
    server_offline: "The specified server isn't online.",
    too_long: "Too long to show",
    invalid_port: "The port you specified is invalid.",
    completed_title: "Viewing the status of the **{server}** server",
    ip: "IP",
    port: "Port",
    players: "Players",
    version: "Version",
    motd: "Motd"
  },
  "members": {
    loading: "Please wait while I review the list of members.",
    completed_title: "Viewing the list of server members",
    total_members: "Total members",
    humans: "Humans",
    robots: "Robots"
  },
  "meme": {
    error_api: "An error occurred while trying to contact the API."
  },
  "minesweeper": {
    loading: "Please wait while the game board is generated.",
    completed_title: "Minesweeper",
    error_game: "An error occurred while trying to load the game board.",
    question_title: "How do you play minesweeper?",
    question_description: "This game board is based on \"spoilers\", so you just have to click on one of them and have fun."
  },
  "morse": {
    completed_title: "Morse code translator",
    hastebin_completed: "The message exceeds **{limit}** characters, but you can check it **[here]({link})**.",
    encode: {
      noArgs: "You must write a word or text to translate it to morse."
    },
    decode: {
      noArgs: "You must write a word or text in morse to translate it into text.",
      error_translator: "The morse code you entered is invalid."
    }
  },
  "mute": {
    noArgs: "You must @Mention the person you want to mute.",
    bellowRole: "My role is below the role **{role}**.",
    notification_title: "Permanently muted from the server **{guild}**",
    permanently_muted: "permanently muted",
    mute_id: "Mute's ID",
    invalid_role: "The {role} role is managed by an integration.",
    already_muted: "The user you mentioned is already muted."
  },
  "nick": {
    noArgs: "You must mention the person to change their nickname on the server.",
    noArgs_2: "You must write the new nickname you want to establish for that person.",
    completed: "You have changed {user}'s nickname to **{nickname}**."
  },
  "nsfw": {
    noArgs: "You must specify if you want to activate NSFW mode or if you want to deactivate it (true/false).",
    completed: "You have **{action}** the **NSFW** mode correctly on the {channel} channel.",
    activated: "activated",
    deactivated: "deactivated"
  },
  "osu": {
    noArgs: "You must specify the player's name to see their statistics.",
    loading: "Please wait while the statistics API information is collected.",
    error_api: "An error occurred while trying to contact the API.",
    error_player: "The player you mentioned does not exist or isn't registered in the statistics pages.",
    completed_title: "Viewing **{player}**'s statistics",
    ign: "IGN",
    uuid: "UUID",
    level: "Level",
    player_country: "Player's country",
    registration_date: "Registration date",
    accuracy: "Accuracy",
    time_played: "Time played",
    ranking_stats: "Ranking statistics",
    ranked_score: "Ranked score",
    total_score: "Total score",
    game_stats: "Game statistics",
    games_with_hits: "Games with {hits} hits",
    games_played: "Games played",
    pp_stats: "Performance Point statistics",
    rank: "Rank",
    raw: "Raw",
    rank_player_country: "Rank in the player's country"
  },
  "owoify": {
    noArgs: "You must write the text you want to owoify.",
    error_api: "An error occurred while trying to contact the API."
  },
  "pat": {
    completed: "{user} caresses {user_2}!",
    noAuthor: "You can't caress yourself."
  },
  "pay": {
    noArgs: "You must @Mention the person you want to pay.",
    noArgs_2: "You must write the amount of money you want to pay.",
    noAuthor: "You can't pay yourself.",
    noFilo: "I appreciate you want to pay me **{credits}** {emoji} credits, but unfortunately my developers don't allow me to accept money from others.",
    noMoney: "You don't have **{credits}** {emoji} credits to pay to {user}.",
    completed: "You have paid **{credits}** {emoji} credits to {user}."
  },
  "pin": {
    noArgs: "You need to specify the ID of the messages that you want to pinned.",
    maximumMessages: "There can't be more than **{limit}** fixed messages per channel.",
    completed: "The message **{message_id}** has been pinned on the channel {channel}.",
    error_pin: "An error occurred while trying to pin the message **{message_id}**."
  },
  "ping": {
    loading: "Please wait while the latency test is performed.",
    completed_title: "Viewing latency test results",
    client_latency: "Client's latency",
    message_latency: "Message's latency"
  },
  "poke": {
    noArgs: "You must @Mention the person you want to poke.",
    noAuthor: "You can't bother yourself.",
    completed: "{user} bothers {user_2}!"
  },
  "poll": {
    noArgs: "You must write a brief explanation for the poll.",
    example: "What do you think of this magnificent command?",
    completed_title: "Poll"
  },
  "pout": {
    completed: "{user} pouts!"
  },
  "profile": {
    completed_title: "Viewing **{user}**'s profile",
    name: "Name",
    nickname: "Nickname",
    badges: "Badges",
    no_badges: "No badges",
    registration_date: "Registration date",
    join_date: "Join date",
    credits: "Credits",
    reputation: "Reputation",
    server_booster: "Server booster",
    roles: "Roles ({roles})",
    error_profile: "An error occurred while trying to load information from this profile."
  },
  "pubg": {
    noArgs: "You must enter the type of platform to check the statistics.",
    noArgs_2: "You must enter the name of a player to check their statistics.",
    invalidPlatform: "The platform you entered does not match those of the game {platforms}.",
    loading: "Please wait while the statistics API information is collected.",
    error_api: "An error occurred while trying to contact the API.",
    error_player: "The player you mentioned does not exist or isn't registered in the statistics pages.",
    completed_title: "Viewing **{player}**'s statistics on **{platform}**",
    ign: "IGN",
    uuid: "UUID",
    best_rank_point: "Best rank point",
    season: "Season",
    daily_stats: "Daily statistics",
    solo_kills: "Solo kills",
    duo_kills: "Duo kills",
    squad_kills: "Squad kills",
    solo_wins: "Games won in solo",
    duo_wins: "Matches won in duo",
    squad_wins: "Games won in squad",
    solo_stats: "Solo statistics",
    duo_stats: "Duo statistics",
    squad_stats: "Squad statistics",
    kills: "Kills",
    kill_streak: "Kill streak",
    headshots: "Headshots",
    assists: "Assists",
    longest_kill: "Longest kills",
    road_kills: "Road kills",
    suicides: "Suicides",
    revives: "Revives",
    walk_distance: "Walked distance",
    wins: "Wins",
    losses: "Losses",
    games_played: "Games played"
  },
  "punch": {
    noArgs: "You must @Mention the person you want to hit.",
    noAuthor: "You can't hit yourself.",
    noFilo: "Please don't punch me, you're going to hurt me! {emoji}",
    completed: "{user} hits {user_2}!"
  },
  "r6": {
    noArgs: "You must specify the platform to see the statistics of a player.",
    noArgs_2: "You must specify the player's name to see their statistics.",
    invalidPlatform: "The platform you have written isn't valid, please write a valid platform ({platforms}).",
    error_api: "An error occurred while trying to contact the API.",
    loading: "Please wait while the statistics API information is collected.",
    error_player: "The player you mentioned does not exist or isn't registered in the statistics pages.",
    completed_title: "Viewing **{player}**'s statistics on **{platform}**",
    ign: "IGN",
    uuid: "UUID",
    level: "Level",
    alpha_pack: "Alpha pack probability",
    total_experience: "Total experience",
    general_stats: "General statistics",
    kills: "Kills",
    melee_kills: "Melee kills",
    headshots: "Headshots",
    penetration_kills: "Penetration kills",
    blind_kills: "Blind kills",
    assists: "Assists",
    deaths: "Deaths",
    kd: "K/D",
    suicides: "Suicides",
    injured: "Injured",
    revives: "Revives",
    wins: "Wins",
    draws: "Draws",
    losses: "Losses",
    games_played: "Games played",
    wl: "W/L",
    time_played: "Time played",
    bullets_fired: "Bullets fired",
    bullets_hit: "Bullets hit",
    gadgets_destroyed: "Gadgets destroyed",
    rappel: "FBI's style rappel",
    barricades_deployed: "Barricades deployed",
    reinforcements_deployed: "Reinforcements deployed",
    casual_stats: "Quick matches statistics",
    ranked_stats: "Ranked statistics",
    rank: "Rank",
    mmr: "MMR",
    other_stats: "Other statistics",
    ranks: {
      unranked: "Unranked",
      copper_V: "Copper V",
      copper_IV: "Copper IV",
      copper_III: "Copper III",
      copper_II: "Copper II",
      copper_I: "Copper I",
      bronze_V: "Bronze V",
      bronze_IV: "Bronze IV",
      bronze_III: "Bronze III",
      bronze_II: "Bronze II",
      bronze_I: "Bronze I",
      silver_V: "Silver V",
      silver_IV: "Silver IV",
      silver_III: "Silver III",
      silver_II: "Silver II",
      silver_I: "Silver I",
      gold_IV: "Gold IV",
      gold_III: "Gold III",
      gold_II: "Gold II",
      gold_I: "Gold I",
      Platinum_III: "Platinum III",
      Platinum_II: "Platinum II",
      Platinum_I: "Platinum I",
      diamond: "Diamond",
      champion: "Champion"
    }
  },
  "r6status": {
    loading: "Please wait while the status API information is collected.",
    error_api: "An error occurred while trying to contact the API.",
    completed_title: "Viewing **{game}** server status",
    completed_description: "You can obtain more information on the status of the servers by **[clicking here]({link})**.",
    status: {
      online: "Online",
      degraded: "Degraded",
      maintenance: "Maintenance"
    }
  },
  "randomnumber": {
    completed_title: "Random number"
  },
  "randomuser": {
    completed_title: "Random user"
  },
  "removerole": {
    noArgs: "You must @Mention the person you want to take a role from.",
    noArgs_2: "You must write the name of the role you want to remove from that person.",
    invalid_role: "The {role} role is managed by an integration.",
    noRole: "{user} does not have the assigned {role} role.",
    bellowRole: "My roles is below the {role} role.",
    completed: "You have successfully removed the {role} role from {user}."
  },
  "rep": {
    noArgs: "You must @Mention the person you want to grant a reputation point.",
    noAuthor: "You can't give yourself a reputation point.",
    completed: "{user} has given {user_2} a {emoji} reputation point!",
    cooldown: "{user}, you must wait **{hours} hours**, **{minutes} minutes**, **{seconds} seconds** to be able to grant another {emoji} reputation point."
  },
  "report": {
    noArgs: "You must @Mention to the person you want to report.",
    noArgs_2: "You must explain a reason for the report.",
    noAuthor: "You can't report yourself.",
    completed: "You have reported {user} correctly.",
    report_id: "Report's ID",
    reason: "Reason",
    author: "Author",
    reported_member: "Reported member",
    completed_title: "Report information #**{report_id}**"
  },
  "reps": {
    completed: "{user} currently has **{reputation}** {emoji} reputation points."
  },
  "reversecard": {
    noArgs: "You must @Mention another person to use the reversed card.",
    noAuthor: "You can't use the inverted card with yourself.",
    completed: "{user} uses the reversed card against {user_2}!"
  },
  "role": {
    noArgs: "You must write the name of a role to get its information.",
    noRoleFound: "I could not find the information of the role **{role}**.",
    completed_title: "**{role}**'s role information",
    role: "Role",
    name: "Name",
    id: "ID",
    members: "Members",
    color: "Color",
    position: "Position",
    extra: "Extra",
    hoist: "Hoist",
    mentionable: "Mentionable",
    integration_role: "Integration's role",
    permissions: "Permissions ({permissions_bitfield})"
  },
  "run": {
    completed: "{user} runs fast!"
  },
  "say": {
    noArgs: "You must write the messages you want to send."
  },
  "scared": {
    completed: "{user} is scared!"
  },
  "server": {
    moderation: {
      none: "None",
      low: "Low (Must have verified email on account)",
      medium: "Medium (Must be registered on Discord for longer than 5 minutes)",
      high: "(╯°□°）╯︵ ┻━┻ (Must be a member of the server for longer than 10 minutes)",
      very_high: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻ (Must have a verified phone number)"
    },
    filter: {
      disabled: "Disabled",
      members_without_roles: "Activated (members without role)",
      all_members: "Activated for all"
    },
    mfa: {
      disabled: "Disabled",
      enabled: "Enabled"
    },
    notifications: {
      mentions: "Only @mentions",
      all: "All messages"
    },
    regions: {
      brazil: "Brazil",
  	  central_europe: "Central Europe",
  	  eastern_europe: "Eastern Europe",
  	  west_europe: "West Europe",
  	  hong_kong: "Hong Kong",
  	  japan: "Japan",
  	  russia: "Russia",
  	  singapore: "Singapore",
  	  south_africa: "South Africa",
  	  sydney: "Sydney",
      us_central: "US Central",
      us_east: "US East",
      us_south: "US South",
      us_west: "US West",
      europe: "Europe",
      india: "India",
      south_korea: "South Korea",
      dubai: "Dubai",
      amsterdam: "Amsterdam",
      frankfurt: "Frankfurt",
    },
    not_set: "Not set",
    level: "Level",
    guild_id: "Guild ID",
    owner: "Owner",
    boost: "Boost",
    boosts: "{number} boosts",
    region: "Region",
    creation_date: "Creation date",
    perks: "Perks",
    moderation_level: "Moderation level",
    any: "Any",
    default_notifications: "Default notifications",
    mfa_level: "Two-step authentication",
    filter_level: "Explicit content filter",
    channels: "Channels",
    system_channel: "System channel",
    rules_channel: "Rules channel",
    discord_announcements_channel: "Discord announcements channel",
    afk_channel: "AFK channel",
    afk_timeout: "AFK timeout",
    members: "Members",
    maximum: "Max",
    roles: "Roles",
    vanity_url: {
      stats: "Vanity URL Statistics",
      code: "Vanity URL Code",
      uses: "Vanity URL Uses"
    }
  },
  "serverinvite": {
    responsible: "Responsible: {user}",
    completed: "You have generated a permanent invitation for the {channel} channel correctly."
  },
  "shard": {
    status_type: {
      online: "Online",
      offline: "Offline"
    },
    completed_title: "Watching the statistics of shard #**{shard_id}**",
    status: "Status",
    latency: "Latency",
    version: "Version",
    connection_time: "Connection time",
    guilds: "Guilds",
    users: "Users",
    channels: "Channels"
  },
  "shorten": {
    noArgs: "You must specify the link you want to shorten.",
    error_api: "An error occurred while trying to contact the API.",
    error_shorten: "An error occurred while trying to shorten your link: {error}.",
    completed: "You have shortened the link **{original_url}** correctly.",
    original_url: "Original url",
    shortened_url: "Shortened url"
  },
  "sick": {
    completed: "{user} is sick!"
  },
  "sing": {
    completed: "{user} starts singing!"
  },
  "slap": {
    noArgs: "You must @Mention the person you want to slap.",
    noAuthor: "You can't slap yourself.",
    noFilo: "Please don't slap me, you're going to hurt me! {emoji}",
    completed: "{user} slap {user_2}!"
  },
  "sleep": {
    completed: "{user} falls asleep!"
  },
  "slots": {
    noArgs: "You must specify the amount of credits you want to bet to play.",
    enough_money: "You don't have enough {emoji} credits to bet.",
    completed_title: "Slots machine",
    completed_win: "{user} has paid {credits} {emoji} credits and has **earned** {credits_2} {emoji_2} credits.",
    completed_lost: "{user} has paid {credits} {emoji} credits and has **lost** {credits_2} {emoji_2} credits."
  },
  "slowmode": {
    noArgs: "You must enter the number of seconds of slowmode.",
    max: "You can't set a slowmode greater than **{max}** hours.",
    min: "You can't set a slowmode less than **{min}** seconds.",
    completed: "You have set a slowmode of **{time}** seconds to the {channel} channel."
  },
  "smug": {
    completed: "{user} is showing off!"
  },
  "softban": {
    noArgs: "You must @Mention the person you want to ban.",
    softbanned: "soft banned",
    author: "Author",
    ban_id: "Ban's ID",
    notification: {
      completed_title: "Soft banned from the server **{guild}**",
      server_invite: "Server invite"
    }
  },
  "stats": {
    completed_title: "Filo's stats",
    ram: "RAM",
    latency: "Latency",
    cluster: "Cluster",
    guilds: "Guilds",
    users: "Users",
    channels: "Channels",
    commands: "Commands",
    version: "Filo version",
    executed_commands: "Executed commands",
    library: "Library",
    library_version: "Library version",
    node_version: "Node version",
    votes: "Votes on page {number}",
    total_votes: "Total votes",
    connection_time: "Connection time"
  },
  "suck": {
    noArgs: "You must @Mention another person to suck his penis.",
    noAuthor: "You can't suck your penis yourself.",
    completed: "{user} sucks {user_2}'s penis!"
  },
  "suggest": {
    noArgs: "You must explain in detail the suggestion you want to make.",
    example: "Add more fun commands",
    confirm: {
      title: "Are you sure you want to send this suggestion to the Filo's development team?",
      description: "**WARNING**: Be aware that intentional misuse of this command may result in a violation of **[Filo's terms and conditions]({link})**.",
      description_2: "If you want to send it click on ✅, otherwise click on ❎."
    },
    reason: "Explanation of the suggestion",
    cancel: "The pending action has been canceled.",
    completed: "You have sent suggestion #**{suggest_id}** correctly."
  },
  "support": {
    completed_title: "Filo support",
    completed_description: "Do you need our help? don't worry! Below you can see several methods of help that we provide.",
    server: "Filo server",
    documentation: "Filo documentation",
    twitter: "Filo twitter",
    email: "Filo support email"
  },
  teehee: {
    completed: "{user} is teehee!"
  },
  "tempban": {
    noArgs: "You must @Mention the person you want to ban.",
    noArgs_2: "You must specify the duration of the ban.",
    minimum_time: "The minimum time of the sanction must be greater than **{time}**.",
    limit_time: "The time of the sanction can't exceed **{time}**.",
    notification_title: "Temporarily banned from the server **{guild}**",
    temporarily_banned: "temporarily banned",
    ban_id: "Ban's ID",
    time: "Time",
    already_banned: "The user you mentioned is already banned."
  },
  "tempmute": {
    noArgs: "You must @Mention the person you want to mute.",
    noArgs_2: "You must specify the time to temporarily mute this person.",
    bellowRole: "My roles is below the role **{role}**.",
    invalid_role: "The {role} role is managed by an integration.",
    minimum_time: "The minimum time of the sanction must be greater than **{time}**.",
    limit_time: "The time of the sanction can't exceed **{time}**.",
    temporarily_muted: "temporarily muted",
    notification: {
      title: "Temporarily muted from the server **{guild}**",
    },
    mute_id: "Mute's ID",
    time: "Time",
    already_muted: "The user you mentioned is already muted."
  },
  "think": {
    completed: "{user} is thinking!",
  },
  "tickle": {
    completed: "{user} tickles {user_2}!",
    noAuthor: "You can't tickle yourself."
  },
  "translate": {
    noArgs: "You must write the language code to which you want to translate the text, if you don't know what the codes are, use the **{command}** command.",
    noArgs_2: "You must write the message you want to translate.",
    error_translate: "A problem has occurred while trying to translate the indicated text.",
    completed_title: "Translator"
  },
  "unban": {
    noArgs: "You must write the ID of the person you want to unban.",
    user_not_banned: "The ID of the person you specified isn't banned from the server.",
    completed: "{user} has been unbanned from the server correctly."
  },
  "unmute": {
    noArgs: "You must @Mention or write the ID of the person you want to unmute.",
    no_role_exist: "The **{role}** role does not exist on the server.",
    invalid_role: "The {role} role is managed by an integration.",
    user_not_muted: "{user} isn't muted.",
    bellowRole: "My roles is below the **{role}** role.",
    unmuted: "unmuted",
    notification: {
      title: "Unmuted from the server **{guild}**"
    }
  },
  "unpin": {
    noArgs: "You need to specify the ID of the messages that you want to unpin.",
    completed: "The message **{message_id}** has been unpinned on the channel {channel}.",
    error_unpin: "An error occurred while trying to unpin the message **{message_id}**."
  },
  "urban": {
    noArgs: "You must write a word in English to look for it in the urban dictionary.",
    error_urban: "This word could not be found in the urban dictionary.",
    completed_title: "**{word}** definition",
    votes: "Definition votes"
  },
  "votes": {
    completed_title: "Watching the Filo's votes",
    page: "Page {number}",
    total_votes: "Total votes",
    question: {
      title: "Did you know that you can get rewards for voting?",
      description: "You can get some rewards if **[you vote daily](link)** for Filo and if you are on our **[support server]({link_2})**."
    }
  },
  "warn": {
    noArgs: "You must @Mention the person you want to warn.",
    noArgs_2: "You must specify a reason to warn a person.",
    notification: {
      title: "Warned from the server **{guild}**"
    },
    warned: "warned",
    warn_id: "Warn's ID"
  },
  "weather": {
    noArgs: "You must enter the name of the place to check its weather.",
    error_country: "No results found for the specified arguments.",
    error_api: "An error occurred while trying to contact the API.",
    completed_title: "Viewing **{location}**'s weather forecast",
    latitude: "Latitude",
    longitude: "Longitude",
    time_zone: "Time zone",
    alert: "Alert",
    unknown_alerts: "No alerts available",
    temperature: "Temperature",
    weather: "Current weather",
    environment: "Environment",
    humidity: "Humidity",
    wind: "Wind"
  }
};
