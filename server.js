const { createServer } = require("http")
const { readFileSync, existsSync } = require("fs")
const { join, extname } = require("path")

const PORT = process.env.PORT || 3000
const BASE = join(__dirname, "out")

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
}

createServer((req, res) => {
  let path = req.url === "/" ? "/index.html" : req.url.split("?")[0]

  if (!extname(path)) path += ".html"

  const filePath = join(BASE, path).replace(/\\/g, "/")

  try {
    if (!existsSync(filePath)) {
      const indexPath = join(BASE, path.replace(/\/[^/]*$/, "") + "/index.html")
      if (existsSync(indexPath)) {
        const content = readFileSync(indexPath)
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(content)
        return
      }
    }

    const content = readFileSync(filePath)
    const ext = extname(filePath)
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" })
    res.end(content)
  } catch {
    res.writeHead(503, { "Content-Type": "text/html; charset=utf-8" })
    res.end("<h1>503 - Service Unavailable</h1><p>Erro ao carregar a página.</p>")
  }
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
