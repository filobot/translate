exports.language = {
  code: "es",
  full_code: "español"
}

exports.announcements = {
  title: "Aviso importante",
  description: "Hemos realizado cambios en la estructura de configuración de todos los servidores.\nA lo largo del camino, algunos servidores han perdido todas sus configuraciones.\n\nSi su servidor ha perdido todas las configuraciones y desea que las restablezcamos, por favor **[contáctenos](https://discord.gg/tGphdcu)**.\n\nDisculpe las molestias."
};

exports.general = {
    error_author: "{emoji} Algo salió mal al intentar ejecutar esa acción",
    error_contact: "contacto",
    error_description: "Póngase en **{contact}** con nuestro equipo de soporte para obtener más instrucciones de que ha sucedido.",
    error_permissions_commands: "No tienes permisos para ejecutar el comando **{command}**.",
    error_permissions_command: "No tienes permisos para ejecutar el comando **{command}**.\nRequieres el permiso `{permission}`.",
    cooldown_commands: "Por favor espera **{time}** {unit} para poder ejecutar este comando otra vez.",
    error_permissions_description: "Este error ha sido causado debido a que no tengo el permiso `{permission}`.",
    only_guild: "Debes estar en un servidor para poder ejecutar el comando **{command}**.",
};

exports.modules = {
  disable_commands: {
    notification: "El comando que está intentando ejecutar está deshabilitado por la administración del servidor."
  },
  anti_bad_words: {
    reason_1: "El mensaje enviado contiene malas palabras.",
    reason_2: "El mensaje actualizado contiene malas palabras."
  }
};

exports.time = {
  second: "segundo",
  seconds: "segundos",
  minute: "minuto",
  minutes: "minutos",
  hour: "hora",
  hours: "horas",
  day: "día",
  days: "días",
  week: "semana",
  weeks: "semanas"
};

exports.moderation = {
  administrator: "Administrador",
  moderator: "Moderador",
  responsible: "Responsable: {member}.",
  responsible_and_reason: "Responsable: {user}. Razón: {reason}",
  notification_description: "Has recibido este mensaje informativo porque has sido {sanction_type} del servidor: **{guild}**.",
  default_reason: "El staff no ha especificado ninguna razón",
  reason: "Razón",
  completed: "{user} ha sido {sanction_type} del servidor.",
  sanction_expired: "La sanción ha expirado"
};

exports.channel = {
  type: {
    dm: "MD",
    group: "Grupo de MD",
    text: "Canal de texto",
    voice: "Canal de voz",
    category: "Categoría",
    news: "Canal de noticias",
    store: "Canal de comercio",
    unknown: "Canal desconocido"
  },
  channel: "Canal",
  channel_id: "ID del canal",
  channel_type: "Tipo de canal",
  category: "Categoría",
  without_category: "Sin categoría",
  channel_position: "Posición del canal",
  slowmode: "Tiempo de recuperación",
  channel_topic: "Tema del canal",
  default_topic: "Canal sin tema definido."
};

exports.nsfw = {
  nsfw: "NSFW",
  noNSFW: "Este canal no cumple con los criterios para mostrar contenido de adultos.\n\nSi quieres activar el modo adulto (NSFW) usa **{command}**.",
  notAllowed: "¿Qué estás intentas hacerme? ばか. {emoji}"
};

exports.log = {
  registered_event: "Evento registrado",
  channel: "Canal",
  executor: "Autor",
  reason: "Razón",
  enabled: "Activado",
  disabled: "Desactivado",
  ineligible: "Inelegible",
  any: "Ninguna",
  default_reason: "El staff no ha especificado ninguna razón",
  messages: {
    completed_title: "Registro de mensajes",
    purged_messages: "Mensajes limpiados"
  },
  channel: {
    title: "Registro de canales",
    channelCreate: "Canal creado",
    channelDelete: "Canal eliminado",
    channel_name: "Nombre del canal",
    text: "Canal de texto",
    voice: "Canal de voz",
    news: "Canal de noticias",
    store: "Canal de comercio",
    category: "Categoría",
    unknown_category: "Categoría desconocida",
    unknown_channel: "Canal desconocido",
    type: "Tipo de canal",
    position: "Posición del canal",
    nsfw: "NSFW",
    slowmode: "Tiempo de recuperación",
    topic: "Tema del canal",
    default_topic: "Canal sin tema definido"
  },
  sanction: {
    title: "Registro de sanción",
    guildMemberWarn: "Miembro advertido",
    guildBanAdd: "Miembro baneado",
    guildBanRemove: "Miembro desbaneado",
  },
  message: {
    title: "Registro de mensaje",
    messageDelete: "Mensaje eliminado",
    message: "Mensaje",
    message_link: "Enlace del mensaje",
    messageUpdate: "Mensaje actualizado",
    oldMessage: "Mensaje antiguo",
    newMessage: "Mensaje nuevo",
    messagePinned: "Mensaje fijado actualizado",
    channel: "Canal"
  },
  member: {
    title: "Registro de miembro",
    guildMemberAdd: "Miembro unido",
    guildMemberRemove: "Miembro sale",
    member: "Miembro",
    registration_date: "Fecha de registro",
    account_type: "Tipo de cuenta",
    bot_account: "Cuenta bot",
    normal_account: "Cuenta normal"
  }
};

exports.secret_menu_help = {
  title: "Menú de ayuda secreto",
  prefix: "Prefijo",
  help_command: "Comando de ayuda",
  support_server: "Servidor de soporte",
  language: "Idioma",
  command_language: "Comando para cambiar el idioma",
  invite: "Invitación de Filo",
  vote: "Votar por Filo",
  click_here: "Clic aquí"
};

exports.anti_invites = {
  reason: "El mensaje enviado contiene una invitación de servidor externo.",
  reason_2: "El mensaje actualizado contiene una invitación de servidor externo.",
};

exports.auto_mod = {
  pre_reason: "Sistema de auto-moderación de Filo",
  reason: "Exceder {limit} advertencias.",
  server_invite: "Invitación del servidor"
};

exports.anti_evasion = {
  reason: "Evadir una sanción activa."
};

exports.anti_spam = {
  reason_1: "Enviar demasiados mensajes en poco tiempo.",
  reason_2: "Enviar demasiados mensajes similares en poco tiempo."
};

exports.anti_mass_mentions = {
  reason: "Mencionas demasiados usuarios en el mismo mensaje."
};

exports.anti_repeated_text = {
  reason: "El mensaje contiene texto repetido."
};

exports.games = {
  "won": "ganado",
  "lost": "perdido"
};

