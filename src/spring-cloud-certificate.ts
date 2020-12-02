// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SpringCloudCertificateConfig extends TerraformMetaArguments {
  readonly keyVaultCertificateId: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceName: string;
  /** timeouts block */
  readonly timeouts?: SpringCloudCertificateTimeouts;
}
export interface SpringCloudCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class SpringCloudCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpringCloudCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultCertificateId = config.keyVaultCertificateId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceName = config.serviceName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_certificate_id - computed: false, optional: false, required: true
  private _keyVaultCertificateId: string;
  public get keyVaultCertificateId() {
    return this.getStringAttribute('key_vault_certificate_id');
  }
  public set keyVaultCertificateId(value: string) {
    this._keyVaultCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCertificateIdInput() {
    return this._keyVaultCertificateId
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudCertificateTimeouts ) {
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
      key_vault_certificate_id: this._keyVaultCertificateId,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      service_name: this._serviceName,
      timeouts: this._timeouts,
    };
  }
}
