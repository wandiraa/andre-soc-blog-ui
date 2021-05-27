import { Component, OnInit } from '@angular/core';
import { DocumentInterface, DocumentModel } from '../../_models/document.model';
import { DocumentService } from '../../_services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documents: DocumentInterface[];
  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void
  {
    this.documentService.getDocuments().subscribe(documents => {
      this.documents = documents.map(doc => new DocumentModel(doc));
    });
  }

}
