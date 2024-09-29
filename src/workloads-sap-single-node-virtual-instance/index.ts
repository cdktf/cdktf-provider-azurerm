// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadsSapSingleNodeVirtualInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}
  */
  readonly appLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}
  */
  readonly sapFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}
  */
  readonly sapProduct: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#identity WorkloadsSapSingleNodeVirtualInstance#identity}
  */
  readonly identity?: WorkloadsSapSingleNodeVirtualInstanceIdentity;
  /**
  * single_server_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#single_server_configuration WorkloadsSapSingleNodeVirtualInstance#single_server_configuration}
  */
  readonly singleServerConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#timeouts WorkloadsSapSingleNodeVirtualInstance#timeouts}
  */
  readonly timeouts?: WorkloadsSapSingleNodeVirtualInstanceTimeouts;
}
export interface WorkloadsSapSingleNodeVirtualInstanceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}
  */
  readonly type: string;
}

export function workloadsSapSingleNodeVirtualInstanceIdentityToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference | WorkloadsSapSingleNodeVirtualInstanceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadsSapSingleNodeVirtualInstanceIdentityToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference | WorkloadsSapSingleNodeVirtualInstanceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}
  */
  readonly numberOfDisks: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}
  */
  readonly volumeName: string;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    sku_name: cdktf.stringToTerraform(struct!.skuName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_disks: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sku_name: {
      value: cdktf.stringToHclTerraform(struct!.skuName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDisks = this._numberOfDisks;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._skuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuName = this._skuName;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfDisks = undefined;
      this._sizeInGb = undefined;
      this._skuName = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfDisks = value.numberOfDisks;
      this._sizeInGb = value.sizeInGb;
      this._skuName = value.skuName;
      this._volumeName = value.volumeName;
    }
  }

  // number_of_disks - computed: false, optional: false, required: true
  private _numberOfDisks?: number; 
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }
  public set numberOfDisks(value: number) {
    this._numberOfDisks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksInput() {
    return this._numberOfDisks;
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
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

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference {
    return new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}
  */
  readonly version: string;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}
  */
  readonly sshPrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshPrivateKey = undefined;
      this._sshPublicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshPrivateKey = value.sshPrivateKey;
      this._sshPublicKey = value.sshPublicKey;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh_private_key - computed: false, optional: false, required: true
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}
  */
  readonly virtualMachineSize: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#image WorkloadsSapSingleNodeVirtualInstance#image}
  */
  readonly image: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage;
  /**
  * os_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#os_profile WorkloadsSapSingleNodeVirtualInstance#os_profile}
  */
  readonly osProfile: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_machine_size: cdktf.stringToTerraform(struct!.virtualMachineSize),
    image: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageToTerraform(struct!.image),
    os_profile: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileToTerraform(struct!.osProfile),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_machine_size: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageList",
    },
    os_profile: {
      value: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileToHclTerraform(struct!.osProfile),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualMachineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineSize = this._virtualMachineSize;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._osProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osProfile = this._osProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualMachineSize = undefined;
      this._image.internalValue = undefined;
      this._osProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualMachineSize = value.virtualMachineSize;
      this._image.internalValue = value.image;
      this._osProfile.internalValue = value.osProfile;
    }
  }

  // virtual_machine_size - computed: false, optional: false, required: true
  private _virtualMachineSize?: string; 
  public get virtualMachineSize() {
    return this.getStringAttribute('virtual_machine_size');
  }
  public set virtualMachineSize(value: string) {
    this._virtualMachineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineSizeInput() {
    return this._virtualMachineSize;
  }

  // image - computed: false, optional: false, required: true
  private _image = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(this, "os_profile");
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile) {
    this._osProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}
  */
  readonly names: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}
  */
  readonly volumeName: string;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._volumeName = value.volumeName;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList extends cdktf.ComplexList {
  public internalValue? : WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference {
    return new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}
  */
  readonly networkInterfaceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}
  */
  readonly osDiskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}
  */
  readonly virtualMachineName?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#data_disk WorkloadsSapSingleNodeVirtualInstance#data_disk}
  */
  readonly dataDisk?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[] | cdktf.IResolvable;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    network_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkInterfaceNames),
    os_disk_name: cdktf.stringToTerraform(struct!.osDiskName),
    virtual_machine_name: cdktf.stringToTerraform(struct!.virtualMachineName),
    data_disk: cdktf.listMapper(workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkInterfaceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.osDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_machine_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._networkInterfaceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceNames = this._networkInterfaceNames;
    }
    if (this._osDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskName = this._osDiskName;
    }
    if (this._virtualMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineName = this._virtualMachineName;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._networkInterfaceNames = undefined;
      this._osDiskName = undefined;
      this._virtualMachineName = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._networkInterfaceNames = value.networkInterfaceNames;
      this._osDiskName = value.osDiskName;
      this._virtualMachineName = value.virtualMachineName;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // network_interface_names - computed: false, optional: true, required: false
  private _networkInterfaceNames?: string[]; 
  public get networkInterfaceNames() {
    return this.getListAttribute('network_interface_names');
  }
  public set networkInterfaceNames(value: string[]) {
    this._networkInterfaceNames = value;
  }
  public resetNetworkInterfaceNames() {
    this._networkInterfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNamesInput() {
    return this._networkInterfaceNames;
  }

  // os_disk_name - computed: false, optional: true, required: false
  private _osDiskName?: string; 
  public get osDiskName() {
    return this.getStringAttribute('os_disk_name');
  }
  public set osDiskName(value: string) {
    this._osDiskName = value;
  }
  public resetOsDiskName() {
    this._osDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskNameInput() {
    return this._osDiskName;
  }

  // virtual_machine_name - computed: false, optional: true, required: false
  private _virtualMachineName?: string; 
  public get virtualMachineName() {
    return this.getStringAttribute('virtual_machine_name');
  }
  public set virtualMachineName(value: string) {
    this._virtualMachineName = value;
  }
  public resetVirtualMachineName() {
    this._virtualMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineNameInput() {
    return this._virtualMachineName;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList(this, "data_disk", true);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}
  */
  readonly appResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}
  */
  readonly secondaryIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * disk_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#disk_volume_configuration WorkloadsSapSingleNodeVirtualInstance#disk_volume_configuration}
  */
  readonly diskVolumeConfiguration?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[] | cdktf.IResolvable;
  /**
  * virtual_machine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_configuration WorkloadsSapSingleNodeVirtualInstance#virtual_machine_configuration}
  */
  readonly virtualMachineConfiguration: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration;
  /**
  * virtual_machine_resource_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_resource_names WorkloadsSapSingleNodeVirtualInstance#virtual_machine_resource_names}
  */
  readonly virtualMachineResourceNames?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames;
}

export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_resource_group_name: cdktf.stringToTerraform(struct!.appResourceGroupName),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    secondary_ip_enabled: cdktf.booleanToTerraform(struct!.secondaryIpEnabled),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    disk_volume_configuration: cdktf.listMapper(workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationToTerraform, true)(struct!.diskVolumeConfiguration),
    virtual_machine_configuration: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationToTerraform(struct!.virtualMachineConfiguration),
    virtual_machine_resource_names: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesToTerraform(struct!.virtualMachineResourceNames),
  }
}


