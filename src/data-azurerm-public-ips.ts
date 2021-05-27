// https://www.terraform.io/docs/providers/azurerm/d/public_ips.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPublicIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html#allocation_type DataAzurermPublicIps#allocation_type}
  */
  readonly allocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html#attached DataAzurermPublicIps#attached}
  */
  readonly attached?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html#name_prefix DataAzurermPublicIps#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html#resource_group_name DataAzurermPublicIps#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html#timeouts DataAzurermPublicIps#timeouts}
  */
  readonly timeouts?: DataAzurermPublicIpsTimeouts;
}
export class DataAzurermPublicIpsPublicIps extends cdktf.ComplexComputedList {

  // domain_name_label - computed: true, optional: false, required: false
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAzurermPublicIpsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html#read DataAzurermPublicIps#read}
  */
  readonly read?: string;
}

function dataAzurermPublicIpsTimeoutsToTerraform(struct?: DataAzurermPublicIpsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html azurerm_public_ips}
*/
export class DataAzurermPublicIps extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips.html azurerm_public_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPublicIpsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPublicIpsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_public_ips',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocationType = config.allocationType;
    this._attached = config.attached;
    this._namePrefix = config.namePrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_type - computed: false, optional: true, required: false
  private _allocationType?: string;
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }
  public set allocationType(value: string ) {
    this._allocationType = value;
  }
  public resetAllocationType() {
    this._allocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTypeInput() {
    return this._allocationType
  }

  // attached - computed: false, optional: true, required: false
  private _attached?: boolean;
  public get attached() {
    return this.getBooleanAttribute('attached');
  }
  public set attached(value: boolean ) {
    this._attached = value;
  }
  public resetAttached() {
    this._attached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedInput() {
    return this._attached
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // public_ips - computed: true, optional: false, required: false
  public publicIps(index: string) {
    return new DataAzurermPublicIpsPublicIps(this, 'public_ips', index);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPublicIpsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPublicIpsTimeouts ) {
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
      allocation_type: cdktf.stringToTerraform(this._allocationType),
      attached: cdktf.booleanToTerraform(this._attached),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermPublicIpsTimeoutsToTerraform(this._timeouts),
    };
  }
}
