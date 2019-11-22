# react-redux-tree-shake

Quickly set up three create-react-apps using different flavors of react-redux.

## Usage

`./01_create_projects.sh`

- Yarn must be installed.

## What is it?

It creates 3 new `create-react-app`s, installs `redux` and `react-redux` to
them. Then, it installs a basic TODO example using redux to each app. They
are all slightly different:

- **connect-only** : Only uses `connect`.
- **hooks-only** : Only uses `useDispatch` and `useSelector`.
- **connect-hooks** : Uses `connect`, `useDispatch`, and `useSelector`.

Then, it runs 'yarn build' in each app to make a production bundle, and shows
the main chunk files of each one.

## Results 2019-11-22

I manually tested all 3 todo apps in the browser to make sure they are working
properly.

```
-rw-r--r-- 1 mmr mmr 153944 Nov 22 11:10 ./connect-hooks/build/static/js/2.9dadb9e5.chunk.js
-rw-r--r-- 1 mmr mmr   3160 Nov 22 11:10 ./connect-hooks/build/static/js/main.a2a2045f.chunk.js
-rw-r--r-- 1 mmr mmr 152932 Nov 22 11:10 ./connect-only/build/static/js/2.23e675ec.chunk.js
-rw-r--r-- 1 mmr mmr   3065 Nov 22 11:10 ./connect-only/build/static/js/main.80a214a9.chunk.js
-rw-r--r-- 1 mmr mmr 153215 Nov 22 11:10 ./hooks-only/build/static/js/2.5d240681.chunk.js
-rw-r--r-- 1 mmr mmr   3242 Nov 22 11:10 ./hooks-only/build/static/js/main.ede5f68b.chunk.js
```

Note the hook implementation is slightly different (check the folllowing hook
only files). I have not inspected the chunk files to see what the real differences are.

## Hook only files

- hooks/containers/VisibleTodoList.js
- hooks/containers/FilterLink.js
- hooks/containers/AddTodo.js
