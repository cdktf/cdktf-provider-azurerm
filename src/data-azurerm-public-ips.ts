// https://www.terraform.io/docs/providers/azurerm/d/public_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPublicIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#allocation_type DataAzurermPublicIps#allocation_type}
  */
  readonly allocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#attached DataAzurermPublicIps#attached}
  */
  readonly attached?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#attachment_status DataAzurermPublicIps#attachment_status}
  */
  readonly attachmentStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#name_prefix DataAzurermPublicIps#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#resource_group_name DataAzurermPublicIps#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#timeouts DataAzurermPublicIps#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips#read DataAzurermPublicIps#read}
  */
  readonly read?: string;
}

export function dataAzurermPublicIpsTimeoutsToTerraform(struct?: DataAzurermPublicIpsTimeoutsOutputReference | DataAzurermPublicIpsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermPublicIpsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermPublicIpsTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermPublicIpsTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips azurerm_public_ips}
*/
export class DataAzurermPublicIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_public_ips";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/public_ips azurerm_public_ips} Data Source
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
    this._attachmentStatus = config.attachmentStatus;
    this._namePrefix = config.namePrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_type - computed: false, optional: true, required: false
  private _allocationType?: string; 
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }
  public set allocationType(value: string) {
    this._allocationType = value;
  }
  public resetAllocationType() {
    this._allocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTypeInput() {
    return this._allocationType;
  }

  // attached - computed: false, optional: true, required: false
  private _attached?: boolean | cdktf.IResolvable; 
  public get attached() {
    return this.getBooleanAttribute('attached');
  }
  public set attached(value: boolean | cdktf.IResolvable) {
    this._attached = value;
  }
  public resetAttached() {
    this._attached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedInput() {
    return this._attached;
  }

  // attachment_status - computed: false, optional: true, required: false
  private _attachmentStatus?: string; 
  public get attachmentStatus() {
    return this.getStringAttribute('attachment_status');
  }
  public set attachmentStatus(value: string) {
    this._attachmentStatus = value;
  }
  public resetAttachmentStatus() {
    this._attachmentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentStatusInput() {
    return this._attachmentStatus;
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
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // public_ips - computed: true, optional: false, required: false
  public publicIps(index: string) {
    return new DataAzurermPublicIpsPublicIps(this, 'public_ips', index, false);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermPublicIpsTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermPublicIpsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_type: cdktf.stringToTerraform(this._allocationType),
      attached: cdktf.booleanToTerraform(this._attached),
      attachment_status: cdktf.stringToTerraform(this._attachmentStatus),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermPublicIpsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
