import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('voidAPI', {
  version: '1.0.0',
  platform: process.platform
})
