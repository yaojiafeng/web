| 异常类型 | 同步方法 | 异步方法 | 资源加载 | Promise | async/await |
| :-----| ----: | ----: |-----:| ----: | :----: |
| try catch | yes | no | no | no | no |
| window.onerror | yes | yes | no | no | no |
| window.addEventListener('error',() => {}） | yes | yes | yes | no | no |
| window.addEventListener('unhandledrejection',() => {}） | no | no | no | yes | yes |
