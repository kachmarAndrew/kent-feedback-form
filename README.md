# KENT — форма зворотного зв'язку

Лабораторна робота №9: адаптивна форма з валідацією на стороні клієнта (HTML5 + Tailwind CSS + JavaScript).

- Поля: ім'я, пошта, телефон (+380XXXXXXXXX), повідомлення (10–500 символів), згода
- Перевірка: regex, динамічна (input/blur/submit), стани normal / focus / error / success
- Модальне вікно успіху (Esc, клік по фону, фокус), `aria-*` атрибути
- Серверної частини немає — відправка симулюється

## Структура

```
index.html
assets/css/styles.css   (зібраний Tailwind)
assets/js/validation.js
tailwind.config.js, tailwind.input.css
```

## Збірка CSS

```
npx tailwindcss@3.4.17 -i tailwind.input.css -o assets/css/styles.css --minify
```
