# Deploys the build to production on jacobmai.com.
REMOTE="jacoboxs@jacobmai.com:~/public_html"
PORT=21098
scp -P $PORT build/asset-manifest.json $REMOTE
scp -P $PORT build/index.html $REMOTE
scp -P $PORT build/service-worker.js $REMOTE
scp -P $PORT build/favicon.ico $REMOTE
scp -P $PORT build/favicon.jpg $REMOTE
scp -P $PORT build/manifest.json $REMOTE
scp -P $PORT build/static/css/* ${REMOTE}/static/css/
scp -P $PORT build/static/js/* ${REMOTE}/static/js/
scp -P $PORT build/static/media/* ${REMOTE}/static/media/
