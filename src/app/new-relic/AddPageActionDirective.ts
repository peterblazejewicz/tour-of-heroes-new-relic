import { Attribute, Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: "a[add-page-action]",
})
export class AddPageActionDirective {
  @Input("add-page-action") addPageAction: string | null = null;

  constructor(@Attribute("add-page-action") addPageAction: string) {
    this.addPageAction = addPageAction;
  }

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    if (this.addPageAction && this.addPageAction?.trim()) {
      newrelic.addPageAction(this.addPageAction);
    }
  }
}
