import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: "pricing-page",
  imports: [],
  templateUrl: './pricing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    console.log(isPlatformServer(this.platform))
    // this.title.setTitle("Pricing page");
    // this.meta.updateTag({ 'name': 'description', 'content': 'Es es una descripcion de Pricing page' })
  }
}
