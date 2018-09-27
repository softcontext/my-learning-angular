import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';

const routes: Routes = [
  { path: '', component: PlayerComponent },
  { path: 'player', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
// exports: [RouterModule]
// PlayerModule 에서 PlayerRoutingModule 을 임포트하면
// PlayerRoutingModule 이 exports 하는 모듈까지
// 사용할 수 있게 됩니다.

// 루트 모듈에서 라우팅 로직을 건네 줄 때는,
// RouterModule.forRoot(routes) 함수를 사용합니다.
// 기능 모듈에서 라우팅 로직을 건네 줄 때는,
// RouterModule.forChild(routes) 함수를 사용합니다.
// 루트 모듈에서 타 모듈을 임포트하게 되면
// 타 모듈의 라우팅 로직까지 같이 임포트 처리가 됩니다.
