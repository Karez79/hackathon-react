# Hackathon React - Team Portfolio 🚀

Сайт-портфолио команды из 6 разработчиков с использованием **FSD (Feature-Sliced Design)** архитектуры.

## 🛠 Технологический стек

- **React 18** - основной фреймворк
- **Vite** - сборщик и dev-сервер
- **SCSS** - стили (без модулей)
- **React Router DOM** - роутинг
- **PropTypes** - типизация
- **FSD Architecture** - архитектура проекта

## 🚀 Быстрый старт

# 1. Клонировать репозиторий
git clone https://github.com/Karez79/hackathon-react.git
cd hackathon-react

# 2. Установить зависимости
npm install

# 3. Запустить dev сервер
npm run dev

# 4. Открыть http://localhost:5173/hackathon-react/


## 🏗 Архитектура проекта (FSD)


src/
├── app/                    # 🔧 Слой приложения
│   ├── styles/            # Глобальные стили
│   │   ├── globals.scss   # Базовые стили (reset, body)
│   │   └── index.scss     # Импорт всех стилей
│   ├── providers/         # Провайдеры (роутинг, контекст)
│   │   └── router.jsx     # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   ├── App.jsx           # Главный компонент приложения
│   └── App.scss          # Стили App
│
├── pages/                  # 📄 Слой страниц
│   ├── home/ui/           # Главная страница
│   │   ├── HomePage.jsx          # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   └── HomePage.scss
│   ├── member-profile/ui/ # Страница профиля участника
│   │   ├── MemberProfilePage.jsx # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   └── MemberProfilePage.scss
│   └── favorites/ui/      # Страница избранных участников
│       ├── FavoritesPage.jsx     # ⚠️ НУЖНО РАЗРАБОТАТЬ
│       └── FavoritesPage.scss
│
├── widgets/                # 🧩 Слой виджетов (крупные блоки)
│   ├── navbar/ui/         # Навигационное меню
│   │   ├── Navbar.jsx            # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   └── Navbar.scss
│   ├── member-list/ui/    # Список всех участников
│   │   ├── MemberList.jsx        # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   └── MemberList.scss
│   ├── favorites-list/ui/ # Список избранных участников
│   │   ├── FavoritesList.jsx     # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   └── FavoritesList.scss
│   └── team-info/ui/      # Информация о команде
│       ├── TeamInfo.jsx          # ⚠️ НУЖНО РАЗРАБОТАТЬ
│       └── TeamInfo.scss
│
├── features/               # ⚡ Слой фичей (бизнес-логика)
│   ├── add-to-favorites/  # Функционал избранного
│   │   ├── ui/
│   │   │   ├── AddToFavoritesButton.jsx  # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   │   └── AddToFavoritesButton.scss
│   │   └── model/
│   │       └── useFavorites.js           # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   ├── member-skills/ui/  # Отображение навыков участника
│   │   ├── MemberSkills.jsx      # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   ├── SkillItem.jsx         # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   └── MemberSkills.scss
│   └── member-contacts/ui/ # Социальные сети участника
│       ├── MemberContacts.jsx    # ⚠️ НУЖНО РАЗРАБОТАТЬ
│       └── MemberContacts.scss
│
├── entities/               # 🏗 Слой сущностей (бизнес-объекты)
│   ├── member/            # Сущность участника
│   │   ├── ui/
│   │   │   ├── MemberCard.jsx    # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   │   ├── MemberCard.scss
│   │   │   ├── MemberAvatar.jsx  # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │   │   └── MemberAvatar.scss
│   │   └── model/
│   │       ├── member.js         # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   │       └── memberHelpers.js  # ⚠️ НУЖНО РАЗРАБОТАТЬ
│   └── team/              # Сущность команды
│       └── model/
│           ├── teamData.js       # ⚠️ НУЖНО РАЗРАБОТАТЬ
│           └── teamHelpers.js    # ⚠️ НУЖНО РАЗРАБОТАТЬ
│
└── shared/                 # 🔧 Слой переиспользуемых компонентов
    ├── ui/                # UI-kit компоненты
    │   ├── Button/        # ✅ ГОТОВО
    │   │   ├── Button.jsx
    │   │   └── Button.scss
    │   ├── Progress/      # ⚠️ НУЖНО РАЗРАБОТАТЬ
    │   │   ├── Progress.jsx
    │   │   └── Progress.scss
    │   ├── Badge/         # ⚠️ НУЖНО РАЗРАБОТАТЬ
    │   │   ├── Badge.jsx
    │   │   └── Badge.scss
    │   ├── Breadcrumbs/   # ⚠️ НУЖНО РАЗРАБОТАТЬ
    │   │   ├── Breadcrumbs.jsx
    │   │   └── Breadcrumbs.scss
    │   └── Slider/        # ⚠️ ОПЦИОНАЛЬНО
    │       ├── Slider.jsx
    │       └── Slider.scss
    ├── lib/               # Утилиты и хелперы
    │   ├── localStorage.js       # ⚠️ НУЖНО РАЗРАБОТАТЬ
    │   └── utils.js              # ⚠️ НУЖНО РАЗРАБОТАТЬ
    ├── config/            # Конфигурация
    │   └── constants.js          # ⚠️ НУЖНО РАЗРАБОТАТЬ
    └── styles/            # Общие стили
        ├── variables.scss        # ✅ ГОТОВО
        └── mixins.scss           # ⚠️ НУЖНО РАЗРАБОТАТЬ
```

