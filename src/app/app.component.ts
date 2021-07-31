import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  getname()
  {
    return "My name is Gaurav";
  }
  obj = { make: 'Ford',
  model: 'Mustang',
    year: 1969
}
arr=['ram','shyam','laxman'];
siteurl = window.location.href;
//$array1 = array('key1', 'key2', 'key3'); $array2 = array('umesh', 'sonu', 'deepak');
//$new_array = array_combine($array1, $array2); 
//console.log($new_array);
//print_r($new_array);
}
