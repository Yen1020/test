class SpecialFooter extends HTMLElement {
  connectedCallback (){
    this.innerHTML = 
        <footer class="footer">
        <div class="container">
            <ul class="footer_menu">
                <div  class="footer__item">
                    <a href="#" class="footer__title">About</a>
                </div>
                <div class="footer__item">
                    <h3 href="#" class="footer__title">Service</h3>
                    <ul>
                        <li><a href="#" class="footer__link">FAQs</a></li>                    
                        <li><a href="#" class="footer__link">Delivery Information</a></li>
                        <li><a href="#" class="footer__link">Returns & Refunds</a></li> 
                    </ul>                                           
                </div>
                
                <div class="footer__item">
                    <h3 class="footer__title">Products</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Product_01</a></li>                    
                        <li><a href="#" class="footer__link">Product_02</a></li>
                        <li><a href="#" class="footer__link">Product_03</a></li>                    
                    </ul>
                </div>
                <div class="footer__item">
                    <h3 href="#" class="footer__title">Socials</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Line</a></li>                    
                        <li><a href="#" class="footer__link">Facebook</a></li>
                        <li><a href="#" class="footer__link">Instagrame</a></li>
                    </ul>
                </div>
                <div class="footer__item">
                    <a href="./blog.html" class="footer__title">Blog</a>
                </div>    
            </ul>
        </div>
    </footer>
  }

}
customElements.define('special-footer',SpecialFooter)