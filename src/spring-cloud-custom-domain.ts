// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_custom_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudCustomDomainConfig extends cdktf.TerraformMetaArguments {
  readonly certificateName?: string;
  readonly name: string;
  readonly springCloudAppId: string;
  readonly thumbprint?: string;
  /** timeouts block */
  readonly timeouts?: SpringCloudCustomDomainTimeouts;
}
export interface SpringCloudCustomDomainTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function springCloudCustomDomainTimeoutsToTerraform(struct?: SpringCloudCustomDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SpringCloudCustomDomain extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpringCloudCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateName = config.certificateName;
    this._name = config.name;
    this._springCloudAppId = config.springCloudAppId;
    this._thumbprint = config.thumbprint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string;
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string ) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId: string;
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string;
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string ) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudCustomDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudCustomDomainTimeouts ) {
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
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      name: cdktf.stringToTerraform(this._name),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      timeouts: springCloudCustomDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
