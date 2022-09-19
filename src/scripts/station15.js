function displayList(){
    const div = document.getElementById('fruits');
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }


    let element_ul = document.createElement('ul')

    let element_li = document.createElement('li')
    let element_value = document.createTextNode('リンゴ')
    element_li.appendChild(element_value)
    element_ul.appendChild(element_li)

    let element_li_2 = document.createElement('li')
    let element_value_2 = document.createTextNode('イチゴ')
    element_li_2.appendChild(element_value_2)
    element_ul.appendChild(element_li_2)

    let element_li_3 = document.createElement('li')
    let element_value_3 = document.createTextNode('ブドウ')
    element_li_3.appendChild(element_value_3)
    element_ul.appendChild(element_li_3)

    div.appendChild(element_ul)

}