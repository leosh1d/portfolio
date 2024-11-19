import React from "react"

type dictionary_options = {
    [key: string]: {
        [key: string]: string
    }
}

export const d_hello: dictionary_options = {
    name: {
        ru: "Алексей Пудочев",
        en: "Alexey Pudochev",
    },
    dev: {
        ru: "разработчик",
        en: "developer",
    },
    design: {
        ru: "дизайнер",
        en: "designer",
    },
}

export const d_settings: dictionary_options = {
    heading: {
        ru: "Настройки",
        en: "Settings",
    },
    language: {
        ru: "Язык",
        en: "Language",
    },
    theme: {
        ru: "Офомление",
        en: "Theme",
    },
}

export const d_benefits: dictionary_options = {
    load: {
        ru: "Высокая производительность",
        en: "High performance",
    },
    code_title: {
        ru: "Чистый код",
        en: "Clean code",
    },
    code_semantic: {
        ru: "Семантичный Html",
        en: "Semantic Html",
    },
    code_frameworks: {
        ru: "Современный стек",
        en: "Modern stack",
    },
    autotest: {
        ru: "Применение автотестов",
        en: "Autotesting",
    },
    development: {
        ru: "Быстрая разработка",
        en: "Fast development",
    },
    development_months: {
        ru: "Месяцы",
        en: "Months",
    },
    development_weeks: {
        ru: "Недели",
        en: "Weeks",
    },
    algo: {
        ru: "Понимание алгоритмов",
        en: 'Understanding algorithms'
    },
    add_node: {
        ru: "Добавить узел",
        en: "Add node"
    },
    remove_node: {
        ru: "Удалить узел",
        en: "Delete node"
    },
    mentor: {
        ru: 'Опыт менторства',
        en: 'Mentoring experience'
    },
    interview: {
        ru: "Проведение технических собеседований",
        en: "Conducting technical interviews"
    }
}

export const d_projects: dictionary_options = {
    heading: {
        ru: "Проекты",
        en: "Projects",
    },
    subheading: {
        ru: "Подборка моих работ",
        en: "Selection of my works",
    },
}

export const d_404: dictionary_options = {
    title: {
        ru: "Страница не найдена",
        en: "Page not found",
    },
    back: {
        ru: "Вернуться на главную",
        en: "Go back to the main page"
    }
}

export const d_bot: dictionary_options = {
    heading: {
        en: "Bot",
        ru: "Бот",
    },
    subheading: {
        en: "Ask me a question!",
        ru: "Задай мне вопрос!",
    },
    hello: {
        en: "Hi! i'm bot 🤖",
        ru: "Привет! я бот 🤖",
    },
    help: {
        en: "How i can help you today?",
        ru: "Как я могу Вам помочь?",
    },
    btn_hello: {
        en: "👋 i just wanted to say hello",
        ru: "👋 я просто хотел поздороваться",
    },
    hello_response_1: {
        en: "Well hello there!",
        ru: "Ну привет!",
    },
    hello_response_2: {
        en: "I hope you've enjoyed browsing my work",
        ru: "Надеюсь, вам понравилось просматривать мои работы",
    },
    hello_response_3: {
        en: "Can i help you with anything else?",
        ru: "Могу я Вам еще чем-нибудь помочь?",
    },
    btn_work: {
        en: "💼 I'd like to work with you!",
        ru: "💼 Я хотел бы с тобой поработать!",
    },
    work_response_1: {
        en: "Great!",
        ru: "Отлично!",
    },
    work_response_2: {
        en: "Send me a message and lets chat further!",
        ru: "Отправьте мне сообщение и давайте продолжим общение! ",
    },
    other: {
        en: "🤔 Other options?",
        ru: "🤔 Другие опции?",
    },
    btn_stack: {
        en: "👨‍💻 What stack do you program on?",
        ru: "👨‍💻 На каком стеке ты работаешь?",
    },
    stack_response: {
        en: "Typecript, React и Next.js/Gatsby ",
        ru: "Typecript, React and Next.js/Gatsby",
    },
}
