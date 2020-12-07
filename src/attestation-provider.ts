// https://www.terraform.io/docs/providers/azurerm/r/attestation_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttestationProviderConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly policySigningCertificateData?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: AttestationProviderTimeouts;
}
export interface AttestationProviderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function attestationProviderTimeoutsToTerraform(struct?: AttestationProviderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AttestationProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AttestationProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_attestation_provider',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._policySigningCertificateData = config.policySigningCertificateData;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestation_uri - computed: true, optional: false, required: false
  public get attestationUri() {
    return this.getStringAttribute('attestation_uri');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_signing_certificate_data - computed: false, optional: true, required: false
  private _policySigningCertificateData?: string;
  public get policySigningCertificateData() {
    return this.getStringAttribute('policy_signing_certificate_data');
  }
  public set policySigningCertificateData(value: string ) {
    this._policySigningCertificateData = value;
  }
  public resetPolicySigningCertificateData() {
    this._policySigningCertificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySigningCertificateDataInput() {
    return this._policySigningCertificateData
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

  // trust_model - computed: true, optional: false, required: false
  public get trustModel() {
    return this.getStringAttribute('trust_model');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AttestationProviderTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AttestationProviderTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      policy_signing_certificate_data: cdktf.stringToTerraform(this._policySigningCertificateData),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: attestationProviderTimeoutsToTerraform(this._timeouts),
    };
  }
}
