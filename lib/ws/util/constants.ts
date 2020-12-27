export enum EventType {
  IDENTIFY_CLIENT = 0,
  LAUNCH_CLIENT = 1,
  READY_CLIENT = 2,
  RECONNECT_CLIENT = 3,
  RESTART_CLIENT = 4,
  SEND_STATS = 5,
  LOAD_MODULE = 6,
  BROADCAST_EVAL = 7,
  ADMIN_ACTION = 8,
  SETTINGS_SYNC = 9,
  BLACKLIST_SYNC = 10,
  SK1ER_SPECS = 11,
  RELOAD_EXPERIMENTS = 12,
  APPLY_EXPERIMENT = 13,
  REMINDER_SEND = 14,
  REMINDER_CREATE = 15,
  REMINDER_DELETE = 16,
  CROSS_CLUSTER_QUOTE = 17,
  PREMIUM_SYNC = 18,
}

export enum WebsocketStates {
  CONNECTING = 0,
  CONNECTED = 1,
  CLOSING = 2,
  CLOSED = 3,
  RECONNECTING = 4,
  IDLE = 5,
}
