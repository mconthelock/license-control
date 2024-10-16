# Start Tailwind

- npx tailwindcss -i ./assets/style/tailwind.css -o ./assets/dist/css/tailwind.css --watch
- npx tailwindcss -i ./assets/style/datatable.css -o ./assets/dist/css/datatable.min.css --minify --watch
- npx tailwindcss -i ./assets/style/calendar.css -o ./assets/dist/css/calendar.min.css --minify --watch
- npx webpack --watch

# Element

| Type          | Class     | Ex.        |
| ------------- | --------- | ---------- |
| Main Button   | Primary   |            |
| Second Button | Secondary |            |
| Foregrand     | base-200  | Card/Table |
| Border        | base-200  |            |

# Color

| Name      | Ligth   | Dark    | Used                       |
| --------- | ------- | ------- | -------------------------- |
| primary   | #2563eb | #111827 | Use with side bar/ button/ |
| secondary | #60a5fa | #d1d5db | Footer                     |
| base-100  | #0A0E1A | #F0F6FF | Body Background            |
| base-200  |         | #020817 | Boder-color                |
| base-300  |         | #F0F6FF | Boder-color                |
| accent    | #d97706 | #d97706 | Navbar                     |
| neutral   | #6b7280 | #d1d5db | Text                       |

# Standard Class

| Type       | Class      |
| ---------- | ---------- |
| Shadows    | shadow-sm  |
| Card Round | rounded-lg |
