import axios from 'axios'

export async function listServices() {
  // lee el json estático empaquetado por Vite (ruta relativa)
  const res = await axios.get('/services.json')
  return res.data.map(s => ({ ...s, baseUrl: `http://${s.host}:${s.port}` }))
}

export async function callService(service){
  const url = `${service.baseUrl}${service.path}`
  const isPost = service.path.includes('predict') || service.path.includes('run') || service.path.includes('query') || service.path.includes('/api/')
  if (isPost) {
    const sampleBody = { text: "sample request from portfolio frontend" }
    const res = await axios.post(url, sampleBody, { timeout: 15000 })
    return res.data
  } else {
    const res = await axios.get(url, { timeout: 15000 })
    return res.data
  }
}
