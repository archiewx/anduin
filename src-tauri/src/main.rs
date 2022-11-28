#![cfg_attr(
    all(not(debug_assertions), target_os = "macos"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) {
    println!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .menu(Menu::with_items([
            MenuItem::SelectAll.into(),
            #[cfg(target_os = "macos")]
            MenuItem::Redo.into(),
            CustomMenuItem::new("toggle", "Toggle visibility").into(),
            Submenu::new("View", Menu::new()).into(),
        ]))
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
