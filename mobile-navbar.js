class MobileNavbar {
  // O construtor da classe recebe três parâmetros:
  // - mobileMenu: um seletor CSS que aponta para o elemento do menu mobile
  // - navList: um seletor CSS que aponta para a lista de navegação
  // - navLinks: um seletor CSS que aponta para cada link da lista de navegação
  constructor(mobileMenu, navList, navLinks) {
    // O seletor do menu mobile é atribuído à propriedade "mobileMenu"
    this.mobileMenu = document.querySelector(mobileMenu);
    // O seletor da lista de navegação é atribuído à propriedade "navList"
    this.navList = document.querySelector(navList);
    // O seletor de cada link da lista de navegação é atribuído à propriedade "navLinks"
    this.navLinks = document.querySelectorAll(navLinks);
    // O nome da classe que será usada para ativar a animação dos links é atribuído à propriedade "activeClass"
    this.activeClass = "active";

    // O método "handleClick" é vinculado a esta instância da classe "MobileNavbar" para garantir que "this" se refira ao objeto correto quando for chamado
    this.handleClick = this.handleClick.bind(this);
  }

  // O método "animateLinks" é responsável por animar os links da lista de navegação
  animateLinks() {
    // Percorre cada link da lista de navegação
    this.navLinks.forEach((link, index) => {
      // Se o link já possui uma animação, remove-a
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        // Caso contrário, adiciona a animação "navLinkFade" que faz com que o link desapareça gradualmente
        // "forwards" faz com que o estado final da animação permaneça após sua conclusão
        // A propriedade "index" é usada para criar um atraso na animação de cada link, com base em sua posição na lista
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  }

  // O método "handleClick" é responsável por lidar com o clique no menu mobile
  handleClick() {
    // Alterna a classe "active" na lista de navegação e no menu mobile
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    // Chama o método "animateLinks" para animar os links da lista de navegação
    this.animateLinks();
  }

  // O método "addClickEvent" adiciona um evento de clique no menu mobile
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // O método "init" é responsável por inicializar a classe "MobileNavbar"
  init() {
    // Verifica se o menu mobile existe na página antes de adicionar o evento de clique
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    // Retorna esta instância da classe "MobileNavbar"
    return this;
  }
}

// Cria uma nova instância da classe "MobileNavbar", passando os seletores do menu mobile, da lista de navegação e de cada link da lista de navegação
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
//Inicializa o objeto MobileNavBar
mobileNavbar.init();