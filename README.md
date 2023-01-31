# duty-guide

Web-application for learning cadets' duties and testing them. Project is maintained by cadets.

# ПОДГОТОВКА СУТОЧНОГО НАРЯДА
Техническое задание

## Идея:

Реализовать приложение для подготовки заступающего суточного наряда. Учесть моменты: теория, тесты, статистика.

## Клиентская часть:

#### КУРСАНТЫ

- [ ] <b>Главная страница (о проекте):</b> описание идеи приложения, краткая инструкция, как пользоваться. Опционально: авторы.
- [ ] <b>Модалка или страница «Авторизация»:</b> просто форма авторизации
- [ ] <b>Страница «Теория»:</b> вкладки по тематикам (наряд по курсу – дежурный и дневальный, посыльный по факультету,
  противопожарная безопасность, противодействие терроризму, …).
- [ ] <b>Страница «Тестирование»:</b> режимы («Сложные 100», «Режим развод», «Марафон 400»)
- [ ] <b>Страница «Результаты тестирования»:</b> открывается после прохождения тестирования, описаны результаты (варианты:
  «Показать все вопросы» или «Показать только ошибки»), сразу ссылки на разбор заданий, некая «вероятность снятия с
  наряда».
- [ ] <b>Страница «Лидеры курса»:</b> что-то типа лидер-борда с курсантами, у которых максимальное количество решенных вопросов
  и процент «победы».  
#### ЗАСТУПАЮЩИЙ ДЕЖУРНЫЙ
- [ ] <b>Страница «Добавить заступающий наряд»:</b> просто 5 селектов (дежурный, 3 дневальных, посыльный)  
#### РУТ-ПОЛЬЗОВАТЕЛИ
- [ ] <b>Страница «Глобальная статистика»:</b> доступ только у рут-пользователей (оферы, страшина, одмэны). Отображение
  пройденных тестов у заступающего наряда, отображение статистики по курсу.
- [ ] <b>Страница «Расписание нарядов»:</b> просмотр нарядов, которые были. То есть возможность посмотреть, кто когда стоял и
  результаты подготовки этого наряда.
- [ ] <b>Страница «Результаты подготовки»:</b> страница с просмотром результатов подготовки отдельно взятого наряда
#### Админ-панель
- [ ] <b>Страница «Добавить/редактировать теорию»:</b> страница добавления теоретических сведений. Инпут для заголовка теории,
  инпут для раздела теории, текстэрия с теорией, возможность прикрепления картинки к заданию.
- [ ] <b>Страница «Добавить/редактировать задание»:</b> Инпут для заголовка вопроса, инпут для раздела теории, текстэрия с
  заданием, возможность прикрепления картинки к заданию, [что-то из нижеперечисленного далее] возможность добавления
  тестовых вопросов (инпут[radio]), возможность добавления инпута для текстового ответа.
- [ ] <b>Страница «Добавление подразделения»:</b> инпуты, чтобы вписать номер группы, разбить ее на отделения
- [ ] <b>Страница «Добавление пользователя»:</b> форма (инпуты: ФИО; селекты: должность (если псевдо-командир, то выбрать
  отделение и группу), группа, отделение; опционально: фотка курсанта)

# Серверная часть:
### БАЗА ДАННЫХ
#### Таблицы:
- [ ] <b>Пользователь</b>. Роль, ФИО, должность, звание, айди группы, айди отделения, количество решенных задач, процент
  побед, количество нарядов, …
- [ ] <b>Задание</b>. Тип (тестовый, текстовый), категория, айди теории, тайтл, описание, варианты ответов (если
  тестовый), правильный вариант, количество решений, количество правильных решений.
- [ ] <b>Теория</b>. Категория, тайтл, описание, ссылка на картинку (если есть).
- [ ] <b>Группа</b>. Название, айди командира. У одной группы много курсантов, много отделений.
- [ ] <b>Отделение</b>. Название, айди группы, айди командира. У одного отделения одна группа.
- [ ] <b>Результат</b>. Айди пользователя, айди решенных задач, количество решенных задач, количество правильных ответов
- [ ] <b>Наряд</b>. Дата заступления, айди дежурного, айди дневальных, айди посыльного, айди результата

### МАРШРУТЫ
<i>/</i> – корневой (get)  
<i>/login</i> – логин (post)

<i>/theory</i> – страница теории (get)  
<i>/testing</i> – страница тестирования (get)  
<i>/testing/sendAnswers</i> – запрос на отправку ответов (post)  
<i>/testing/results</i> – страница просмотра результатов тестирования (get)  
<i>/leaderboard</i> – страница лидеров курса (get)

<i>/admin/addUser</i> – запрос на добавление курсанта (post)  
<i>/admin/addTask</i> – запрос на добавление задания (post)  
<i>/admin/editTask/<b>:id</b></i> – запрос на редактирование задания (post)  
<i>/admin/addTheory</i> – запрос на добавление теории (post)  
<i>/admin/editTheory/<b>:id</b></i> – запрос на редактирование теории (post)  
<i>/admin/addDivision</i> – запрос на добавление группы/задания (post)  
<i>/admin/statistics</i> – страница просмотра статистики (get)  
<i>/admin/dutiesSchedule</i> – страница просмотра расписания нарядов (которые были) (get)  
<i>/admin/dutiesSchedule/duty/<b>:id</b></i> – страница просмотра результатов подготовки отдельного взятого наряда (get)

<i>/attendant/setDuty</i> – запрос на добавление заступающего наряда (post)  