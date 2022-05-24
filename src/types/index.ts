export interface Menu {
  id: string
  url: string
  name: string
  childList: Array<Menu>
}
