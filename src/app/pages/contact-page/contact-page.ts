import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: "contact-page",
  imports: [],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle("Contact page");
    this.meta.updateTag({ 'name': 'description', 'content': 'Es es una descripcion de Contact page' })
  }
}
