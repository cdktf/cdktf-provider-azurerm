// https://www.terraform.io/docs/providers/azurerm/r/api_management_email_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementEmailTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly body: string;
  readonly resourceGroupName: string;
  readonly subject: string;
  readonly templateName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementEmailTemplateTimeouts;
}
export interface ApiManagementEmailTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function apiManagementEmailTemplateTimeoutsToTerraform(struct?: ApiManagementEmailTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementEmailTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementEmailTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_email_template',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._body = config.body;
    this._resourceGroupName = config.resourceGroupName;
    this._subject = config.subject;
    this._templateName = config.templateName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // body - computed: false, optional: false, required: true
  private _body: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // subject - computed: false, optional: false, required: true
  private _subject: string;
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName: string;
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementEmailTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementEmailTemplateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      body: cdktf.stringToTerraform(this._body),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subject: cdktf.stringToTerraform(this._subject),
      template_name: cdktf.stringToTerraform(this._templateName),
      timeouts: apiManagementEmailTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
