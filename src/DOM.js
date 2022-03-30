/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let i = 0;
    while (i < count) {
        const my__tag = document.createElement(tag);
        my__tag.innerHTML = content;
        document.body.appendChild(my__tag);
        i += 1;
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const parent__element = (childrenCount, lvl) => {
        let child__element = document.createElement('div');
        let i = 0;
        child__element.setAttribute('class', `item_${lvl}`);
        if (lvl < level) {
            while (i < childrenCount) {
                child__element.appendChild(
                    parent__element(childrenCount, lvl + 1),
                );
                i++;
            }
        }
        return child__element;
    };
    return parent__element(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let children = tree.childNodes;
    for (let child of children) {
        if (child.getAttribute('class') == 'item_2') {
            let new__child = document.createElement('section');
            new__child.setAttribute('class', 'item_2');
            tree.replaceChild(new__child, child);
        }
    }
    return tree;
}
