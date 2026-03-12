
```shell
npm --prefix streamlit_elements_fluence/frontend run build
python3 setup.py sdist
```

``shell
cd streamlit_elements_fluence/frontend && PATH="/Users/username/.nvm/versions/node/v18.20.8/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/homebrew/bin" npm run build 2>&1 | /usr/bin/tail -5