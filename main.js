
// html elemets


const contatmeElement = document.getElementById("contactme")
const contactmePopup = document.getElementById("contactme-popup")
const containerWrapperElement = document.getElementById("container-wrapper")


// Slider element

const slidersElements = document.getElementById("sliders")



const popupContactClose = document.getElementById("popup-contactme-close")











const contactmeStylePopup = (value) => {

    if (value) {
        containerWrapperElement.style["display"] = "none"
        contactmePopup.style["display"] = "flex"
    }
    else {
        containerWrapperElement.style["display"] = "flex"
        contactmePopup.style["display"] = "none"
    }



}







// Events Functions


const contatcmeEvent = (e) => {

    contactmeStylePopup(true)

    e.preventDefault()
}

const popupContactCloseEvent = (e) => {

    contactmeStylePopup(false)

    e.preventDefault()
}





// RenderFunctions

const renderSliders = ( data  ) =>{

        
       
    const sliderELementesMap = ( id, link, description, title, img )=>  {
        return `<div class="slider-card ${id}">
                <img src="${img}" alt="">
            
                <div class="slider-card-info">
                    <a href="${link}" target="_blank"><b>${title}   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg></b></a>
                    <p> ${description}</p>
                </div>        
            </div>`
    }

    
    

    const allSlidersElements = data.map(element => {
        const {id, link, description, title, img} = element
        let data = sliderELementesMap(id, link, description, title, img)
        return data
    });


    
    return allSlidersElements

}





// Event Listeners


popupContactClose.addEventListener("click", popupContactCloseEvent)

contatmeElement.addEventListener("click", contatcmeEvent)




//Data

const sliderData = [
    {
        id: 1,
        img:  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "TOdo",
        link: "https://www.google.com",
        description: "MOngodb "
    },
    {
        id: 1,
        img:  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "TOdo",
        link: "https://www.google.com",
        description: "MOngodb "
    },
    {
        id: 1,
        img:  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "TOdo",
        link: "https://www.google.com",
        description: "MOngodb "
    },
    {
        id: 1,
        img:  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "TOdo",
        link: "https://www.google.com",
        description: "MOngodb "
    }
]



slidersElements.innerHTML = renderSliders(sliderData)



