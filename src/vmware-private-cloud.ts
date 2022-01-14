// https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwarePrivateCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}
  */
  readonly internetConnectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#location VmwarePrivateCloud#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#name VmwarePrivateCloud#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}
  */
  readonly networkSubnetCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}
  */
  readonly nsxtPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#tags VmwarePrivateCloud#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}
  */
  readonly vcenterPassword?: string;
  /**
  * management_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}
  */
  readonly managementCluster: VmwarePrivateCloudManagementCluster;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}
  */
  readonly timeouts?: VmwarePrivateCloudTimeouts;
}
export class VmwarePrivateCloudCircuit extends cdktf.ComplexComputedList {

  // express_route_id - computed: true, optional: false, required: false
  public get expressRouteId() {
    return this.getStringAttribute('express_route_id');
  }

  // express_route_private_peering_id - computed: true, optional: false, required: false
  public get expressRoutePrivatePeeringId() {
    return this.getStringAttribute('express_route_private_peering_id');
  }

  // primary_subnet_cidr - computed: true, optional: false, required: false
  public get primarySubnetCidr() {
    return this.getStringAttribute('primary_subnet_cidr');
  }

  // secondary_subnet_cidr - computed: true, optional: false, required: false
  public get secondarySubnetCidr() {
    return this.getStringAttribute('secondary_subnet_cidr');
  }
}
export interface VmwarePrivateCloudManagementCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#size VmwarePrivateCloud#size}
  */
  readonly size: number;
}

export function vmwarePrivateCloudManagementClusterToTerraform(struct?: VmwarePrivateCloudManagementClusterOutputReference | VmwarePrivateCloudManagementCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class VmwarePrivateCloudManagementClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VmwarePrivateCloudManagementCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwarePrivateCloudManagementCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface VmwarePrivateCloudTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#create VmwarePrivateCloud#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#delete VmwarePrivateCloud#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#read VmwarePrivateCloud#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud#update VmwarePrivateCloud#update}
  */
  readonly update?: string;
}

export function vmwarePrivateCloudTimeoutsToTerraform(struct?: VmwarePrivateCloudTimeoutsOutputReference | VmwarePrivateCloudTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VmwarePrivateCloudTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VmwarePrivateCloudTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwarePrivateCloudTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud azurerm_vmware_private_cloud}
*/
export class VmwarePrivateCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vmware_private_cloud";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud azurerm_vmware_private_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwarePrivateCloudConfig
  */
  public constructor(scope: Construct, id: string, config: VmwarePrivateCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vmware_private_cloud',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._internetConnectionEnabled = config.internetConnectionEnabled;
    this._location = config.location;
    this._name = config.name;
    this._networkSubnetCidr = config.networkSubnetCidr;
    this._nsxtPassword = config.nsxtPassword;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._vcenterPassword = config.vcenterPassword;
    this._managementCluster.internalValue = config.managementCluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit - computed: true, optional: false, required: false
  public circuit(index: string) {
    return new VmwarePrivateCloudCircuit(this, 'circuit', index);
  }

  // hcx_cloud_manager_endpoint - computed: true, optional: false, required: false
  public get hcxCloudManagerEndpoint() {
    return this.getStringAttribute('hcx_cloud_manager_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_connection_enabled - computed: false, optional: true, required: false
  private _internetConnectionEnabled?: boolean | cdktf.IResolvable; 
  public get internetConnectionEnabled() {
    return this.getBooleanAttribute('internet_connection_enabled') as any;
  }
  public set internetConnectionEnabled(value: boolean | cdktf.IResolvable) {
    this._internetConnectionEnabled = value;
  }
  public resetInternetConnectionEnabled() {
    this._internetConnectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetConnectionEnabledInput() {
    return this._internetConnectionEnabled;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_subnet_cidr - computed: true, optional: false, required: false
  public get managementSubnetCidr() {
    return this.getStringAttribute('management_subnet_cidr');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_subnet_cidr - computed: false, optional: false, required: true
  private _networkSubnetCidr?: string; 
  public get networkSubnetCidr() {
    return this.getStringAttribute('network_subnet_cidr');
  }
  public set networkSubnetCidr(value: string) {
    this._networkSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSubnetCidrInput() {
    return this._networkSubnetCidr;
  }

  // nsxt_certificate_thumbprint - computed: true, optional: false, required: false
  public get nsxtCertificateThumbprint() {
    return this.getStringAttribute('nsxt_certificate_thumbprint');
  }

  // nsxt_manager_endpoint - computed: true, optional: false, required: false
  public get nsxtManagerEndpoint() {
    return this.getStringAttribute('nsxt_manager_endpoint');
  }

  // nsxt_password - computed: false, optional: true, required: false
  private _nsxtPassword?: string; 
  public get nsxtPassword() {
    return this.getStringAttribute('nsxt_password');
  }
  public set nsxtPassword(value: string) {
    this._nsxtPassword = value;
  }
  public resetNsxtPassword() {
    this._nsxtPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtPasswordInput() {
    return this._nsxtPassword;
  }

  // provisioning_subnet_cidr - computed: true, optional: false, required: false
  public get provisioningSubnetCidr() {
    return this.getStringAttribute('provisioning_subnet_cidr');
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vcenter_certificate_thumbprint - computed: true, optional: false, required: false
  public get vcenterCertificateThumbprint() {
    return this.getStringAttribute('vcenter_certificate_thumbprint');
  }

  // vcenter_password - computed: false, optional: true, required: false
  private _vcenterPassword?: string; 
  public get vcenterPassword() {
    return this.getStringAttribute('vcenter_password');
  }
  public set vcenterPassword(value: string) {
    this._vcenterPassword = value;
  }
  public resetVcenterPassword() {
    this._vcenterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPasswordInput() {
    return this._vcenterPassword;
  }

  // vcsa_endpoint - computed: true, optional: false, required: false
  public get vcsaEndpoint() {
    return this.getStringAttribute('vcsa_endpoint');
  }

  // vmotion_subnet_cidr - computed: true, optional: false, required: false
  public get vmotionSubnetCidr() {
    return this.getStringAttribute('vmotion_subnet_cidr');
  }

  // management_cluster - computed: false, optional: false, required: true
  private _managementCluster = new VmwarePrivateCloudManagementClusterOutputReference(this as any, "management_cluster", true);
  public get managementCluster() {
    return this._managementCluster;
  }
  public putManagementCluster(value: VmwarePrivateCloudManagementCluster) {
    this._managementCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmwarePrivateCloudTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmwarePrivateCloudTimeouts) {
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
      internet_connection_enabled: cdktf.booleanToTerraform(this._internetConnectionEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_subnet_cidr: cdktf.stringToTerraform(this._networkSubnetCidr),
      nsxt_password: cdktf.stringToTerraform(this._nsxtPassword),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vcenter_password: cdktf.stringToTerraform(this._vcenterPassword),
      management_cluster: vmwarePrivateCloudManagementClusterToTerraform(this._managementCluster.internalValue),
      timeouts: vmwarePrivateCloudTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
