use tauri::{CustomMenuItem, Manager, Menu, Submenu, WindowMenuEvent, Wry};

pub fn setup_menu() -> Menu {
  // let dev_menu = CustomMenuItem::new("devtools", "DevTools");

  // let sub_menu = Submenu::new("Develop", Menu::new().add_item(dev_menu));

  let menu = Menu::os_default("macos");

  menu
}

pub fn setup_menu_event(event: WindowMenuEvent<Wry>) {
  match event.menu_item_id() {
    "devtools" => {
      let win = event.window().get_window("main").unwrap();
      if win.is_devtools_open() {
        win.close_devtools()
      } else {
        win.open_devtools()
      }
    }
    _ => {}
  }
}
