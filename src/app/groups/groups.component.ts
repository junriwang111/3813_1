import { Component, OnInit } from "@angular/core";

import { Group } from "../entity";
import { GroupService } from "../group.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"]
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  deleteflag = false;

  constructor(private groupService: GroupService, private router: Router) {}

  ngOnInit() {
    // todo permission
    if (sessionStorage.length == 0) {
      this.router.navigateByUrl("/login");
    } else {
      this.getGroups();
      if (JSON.parse(sessionStorage.getItem("user")).groupAdmin) {
        this.deleteflag = true;
      }
    }
  }

  getGroups(): void {
    this.groupService.getGroups().subscribe(groups => (this.groups = groups));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.groupService.addGroup({ name } as Group).subscribe(group => {
      this.getGroups();
      // this.groups.push(group);
    });
  }

  delete(group: Group): void {
    this.groups = this.groups.filter(g => g !== group);
    this.groupService.deleteGroup(group).subscribe();
  }
}
