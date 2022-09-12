import { ref, computed } from 'vue'

export const usePageChange = () => {

    const scrollIntoView = function(id: string) {
        const elToView = document.getElementById(id)
        elToView?.scrollIntoView({ block: 'center'})
    }
    
    const sectionInView = function() {
        const movingBg = document.getElementById('moving-bg')
        const elements = document.querySelectorAll('section')
        const options = { 
            threshold: [0.50] 
        }


        if(elements) {
            elements.forEach(element => {
                const observer = new IntersectionObserver(entries => {
        
                    if(entries[0].isIntersecting === true) {
                        element?.classList.add('show')
                        // movingBg?.classList.add('show')
                        

                        // if(element.id === 'section-landing' || element.id === 'section-work') {
                        //     movingBg?.classList.add('left')
                        //     movingBg?.classList.remove('right')
                        // } else if(element.id === 'section-about'){
                        //     movingBg?.classList.add('right')
                        //     movingBg?.classList.remove('left')
                        // } else {
                        //     movingBg?.classList.remove('show')
                        // }

                        // scrollIntoView(element.id)

                        
                    } else {
                        element?.classList.remove('show')
                        // element.querySelector('.test')?.remove()
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