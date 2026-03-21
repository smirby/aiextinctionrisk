# Hugo development server
# Usage:
#   docker build -t hugo-site .
#   docker run -p 1313:1313 -v $(pwd):/site hugo-site
#
# Then visit http://localhost:1313

FROM hugomods/hugo:exts-0.142.0

WORKDIR /site
EXPOSE 1313

CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL", "http://localhost:1313/", "--disableFastRender"]
