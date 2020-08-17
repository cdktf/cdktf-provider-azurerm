// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_app_service_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermAppServiceCertificateConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DataAzurermAppServiceCertificateTimeouts;
}
export interface DataAzurermAppServiceCertificateTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermAppServiceCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermAppServiceCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_date - computed: true, optional: false, required: true
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // friendly_name - computed: true, optional: false, required: true
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // host_names - computed: true, optional: false, required: true
  public get hostNames() {
    return this.getListAttribute('host_names');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // issue_date - computed: true, optional: false, required: true
  public get issueDate() {
    return this.getStringAttribute('issue_date');
  }

  // issuer - computed: true, optional: false, required: true
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // subject_name - computed: true, optional: false, required: true
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServiceCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermAppServiceCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