exports.commands = {
  "general": {
    example: "Ejemplo",
    example_1: "¿Soy kawaii?",
    example_2: "¡Ser demasiado kawaii!",
    unknown: "Desconocido",
    search_limit: "No puedes realizar una busqueda superior a **{limit}** caracteres.",
    args_limit: "Los argumentos escritos exceden el límite de **{limit}** caracteres.",
    args_invalid: "Los argumentos especificados no son válidos.",
    reason_limit: "No puedes establecer una razón superior a **{limit}** characters.",
    reason_less: "No puedes establecer una razón inferior a **{limit}** characters.",
    no_user_perms: "No tienes permisos para usar el comando  **{command}** con {user}.",
    hastebin_check: "El resultado excede los {limit} caracteres, pero puedes consultar el resultado **[here]({link})**.",
    author: "Autor",
    two_options: "Debes elegir entre **{option_1}** y **{option_2}** para poder ejecutar correctamente el comando.",
    canceled: "La acción pendiente ha sido cancelada.",
    nsfw: "NSFW",
    creation_date: "Fecha de creación",
    yes: "Sí",
    no: "No",
    disabled_module_title: "El módulo **{module}** se encuentra desactivado.",
    disabled_module_description: "**[Aquí]({link})** puedes encontrar más información sobre este módulo."
  },
  "eight_ball": {
    noArgs: "Debes preguntar algo a la bola del número 8.",
    reply_1: "Es cierto.",
    reply_2: "En mi opinión, sí.",
    reply_3: "Es decididamente así.",
    reply_4: "Probablemente.",
    reply_5: "Todo apunta a que sí.",
    reply_6: "Sí - definitivamente.",
    reply_7: "Debes confiar en ello.",
    reply_8: "Buen pronóstico.",
    reply_9: "Sí.",
    reply_10: "Sin duda.",
    reply_11: "Respuesta vaga, vuelve a intentarlo.",
    reply_12: "Pregunta en otro momento.",
    reply_13: "Será mejor que no te lo diga ahora.",
    reply_14: "No puedo predecirlo ahora.",
    reply_15: "Concéntrate y vuelve a preguntar.",
    reply_16: "No cuentes con ello.",
    reply_17: "Mi respuesta es no.",
    reply_18: "Mis fuentes me dicen que no.",
    reply_19: "Las perspectivas no son buenas.",
    reply_20: "Muy dudoso.",
    sendReply: "La bola responde con sabiduría a tu pregunta:\n\n**{reply}**"
  },
  "addrole": {
    noArgs: "Debes @Mencionar a la persona que quieres darle un rol.",
    noArgs_2: "Debes escribir el nombre del rol para poder darle un rol.",
    invalid_role: "El rol {role} está administrado por una integración.",
    alreadyRole: "{member} ya tiene asignado el rol {role}.",
    bellowRole: "Mis roles se encuentra por debajo del rol {role}.",
    completed: "Les has dado el rol {role} a {member} correctamente."
  },
  "anal": {
    noArgs: "Debes @Mencionar a una persona para poder follarle analmente.",
    invalidArgs: "No te puedes follar analmente a ti mismo.",
    completed: "¡{user} folla analmente a {user_2}!"
  },
  "angry": {
    completed: "¡{user} está muy enfadado!"
  },
  "anime": {
    noArgs: "Debes escribir el nombre del anime que quieres consultar.",
    loading: "Por favor espera mientras obtengo los datos del anime solicitado.",
    noData: "No se han podido encontrar resultados para el anime **{search}**.",
    status_type: {
      on_broadcast: "En emisión",
      finished: "Finalizado",
      unreleased: "No estrenado"
    },
    ages: {
      general_audiences: "Audiencia general",
      children: "Apto para niños",
      pg_13: "Orientación de los padres sugerida (adolescentes de 13 años o más)",
      r_17: "Restringido (violencia y blasfemias)",
      r_18: "Restringido (desnudez leve)",
      rx_18: "Explícito (Hentai)"
    },
    status: "Estado",
    unknown_status: "Estado desconocido",
    type: "Tipo",
    popularity: "Popularidad",
    ratings: "Valoraciones",
    chapters: "Capítulos",
    duration: "{minutes} minutos por capítulo",
    transmission_date: "Fecha de transmisión",
    unknown_date: "Fecha desconocida",
    genres: "Géneros",
    unknown_genres: "Géneros desconocidos",
    recommended_age: "Edad recomendada",
    unknown_age: "Edad desconocida",
    studios: "Estudios",
    producers: "Productores",
    type_staff: "Personal del {type}",
    main_characters: "Personajes principales",
    support_characters: "Personajes de apoyo"
  },
  "ascii": {
    noArgs: "Debes escribir algo para poder transformarlo a ASCII.",
    completed_title: "Conversión del texto \"{args}\" a ASCII"
  },
  "avatar": {
    noAvatar: "Se produjo un error al intentar obtener el avatar de {user}.",
    completed_title: "Viendo el avatar de {user}"
  },
  "baka": {
    noArgs: "Debes @Mencionar a otra persona para llamarle baka.",
    noBaka: "Debes @Mencionar a la persona que quieres llamar baka. ばか！",
    noFilo: "Perdóname si he fallado en mi trabajo. {emoji}",
    completed: "¡{user} llama a {user2} baka! ばか！"
  },
  "ban": {
    noArgs: "Debes @Mencionar a la persona que quieres banear.",
    notification_title: "Baneado permanentemente del servidor **{guild}**",
    permanently_banned: "baneado permanentemente",
    ban_id: "ID del baneo"
  },
  "binary": {
    encode: {
      noArgs: "Debes escribir el texto que quieres codificar a código binario.",
      completed_title: "Conversión de texto a código binario"
    },
    decode: {
      noArgs: "Debes escribir el texto que quieres descodificar del código binario.",
      completed_title: "Conversión de código binario a Texto"
    }
  },
  "bite": {
    noArgs: "Debes @Mencionar a la persona que quieres morder.",
    noBite: "No puedes morderte a ti mismo.",
    noFilo: "Por favor no me muerdas, ¡me vas a hacer daño! {emoji}",
    completed: "¡{user} muerde a {user_2}!"
  },
  "blush": {
    completed: "¡{user} se ha sonrojado!"
  },
  "bored": {
    completed: "¡{user} se siente aburrido!"
  },
  "bugs": {
    noArgs: "Debes explicar el bug que quieres reportar.",
    example: "No funciona el comando de estadísticas",
    warning: "{emoji} ¿Estás seguro de que quieres informar de este bug al Equipo de Desarrollo de Filo?\n\n{emoji_2} **ADVERTENCIA**: Ten en cuenta que un mal uso intencionado de este comando puede conllevar una violación de los **[Términos y Condiciones de Filo]({link})**.\n\nSi quieres enviaro haz clic en ✅, de lo contrario haz clic en ❎.",
    bug_explanation: "Explicación del bug",
    completed: "El informe #**{report_id}** ha sido enviado al Equipo de Desarrollo de Filo correctamente."
  },
  "channel": {
    completed_title: "Información del canal"
  },
  "clear": {
    noArgs: "Debes indicar la cantidad de mensajes que quieres eliminar.",
    clear_limit: "No puedes eliminar más de **{limit}** mensajes a la vez.",
    completed: "**{number}** mensajes del canal {channel} han sido eliminados."
  },
  "clearwarns": {
    noArgs: "Debes @Mencionar a una persona para eliminar todas sus advertencias.",
    completed: "Has eliminado todas las advertencias de {user}."
  },
  "coinflip": {
    noArgs: "Debes elegir **{option_1}** o **{option_2}** para poder jugar.",
    noArgs_2: "Debes indicar la cantidad de {emoji} créditos que quieres apostar.",
    noMoney: "No tienes **{credits}** {emoji} créditos para apostar.",
    heads: "cara",
    tails: "cruz",
    completed: "¡Has **{game_status}** la apuesta! Ahora tienes **{newBalance}** {emoji} créditos."
  },
  "cold": {
    completed: "¡{user} tiene un terrible frio!"
  },
  "color": {
    loading: "Por favor espera mientras se genera un color aleatorio.",
    completed_title: "Resultados del color aleatorio generado",
    hex: "HEX",
    rgb: "RGB"
  },
  "conf": {
    minimum_value: "El valor debe ser igual o superior a **{number}**.",
    maximum_value: "El valor debe ser igual o inferior a **{number}**.",
    question_description: "Si es así, haga clic en ✅, si no desea configurarlo, haga clic en ❎.",
    webhook: {
      noArgs_1: "Debes especificar para qué módulo desea crear un webhook.",
      noArgs_2: "Debes especificar el canal donde desea crear el webhook.",
      limit: "No se pudo crear el webhook porque el canal excede el número máximo permitido de webhooks.",
      completed: "El webhook se ha creado en el canal {channel}."
    },
    enable: {
      noArgs_1: "Debes especificar el nombre del módulo que desea habilitar.",
      completed: "El módulo **{module}** se ha habilitado correctamente."
    },
    disable: {
      noArgs_1: "Debes especificar el nombre del módulo que desea deshabilitar.",
      completed: "El módulo **{module}** se ha deshabilitado correctamente."
    },
    lang: {
      noArgs_1: "Debes especificar el idioma que desea establecer.",
      invalid_language: "El idiomas que has seleccionado no es válido. Más información **[aquí]({link})**.",
      completed: "Has establecido el idioma de Filo a **{language}**."
    },
    prefix: {
      noArgs_1: "Debes especificar el nuevo prefijo que desea establecer.",
      completed: "Has establecido el prefijo de Filo como **{prefix}**."
    },
    guild: {
      noArgs_1: "Debes especificar lo que desea configurar.",
      invite: {
        noArgs_2: "Debes especificar el canal para crear la invitación.",
        completed: "Ha creado la invitación **{invite}** en el canal {channel}."
      }
    },
    role: {
      noArgs_1: "Debes especificar lo que desea configurar.",
      noArgs_2: "Debes especificar el rol que desea establecer.",
      invalid_role: "El rol que especificó lo gestiona una integración.",
      error_perms_role: "La jerarquía del rol mencionado es mayor o igual que la de Filo.",
      completed: "Has establecido el rol {role} para el módulo **{module}**."
    },
    channel: {
      noArgs_1: "Debes especificar lo que desea configurar.",
      noArgs_2: "Debes especificar el canal para configurarlo.",
      invalid_channel: "El canal que ha seleccionado no es apto para esta configuración.",
      completed: "Has establecido el canal {channel} para el módulo **{module}**."
    },
    message: {
      noArgs_1: "Debes especificar el módulo que desea configurar.",
      noArgs_2: "Debes especificar el mensaje que desea configurar.",
      question_title: "¿Estás seguro de que deseas configurar este mensaje?",
      completed: "Ha establecido un nuevo mensaje para el módulo **{module}**.",
      type: {
        completed: "Has establecido el tipo de mensaje **{type}** para el módulo **{module}**."
      }
    },
    counter: {
      noArgs_1: "Debes especificar la opción que desea configurar.",
      noArgs_2: "Debes especificar qué contador de miembros desea establecer.",
      noArgs_3: "Debes especificar el canal para configurarlo.",
      invalid_channel: "El canal que ha seleccionado no es apto para esta configuración.",
      completed: "Ha configurado el canal **{channel}** para el contador **{counter}**.",
      name: {
        noArgs_1: "Debes especificar el contador al que desea cambiar el nombre.",
        noArgs_2: "Debes especificar la variable **{members}** donde desea que aparezca el número de miembros del contador.",
        question_title: "¿Estás seguro de que quieres establecer ese nombre para ese contador?",
        completed: "Cambiaste el nombre del canal de contador **{counter}** a **{name}**."
      },
      nick: {
        noArgs_1: "Debes especificar el apodo que desea establecer.",
        noArgs_2: "Debes especificar la variable **{members}** donde desea que aparezca el número de miembros del contador.",
        question_title: "¿Estás seguro de que quieres establecer este apodo?",
        completed: "Ha establecido el apodo **{nick}** para el contador de miembros."
      }
    },
    anti_invites: {
      noArgs_1: "Debes especificar la acción que desea llevar a cabo.",
      add: {
        noArgs_1: "Debes especificar la ID del servidor que desea incluir en la lista blanca.",
        already_set: "La ID que especificó ya está en la lista blanca.",
        completed: "Ha agregado el servidor con ID **{server_id}** a la lista blanca."
      },
      remove: {
        noArgs_1: "Debes especificar la ID del servidor que desea eliminar de la lista blanca.",
        not_found: "La ID que especificó no está en la lista blanca.",
        completed: "Debes eliminar el servidor con ID **{server_id}** de la lista blanca."
      }
    },
    auto_mod: {
      noArgs_1: "Debes especificar qué opción desea configurar.",
      noArgs_2: "Debes especificar el nivel que desea configurar.",
      noArgs_3: "Debes especificar el número máximo de advertencias que debe alcanzar un usuario para alcanzar ese nivel.",
      invalid_number: "El número que ha indicado no es válido.",
      completed: "Ha configurado **{warnings}** advertencias para alcanzar el nivel **{level}**.",
      action: {
        noArgs_1: "Debes especificar el nivel que desea configurar.",
        noArgs_2: "Debes especificar la acción que desea realizar cuando alcance ese nivel.",
        completed: "Has establecido la sanción **{action}** para el nivel **{level}**."
      },
      time: {
        noArgs_1: "Debes especificar el nivel que desea configurar.",
        noArgs_2: "Debes especificar el tiempo de la sanción.",
        limit_time: "El tiempo de la sanción no puede exceder **{time}**.",
        minimum_time: "El tiempo mínimo de la sanción debe ser mayor que **{time}**.",
        completed: "Has establecido **{time}** para expirar la sanción del nivel **{level}**."
      }
    },
    anti_evasion: {
      noArgs_1: "Debes especificar qué opción desea configurar.",
      action: {
        noArgs_2: "Debes especificar la acción que quieres llevar a cabo cuando alguien intente evadir una sanción",
        completed: "Has establecido la acción **{action}**."
      },
      time: {
        noArgs_2: "Debes especificar la duración de la sanción.",
        limit_time: "El tiempo de la sanción no puede exceder **{time}**.",
        minimum_time: "El tiempo mínimo de la sanción debe ser mayor que **{time}**.",
        completed: "Has establecido **{time}** para que expire la sanción."
      }
    },
    anti_spam: {
      noArgs_0: "Debes especificar la acción que deseas realizar.",
      bots: {
        noArgs_1: "Debes especificar si quieres activar o desactivar la inmunidad para los bots.",
        enabled: "activado",
        disabled: "desactivado",
        completed: "Has **{action}** la inmunidad para los bots."
      },
      channel: {
        noArgs_1: "Debes especificar la acción que deseas realizar.",
        add: {
          noArgs_2: "Debes especificar el canal que quieres añadir a la lista blanca.",
          already_set: "El canal que has especificado ya se encuentra en la lista blanca.",
          completed: "Has añadido el canal {channel} a la lista blanca."
        },
        remove: {
          noArgs_2: "Debes especificar el canal que quieres eliminar de la lista blanca.",
          unknown_set: "El canal que has especificado no se encuentra en la lista blanca.",
          completed: "Has eliminado el canal {channel} de la lista blanca."
        }
      },
      role: {
        noArgs_1: "Debes especificar la acción que deseas realizar.",
        add: {
          noArgs_2: "Debes especificar el rol que quieres añadir a la lista blanca.",
          already_set: "El rol que has especificado ya se encuentra en la lista blanca.",
          completed: "Has añadido el rol {role} a la lista blanca."
        },
        remove: {
          noArgs_2: "Debes especificar el rol que quieres eliminar a la lista blanca.",
          unknown_set: "El rol que has especificado no se encuentra en la lista blanca.",
          completed: "Has eliminado el rol {role} a la lista blanca."
        }
      },
      rules: {
        noArgs_1: "Debes especificar la acción que deseas realizar.",
        duplicates: {
          noArgs_2: "Debes especificar el número máximo de mensajes similares que puede enviar un usuario.",
          noArgs_3: "Debes especificar el tiempo en segundos que debe transcurrir para considerar los mensajes duplicados como spam.",
          completed: "Has establecido que se pueden enviar **{messages}** mensajes similares cada **{seconds}** segundos."
        }
      }
    },
    anti_mass_mentions: {
      noArgs_1: "Debes especificar el número máximo de menciones permitidas.",
      completed: "Has establecido **{number}** menciones como máximo para considerarse menciones masivas."
    },
    commands: {
      noArgs_0: "Debes especificar la acción que deseas realizar.",
      invalid_args: "La acción especificada no es válida",
      enable: {
        noArgs_1: "Debe especificar el comando que desea habilitar.",
        invalid_command: "El comando especificado es inválido",
        no_exist: "El comando que has especificado no se encuentra deshabilitado.",
        completed: "El comando **{command}** ha sido habilitado correctamente."
      },
      disable: {
        noArgs_1: "You must specify the command you want to disable.",
        invalid_command: "El comando especificado es inválido",
        no_exist: "El comando que has especificado no se encuentra habilitado.",
        privileged_command: "El comando **{command}** se encuentra en una categoría protegida y no puede ser deshabilitado.",
        completed: "El comando **{command}** ha sido deshabilitado correctamente."
      },
    },
    anti_bad_words: {
      add: {
        noArgs_1: "Debes especificar la palabra que quieres añadir.",
        args_limit: "La palabra que has especificado supera los **{limit}** caracteres de longitud.",
        already_exist: "La palabra **{word}** ya se encuentra añadida en la lista.",
        completed: "Has añadido la palabra **{word}** a la lista."
      },
      remove: {
        noArgs_1: "Debes especificar la palabra que quieres eliminar.",
        args_limit: "La palabra que has especificado supera los **{limit}** caracteres de longitud.",
        unknown_word: "La palabra **{word}** no se encuentra en la lista.",
        completed: "Has eliminado la palabra **{word}** a la lista."
      }
    },
    reset: {
      question_title: "¿Está seguro de que desea restablecer todas las configuraciones del servidor?",
      completed: "Has restablecido todas las configuraciones del servidor."
    },
    view: {
      description: "Si necesitas ayuda, consulte **[nuestra wiki]({link})** y si no puede entenderla, no dudes en **[contactarnos]({link_2})**.",
      module: "Módulo",
      module_status: "Estado del módulo",
      current_language: "Idioma actual",
      supported_languages_title: "Idiomas compatibles",
      supported_languages_description: "Obtén una lista completa de los idiomas soportados por Filo haciendo **[clic aquí]({link})**.",
      current_prefix: "Prefijo actual",
      server_invite: "Invitación del servidor",
      reporting_channel: "Canal de reportes",
      cooldown: "Cooldown",
      administrator_role: "Rol de administrador",
      welcome_channel: "Canal de bienvenidas",
      welcome_role: "Rol de bienvenida",
      welcome_message: "Mensaje de bienvenida",
      limit_embed: "Demasiado largo como para mostrarlo.",
      all_counter: "Contador de miembros totales",
      all_counter_name: "Nombre del contador de miembros totales",
      nick_counter: "Apodo de miembros totales",
      farewells_channel: "Canal de despedidas",
      farewells_message: "Mensaje de despedida",
      logging_channel: "Canal de registros",
      whitelist: "Lista blanca",
      level: "Nivel",
      action: "Acción",
      time: "Tiempo",
      embed_title: "Viendo las configuraciones del servidor",
      bots_inmunity: "Inmunidad para los bots",
      duplicates_messages: "Mensajes duplicados",
      anti_mass_mentions_allowed: "Menciones masivas permitidas",
      channels_whitelist: "Lista blanca de canales",
      roles_whitelist: "Lista blanca de roles",
      message_type: "Tipo de mensaje",
      embed_color: "Color del embed",
      disabled_commands: "Comandos deshabilitados",
      disable_commands: {
        no_commands_disabled: "No hay comandos deshabilitados"
      },
      bad_words: "Palabras malas",
      anti_bad_words: {
        no_words: "No hay ninguna palabra mala en la lista."
      },
      modules_title: {
        languages: "Idioma",
        prefix: "Prefijo",
        server: "Servidor",
        reports: "Reportes",
        welcomes: "Bienvenidas",
        membercounter: "Contador de miembros",
        farewells: "Despedidas",
        logs: "Registros",
        anti_invites: "Anti Invitaciones",
        auto_mod: "Auto-Mod",
        anti_evasion: "Anti Evasión",
        anti_spam: "Anti Spam",
        anti_mass_mentions: "Anti Menciones Masivas",
        anti_repeated_text: "Anti Texto Repetido",
        disable_commands: "Deshabilitar comandos",
        anti_bad_words: "Anti Malas Palabras"
      }
    },
    embed_title: "Menú de ayuda rápida",
    embed_description: "Con este comando puede configurar algunos aspectos de Filo, incluido su idioma, prefijo, módulos, etc.",
    warn_args: "(No incluya <> al ejecutar cualquier comando)",
    wiki: "Wiki de Filo",
    discord: "Discord de Filo",
    module_title: "Módulo",
    command: "Comando",
    question_enable: "¿Cómo habilitar un módulo?",
    question_disable: "¿Cómo deshabilitar un módulo?",
    question_command_enable: "¿Como habilitar un comando?",
    question_command_disable: "¿Como deshabilitar un comando?",
    question_language: "¿Cómo cambiar el idioma?",
    language_title: "Idioma",
    question_prefix: "¿Cómo cambiar el prefijo?",
    prefix_title: "Prefijo",
    auto_mod_modules: "Módulo de moderación automática",
    anti_invites_title: "Anti Invitaciones",
    auto_mod_title: "Auto Moderación",
    anti_evasion_title: "Anti Evasión",
    anti_spam_title: "Anti Spam",
    anti_mass_mentions_title: "Anti Menciones Masivas",
    anti_repeated_text_title: "Anti Texto Repetido",
    anti_bad_words_title: "Anti Malas Palabras",
    welcomes_farewells_modules: "Módulo de bienvenidas y despedidas",
    welcomes_title: "Bienvenidas",
    farewells_title: "Despedidas",
    welcome_role_title: "Rol de bienvenida",
    reports_modules: "Módulo de reportes",
    reports_title: "Reportes",
    logs_membercounter_modules: "Módulo de registros y contador de miembros",
    logs_title: "Registros",
    membercounter_title: "Contador de miembros",
    help: "Ayuda"
  },
  "confused": {
    completed: "¡{user} está confundido!"
  },
  "convert": {
    noArgs: "Debes pegar la URL del video que desea convertir a MP3.",
    error_domain: "La URL que has introducido no es válida.",
    loading: "Por favor espera mientras se procesa el vídeo solicitado.",
    error: "Se produjo un error al intentar procesar este vídeo.",
    max_size: "El vídeo que has indicado excede los **{limit}** minutos.",
    discord_limit: "El archivo no se pudo subir porque excede el límite de subida de Discord.",
    completed_title: "Resultados de la conversión a MP3",
    completed_description: "La conversión del vídeo **[{title}]({link})** se ha completado correctamente. Puedes descargar el archivo **[aquí]({link_2})**.",
    cooldown: "Por favor espera **{minutes}** minutos, **{seconds}** segundos para poder convertir otro vídeo."
  },
  "cookie": {
    completed: "¡{user} le ha dado una cookie a {user_2}!",
    noValid: "No puedes darte a ti mismo una cookie."
  },
  "covid": {
    error_api: "Se produjo un error al intentar contactar con la API.",
    info: {
      completed_title: "Viendo información relevante del coronavirus",
      completed_description: "El COVID-19 es una enfermedad infecciosa causada por un nuevo virus que no había sido detectado en humanos hasta la fecha.\nSe detectó por primera vez en la ciudad china de Wuhan (provincia de Hubei) en diciembre de 2019.​ Habiendo llegado a más de 100 territorios, el 11 de marzo de 2020 la Organización Mundial de la Salud la declaró pandemia.",
      question: "¿Tienes algunos de estos síntomas?",
      runny_nose: "Secreciones nasales",
      sore_throat: "Dolor de garganta",
      cough: "Tos",
      fever: "Fiebre",
      breathing: "Dificultad para respirar (en casos graves)",
      more_info: "Más información acerca del coronavirus **[aquí]({link})**.",
      warning: "**ADVERTENCIA**: En el caso de que tengas fiebre, tos y dificultad para respirar, debes buscar atención médica.",
      prevent_title: "¿Cómo se puede prevenir el coronavirus?",
      prevent_one: "Lávese las manos regularmente con agua y jabón o con un desinfectante para manos a base de alcohol.",
      prevent_two: "Cubrirse la nariz y la boca al toser y estornudar con un pañuelo desechable o el interior del codo.",
      prevent_three: "Evitar el contacto directo (1 metro o 3 pies) con cualquier persona con síntomas de resfriado o gripe.",
      last_update: "**ADVERTENCIA**: A día de hoy no existe ninguna vacuna contra el coronavirus (Última actualización: {date})."
    },
    search: {
      completed_title: "Viendo información relacionada del coronavirus en **{country}**",
      total_cases: "Casos totales",
      total_deaths: "Muertes totales",
      total_recovered: "Recuperados totales",
      active_cases: "Casos activos",
      new_cases: "Nuevos casos",
      new_deaths: "Nuevas muertes",
      averange: "Promedio por 1 millón de población",
      averange_description: "**{number}** de cada **1** millón.",
      important_title: "Información importante sobre el coronavirus",
      important_description: "Usa el comando **{command}** para obtener más información acerca del coronavirus."
    },
    total_cases: "Casos totales",
    total_deaths: "Muertes totales",
    total_recovered: "Recuperados totales",
    active_cases: "Casos activos",
    not_found: "Ningún otro país ha reportado tener casos de coronavirus.",
    important_title: "Información importante sobre el coronavirus",
    important_description: "Usa el comando **{command}** para obtener más información acerca del coronavirus.",
    completed_title: "Viendo información referente al coronavirus a nivel mundial"
  },
  "credits": {
    completed: "{user} tiene **{credits}** {emoji} créditos en el banco."
  },
  "cry": {
    completed: "¡{user} se siente triste!"
  },
  "csgo": {
    noArgs: "Debes especificar el nombre del jugador para ver sus estadísticas.",
    loading: "Por favor espera mientras se recopila la información de la API de estadísticas.",
    noPlayerFound: "El jugador que has mencionado no existe o no está registrado en las páginas de estadísticas.",
    completed_title: "Viendo las estadísticas de **{player}**",
    ign: "IGN",
    uuid: "UUID",
    general_stats: "Estadísticas generales",
    kills: "Asesinatos",
    melee_kills: "Asesinatos cuerpo a cuerpo",
    deaths: "Muertes",
    headshots: "Disparos a cabeza",
    wins: "Ganadas",
    mvp: "MVP",
    round_played: "Rondas jugadas",
    total_damage: "Daño total inflingido",
    planted_bombs: "Bombas plantadas",
    desactivated_bombs: "Bombas desactivadas",
    hostage_extraction: "Extracciones del rehén",
    kills_statistics: "Estadísticas de asesinatos",
    he_grenades: "Granadas HE",
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
    enemy_weapons: "Armas enemigas",
    fired_bullets: "Estadísticas de balas disparadas",
    successful_bullets: "Estadísticas de balas impactadas"
  },
  "cuddle": {
    noArgs: "Debes @Mencionar a otra persona para abrazarle.",
    noAuthor: "No puedes abrazarte tu solo.",
    noCuddle: "Lo siento, no puedo dejar que hagas eso {emoji}",
    completed: "¡{user} abraza a {user_2}!"
  },
  "daily": {
    completed: "**{user}**, ¡has recibido tus **{credits}** {emoji} créditos diarios!",
    completed_2: "{user}, ¡has recibido **{credits}** {emoji} créditos diarios de {user_2}!",
    cooldown: "{user}, ¡podrás reclamar tus {emoji} créditos diarios en **{hours} horas**, **{minutes} minutos**, **{seconds} segundos**."
  },
  "dance": {
    completed: "¡{user} empezó a bailar!"
  },
  "drake": {
    noArgs: "Debes @Mencionar a una persona para hacer el meme.",
    invalidMention: "No puedes hacer el drake a ti mismo, debes mencionar a otra persona.",
    invalidAvatar: "No se ha podido encontrar un avatar válido."
  },
  "ecotop": {
    completed_title: "Viendo el TOP millonarios de Discord",
    no_one_has_come: "¡Nadie ha llegado!",
    credits: "créditos"
  },
  "emoji": {
    noArgs: "Debes introducir el nombre o la ID de un emojis.",
    loading: "Por favor espera mientras busco el emoji especificado.",
    error_search: "No se han encontrado resultados para el emoji **{search}**.",
    completed_title: "Resultados para la búsqueda \"**{search}**\"",
    name: "Nombre del emoji",
    id: "ID del emoji",
    type: "Tipo de emoji",
    normal: "Normal",
    animated: "Animado"
  },
  "emojis": {
    noEmojisFound: "No hay ningún emoji disponible en el servidor.",
    max_emojis_limit: "Hay demasiados emojis en el servidor como para mostrarlos.",
    completed_title: "Viendo los emojis del servidor"
  },
  "esay": {
    noArgs: "Debes especificar el mensaje que quieres enviar.",
    example: "¡Hola a todos!"
  },
  "expand": {
    noArgs: "Debes introducir el enlace que quieres expandir.",
    expand_error: "Se produjo un error al intentar expandir ese enlace.",
    loading: "Espere mientras se envía la solicitud de expansión de la URL.",
    completed_title: "Resultados de la expansión de la url",
    shortened_url: "URL acortada",
    original_url: "URL original"
  },
  "feed": {
    completed: "¡{user} le da de comer a {user2}!",
    noAuthor: "No puedes darte de comer a ti mismo."
  },
  "fish": {
    enough_money: "No tienes suficientes {emoji} créditos para poder pagar el anzuelo.",
    completed: "Has lanzado el anzuelo, pero desafortunadamente no has pescado nada y has tenido que pagar **{credits}** {emoji} créditos por tu intento. Tienes ahora **{balance}** {emoji} créditos.",
    completed_2: "Has lanzado el anzuelo, y... ¡has pescado uno! Has ganado **{reward}** {emoji} créditos y has tenido que pagar **{credits}** {emoji} créditos por tu intento. Tienes ahora **{balance}** {emoji} créditos."
  },
  "floor": {
    completed: "¡El suelo es lava!"
  },
  "fortnite": {
    noArgs: "Debes especificar la plataforma para ver las estadísticas de un jugador.",
    noArgs_2: "Debes especificar el nombre del jugador para ver sus estadísticas.",
    invalidPlatform: "La plataforma que has escrito no es válida, por favor escriba una plataforma válida ({platforms}).",
    loading: "Por favor espera mientras se recopila la información de la API de estadísticas.",
    noPlayerFound: "El jugador que has mencionado no existe o no está registrado en las páginas de estadísticas.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    completed_title: "Viendo las estadísticas de **{player}** en **{platform}**",
    ign: "IGN",
    uuid: "UUID",
    kills: "Asesinatos",
    general_stats: "Estadísticas generales",
    kd: "K/D",
    wins: "Ganadas",
    wins_percent: "Porcentaje de partidas ganadas",
    played: "Jugadas",
    total_score: "Puntuación total",
    recent_stats: "Estadísticas recientes",
    time_played: "Tiempo jugado",
    players_alive: "Jugadores que quedaron con vida"
  },
  "fortnitestore": {
    loading: "Por favor espera mientras se obtienen los datos de la API.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    completed_title: "Viendo un artículo aleatorio de la tienda de Fortnite",
    name: "Nombre",
    rarity: "Rareza",
    vbucks: "vBucks"
  },
  "fuck": {
    noArgs: "Debes @Mencionar a una persona para poder follar.",
    noAuthor: "No puedes follarte a ti mismo.",
    noFuck: "¿Qué intentas hacerme? ばか！",
    completed: "¡{user} se folló a {user2}!"
  },
  "giphy": {
    noArgs: "Debes especificar el gif que quieres buscar.",
    loading: "Espera mientras se recopila la información de la API.",
    error_api: "Se produjo un error inesperado al intentar contactar con la API.",
    notFound: "No se ha podido encontrar ningún resultado para la búsqueda especificada.",
    completed_title: "Resultados para la búsqueda \"**{search}**\""
  },
  "giveaway": {
    example: "¡Sorteo súper kawaii!",
    invalidTime: "El tiempo que has introducido no es válido.",
    noArgs_0: "Debes especificar la acción que quieres llevar a cabo {options}.",
    noArgs: "Debes especificar el número de ganadores posibles del sorteo.",
    noArgs_2: "Debes especificar el premio del sorteo.",
    invalidWinners: "El número de posibles ganadores que has especificado no es válido.",
    giveaway: "SORTEO",
    giveaway_ended: "SORTEO FINALIZADO",
    timeRemaining: "Tiempo restante: **{duration}**.",
    inviteToParticipate: "¡Reacciona con {emoji} para participar!",
    winMessage: "¡Felicidades, {winners}! ¡Has ganado **{prize}**!",
    noWinner: "El sorteo ha sido cancelado debido a que no hay ninguna participación válida.",
    hostedBy: "Alojada por: {user}",
    winners: "ganador(es)",
    create: {
      noArgs: "Debes especificar el tiempo que quieres que dure el sorteo."
    },
    reroll: {
      noArgs: "Debes especificar la ID del sorteo, que generalmente es la ID del mensaje.",
      completed: "¡Nuevo ganador(es): {winners}! ¡Felicidades!",
      error: "No hay ninguna participación válida, por lo que no se puede llevar a cabo el reroll.",
      error_id: "No se ha podido encontrar ningún sorteo con la ID **{giveaway_id}**."
    },
    edit: {
      noArgs: "Debes especificar la ID del sorteo, que generalmente es la ID del mensaje.",
      noArgs_2: "Debes especificar el tiempo que quieres que dure el sorteo.",
      completed: "Has editado el sorteo correctamente.",
      error: "No se encontró ningún sorteo activo con la ID especificada."
    }
  },
  "greet": {
    noArgs: "Debes @Mencionar a la persona que quieres saludar.",
    noAuthor: "No puedes saludarte a ti mismo.",
    completed: "¡{user} saluda a {user_2}!"
  },
  "happy": {
    completed: "¡{user} está feliz!"
  },
  "help": {
    completed_title: "Lista completa de los comandos de Filo",
    completed_description: "Mi prefijo en **{guild}** es **{prefix}**.",
    administration: "Administración",
    animals: "Animales",
    anime: "Anime",
    core: "Core",
    fun: "Diversión",
    economy: "Economía",
    game_stats: "Estadísticas en juegos",
    interaction: "Interacción",
    games: "Juegos",
    minecraft: "Minecraft",
    miscellaneous: "Misceláneos",
    moderation: "Moderación",
    reaction: "Reacción",
    server: "Servidor",
    social: "Social",
    nsfw: {
      nsfw_title: "NSFW",
      nsfw_description: "Debes estar en un canal **NSFW** para poder ver estos comandos."
    },
    restricted: "Restringidos",
    question_title: "¿En este servidor no se habla {lang}?",
    question_description: "De ser así, puedes cambiar el idioma de Filo usando el comando **{command}**.\nPuedes obtener una lista completa de los idiomas soportados de Filo **[aquí]({link})** o usando el comando **{command_2}**."
  },
  "history": {
    noArgs: "Debes @Mencionar a una persona para ver su historial.",
    completed_title: "Viendo el historial de advertencias de **{user}**",
    noWarns: "El usuario que has especificado no tiene ninguna advertencia.",
    warnings: "Hace {time}",
    warnings_2: "{reason}. Por: {staff}",
    fields_limit: "El mensaje excede **{limit}** campos, pero puedes consultarlo **[aquí]({link})**."
  },
  "hot": {
    completed: "¡{user} tiene una terrible calor!"
  },
  "hug": {
    completed: "{user} abraza amigablemente a {user_2}.",
    noHug: "No puedes darte un abrazo a ti mismo."
  },
  "info": {
    footer: "Sirviendo servidores de Discord desde 2019"
  },
  "jojo": {
    completed: "¡{user} posa como un jojo!"
  },
  "joke": {
    joke_0: "**¿Por qué las focas del circo miran siempre hacia arriba?**\nPorque es donde están los focos.",
  	joke_1: "**¡Estás obsesionado con la comida!**\nNo sé a que te refieres croquetamente.",
  	joke_2: "**¿Por qué estás hablando con esas zapatillas?**\nPorque pone “converse“.",
  	joke_3: "**¿Sabes cómo se queda un mago después de comer?**\nMagordito.",
  	joke_4: "**Me da un café con leche corto.**\nSe me ha roto la máquina, cambio.",
  	joke_5: "**Buenos días, me gustaría alquilar “Batman Foreveri“.**\nNo es posible, tiene que devolverla tomorrow.",
  	joke_6: "**¡Camarero! Este filete tiene muchos nervios.**\nNormal, es la primera vez que se lo comen.",
  	joke_7: "**¿Qué le dice un techo a otro?**\nTecho de menos.",
  	joke_8: "**Buenos días, quería una camiseta de un personaje inspirador.**\n¿Ghandi?\nNo, mediani.",
  	joke_9: "**Hola, ¿está Agustín?**\nNo, estoy incomodín.",
  	joke_10: "**¿Cuál es la fruta más divertida?**\nLa naranja ja ja ja ja",
  	joke_11: "**¿Dónde cuelga Superman su supercapa?**\nEn superchero",
  	joke_12: "**¿Qué le dice una iguana a su hermana gemela?**\nSomos iguanitas",
  	joke_13: "**Buenos días. Busco trabajo.**\n¿Le interesa de jardinero?\n¿Dejar dinero? ¡Si lo que busco es trabajo!",
  	joke_14: "**Abuelo, ¿por qué estás delante del ordenador con los ojos cerrados?**\nEs que Windows me ha dicho que cierre las pestañas.",
  	joke_15: "**¡Me acaba de picar una serpiente!**\n¿Cobra?\n¡No, idiota, lo ha hecho gratis!",
  	joke_16: "**¿Qué es un pez en un cine?**\nUn mero espectador",
  	joke_17: "**Hola, soy paraguayo y quiero pedirle la mano de su hija para casarme con ella.**\n¿Para qué?\nParaguayo.",
  	joke_18: "**¿Para que van una caja al gimnasio?**\nPara hacerse caja fuerte.",
  	joke_19: "**Esto es un hombre que entra en un bar de pinchos y dice:**\nAy, ay, ay, ay.",
  	joke_20: "**¿Por qué se suicidó el libro de matemáticas?**\nPorque tenía muchos problemas.",
  },
  "kick": {
    noArgs: "Debes @Mencionar a la persona que quieres expulsar.",
    kick: "expulsado",
    completed_title: "Expulsado del servidor **{guild}**",
    kick_id: "ID de la expulsión",
    server_invite: "Invitación del servidor"
  },
  "kickbutts": {
    noArgs: "Debes @Mencionar a una persona para darle una patada.",
    noAuthor: "No puedes darte una patada a ti mismo.",
    noFilo: "Por favor no me patees, ¡me vas a hacer daño! {emoji}",
    completed: "¡{user} patea a {user_2}!"
  },
  "kiss": {
    noArgs: "Debes @Mencionar a una persona para besar.",
    noAuthor: "No puedes darte un beso a ti mismo.",
    noFilo: "Lo siento pero mi corazón le pertenece a otra persona.",
    completed: "¡{user} besa a {user_2}!"
  },
  "lang": {
    completed_title: "Viendo el idioma del servidor",
    completed_description: "Actualmente en **{guild}** se está usando el idioma **{lang}**.",
    languages_title: "Languages compatible with Filo",
    question_title: "¿En este servidor no se habla {lang}?",
    question_description: "De ser así, puedes cambiar el idioma de Filo usando el comando **{command}**.\nPuedes obtener una lista completa de los idiomas soportados de Filo **[aquí]({link})** o usando el comando **{command_2}**."
  },
  "langs": {
    completed_title: "Lista de idiomas del traductor",
    language: "Idioma",
    code: "Código"
  },
  "laugh": {
    completed: "¡{user} se pone a reir descontroladamente!",
    completed_2: "¡{user} se ríe de sí mismo!",
    completed_3: "¡{user} hace reír descontroladamente a {user_2}!"
  },
  "like": {
    completed: "¡{user} da su aprobado!"
  },
  "love": {
    noArgs: "Tienes que @Mencionar a otra persona para generar la imagen de cariño.",
    loading: "Espera mientras se genera una súper imagen kawaii.",
    invalidAvatar: "El usuario que has mencionado no tiene un avatar válido.",
    error_api: "Se produjo un error al intentar contactar con la API."
  },
  "lyrics": {
    noArgs: "Debes introducir el nombre de la canción que deseas buscar.",
    invalidSong: "No se ha podido encontrar ninguna lírica para los argumentos introducidos.",
    completed_title: "Viendo la lírica de la canción **{song}**",
    completed_title_secondary: "Viendo la lírica de una canción",
    message_limit: "La lírica excede los **{limit}** caracteres, pero puedes consultarla **[aquí]({link})**."
  },
  "manga": {
    noArgs: "Debes escribir el nombre del manga que quieres consultar.",
    loading: "Por favor espera mientras obtengo los datos del manga solicitado.",
    noData: "No se han podido encontrar resultados para el manga **{search}**.",
    status_type: {
      publishing: "En publicación",
      finished: "Finalizado",
      unreleased: "Sin estrenar"
    },
    unknown_date: "Fecha desconocida",
    genres: "Géneros",
    unknown_genres: "Género desconocido",
    status: "Estado",
    unknown_status: "Estado desconocido",
    type: "Tipo",
    popularity: "Popularidad",
    ratings: "Valoraciones",
    chapters: "Capítulos",
    start_date: "Fecha de la primera publicación",
    main_characters: "Personajes principales",
    support_characters: "Personajes de apoyo"
  },
  "masturbate": {
    completed: "¡{user} se masturba pensando en sí mismo",
    completed_2: "¡{user} se masturba pensando en {user2}!",
    noMasturbate: "¿Qué intentas hacerme? ばか！"
  },
  "mcbanner": {
    noArgs: "Debes escribir la dirección IP del servidor que deseas comprobar."
  },
  "mcbody": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo el cuerpo de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcbust": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo el busto de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcface": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo la cara de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcfront": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo el frente de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcfrontbody": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo el frente de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mchead": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo la cabeza de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcskin": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed_title: "Viendo la skin de **{user}**",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcuuid": {
    noArgs: "Debes escribir el nick de algún jugador premium.",
    error_api: "Se produjo un error al intentar obtener la información de **{user}**.",
    completed: "La uuid del jugador **{user}** es **{uuid}**.",
    error_player: "El jugador que mencionaste no es premium."
  },
  "mcserver": {
    noArgs: "Debes escribir la dirección IP del servidor que deseas comprobar.",
    loading: "Por favor espera mientras obtengo la información de la API.",
    error_api: "Se produjo un error inesperado al intentar contactar con la API.",
    server_offline: "El servidor especificado no está en línea.",
    too_long: "Demasiado largo como para mostrarlo",
    invalid_port: "El puerto que has especificado no es válido.",
    completed_title: "Viendo el estado del servidor **{server}**",
    ip: "IP",
    port: "Puerto",
    players: "Jugadores",
    version: "Versión",
    motd: "Motd"
  },
  "members": {
    loading: "Por favor espere mientras reviso la lista de miembros.",
    completed_title: "Viendo la lista de miembros del servidor",
    total_members: "Miembros totales",
    humans: "Humanos",
    robots: "Robots"
  },
  "meme": {
    error_api: "Se produjo un error inesperado al intentar contactar con la API."
  },
  "minesweeper": {
    loading: "Por favor espera mientras se genera el tablero del buscaminas.",
    completed_title: "Buscaminas",
    error_game: "Se produjo un error al intentar generar el tablero de juego.",
    question_title: "¿Cómo se juega al buscaminas?",
    question_description: "Este tablero de juego está basado en \"spoilers\", por lo que sólo tendrás que hacer clic en uno de ellos y pasarlo bien."
  },
  "morse": {
    completed_title: "Traductor de código morse",
    hastebin_completed: "El mensaje excede los **{limit}** caracteres, pero puedes consultarlo **[aquí]({link})**.",
    encode: {
      noArgs: "Debes escribir una palabra o texto para traducirlo a morse."
    },
    decode: {
      noArgs: "Debes escribir una palabra o texto en morse para traducirlo a texto.",
      error_translator: "El código morse que has introducido no es válido."
    }
  },
  "mute": {
    noArgs: "Debes @Mencionar a la persona que quieres silenciar.",
    bellowRole: "Mi rol está por debajo del rol **{role}**.",
    invalid_role: "El rol {role} está administrado por una integración.",
    notification_title: "Silenciado permanentemente del servidor **{guild}**",
    permanently_muted: "silenciado permanentemente",
    mute_id: "ID del silencio",
    already_muted: "El usuario que has mencionado ya se encuentra silenciado."
  },
  "nick": {
    noArgs: "Debes mencionar a la persona para cambiar su apodo en el servidor.",
    noArgs_2: "Debes escribir el apodo nuevo que quieres establecerle a esa persona.",
    completed: "Has cambiado el apodo de {user} a **{nickname}**."
  },
  "nsfw": {
    noArgs: "Debes especificar si quieres activar el modo NSFW o si quieres desactivarlo (true/false).",
    completed: "Has **{action}** correctamente el modo **NSFW** en el canal {channel}.",
    activated: "activado",
    deactivated: "desactivado"
  },
  "osu": {
    noArgs: "Debes especificar el nombre del jugador para ver sus estadísticas.",
    loading: "Por favor espera mientras se recopila la información de la API de estadísticas.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    error_player: "El jugador que has mencionado no existe o no está registrado en las páginas de estadísticas.",
    completed_title: "Viendo las estadísticas de **{player}**",
    ign: "IGN",
    uuid: "UUID",
    level: "Nivel",
    player_country: "País del jugador",
    registration_date: "Fecha de registro",
    accuracy: "Precisión",
    time_played: "Tiempo jugado",
    ranking_stats: "Estadísticas de clasificación",
    ranked_score: "Puntuación de rango",
    total_score: "Puntuación total",
    game_stats: "Estadísticas de partidas",
    games_with_hits: "Partidas con {hits} hits",
    games_played: "Partidas jugadas",
    pp_stats: "Estadísticas de puntos de rendimiento",
    rank: "Rango",
    raw: "Raw",
    rank_player_country: "Rango en el país del jugador"
  },
  "owoify": {
    noArgs: "Debes escribir el texto que quiere owoificar.",
    error_api: "Se produjo un error al intentar contactar con la API."
  },
  "pat": {
    completed: "¡{user} acaricia a {user_2}!",
    noAuthor: "No puedes acariciarte a ti mismo."
  },
  "pay": {
    noArgs: "Debes @Mencionar a la persona que quieres pagar.",
    noArgs_2: "Debes escribir la cantidad de dinero que quieres pagar.",
    noAuthor: "No puedes pagarte a ti mismo.",
    noFilo: "Agradezco que quieras pagarme **{credits}** {emoji} créditos, pero lamentablemente mis desarrolladores no me permiten aceptar dinero de otros.",
    noMoney: "No tienes **{credits}** {emoji} créditos para pagar a {user}.",
    completed: "Has pagado **{credits}** {emoji} créditos a {user}."
  },
  "pin": {
    noArgs: "Debes especificar la ID del mensajes que quieres fijar.",
    maximumMessages: "There cannot be more than **{limit}** fixed messages per channel.",
    completed: "El mensaje **{message_id}** ha sido fijado en el canal {channel}.",
    error_pin: "Se produjo un error cuando se intentó fijar el mensaje **{message_id}**."
  },
  "ping": {
    loading: "Por favor espera mientras se realiza la prueba de latencia.",
    completed_title: "Viendo los resultados de la prueba de latencia",
    client_latency: "Latencia del cliente",
    message_latency: "Latencia del mensaje"
  },
  "poke": {
    noArgs: "Debes @Mencionar a la persona que quieres molestar.",
    noAuthor: "No te puedes molestar a ti mismo.",
    completed: "¡{user} molesta a {user_2}!"
  },
  "poll": {
    noArgs: "Debes escribir una breve explicación para la encuesta.",
    example: "¿Qué te parece este magnífico comando?",
    completed_title: "Encuesta"
  },
  "pout": {
    completed: "¡{user} pone mala cara!"
  },
  "profile": {
    completed_title: "Viendo el perfil de **{user}**",
    name: "Nombre",
    nickname: "Apodo",
    badges: "Insignias",
    no_badges: "Sin insignias",
    registration_date: "Fecha de registro",
    join_date: "Fecha de unión",
    credits: "Créditos",
    reputation: "Reputación",
    server_booster: "Mejorador del servidor",
    roles: "Roles ({roles})",
    error_profile: "Se produjo un error al intentar cargar la información de este perfil."
  },
  "pubg": {
    noArgs: "Debes introducir el tipo de plataforma para consultar las estadísticas.",
    noArgs_2: "Debes introducir el nombre de algún jugador para consultar sus estadísticas.",
    invalidPlatform: "La plataforma que has introducido no coinciden con las del juego {platforms}.",
    loading: "Por favor espera mientras se recopila la información de la API de estadísticas.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    error_player: "El jugador que has mencionado no existe o no está registrado en las páginas de estadísticas.",
    completed_title: "Viendo las estadísticas de **{player}** en **{platform}**",
    ign: "IGN",
    uuid: "UUID",
    best_rank_point: "Mejor punto de rango",
    season: "Temporada",
    daily_stats: "Estadísticas diarias",
    solo_kills: "Asesinatos en solitario",
    duo_kills: "Asesinatos en dúo",
    squad_kills: "Asesinatos en equipo",
    solo_wins: "Partidas ganadas en solitario",
    duo_wins: "Partidas ganadas en dúo",
    squad_wins: "Partidas ganadas en equipo",
    solo_stats: "Estadísticas en solitario",
    duo_stats: "Estadísticas en dúo",
    squad_stats: "Estadísticas en equipo",
    kills: "Asesinatos",
    kill_streak: "Racha de asesinatos",
    headshots: "Disparos a cabeza",
    assists: "Asistencias",
    longest_kill: "Asesinatos lejanos",
    road_kills: "Atropellos",
    suicides: "Suicidios",
    revives: "Reanimaciones",
    walk_distance: "Distancia caminada",
    wins: "Ganadas",
    losses: "Perdidas",
    games_played: "Partidas jugadas"
  },
  "punch": {
    noArgs: "Debes @Mencionar a la persona a la que quieres pegar.",
    noAuthor: "No te puedes pegar a ti mismo.",
    noFilo: "Por favor no me pegues, ¡me vas a hacer daño! {emoji}",
    completed: "¡{user} pega a {user_2}!"
  },
  "r6": {
    noArgs: "Debes especificar la plataforma para ver las estadísticas de un jugador.",
    noArgs_2: "Debes especificar el nombre del jugador para ver sus estadísticas.",
    invalidPlatform: "La plataforma que has escrito no es válida, por favor escriba una plataforma válida ({platforms}).",
    error_api: "Se produjo un error al intentar contactar con la API.",
    loading: "Por favor espera mientras se recopila la información de la API de estadísticas.",
    error_player: "El jugador que has mencionado no existe o no está registrado en las páginas de estadísticas.",
    completed_title: "Viendo las estadísticas de **{player}** en **{platform}**",
    ign: "IGN",
    uuid: "UUID",
    level: "Nivel",
    alpha_pack: "Probabilidad de Alpha pack",
    total_experience: "Experiencia total",
    general_stats: "Estadísticas generales",
    kills: "Asesinatos",
    melee_kills: "Asesinatos cuerpo a cuerpo",
    headshots: "Disparos a cabeza",
    penetration_kills: "Asesinatos a traves de una pared",
    blind_kills: "Asesinatos con cegadoras",
    assists: "Asistencias",
    deaths: "Muertes",
    kd: "K/D",
    suicides: "Suicidios",
    injured: "Herido",
    revives: "Reanimados",
    wins: "Ganadas",
    draws: "Empates",
    losses: "Perdidas",
    games_played: "Partidas jugadas",
    wl: "W/L",
    time_played: "Tiempo jugado",
    bullets_fired: "Balas disparadas",
    bullets_hit: "Balas impactadas",
    gadgets_destroyed: "Gadgets destruidos",
    rappel: "Rápel estilo FBI",
    barricades_deployed: "Barricadas colocadas",
    reinforcements_deployed: "Refuerzos colocados",
    casual_stats: "Estadísticas en partidas rápidas",
    ranked_stats: "Estadísticas en partidas igualadas",
    rank: "Rango",
    mmr: "MMR",
    other_stats: "Otras estadísticas",
    ranks: {
      unranked: "Sin clasificar",
      copper_V: "Cobre V",
      copper_IV: "Cobre IV",
      copper_III: "Cobre III",
      copper_II: "Cobre II",
      copper_I: "Cobre I",
      bronze_V: "Bronce V",
      bronze_IV: "Bronce IV",
      bronze_III: "Bronce III",
      bronze_II: "Bronce II",
      silver_IV: "Bronce I",
      silver_V: "Plata V",
      silver_IV: "Plata IV",
      silver_III: "Plata III",
      silver_II: "Plata II",
      silver_I: "Plata I",
      gold_IV: "Oro IV",
      gold_III: "Oro III",
      gold_II: "Oro II",
      gold_I: "Oro I",
      Platinum_III: "Platino III",
      Platinum_II: "Platino II",
      Platinum_I: "Platino I",
      diamond: "Diamante",
      champion: "Campeón"
    }
  },
  "r6status": {
    loading: "Espere mientras se recopila la información de estado de la API.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    completed_title: "Viendo el estado de los servidores de **{game}**",
    completed_description: "Puedes obtener más información del estado de los servidores haciendo **[clic aquí]({link})**.",
    status: {
      online: "En línea",
      degraded: "Degradado",
      maintenance: "Mantenimiento"
    }
  },
  "randomnumber": {
    completed_title: "Número aleatorio"
  },
  "randomuser": {
    completed_title: "Usuario aleatorio"
  },
  "removerole": {
    noArgs: "Debes @Mencionar a la persona a la que quieres quitarle un rol.",
    noArgs_2: "Debes escribir el nombre del rol que quieres quitarle a esa persona.",
    invalid_role: "El rol {role} está administrado por una integración.",
    noRole: "{user} no tiene asignado el rol {role}.",
    bellowRole: "Mis roles están por debajo del rol {role}.",
    completed: "Le has quitado el rol {role} a {user} correctamente."
  },
  "rep": {
    noArgs: "Debes @Mencionar a la persona que quieres otorgar un punto de reputación.",
    noAuthor: "No puedes darte un punto de reputación a ti mismo.",
    completed: "¡{user} le ha dado a {user_2} un {emoji} punto de reputación!",
    cooldown: "{user}, debes esperar **{hours} horas**, **{minutes} minutos**, **{seconds} segundos** para poder otorgar otro {emoji} punto de reputación."
  },
  "report": {
    noArgs: "Debes @Mencionar a la persona que quieres reportar.",
    noArgs_2: "Debes explicar una razón para el reporte.",
    noAuthor: "No puedes reportarte a ti mismo.",
    completed: "Has reportado a {user} correctamente.",
    report_id: "ID del reporte",
    reason: "Razón",
    author: "Autor",
    reported_member: "Miembro reportado",
    completed_title: "Información del reporte #**{report_id}**"
  },
  "reps": {
    completed: "{user} tiene actualmente **{reputation}** {emoji} puntos de reputación."
  },
  "reversecard": {
    noArgs: "Debes @Mencionar a otra persona para poder usar la carta invertida.",
    noAuthor: "No puedes utilizar la carta invertida contigo mismo.",
    completed: "¡{user} usa la carta invertida contra {user_2}!"
  },
  "role": {
    noArgs: "Debes escribir el nombre de algún rol para obtener su información.",
    noRoleFound: "No he podido encontrar la información del rol **{role}**.",
    completed_title: "Información del rol **{role}**",
    role: "Rol",
    name: "Nombre",
    id: "ID",
    members: "Miembros",
    color: "Color",
    position: "Posición",
    extra: "Extra",
    hoist: "Separado",
    mentionable: "Mencionable",
    integration_role: "Rol de integración",
    permissions: "Permisos ({permissions_bitfield})"
  },
  "run": {
    completed: "¡{user} corre rápido!"
  },
  "say": {
    noArgs: "Debes escribir el mensajes que quieres enviar."
  },
  "scared": {
    completed: "¡{user} tiene miedo!"
  },
  "server": {
    moderation: {
      none: "Ninguno",
      low: "Bajo (Debes haber verificado el correo electrónico en la cuenta)",
      medium: "Medio (Debes estar registrado en Discord por más de 5 minutos)",
      high: "(╯°□°）╯︵ ┻━┻ (Debes ser miembro del servidor durante más de 10 minutos)",
      very_high: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻ (Debes tener un número de teléfono verificado)"
    },
    filter: {
      disabled: "Desactivado",
      members_without_roles: "Activado (miembros sin rol)",
      all_members: "Activado para todos"
    },
    mfa: {
      disabled: "Desactivado",
      enabled: "Activado"
    },
    notifications: {
      mentions: "Solo @menciones",
      all: "Todos los mensajes"
    },
    regions: {
      brazil: "Brasil",
  	  central_europe: "Europa Central",
  	  eastern_europe: "Europa del Este",
  	  west_europe: "Europa Occidental",
  	  hong_kong: "Hong Kong",
  	  japan: "Japón",
  	  russia: "Rusia",
  	  singapore: "Singapur",
  	  south_africa: "Sudáfrica",
  	  sydney: "Sydney",
      us_central: "Estados Unidos Central",
      us_east: "Estados Unidos Oriental",
      us_south: "Estados Unidos del Sur",
      us_west: "Estados Unidos Occidental",
      europe: "Europa",
      india: "India",
      south_korea: "Corea del Sur",
      dubai: "Dubái",
      amsterdam: "Ámsterdam",
      frankfurt: "Frankfurt",
    },
    not_set: "No establecido",
    level: "Nivel",
    guild_id: "ID del servidor",
    owner: "Propietario",
    boost: "Mejora",
    boosts: "{number} mejoras",
    region: "Región",
    creation_date: "Fecha de creación",
    perks: "Ventajas",
    moderation_level: "Nivel de moderación",
    any: "Ninguna",
    default_notifications: "Notificaciones predeterminadas",
    mfa_level: "Autenticación en dos pasos",
    filter_level: "Filtro de contenido explícito",
    channels: "Canales",
    system_channel: "Canal del sistema",
    rules_channel: "Canal de reglas",
    discord_announcements_channel: "Canal de anuncios de Discord",
    afk_channel: "Canal AFK",
    afk_timeout: "Tiempo de espera para AFK",
    members: "Miembros",
    maximum: "Máx",
    roles: "Roles",
    vanity_url: {
      stats: "Estadísticas de la URL personalizada",
      code: "Código",
      uses: "Usos"
    }
  },
  "serverinvite": {
    responsible: "Responsable: {user}",
    completed: "Has generado correctamente una invitación permanente para el canal {channel}."
  },
  "shard": {
    status_type: {
      online: "Conectado",
      offline: "Desconectado"
    },
    completed_title: "Viendo las estadísticas del shard #**{shard_id}**",
    status: "Estado",
    latency: "Latencia",
    version: "Versión",
    connection_time: "Tiempo de conexión",
    guilds: "Servidor",
    users: "Usuarios",
    channels: "Canales"
  },
  "shorten": {
    noArgs: "Debes especificar el enlace que quieres acortar.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    error_shorten: "Se produjo un error al intentar acortar el enlace: {error}.",
    completed: "Has acortado el link **{original_url}** correctamente.",
    original_url: "Enlace original",
    shortened_url: "Enlace acortado"
  },
  "sick": {
    completed: "¡{user} está enfermo!"
  },
  "sing": {
    completed: "¡{user} se pone a cantar!"
  },
  "slap": {
    noArgs: "Debes @Mencionar a la persona que quieres abofetear.",
    noAuthor: "No te puedes abofetear a ti mismo.",
    noFilo: "Por favor no me abofetees, me vas a hacer daño {emoji}",
    completed: "¡{user} abofetea a {user_2}!"
  },
  "sleep": {
    completed: "¡{user} se duerme!"
  },
  "slots": {
    noArgs: "Debes especificar la cantidad de créditos que quieres apostar para jugar.",
    enough_money: "No tienes suficientes {emoji} créditos para apostar.",
    completed_title: "Tragamonedas",
    completed_win: "{user} ha pagado {credits} {emoji} créditos y ha **ganado** {credits_2} {emoji_2} créditos.",
    completed_lost: "{user} ha pagado {credits} {emoji} créditos y ha **perdido** {credits_2} {emoji_2} créditos."
  },
  "slowmode": {
    noArgs: "Debes introducir el número de segundos de tiempo de recuperación.",
    max: "No puedes establecer un slowmode superior a **{max}** horas.",
    min: "No puedes establecer un slowmode inferior a **{min}** segundos.",
    completed: "Has establecido un slowmode de **{time}** segundos al canal {channel}."
  },
  "smug": {
    completed: "¡{user} está presumiendo!"
  },
  "softban": {
    noArgs: "Debes @Mencionar a la persona que quieres banear.",
    softbanned: "baneado suavemente",
    author: "Autor",
    ban_id: "ID del baneo",
    notification: {
      completed_title: "Baneado suavemente del servidor **{guild}**",
      server_invite: "Invitación del servidor"
    }
  },
  "stats": {
    completed_title: "Estadíticas de Filo",
    ram: "RAM",
    latency: "Latencia",
    cluster: "Clúster",
    guilds: "Servidores",
    users: "Usuarios",
    channels: "Canales",
    commands: "Comandos",
    version: "Versión de Filo",
    executed_commands: "Comandos ejecutados",
    library: "Librería",
    library_version: "Versión de la librería",
    node_version: "Versión de Node",
    votes: "Votos en la página {number}",
    total_votes: "Votos totales",
    connection_time: "Tiempo de conexión"
  },
  "suck": {
    noArgs: "Debes @Mencionar a otra persona para chuparle el pene.",
    noAuthor: "No puedes chuparte el pene a ti mismo.",
    completed: "¡{user} le chupa el pene a {user_2}!"
  },
  "suggest": {
    noArgs: "Debes explicar detalladamente la sugerencia que quieres realizar.",
    example: "Agrega más comandos divertidos",
    confirm: {
      title: "¿Estás seguro de que quieres enviar esta sugerencia al equipo de desarrollo de Filo?",
      description: "**ADVERTENCIA**: Ten en cuenta que un mal uso intencionado de este comando puede conllevar una violación de los **[términos y condiciones de Filo]({link})**.",
      description_2: "Si quieres enviarlo haz clic en ✅, de lo contrario haz clic en ❎."
    },
    reason: "Explicación de la sugerencia",
    cancel: "La acción pendiente ha sido cancelada.",
    completed: "Has enviado la sugerencia #**{suggest_id}** correctamente."
  },
  "support": {
    completed_title: "Soporte de Filo",
    completed_description: "¿Necesitas de nuestra ayuda? ¡No te preocupes! A continuación puedes ver varios métodos de ayuda que nosotros brindamos.",
    server: "Servidor de Filo",
    documentation: "Documentación de Filo",
    twitter: "Twitter de Filo",
    email: "Correo de soporte de Filo"
  },
  teehee: {
    completed: "¡{user} se ríe con una risita tonta!"
  },
  "tempban": {
    noArgs: "Debes @Mencionar a la persona que deseas banear.",
    noArgs_2: "Debes especificar la duración del ban.",
    minimum_time: "El tiempo mínimo de la sanción no puede ser inferior a **{time}**.",
    limit_time: "El tiempo máximo de la sanción no puede exceder **{time}**.",
    notification_title: "Baneado Temporalmente del servidor **{guild}**",
    temporarily_banned: "baneado temporalmente",
    ban_id: "ID del baneo",
    time: "Tiempo",
    already_banned: "El usuario que has mencionado ya se encuentra baneado."
  },
  "tempmute": {
    noArgs: "Debes @Mencionar a la persona que quieres silenciar.",
    noArgs_2: "Debes especificar el tiempo para silenciar temporalmente a esta persona.",
    invalid_role: "El rol {role} está administrado por una integración.",
    bellowRole: "Mis roles están por debajo del rol **{role}**.",
    limit_time: "El tiempo de la sanción no puede exceder **{time}**.",
    minimum_time: "El tiempo mínimo de la sanción debe ser mayor que **{time}**.",
    temporarily_muted: "silenciado temporalmente",
    notification: {
      title: "Silenciado temporalmente del servidor **{guild}**",
    },
    mute_id: "ID del silencio",
    time: "Tiempo",
    already_muted: "El usuario que has mencionado ya se encuentra silenciado."
  },
  "think": {
    completed: "¡{user} está pensando!",
  },
  "tickle": {
    completed: "¡{user} hace cosquillas a {user_2}!",
    noAuthor: "No puedes hacerte cosquillas a ti mismo."
  },
  "translate": {
    noArgs: "Debes escribir el código de lenguaje al cual quieres traducir el texto, si no sabes cuales son los códigos usa el comando **{command}**.",
    noArgs_2: "Debes escribir el mensaje que quieres traducir.",
    error_translate: "Se produjo un error al intentar traducir el texto.",
    completed_title: "Traductor"
  },
  "unban": {
    noArgs: "Debes escribir la ID de la persona que a la que quieres desbanear.",
    user_not_banned: "La ID de la persona que especificaste no se encuentra baneada del servidor.",
    completed: "{user} ha sido desbaneado del servidor correctamente."
  },
  "unmute": {
    noArgs: "Debes @Mencionar o escribir la ID de la persona a la que quieres desmutear.",
    no_role_exist: "El rol **{role}** no existe en el servidor.",
    invalid_role: "El rol {role} está administrado por una integración.",
    user_not_muted: "{user} no se encuentra silenciado.",
    bellowRole: "Mis roles están por debajo del rol **{role}**.",
    unmuted: "desmuteado",
    notification: {
      title: "Desmuteado del servidor **{guild}**"
    }
  },
  "unpin": {
    noArgs: "Debes especificar la ID del mensajes que quieres desfijar.",
    completed: "El mensaje **{message_id}** ha sido desfijado del canal {channel}.",
    error_unpin: "Se produjo un error al intentar desfijar el mensaje **{message_id}**."
  },
  "urban": {
    noArgs: "Debes escribir una palabra en inglés para buscarla en el diccionario urbano.",
    error_urban: "No se ha podido encontrar esta palabra en el diccionario urbano.",
    completed_title: "Definición de **{word}**",
    votes: "Votos de la definición"
  },
  "votes": {
    completed_title: "Viendo los votos de Filo",
    page: "Página {number}",
    total_votes: "Votos totales",
    question: {
      title: "¿Sabías que puedes obtener recompensas por votar?",
      description: "Puedes obtener algunas recompensas si **[votas diariamente](link)** por Filo y si te encuentras en nuestro **[servidor de soporte]({link_2})**."
    }
  },
  "warn": {
    noArgs: "Debes @Mencionar a la persona que quieres advertir.",
    noArgs_2: "Debes especificar una razón para advertir a una persona.",
    notification: {
      title: "Advertido del servidor **{guild}**"
    },
    warned: "advertido",
    warn_id: "ID de la advertencia"
  },
  "weather": {
    noArgs: "Debes introducir el nombre del lugar para comprobar su tiempo meteorológico.",
    error_country: "No se han encontrado resultados para los argumentos especificados.",
    error_api: "Se produjo un error al intentar contactar con la API.",
    completed_title: "Viendo el pronóstico meteorológico de **{location}**",
    latitude: "Latitud",
    longitude: "Longitud",
    time_zone: "Zona horaria",
    alert: "Alertas",
    unknown_alerts: "No hay alertas disponibles",
    temperature: "Temperatura",
    weather: "Tiempo actual",
    environment: "Ambiente",
    humidity: "Humedad",
    wind: "Viento"
  }
};
