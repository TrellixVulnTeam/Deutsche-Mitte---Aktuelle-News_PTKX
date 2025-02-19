import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { WordpressPostsHome } from "../../wordpress/wordpress-posts-home/wordpress-posts-home.component";
import { YoutubeChannelComponent } from "../../youtube/youtube-channel/youtube-channel.component";

@Component({
  templateUrl: "tabs.html"
})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WordpressPostsHome;
  tab2Root: any = YoutubeChannelComponent;
}
