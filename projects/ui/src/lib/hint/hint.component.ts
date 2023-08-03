import { Component, Input, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent {

  public data = [
    {
      "hintId": "hint1",
      "hintName": "Hint 1",
      "hintText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      "hintId": "hint2",
      "hintName": "Hint 2",
      "hintText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      "hintId": "hint3",
      "hintName": "Hint 3",
      "hintText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
  ]
    
  private items!: string | any[];
  
  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}

  ngAfterViewInit() {
    this.items = this.document.querySelectorAll('.accordion .accordion-title');
 }

  toggleAccordion(hintId: string){

    const element = this.document.querySelector("#"+ hintId);
    const itemToggle = element.getAttribute('aria-expanded');
    const nextElement = element.nextElementSibling;
    const title = element.children[0];
    const icon = element.children[1];

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].setAttribute('aria-expanded', 'false');
      this.items[i].classList.remove('border-b-0', 'rounded-b-none', 'bg-custom-green')
      this.items[i].children[0].classList.remove('!text-custom-gray-800')
      this.items[i].children[1].classList.remove('after:opacity-0', 'before:bg-custom-gray-800', 'after:bg-custom-gray-800')
      this.items[i].nextElementSibling.classList.remove('opacity-100', 'max-h-min', 'py-6')
      this.items[i].nextElementSibling.classList.add('opacity-0', 'max-h-0', 'py-0')
    }
    
    if (itemToggle == 'false') {
      element.setAttribute('aria-expanded', 'true');
      element.classList.add('border-b-0', 'rounded-b-none', 'bg-custom-green')
      title.classList.add('!text-custom-gray-800')
      icon.classList.add('after:opacity-0', 'before:bg-custom-gray-800', 'after:bg-custom-gray-800')
      nextElement.classList.add('opacity-100', 'max-h-min', 'py-6')
      nextElement.classList.remove('opacity-0', 'max-h-0', 'py-0')
    }
  }
}
