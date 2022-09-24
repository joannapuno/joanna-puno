export const usePageChange = () => {

    const scrollIntoView = function(id: string) {
        const elToView = document.getElementById(id)
        elToView?.scrollIntoView({ block: 'center'})
    }
    
    const sectionInView = function() {
        const elements = document.querySelectorAll('section')
        const options = { 
            threshold: [0.50] 
        }
        if(elements) {
            elements.forEach(element => {
                const observer = new IntersectionObserver(entries => {
        
                    if(entries[0].isIntersecting === true) {
                        element?.classList.add('show') 
                    } else {
                        element?.classList.remove('show')
                    }
                }, options);

                observer.observe(element);
            })
        }
    }

    return {
        scrollIntoView,
        sectionInView
    }
}