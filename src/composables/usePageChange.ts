import { ref, computed } from 'vue'

export const usePageChange = () => {
    const sections = [
        'section-landing'
    ]
    const sectionInView = function() {
        const elements = document.querySelectorAll('section')
        const options = { 
            threshold: [0.4] 
        }

        if(elements) {
            elements.forEach(element => {
                const observer = new IntersectionObserver(entries => {
                    console.log(entries)
        
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
        sectionInView
    }
}