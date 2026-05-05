const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || "0.0.0.0";
const DIST_DIR = path.join(__dirname, "dist");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(res, filePath, method) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType =
    MIME_TYPES[extension] || "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });

  if (method === "HEAD") {
    res.end();
    return;
  }

  fs.createReadStream(filePath).pipe(res);
}

function sendError(res, statusCode, message) {
  res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
}

async function resolveFilePath(requestPath) {
  const relativePath = requestPath === "/" ? "index.html" : requestPath.slice(1);
  const safePath = path.normalize(relativePath).replace(/^(\.\.[/\\])+/, "");
  const candidate = path.resolve(DIST_DIR, safePath);

  if (!candidate.startsWith(DIST_DIR)) {
    return null;
  }

  try {
    const stat = await fs.promises.stat(candidate);
    if (stat.isFile()) {
      return candidate;
    }
  } catch (_) {
    // Fall through to SPA fallback.
  }

  if (!path.extname(safePath)) {
    return path.join(DIST_DIR, "index.html");
  }

  return null;
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendError(res, 400, "Bad Request");
    return;
  }

  if (!["GET", "HEAD"].includes(req.method || "GET")) {
    sendError(res, 405, "Method Not Allowed");
    return;
  }

  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    const filePath = await resolveFilePath(requestUrl.pathname);

    if (!filePath) {
      sendError(res, 404, "Not Found");
      return;
    }

    sendFile(res, filePath, req.method || "GET");
  } catch (error) {
    console.error("Failed to serve request", error);
    sendError(res, 500, "Internal Server Error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
