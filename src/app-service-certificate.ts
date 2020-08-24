// https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServiceCertificateConfig extends TerraformMetaArguments {
  readonly keyVaultSecretId?: string;
  readonly location: string;
  readonly name: string;
  readonly password?: string;
  readonly pfxBlob?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: AppServiceCertificateTimeouts;
}
export interface AppServiceCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceCertificateConfig) {
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
    this._keyVaultSecretId = config.keyVaultSecretId;
    this._location = config.location;
    this._name = config.name;
    this._password = config.password;
    this._pfxBlob = config.pfxBlob;
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

  // key_vault_secret_id - computed: false, optional: true, required: false
  private _keyVaultSecretId?: string;
  public get keyVaultSecretId() {
    return this._keyVaultSecretId;
  }
  public set keyVaultSecretId(value: string | undefined) {
    this._keyVaultSecretId = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }

  // pfx_blob - computed: false, optional: true, required: false
  private _pfxBlob?: string;
  public get pfxBlob() {
    return this._pfxBlob;
  }
  public set pfxBlob(value: string | undefined) {
    this._pfxBlob = value;
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
  private _timeouts?: AppServiceCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_vault_secret_id: this._keyVaultSecretId,
      location: this._location,
      name: this._name,
      password: this._password,
      pfx_blob: this._pfxBlob,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
