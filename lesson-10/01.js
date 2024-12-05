/*
  Цель задания: Разработать функционал для удаления фильма из списка с использованием паттерна MVC. После удаления фильма, необходимо отобразить сообщение "Фильм успешно удалён!" в message-box

  При возникновении сложностей можете ознакомиться с пошаговым планом реализации ниже, но лучше попробовать сначала самостоятельно 🧙‍♂️

Пошаговый план реализации:

1. Реализовать метод deleteMovie в объекте model:
  - метод должен принимать id фильма, который необходимо удалить
  - метод должен удалить фильм из массива movies
  - метод должен обновить отображение фильмов на странице

2. Добавить обработчик события для удаления фильмов:
  - в метода view.init добавить обработчик события на список фильмов
  - используя делегирование событий, обработать клик на кнопке удаления фильма
  - при клике на кнопку удаления, получить id фильма из родительского элемента и передать его в метод deleteMovie объекта controller

3. Реализовать метод deleteMovie в объекте controller:
  - метод должен принимать id фильма
  - метод должен передать id фильма в метод deleteMovie объекта model
  - метод должен отобразить сообщение "Фильм успешно удалён!" в message-box
*/

const model = {
  movies: [],
  addMovie(title, description) {
    const id = Math.random().toString(36).substr(2, 9); // Генерация уникального id
    const newMovie = { id, title, description }
    this.movies.push(newMovie)
    view.renderMovies(this.movies)
  },
  deleteMovie(id) {
    this.movies = this.movies.filter(movie => movie.id !== id);
    view.renderMovies(this.movies);
  }
}

const view = {
  init() {
    this.renderMovies(model.movies)

    const form = document.querySelector('.form')
    const inputTitle = document.querySelector('.input-title')
    const inputDescription = document.querySelector('.input-description')

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      const title = inputTitle.value
      const description = inputDescription.value
      controller.addMovie(title, description)

      inputTitle.value = ''
      inputDescription.value = ''
    })

    // Обработчик события для удаления фильма
    const list = document.querySelector('.list');
    list.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-button')) {
        const movieItem = event.target.closest('.movie');
        const movieId = movieItem.id;
        controller.deleteMovie(movieId);
      }
    });
  },
  renderMovies(movies) {
    const list = document.querySelector('.list')
    list.innerHTML = ''; // Очищаем список перед обновлением

    for (const movie of movies) {
      const movieItem = document.createElement('li');
      movieItem.id = movie.id;
      movieItem.className = 'movie';

      const movieTitle = document.createElement('b');
      movieTitle.className = 'movie-title';
      movieTitle.textContent = movie.title;

      const movieDescription = document.createElement('p');
      movieDescription.className = 'movie-description';
      movieDescription.textContent = movie.description;

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.type = 'button';
      deleteButton.textContent = 'Удалить 🗑';

      movieItem.appendChild(movieTitle);
      movieItem.appendChild(movieDescription);
      movieItem.appendChild(deleteButton);

      list.appendChild(movieItem);
    }
  },
  displayMessage(message, isError = false) {
    const messageBox = document.querySelector('.message-box')
    messageBox.textContent = message
    if (isError) {
      messageBox.classList.remove('success')
      messageBox.classList.add('error')
    } else {
      messageBox.classList.remove('error')
      messageBox.classList.add('success')
    }
  },
}

const controller = {
  addMovie(title, description) {
    if (title.trim() !== '' && description.trim() !== '') {
      model.addMovie(title, description)
      view.displayMessage('Фильм добавлен успешно!')
    } else {
      view.displayMessage('Заполните все поля!', true)
    }
  },
  deleteMovie(id) {
    model.deleteMovie(id);
    view.displayMessage('Фильм успешно удалён!');
  }
}

function init() {
  view.init()
}

document.addEventListener('DOMContentLoaded', init)