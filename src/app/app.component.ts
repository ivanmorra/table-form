import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  Table = 'table-form';
  @ViewChild('modalDettaglio') modalDettaglio!: ElementRef;
  @ViewChild('modalInserimento') modalInserimento!: ElementRef;
  dettaglioUtente: any;
  formInserimento!:FormGroup
 

  utenti = [
    {
      nome: 'Ivan',
      cognome: 'Morra',
      anni: 23,
      citta: 'San giorgio',
      coloreCapelli: 'neri',
      codicefiscale: 'ivmrr08785'
    },
    {
      nome: 'Alessandra',
      cognome: 'De Luca',
      anni: 21,
      citta: 'Cercola',
      coloreCapelli: 'Biondo cenere',
      codicefiscale: 'aledel08785'
    },
    {
      nome: 'Simone',
      cognome: 'Morra',
      anni: 21,
      citta: 'San giorgio',
      coloreCapelli: 'neri',
      codicefiscale: 'smmrr08785'
    }
  ];
   
  constructor(private fb: FormBuilder, private modalService: NgbModal){
    this.formInserimento = this.fb.group({
      
      nome: new FormControl (''),
      cognome:new FormControl ('') ,
      anni: new FormControl (''),
      citta: new FormControl (''),
      coloreCapelli:new FormControl ('') ,
      codicefiscale:new FormControl (''),
    })


  }

  ngOnInit(): void {
    
  }


  apriDettaglioUtente(user: any){
    this.dettaglioUtente = user;
    this.modalService.open(this.modalDettaglio, {size: 'lg'});
  }
  apriModaleInserimento(){
    this.modalService.open(this.modalInserimento, {size: 'lg'});
  
  }

}


