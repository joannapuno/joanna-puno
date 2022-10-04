export const usePageChange = () => {
    
    // Fading of sections as you scroll
    const sectionInView = function() {
        const elements = document.querySelectorAll('section')

        // if seeing 50% of next section
        const options = { 
            threshold: [0.50] 
        }
        if(elements) {
            elements.forEach(element => {
                const observer = new IntersectionObserver(entries => {
        
                    if(entries[0].isIntersecting) {
                        element?.classList.add('show') 
                    } else {
                        element?.classList.remove('show')
                    }
                }, options);

                observer.observe(element);
            })
        }
    }
    return { sectionInView }
}