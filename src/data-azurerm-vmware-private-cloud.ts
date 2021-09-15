// https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVmwarePrivateCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html#name DataAzurermVmwarePrivateCloud#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html#timeouts DataAzurermVmwarePrivateCloud#timeouts}
  */
  readonly timeouts?: DataAzurermVmwarePrivateCloudTimeouts;
}
export class DataAzurermVmwarePrivateCloudCircuit extends cdktf.ComplexComputedList {

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
export class DataAzurermVmwarePrivateCloudManagementCluster extends cdktf.ComplexComputedList {

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}
export interface DataAzurermVmwarePrivateCloudTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html#read DataAzurermVmwarePrivateCloud#read}
  */
  readonly read?: string;
}

function dataAzurermVmwarePrivateCloudTimeoutsToTerraform(struct?: DataAzurermVmwarePrivateCloudTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html azurerm_vmware_private_cloud}
*/
export class DataAzurermVmwarePrivateCloud extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vmware_private_cloud";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/vmware_private_cloud.html azurerm_vmware_private_cloud} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermVmwarePrivateCloudConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermVmwarePrivateCloudConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit - computed: true, optional: false, required: false
  public circuit(index: string) {
    return new DataAzurermVmwarePrivateCloudCircuit(this, 'circuit', index);
  }

  // hcx_cloud_manager_endpoint - computed: true, optional: false, required: false
  public get hcxCloudManagerEndpoint() {
    return this.getStringAttribute('hcx_cloud_manager_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_connection_enabled - computed: true, optional: false, required: false
  public get internetConnectionEnabled() {
    return this.getBooleanAttribute('internet_connection_enabled');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // management_cluster - computed: true, optional: false, required: false
  public managementCluster(index: string) {
    return new DataAzurermVmwarePrivateCloudManagementCluster(this, 'management_cluster', index);
  }

  // management_subnet_cidr - computed: true, optional: false, required: false
  public get managementSubnetCidr() {
    return this.getStringAttribute('management_subnet_cidr');
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

  // network_subnet_cidr - computed: true, optional: false, required: false
  public get networkSubnetCidr() {
    return this.getStringAttribute('network_subnet_cidr');
  }

  // nsxt_certificate_thumbprint - computed: true, optional: false, required: false
  public get nsxtCertificateThumbprint() {
    return this.getStringAttribute('nsxt_certificate_thumbprint');
  }

  // nsxt_manager_endpoint - computed: true, optional: false, required: false
  public get nsxtManagerEndpoint() {
    return this.getStringAttribute('nsxt_manager_endpoint');
  }

  // provisioning_subnet_cidr - computed: true, optional: false, required: false
  public get provisioningSubnetCidr() {
    return this.getStringAttribute('provisioning_subnet_cidr');
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

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // vcenter_certificate_thumbprint - computed: true, optional: false, required: false
  public get vcenterCertificateThumbprint() {
    return this.getStringAttribute('vcenter_certificate_thumbprint');
  }

  // vcsa_endpoint - computed: true, optional: false, required: false
  public get vcsaEndpoint() {
    return this.getStringAttribute('vcsa_endpoint');
  }

  // vmotion_subnet_cidr - computed: true, optional: false, required: false
  public get vmotionSubnetCidr() {
    return this.getStringAttribute('vmotion_subnet_cidr');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVmwarePrivateCloudTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermVmwarePrivateCloudTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermVmwarePrivateCloudTimeoutsToTerraform(this._timeouts),
    };
  }
}
