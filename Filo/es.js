exports.LANGUAGE = {
  CODE: "es",
  STANDARD_CODE: "es-ES",
  FULL_CODE: "español",
  WIKI_CODE: "es",
  CONTRIBUTORS: ["iLxlo_"],
};

exports.ERROR_MESSAGES = {
  SOMETHING_WENT_WRONG: "Algo salió mal al intentar ejecutar esa acción",
  GENERIC_DESCRIPTION: "**[Contáctanos]({{url}})** para obtener más instrucciones sobre lo que sucedió.",
  ERROR_ID: "ID del error: {{error_id}}",
  ALTERNATIVE_PERMISSION: "Permiso alternativo",
  ALTERNATIVE_PERMISSIONS: "Permisos alternativos",
  MISSING_CLIENT_PERMISSION: "Este error se debe a que no tengo el permiso [``{{permission}}``]({{url}}).",
  MISSING_USER_PERMISSION: "Este error se debe a que no tienes el permiso ``{{permission}}``.",
  MISSING_USER_PERMISSION_2: "No tienes permisos para realizar esta acción con **{{user}}** ({{user.id}}).",
  INVALID_USER: "El usuario que has especificado es inválido.",
  UNKNOWN_USER: "El usuario que has especificado no existe o no está en el servidor.",
  INVALID_ROLE: "El rol que has especificado es inválido.",
  UNKNOWN_ROLE: "El rol que has especificado no existe.",
  MANAGED_ROLE: "El rol que has especificado está gestionado por una integración.",
  USER_ALREADY_HAS_THE_ROLE: "**{{user}}** ({{user.id}}) ya tiene el rol {{role}} asignado.",
  USER_ALREADY_HAS_THAT_NICKNAME: "**{{user}}** ({{user.id}}) ya tiene ese apodo establecido.",
  INVALID_NUMBER: "El número que has especificado es inválido.",
  MAX_NUMBER_REACHED: "El número que has especificado es mayor de **{{number}}**.",
  MIN_NUMBER_REACHED: "El número que has especificado es menor de **{{number}}**.",
  MAX_ARGUMENT_REACHED: "Los argumentos que has especificado exceden los **{{number}}** caracteres de longitud.",
  MIN_ARGUMENT_REACHED: "Los argumentos que has especificado son inferiores a **{{number}}** caracteres de longitud.",//here
  INVALID_CHANNEL: "El canal que has especificado es inválido.",
  UNKNOWN_CHANNEL: "El canal que has especificado no existe.",
  INVALID_CHANNEL_TYPE: "Esta acción no admite el tipo del canal que has especificado. ({{valid_types}})"
};

exports.AUDIT_LOGS = {
  RESPONSIBLE: "Responsable: {{user}} ({{user.id}})",
  RESPONSIBLE_WITH_REASON: "Responsable: {{user}} ({{user.id}}). Razón: {{reason}}",
  DEFAULT_REASONS: {
    ROLE_VIA: "Rol {{action}} vía {{method}}."
  }
};

exports.TIME = {
  SECOND: "Segundo",
  SECONDS: "Segundos",
  MINUTE: "Minuto",
  MINUTES: "Minutos",
  HOUR: "Hora",
  HOURS: "Horas",
  DAY: "Día",
  DAYS: "Días",
  WEEK: "Semana",
  WEEKS: "Semanas",
  MONTH: "Mes",
  MONTHS: "Meses",
  YEAR: "Año",
  YEARS: "Años"
};

exports.GENERAL = {
  EXAMPLE: "Ejemplo",
  ADDED: "Añadido",
  COMMAND: "Comando",
  OR: "O",
  COOLDOWN: "Debes esperar **{{time}}** para poder ejecutar esta acción."
};

exports.COMMANDS = {
  ADDROLE: {
    MISSING_USER: "Debes @Mencionar al usuario para añadirle un rol.",
    MISSING_ROLE: "Debes especificar el rol que quieres añadir.",
    COMPLETED: "Has añadido el rol {{role}} a **{{user}}** ({{user.id}})."
  },
  CLEAR: {
    MISSING_NUMBER_OF_MESSAGES: "Debes especificar el número de mensajes que quieres purgar.",
    COMPLETED: "Has purgado **{{number}}** mensajes del canal {{channel}}."
  },
  NICKNAME: {
    MISSING_USER: "Debes @Mencionar al usuario para cambiar el apodo.",
    MISSING_NICKNAME: "Debes especificar el apodo que quieres establecer.",
    COMPLETED: "Has establecido el apodo de **{{user}}** ({{user.id}}) por **{{nickname}}**."
  }
};
