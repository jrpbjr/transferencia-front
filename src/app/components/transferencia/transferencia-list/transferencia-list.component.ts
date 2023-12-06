import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Transferencia} from "../../../models/transferencia";
import {TransferenciaService} from "../../../services/transferencia.service";

@Component({
  selector: 'app-transferencia-list',
  templateUrl: './transferencia-list.component.html',
  styleUrls: ['./transferencia-list.component.css']
})
export class TransferenciaListComponent implements OnInit {

  ELEMENT_DATA: Transferencia[] = []

  displayedColumns: string[] = ['id', 'contaOrigem', 'contaDestino', 'valorTransferencia','dataTransferencia','taxa','acoes'];
  dataSource = new MatTableDataSource<Transferencia>(this.ELEMENT_DATA);


  constructor(
      private service: TransferenciaService
  ) { }

  ngOnInit(): void {

  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



}

