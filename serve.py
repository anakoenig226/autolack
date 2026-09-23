import http.server, socketserver, os, posixpath
class H(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        p = self.translate_path(self.path.split('?')[0])
        if not os.path.exists(p) and '.' not in posixpath.basename(self.path.split('?')[0]):
            self.path = '/index.html'
        return super().do_GET()
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", 8787), H) as s:
    s.serve_forever()
