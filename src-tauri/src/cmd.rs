// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

use std::{
    fs::{File, OpenOptions},
    io::Read,
};

use tauri::{Manager, Runtime, Window, WindowBuilder};

#[tauri::command]
pub fn invoke() {}

#[tauri::command]
pub async fn read_hosts<R: Runtime>(
    app: tauri::AppHandle<R>,
    window: tauri::Window<R>,
) -> Result<String, ()> {
    let mut file = match File::open("/etc/hosts") {
        Ok(file) => file,
        Err(error) => {
            println!("Error opening file: {}", error.to_string());
            panic!("{}", error)
        }
    };

    // 创建一个缓冲区来存储文件内容
    let mut contents = String::new();
    file.read_to_string(&mut contents);

    return Ok(contents.to_string());
}
