import { Injectable } from "@angular/core";
import { createClient, Entry } from "contentful";
import { FormField } from "src/common/form-field";

import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FormFieldsService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() {}

  // Call Contentful API to get the fields

  getFormFields(query?: object): Promise<any> {
    return this.client.getEntries(
      Object.assign(
        {
          content_type: "formFields",
        },
        query
      )
    );
  }
}
