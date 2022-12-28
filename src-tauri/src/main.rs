#![cfg_attr(
all(not(debug_assertions), target_os = "macos"),
windows_subsystem = "windows"
)]

use std::error::Error;

use tauri::{App, Manager, Wry};

mod menu;
mod cmd;


fn main() {
  let builder = tauri::Builder::default();

  builder
    .setup(set_app)
    .menu(menu::setup_menu())
    .on_menu_event(menu::setup_menu_event)
    .invoke_handler(tauri::generate_handler![cmd::invoke])
    .invoke_handler(tauri::generate_handler!(cmd::read_hosts))
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

fn set_app(app: &mut App<Wry>) -> Result<(), Box<dyn Error>> {
  let _win = app.get_window("main").unwrap();
  return Ok(());
}
