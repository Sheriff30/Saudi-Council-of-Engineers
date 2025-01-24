import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterLink, RouterLinkActive, CommonModule],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {}

  toggleSidebar() {
    const toggleButton = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.toggle('close');
    toggleButton?.classList.toggle('rotate');

    this.closeAllSubMenus();
  }

  toggleSubMenu(event: MouseEvent) {
    const sidebar = document.getElementById('sidebar');

    // Open the sidebar if it is currently closed
    if (sidebar?.classList.contains('close')) {
      sidebar.classList.remove('close');
    }

    // Ensure the event is coming from the button (not from the SVG or span)
    const button = event.currentTarget as HTMLElement; // Use currentTarget to get the button
    const subMenu = button.nextElementSibling as HTMLElement;

    if (subMenu) {
      const isCurrentlyOpen = subMenu.classList.contains('show');

      // Close all submenus first
      this.closeAllSubMenus();

      // Toggle the clicked submenu only if it was not open
      if (!isCurrentlyOpen) {
        subMenu.classList.add('show'); // Open the submenu
        button.classList.add('rotate'); // Optionally rotate the button
      }
    }
  }

  closeAllSubMenus() {
    const sidebar = document.getElementById('sidebar');
    const subMenus = sidebar?.getElementsByClassName('show');
    Array.from(subMenus || []).forEach((ul) => {
      ul.classList.remove('show');
      const siblingButton = ul.previousElementSibling;
      if (siblingButton) {
        siblingButton.classList.remove('rotate');
      }
    });
  }
}