export function workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference | WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.appResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.secondaryIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_volume_configuration: {
      value: cdktf.listMapperHcl(workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationToHclTerraform, true)(struct!.diskVolumeConfiguration),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList",
    },
    virtual_machine_configuration: {
      value: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationToHclTerraform(struct!.virtualMachineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationList",
    },
    virtual_machine_resource_names: {
      value: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesToHclTerraform(struct!.virtualMachineResourceNames),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appResourceGroupName = this._appResourceGroupName;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._secondaryIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpEnabled = this._secondaryIpEnabled;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._diskVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskVolumeConfiguration = this._diskVolumeConfiguration?.internalValue;
    }
    if (this._virtualMachineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineConfiguration = this._virtualMachineConfiguration?.internalValue;
    }
    if (this._virtualMachineResourceNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineResourceNames = this._virtualMachineResourceNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appResourceGroupName = undefined;
      this._databaseType = undefined;
      this._secondaryIpEnabled = undefined;
      this._subnetId = undefined;
      this._diskVolumeConfiguration.internalValue = undefined;
      this._virtualMachineConfiguration.internalValue = undefined;
      this._virtualMachineResourceNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appResourceGroupName = value.appResourceGroupName;
      this._databaseType = value.databaseType;
      this._secondaryIpEnabled = value.secondaryIpEnabled;
      this._subnetId = value.subnetId;
      this._diskVolumeConfiguration.internalValue = value.diskVolumeConfiguration;
      this._virtualMachineConfiguration.internalValue = value.virtualMachineConfiguration;
      this._virtualMachineResourceNames.internalValue = value.virtualMachineResourceNames;
    }
  }

  // app_resource_group_name - computed: false, optional: false, required: true
  private _appResourceGroupName?: string; 
  public get appResourceGroupName() {
    return this.getStringAttribute('app_resource_group_name');
  }
  public set appResourceGroupName(value: string) {
    this._appResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourceGroupNameInput() {
    return this._appResourceGroupName;
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // secondary_ip_enabled - computed: false, optional: true, required: false
  private _secondaryIpEnabled?: boolean | cdktf.IResolvable; 
  public get secondaryIpEnabled() {
    return this.getBooleanAttribute('secondary_ip_enabled');
  }
  public set secondaryIpEnabled(value: boolean | cdktf.IResolvable) {
    this._secondaryIpEnabled = value;
  }
  public resetSecondaryIpEnabled() {
    this._secondaryIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpEnabledInput() {
    return this._secondaryIpEnabled;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // disk_volume_configuration - computed: false, optional: true, required: false
  private _diskVolumeConfiguration = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList(this, "disk_volume_configuration", true);
  public get diskVolumeConfiguration() {
    return this._diskVolumeConfiguration;
  }
  public putDiskVolumeConfiguration(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration[] | cdktf.IResolvable) {
    this._diskVolumeConfiguration.internalValue = value;
  }
  public resetDiskVolumeConfiguration() {
    this._diskVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskVolumeConfigurationInput() {
    return this._diskVolumeConfiguration.internalValue;
  }

  // virtual_machine_configuration - computed: false, optional: false, required: true
  private _virtualMachineConfiguration = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference(this, "virtual_machine_configuration");
  public get virtualMachineConfiguration() {
    return this._virtualMachineConfiguration;
  }
  public putVirtualMachineConfiguration(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration) {
    this._virtualMachineConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineConfigurationInput() {
    return this._virtualMachineConfiguration.internalValue;
  }

  // virtual_machine_resource_names - computed: false, optional: true, required: false
  private _virtualMachineResourceNames = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference(this, "virtual_machine_resource_names");
  public get virtualMachineResourceNames() {
    return this._virtualMachineResourceNames;
  }
  public putVirtualMachineResourceNames(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames) {
    this._virtualMachineResourceNames.internalValue = value;
  }
  public resetVirtualMachineResourceNames() {
    this._virtualMachineResourceNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineResourceNamesInput() {
    return this._virtualMachineResourceNames.internalValue;
  }
}
export interface WorkloadsSapSingleNodeVirtualInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}
  */
  readonly update?: string;
}

export function workloadsSapSingleNodeVirtualInstanceTimeoutsToTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function workloadsSapSingleNodeVirtualInstanceTimeoutsToHclTerraform(struct?: WorkloadsSapSingleNodeVirtualInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkloadsSapSingleNodeVirtualInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: WorkloadsSapSingleNodeVirtualInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance azurerm_workloads_sap_single_node_virtual_instance}
*/
export class WorkloadsSapSingleNodeVirtualInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_workloads_sap_single_node_virtual_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkloadsSapSingleNodeVirtualInstance to import
  * @param importFromId The id of the existing WorkloadsSapSingleNodeVirtualInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkloadsSapSingleNodeVirtualInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_workloads_sap_single_node_virtual_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/workloads_sap_single_node_virtual_instance azurerm_workloads_sap_single_node_virtual_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadsSapSingleNodeVirtualInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkloadsSapSingleNodeVirtualInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_workloads_sap_single_node_virtual_instance',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appLocation = config.appLocation;
    this._environment = config.environment;
    this._id = config.id;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sapFqdn = config.sapFqdn;
    this._sapProduct = config.sapProduct;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._singleServerConfiguration.internalValue = config.singleServerConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_location - computed: false, optional: false, required: true
  private _appLocation?: string; 
  public get appLocation() {
    return this.getStringAttribute('app_location');
  }
  public set appLocation(value: string) {
    this._appLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appLocationInput() {
    return this._appLocation;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // managed_resource_group_name - computed: false, optional: true, required: false
  private _managedResourceGroupName?: string; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName;
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

  // sap_fqdn - computed: false, optional: false, required: true
  private _sapFqdn?: string; 
  public get sapFqdn() {
    return this.getStringAttribute('sap_fqdn');
  }
  public set sapFqdn(value: string) {
    this._sapFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sapFqdnInput() {
    return this._sapFqdn;
  }

  // sap_product - computed: false, optional: false, required: true
  private _sapProduct?: string; 
  public get sapProduct() {
    return this.getStringAttribute('sap_product');
  }
  public set sapProduct(value: string) {
    this._sapProduct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sapProductInput() {
    return this._sapProduct;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: WorkloadsSapSingleNodeVirtualInstanceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // single_server_configuration - computed: false, optional: false, required: true
  private _singleServerConfiguration = new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference(this, "single_server_configuration");
  public get singleServerConfiguration() {
    return this._singleServerConfiguration;
  }
  public putSingleServerConfiguration(value: WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration) {
    this._singleServerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleServerConfigurationInput() {
    return this._singleServerConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkloadsSapSingleNodeVirtualInstanceTimeouts) {
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
      app_location: cdktf.stringToTerraform(this._appLocation),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sap_fqdn: cdktf.stringToTerraform(this._sapFqdn),
      sap_product: cdktf.stringToTerraform(this._sapProduct),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: workloadsSapSingleNodeVirtualInstanceIdentityToTerraform(this._identity.internalValue),
      single_server_configuration: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationToTerraform(this._singleServerConfiguration.internalValue),
      timeouts: workloadsSapSingleNodeVirtualInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_location: {
        value: cdktf.stringToHclTerraform(this._appLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._managedResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_fqdn: {
        value: cdktf.stringToHclTerraform(this._sapFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sap_product: {
        value: cdktf.stringToHclTerraform(this._sapProduct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity: {
        value: workloadsSapSingleNodeVirtualInstanceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadsSapSingleNodeVirtualInstanceIdentityList",
      },
      single_server_configuration: {
        value: workloadsSapSingleNodeVirtualInstanceSingleServerConfigurationToHclTerraform(this._singleServerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationList",
      },
      timeouts: {
        value: workloadsSapSingleNodeVirtualInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkloadsSapSingleNodeVirtualInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
