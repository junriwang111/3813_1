import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Group, Channel } from '../entity';
import { ChannelService } from '../channel.service';
import { GroupService } from '../group.service';


@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  @Input() group: Group;

  channels;
  groupName: string;
  groupId: string;

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private groupService: GroupService,
    private location: Location) { }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');

    this.groupService.getGroup(this.groupId)
      .subscribe(group => {
        console.log('group::' + JSON.stringify(group));
        this.groupName = group[0].name;
      });

    this.getChannels();
  }

  getChannels(): void {
    this.channelService.getChannelsBy(this.groupId)
      .subscribe(channels => this.channels = channels);
  }

  add(name: string): void {
    name = name.trim();
    const group_id = this.groupId.trim();
    
    if (!name) { return; }
    if (!group_id) { return; }

    this.channelService.addChannel({ name, group_id } as Channel)
      .subscribe(channel => {
        // console.log(group);
        this.getChannels();
      });
  }

  delete(channel: Channel): void {
    this.channels = this.channels.filter(c => c !== channel);
    this.channelService.deleteChannel(channel).subscribe();
  }

}
