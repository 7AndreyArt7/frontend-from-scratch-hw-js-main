/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
    'Mona Lisa': 'Leonardo da Vinci',
    'Starry Night': 'Vincent van Gogh',
    'The Scream': 'Edvard Munch',
}

function updateGallery(object, name, newValue) {
    for (updateGallery[name] in object[name]) {
        const newGallery = object.hasOwnProperty(name);
        if (newGallery === true) {
            object[name] = newValue;
        }{ object[name] = newValue;
        }
    }

    // for (updateGallery[name] in object[name]) {
    //     object[name] = newValue
        // if (!object[name]=== updateGallery[name]) {
        //     object[name] = newValue
        // }
    // }
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)