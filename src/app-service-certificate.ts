// https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly hostingEnvironmentProfileId?: string;
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

function appServiceCertificateTimeoutsToTerraform(struct?: AppServiceCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceCertificate extends cdktf.TerraformResource {

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
    this._hostingEnvironmentProfileId = config.hostingEnvironmentProfileId;
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

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // host_names - computed: true, optional: false, required: false
  public get hostNames() {
    return this.getListAttribute('host_names');
  }

  // hosting_environment_profile_id - computed: false, optional: true, required: false
  private _hostingEnvironmentProfileId?: string;
  public get hostingEnvironmentProfileId() {
    return this.getStringAttribute('hosting_environment_profile_id');
  }
  public set hostingEnvironmentProfileId(value: string ) {
    this._hostingEnvironmentProfileId = value;
  }
  public resetHostingEnvironmentProfileId() {
    this._hostingEnvironmentProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingEnvironmentProfileIdInput() {
    return this._hostingEnvironmentProfileId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_date - computed: true, optional: false, required: false
  public get issueDate() {
    return this.getStringAttribute('issue_date');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_vault_secret_id - computed: false, optional: true, required: false
  private _keyVaultSecretId?: string;
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string ) {
    this._keyVaultSecretId = value;
  }
  public resetKeyVaultSecretId() {
    this._keyVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string ) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // pfx_blob - computed: false, optional: true, required: false
  private _pfxBlob?: string;
  public get pfxBlob() {
    return this.getStringAttribute('pfx_blob');
  }
  public set pfxBlob(value: string ) {
    this._pfxBlob = value;
  }
  public resetPfxBlob() {
    this._pfxBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxBlobInput() {
    return this._pfxBlob
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

  // subject_name - computed: true, optional: false, required: false
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceCertificateTimeouts ) {
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
      hosting_environment_profile_id: cdktf.stringToTerraform(this._hostingEnvironmentProfileId),
      key_vault_secret_id: cdktf.stringToTerraform(this._keyVaultSecretId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      pfx_blob: cdktf.stringToTerraform(this._pfxBlob),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: appServiceCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
