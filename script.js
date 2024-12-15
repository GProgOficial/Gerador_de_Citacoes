const quotes = [
    '"O sucesso é ir de fracasso em fracasso sem perder o entusiasmo." - Winston Churchill',
    '"Acredite que você pode, assim você já está no meio do caminho." - Theodore Roosevelt',
    '"Não importa o quão devagar você vá, desde que você não pare." - Confúcio',
    '"A melhor maneira de prever o futuro é criá-lo." - Peter Drucker',
    '"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado." - Roberto Shinyashiki',
    '"A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa continuar se movendo." - Albert Einstein',
]

const quoteElement = document.getElementById("quote")
const newQuoteButton = document.getElementById("new-quote")

let currentIndex = 0

newQuoteButton.addEventListener("click", () => {
    quoteElement.textContent = quotes[currentIndex]

    currentIndex++

    if (currentIndex >= quotes.length) {
        currentIndex = 0
    }
})
