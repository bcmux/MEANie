import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersListComponent } from './users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { userReducer } from '../../+state/user.reducer';
import { combineReducers, StoreModule } from '@ngrx/store';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatCardModule,
        RouterTestingModule,
        StoreModule.forRoot({
          user: combineReducers(userReducer, { entities: {}, userIds: [] })
        })
      ],
      declarations: [ UsersListComponent ],
      providers: [
        { provide: MatDialog, useValue: {open: () => {}} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
