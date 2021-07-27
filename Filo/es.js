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
  MISSING_USER_PERMISSION: "Este error se debe a que no tienes el permiso [``{{permission}}``]({{url}}).",
  MISSING_USER_PERMISSION_2: "No tienes permisos para realizar esta acción con **{{user}}** ({{user.id}}).",

  INVALID_MEMBER: "El miembro que has especificado es inválido.",
  UNKNOWN_MEMBER: "El miembro que has especificado no existe o no está en el servidor.",
  INVALID_ROLE: "El rol que has especificado es inválido.",
  UNKNOWN_ROLE: "El rol que has especificado no existe.",
  MANAGED_ROLE: "El rol que has especificado está gestionado por una integración.",
  MEMBER_ALREADY_HAS_THE_ROLE: "**{{user}}** ({{user.id}}) ya tiene el rol {{role}} asignado."
};

exports.AUDIT_LOGS = {
  RESPONSIBLE: "Responsable: {{user}} ({{user.id}})",
  RESPONSIBLE_WITH_REASON: "Responsable: {{user}} ({{user.id}}). Razón: {{reason}}",
  DEFAULT_REASONS: {
    ROLE_VIA: "Rol {{action}} vía {{method}}."
  }
};

exports.GENERAL = {
  EXAMPLE: "Ejemplo",
  ADDED: "Añadido",
  COMMAND: "Comando"
};

exports.COMMANDS = {
  ADDROLE: {
    MISSING_MEMBER: "Debes @Mencionar al miembro para añadirle un rol.",
    MISSING_ROLE: "Debes especificar el rol que quieres añadir.",
    COMPLETED: "Has añadido el rol {{role}} a **{{user}}** ({{user.id}})."
  }
};
