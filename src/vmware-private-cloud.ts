// https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwarePrivateCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}
  */
  readonly internetConnectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#location VmwarePrivateCloud#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#name VmwarePrivateCloud#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}
  */
  readonly networkSubnetCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#nsxt_password VmwarePrivateCloud#nsxt_password}
  */
  readonly nsxtPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#resource_group_name VmwarePrivateCloud#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#sku_name VmwarePrivateCloud#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#tags VmwarePrivateCloud#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#vcenter_password VmwarePrivateCloud#vcenter_password}
  */
  readonly vcenterPassword?: string;
  /**
  * management_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#management_cluster VmwarePrivateCloud#management_cluster}
  */
  readonly managementCluster: VmwarePrivateCloudManagementCluster;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#timeouts VmwarePrivateCloud#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#size VmwarePrivateCloud#size}
  */
  readonly size: number;
}

function vmwarePrivateCloudManagementClusterToTerraform(struct?: VmwarePrivateCloudManagementClusterOutputReference | VmwarePrivateCloudManagementCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class VmwarePrivateCloudManagementClusterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._size
  }
}
export interface VmwarePrivateCloudTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#create VmwarePrivateCloud#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#delete VmwarePrivateCloud#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#read VmwarePrivateCloud#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html#update VmwarePrivateCloud#update}
  */
  readonly update?: string;
}

function vmwarePrivateCloudTimeoutsToTerraform(struct?: VmwarePrivateCloudTimeoutsOutputReference | VmwarePrivateCloudTimeouts): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html azurerm_vmware_private_cloud}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_private_cloud.html azurerm_vmware_private_cloud} Resource
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
    this._managementCluster = config.managementCluster;
    this._timeouts = config.timeouts;
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
  private _internetConnectionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get internetConnectionEnabled() {
    return this.getBooleanAttribute('internet_connection_enabled') as any;
  }
  public set internetConnectionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._internetConnectionEnabled = value;
  }
  public resetInternetConnectionEnabled() {
    this._internetConnectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetConnectionEnabledInput() {
    return this._internetConnectionEnabled
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
    return this._location
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
    return this._name
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
    return this._networkSubnetCidr
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
  private _nsxtPassword?: string | undefined; 
  public get nsxtPassword() {
    return this.getStringAttribute('nsxt_password');
  }
  public set nsxtPassword(value: string | undefined) {
    this._nsxtPassword = value;
  }
  public resetNsxtPassword() {
    this._nsxtPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtPasswordInput() {
    return this._nsxtPassword
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
    return this._resourceGroupName
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
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vcenter_certificate_thumbprint - computed: true, optional: false, required: false
  public get vcenterCertificateThumbprint() {
    return this.getStringAttribute('vcenter_certificate_thumbprint');
  }

  // vcenter_password - computed: false, optional: true, required: false
  private _vcenterPassword?: string | undefined; 
  public get vcenterPassword() {
    return this.getStringAttribute('vcenter_password');
  }
  public set vcenterPassword(value: string | undefined) {
    this._vcenterPassword = value;
  }
  public resetVcenterPassword() {
    this._vcenterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPasswordInput() {
    return this._vcenterPassword
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
  private _managementCluster?: VmwarePrivateCloudManagementCluster; 
  private __managementClusterOutput = new VmwarePrivateCloudManagementClusterOutputReference(this as any, "management_cluster", true);
  public get managementCluster() {
    return this.__managementClusterOutput;
  }
  public putManagementCluster(value: VmwarePrivateCloudManagementCluster) {
    this._managementCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VmwarePrivateCloudTimeouts | undefined; 
  private __timeoutsOutput = new VmwarePrivateCloudTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VmwarePrivateCloudTimeouts | undefined) {
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
      internet_connection_enabled: cdktf.booleanToTerraform(this._internetConnectionEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_subnet_cidr: cdktf.stringToTerraform(this._networkSubnetCidr),
      nsxt_password: cdktf.stringToTerraform(this._nsxtPassword),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vcenter_password: cdktf.stringToTerraform(this._vcenterPassword),
      management_cluster: vmwarePrivateCloudManagementClusterToTerraform(this._managementCluster),
      timeouts: vmwarePrivateCloudTimeoutsToTerraform(this._timeouts),
    };
  }
}
