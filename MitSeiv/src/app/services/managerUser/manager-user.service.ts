import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/model/class/usuario';
import { UsuarioBuilder } from 'src/app/core/model/builder/userBuilder';


interface Usuariable {
  id?: any;
  nombre: string;
  contrasena: string;
  email: string;
  latitud: string;
  longitud: string;
}
@Injectable({
  providedIn: 'root'
})
export class ManagerUserService {
  private userActive: Usuario;
  private users: Observable<Usuariable[]>;
  private userColection: AngularFirestoreCollection<Usuariable>;
  private myUsers: Usuario[];
  private login: boolean;
  constructor(private afs: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    this.login = false;
    this.userColection = this.afs.collection<Usuariable>('usuarios');
    this.users = this.userColection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    this.users.subscribe(
      (res: any) => this.myUsers = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
  }
  public signUp(email: string, password: string): Promise<any> {
    return new Promise((response) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          const userBuilder = new UsuarioBuilder();
          const user = userBuilder.restart().email(email).buildWithId(this.firebaseAuth.auth.currentUser.uid);
          this.userColection.doc(user.id).set({
            email: user.email
          })
            .then(() => {
              this.userActive = user;
              response('true');
            });
        })
        .catch();
    });

  }
  public signIn(email: string, password: string): Promise<any> {
    return new Promise((response) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.userActive = this.takeUser(this.getIdUserActive());
          this.login = true;
          response();
        });
    });
  }
  public signOut() {
    this.firebaseAuth.auth.signOut().then(() => {
      this.login = false;
    });
  }
  public isLogin() {
    return this.login;
  }
  public getIdUserActive(): string {
    return this.firebaseAuth.auth.currentUser.uid;
  }
  public takeUser(uid: string): Usuario {
    let userR: Usuario;
    for (const user of this.myUsers) {
      if (user.id === uid) {
        userR = user;
      }
    }
    return userR;
    /*let response;
    this.getUserFromColeccion(uid).subscribe(
      (res: any) => response = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
    return response;*/
  }
  private getUserFromColeccion(id: string): Observable<Usuariable> {
    return this.userColection.doc<Usuariable>(id).valueChanges().pipe(
      take(1),
      map(user => {
        user.id = id;
        return user;
      })
    );
  }
  public delete() {
    // this.userColection.doc(id).delete();
  }
  public updateUser(nameUser: string, tittleUser: string, addressUser: string) {
    this.userColection.doc(this.userActive.id).update(
      {
        name: nameUser,
        tittle: tittleUser,
        address: addressUser
      }
    );
  }
  public updatePersonalUser(nameUser: string, emailUser: string) {
    this.firebaseAuth.auth.currentUser.updateEmail(emailUser);
    this.userColection.doc(this.userActive.id).update(
      {
        name: nameUser,
        email: emailUser
      }
    );
  }
  public updatePasswordUser(password: string) {
    this.firebaseAuth.auth.currentUser.updatePassword(password);
  }
}

