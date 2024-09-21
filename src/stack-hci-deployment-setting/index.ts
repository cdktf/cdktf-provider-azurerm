// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackHciDeploymentSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}
  */
  readonly arcResourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}
  */
  readonly stackHciClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}
  */
  readonly version: string;
  /**
  * scale_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#scale_unit StackHciDeploymentSetting#scale_unit}
  */
  readonly scaleUnit: StackHciDeploymentSettingScaleUnit[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#timeouts StackHciDeploymentSetting#timeouts}
  */
  readonly timeouts?: StackHciDeploymentSettingTimeouts;
}
export interface StackHciDeploymentSettingScaleUnitCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}
  */
  readonly azureServiceEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}
  */
  readonly cloudAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}
  */
  readonly witnessPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}
  */
  readonly witnessType: string;
}

export function stackHciDeploymentSettingScaleUnitClusterToTerraform(struct?: StackHciDeploymentSettingScaleUnitClusterOutputReference | StackHciDeploymentSettingScaleUnitCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_service_endpoint: cdktf.stringToTerraform(struct!.azureServiceEndpoint),
    cloud_account_name: cdktf.stringToTerraform(struct!.cloudAccountName),
    name: cdktf.stringToTerraform(struct!.name),
    witness_path: cdktf.stringToTerraform(struct!.witnessPath),
    witness_type: cdktf.stringToTerraform(struct!.witnessType),
  }
}


export function stackHciDeploymentSettingScaleUnitClusterToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitClusterOutputReference | StackHciDeploymentSettingScaleUnitCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_service_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.azureServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_account_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    witness_path: {
      value: cdktf.stringToHclTerraform(struct!.witnessPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    witness_type: {
      value: cdktf.stringToHclTerraform(struct!.witnessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureServiceEndpoint = this._azureServiceEndpoint;
    }
    if (this._cloudAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountName = this._cloudAccountName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._witnessPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.witnessPath = this._witnessPath;
    }
    if (this._witnessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.witnessType = this._witnessType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureServiceEndpoint = undefined;
      this._cloudAccountName = undefined;
      this._name = undefined;
      this._witnessPath = undefined;
      this._witnessType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureServiceEndpoint = value.azureServiceEndpoint;
      this._cloudAccountName = value.cloudAccountName;
      this._name = value.name;
      this._witnessPath = value.witnessPath;
      this._witnessType = value.witnessType;
    }
  }

  // azure_service_endpoint - computed: false, optional: false, required: true
  private _azureServiceEndpoint?: string; 
  public get azureServiceEndpoint() {
    return this.getStringAttribute('azure_service_endpoint');
  }
  public set azureServiceEndpoint(value: string) {
    this._azureServiceEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceEndpointInput() {
    return this._azureServiceEndpoint;
  }

  // cloud_account_name - computed: false, optional: false, required: true
  private _cloudAccountName?: string; 
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }
  public set cloudAccountName(value: string) {
    this._cloudAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountNameInput() {
    return this._cloudAccountName;
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

  // witness_path - computed: false, optional: false, required: true
  private _witnessPath?: string; 
  public get witnessPath() {
    return this.getStringAttribute('witness_path');
  }
  public set witnessPath(value: string) {
    this._witnessPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get witnessPathInput() {
    return this._witnessPath;
  }

  // witness_type - computed: false, optional: false, required: true
  private _witnessType?: string; 
  public get witnessType() {
    return this.getStringAttribute('witness_type');
  }
  public set witnessType(value: string) {
    this._witnessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get witnessTypeInput() {
    return this._witnessType;
  }
}
export interface StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}
  */
  readonly jumboPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}
  */
  readonly networkDirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}
  */
  readonly networkDirectTechnology?: string;
}

export function stackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideToTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference | StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo_packet: cdktf.stringToTerraform(struct!.jumboPacket),
    network_direct: cdktf.stringToTerraform(struct!.networkDirect),
    network_direct_technology: cdktf.stringToTerraform(struct!.networkDirectTechnology),
  }
}


export function stackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference | StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo_packet: {
      value: cdktf.stringToHclTerraform(struct!.jumboPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_direct: {
      value: cdktf.stringToHclTerraform(struct!.networkDirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_direct_technology: {
      value: cdktf.stringToHclTerraform(struct!.networkDirectTechnology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumboPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboPacket = this._jumboPacket;
    }
    if (this._networkDirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDirect = this._networkDirect;
    }
    if (this._networkDirectTechnology !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDirectTechnology = this._networkDirectTechnology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumboPacket = undefined;
      this._networkDirect = undefined;
      this._networkDirectTechnology = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumboPacket = value.jumboPacket;
      this._networkDirect = value.networkDirect;
      this._networkDirectTechnology = value.networkDirectTechnology;
    }
  }

  // jumbo_packet - computed: false, optional: true, required: false
  private _jumboPacket?: string; 
  public get jumboPacket() {
    return this.getStringAttribute('jumbo_packet');
  }
  public set jumboPacket(value: string) {
    this._jumboPacket = value;
  }
  public resetJumboPacket() {
    this._jumboPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboPacketInput() {
    return this._jumboPacket;
  }

  // network_direct - computed: false, optional: true, required: false
  private _networkDirect?: string; 
  public get networkDirect() {
    return this.getStringAttribute('network_direct');
  }
  public set networkDirect(value: string) {
    this._networkDirect = value;
  }
  public resetNetworkDirect() {
    this._networkDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectInput() {
    return this._networkDirect;
  }

  // network_direct_technology - computed: false, optional: true, required: false
  private _networkDirectTechnology?: string; 
  public get networkDirectTechnology() {
    return this.getStringAttribute('network_direct_technology');
  }
  public set networkDirectTechnology(value: string) {
    this._networkDirectTechnology = value;
  }
  public resetNetworkDirectTechnology() {
    this._networkDirectTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectTechnologyInput() {
    return this._networkDirectTechnology;
  }
}
export interface StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}
  */
  readonly bandwidthPercentageSmb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}
  */
  readonly priorityValue8021ActionCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}
  */
  readonly priorityValue8021ActionSmb?: string;
}

export function stackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideToTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference | StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_percentage_smb: cdktf.stringToTerraform(struct!.bandwidthPercentageSmb),
    priority_value8021_action_cluster: cdktf.stringToTerraform(struct!.priorityValue8021ActionCluster),
    priority_value8021_action_smb: cdktf.stringToTerraform(struct!.priorityValue8021ActionSmb),
  }
}


export function stackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference | StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_percentage_smb: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPercentageSmb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_value8021_action_cluster: {
      value: cdktf.stringToHclTerraform(struct!.priorityValue8021ActionCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_value8021_action_smb: {
      value: cdktf.stringToHclTerraform(struct!.priorityValue8021ActionSmb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthPercentageSmb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPercentageSmb = this._bandwidthPercentageSmb;
    }
    if (this._priorityValue8021ActionCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityValue8021ActionCluster = this._priorityValue8021ActionCluster;
    }
    if (this._priorityValue8021ActionSmb !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityValue8021ActionSmb = this._priorityValue8021ActionSmb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthPercentageSmb = undefined;
      this._priorityValue8021ActionCluster = undefined;
      this._priorityValue8021ActionSmb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthPercentageSmb = value.bandwidthPercentageSmb;
      this._priorityValue8021ActionCluster = value.priorityValue8021ActionCluster;
      this._priorityValue8021ActionSmb = value.priorityValue8021ActionSmb;
    }
  }

  // bandwidth_percentage_smb - computed: false, optional: true, required: false
  private _bandwidthPercentageSmb?: string; 
  public get bandwidthPercentageSmb() {
    return this.getStringAttribute('bandwidth_percentage_smb');
  }
  public set bandwidthPercentageSmb(value: string) {
    this._bandwidthPercentageSmb = value;
  }
  public resetBandwidthPercentageSmb() {
    this._bandwidthPercentageSmb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPercentageSmbInput() {
    return this._bandwidthPercentageSmb;
  }

  // priority_value8021_action_cluster - computed: false, optional: true, required: false
  private _priorityValue8021ActionCluster?: string; 
  public get priorityValue8021ActionCluster() {
    return this.getStringAttribute('priority_value8021_action_cluster');
  }
  public set priorityValue8021ActionCluster(value: string) {
    this._priorityValue8021ActionCluster = value;
  }
  public resetPriorityValue8021ActionCluster() {
    this._priorityValue8021ActionCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityValue8021ActionClusterInput() {
    return this._priorityValue8021ActionCluster;
  }

  // priority_value8021_action_smb - computed: false, optional: true, required: false
  private _priorityValue8021ActionSmb?: string; 
  public get priorityValue8021ActionSmb() {
    return this.getStringAttribute('priority_value8021_action_smb');
  }
  public set priorityValue8021ActionSmb(value: string) {
    this._priorityValue8021ActionSmb = value;
  }
  public resetPriorityValue8021ActionSmb() {
    this._priorityValue8021ActionSmb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityValue8021ActionSmbInput() {
    return this._priorityValue8021ActionSmb;
  }
}
export interface StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}
  */
  readonly enableIov?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}
  */
  readonly loadBalancingAlgorithm?: string;
}

export function stackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideToTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference | StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_iov: cdktf.stringToTerraform(struct!.enableIov),
    load_balancing_algorithm: cdktf.stringToTerraform(struct!.loadBalancingAlgorithm),
  }
}


export function stackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference | StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_iov: {
      value: cdktf.stringToHclTerraform(struct!.enableIov),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIov !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIov = this._enableIov;
    }
    if (this._loadBalancingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingAlgorithm = this._loadBalancingAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIov = undefined;
      this._loadBalancingAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIov = value.enableIov;
      this._loadBalancingAlgorithm = value.loadBalancingAlgorithm;
    }
  }

  // enable_iov - computed: false, optional: true, required: false
  private _enableIov?: string; 
  public get enableIov() {
    return this.getStringAttribute('enable_iov');
  }
  public set enableIov(value: string) {
    this._enableIov = value;
  }
  public resetEnableIov() {
    this._enableIov = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIovInput() {
    return this._enableIov;
  }

  // load_balancing_algorithm - computed: false, optional: true, required: false
  private _loadBalancingAlgorithm?: string; 
  public get loadBalancingAlgorithm() {
    return this.getStringAttribute('load_balancing_algorithm');
  }
  public set loadBalancingAlgorithm(value: string) {
    this._loadBalancingAlgorithm = value;
  }
  public resetLoadBalancingAlgorithm() {
    this._loadBalancingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingAlgorithmInput() {
    return this._loadBalancingAlgorithm;
  }
}
export interface StackHciDeploymentSettingScaleUnitHostNetworkIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}
  */
  readonly adapter: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}
  */
  readonly adapterPropertyOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}
  */
  readonly qosPolicyOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}
  */
  readonly trafficType: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}
  */
  readonly virtualSwitchConfigurationOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * adapter_property_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#adapter_property_override StackHciDeploymentSetting#adapter_property_override}
  */
  readonly adapterPropertyOverride?: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride;
  /**
  * qos_policy_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#qos_policy_override StackHciDeploymentSetting#qos_policy_override}
  */
  readonly qosPolicyOverride?: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride;
  /**
  * virtual_switch_configuration_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override StackHciDeploymentSetting#virtual_switch_configuration_override}
  */
  readonly virtualSwitchConfigurationOverride?: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride;
}

export function stackHciDeploymentSettingScaleUnitHostNetworkIntentToTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adapter),
    adapter_property_override_enabled: cdktf.booleanToTerraform(struct!.adapterPropertyOverrideEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    qos_policy_override_enabled: cdktf.booleanToTerraform(struct!.qosPolicyOverrideEnabled),
    traffic_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trafficType),
    virtual_switch_configuration_override_enabled: cdktf.booleanToTerraform(struct!.virtualSwitchConfigurationOverrideEnabled),
    adapter_property_override: stackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideToTerraform(struct!.adapterPropertyOverride),
    qos_policy_override: stackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideToTerraform(struct!.qosPolicyOverride),
    virtual_switch_configuration_override: stackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideToTerraform(struct!.virtualSwitchConfigurationOverride),
  }
}


export function stackHciDeploymentSettingScaleUnitHostNetworkIntentToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkIntent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adapter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    adapter_property_override_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.adapterPropertyOverrideEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy_override_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.qosPolicyOverrideEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trafficType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_switch_configuration_override_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.virtualSwitchConfigurationOverrideEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    adapter_property_override: {
      value: stackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideToHclTerraform(struct!.adapterPropertyOverride),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideList",
    },
    qos_policy_override: {
      value: stackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideToHclTerraform(struct!.qosPolicyOverride),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideList",
    },
    virtual_switch_configuration_override: {
      value: stackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideToHclTerraform(struct!.virtualSwitchConfigurationOverride),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackHciDeploymentSettingScaleUnitHostNetworkIntent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapter !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapter = this._adapter;
    }
    if (this._adapterPropertyOverrideEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterPropertyOverrideEnabled = this._adapterPropertyOverrideEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._qosPolicyOverrideEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicyOverrideEnabled = this._qosPolicyOverrideEnabled;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    if (this._virtualSwitchConfigurationOverrideEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSwitchConfigurationOverrideEnabled = this._virtualSwitchConfigurationOverrideEnabled;
    }
    if (this._adapterPropertyOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterPropertyOverride = this._adapterPropertyOverride?.internalValue;
    }
    if (this._qosPolicyOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicyOverride = this._qosPolicyOverride?.internalValue;
    }
    if (this._virtualSwitchConfigurationOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSwitchConfigurationOverride = this._virtualSwitchConfigurationOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitHostNetworkIntent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapter = undefined;
      this._adapterPropertyOverrideEnabled = undefined;
      this._name = undefined;
      this._qosPolicyOverrideEnabled = undefined;
      this._trafficType = undefined;
      this._virtualSwitchConfigurationOverrideEnabled = undefined;
      this._adapterPropertyOverride.internalValue = undefined;
      this._qosPolicyOverride.internalValue = undefined;
      this._virtualSwitchConfigurationOverride.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapter = value.adapter;
      this._adapterPropertyOverrideEnabled = value.adapterPropertyOverrideEnabled;
      this._name = value.name;
      this._qosPolicyOverrideEnabled = value.qosPolicyOverrideEnabled;
      this._trafficType = value.trafficType;
      this._virtualSwitchConfigurationOverrideEnabled = value.virtualSwitchConfigurationOverrideEnabled;
      this._adapterPropertyOverride.internalValue = value.adapterPropertyOverride;
      this._qosPolicyOverride.internalValue = value.qosPolicyOverride;
      this._virtualSwitchConfigurationOverride.internalValue = value.virtualSwitchConfigurationOverride;
    }
  }

  // adapter - computed: false, optional: false, required: true
  private _adapter?: string[]; 
  public get adapter() {
    return this.getListAttribute('adapter');
  }
  public set adapter(value: string[]) {
    this._adapter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterInput() {
    return this._adapter;
  }

  // adapter_property_override_enabled - computed: false, optional: true, required: false
  private _adapterPropertyOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get adapterPropertyOverrideEnabled() {
    return this.getBooleanAttribute('adapter_property_override_enabled');
  }
  public set adapterPropertyOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._adapterPropertyOverrideEnabled = value;
  }
  public resetAdapterPropertyOverrideEnabled() {
    this._adapterPropertyOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterPropertyOverrideEnabledInput() {
    return this._adapterPropertyOverrideEnabled;
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

  // qos_policy_override_enabled - computed: false, optional: true, required: false
  private _qosPolicyOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get qosPolicyOverrideEnabled() {
    return this.getBooleanAttribute('qos_policy_override_enabled');
  }
  public set qosPolicyOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._qosPolicyOverrideEnabled = value;
  }
  public resetQosPolicyOverrideEnabled() {
    this._qosPolicyOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyOverrideEnabledInput() {
    return this._qosPolicyOverrideEnabled;
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string[]; 
  public get trafficType() {
    return this.getListAttribute('traffic_type');
  }
  public set trafficType(value: string[]) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // virtual_switch_configuration_override_enabled - computed: false, optional: true, required: false
  private _virtualSwitchConfigurationOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get virtualSwitchConfigurationOverrideEnabled() {
    return this.getBooleanAttribute('virtual_switch_configuration_override_enabled');
  }
  public set virtualSwitchConfigurationOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._virtualSwitchConfigurationOverrideEnabled = value;
  }
  public resetVirtualSwitchConfigurationOverrideEnabled() {
    this._virtualSwitchConfigurationOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSwitchConfigurationOverrideEnabledInput() {
    return this._virtualSwitchConfigurationOverrideEnabled;
  }

  // adapter_property_override - computed: false, optional: true, required: false
  private _adapterPropertyOverride = new StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference(this, "adapter_property_override");
  public get adapterPropertyOverride() {
    return this._adapterPropertyOverride;
  }
  public putAdapterPropertyOverride(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride) {
    this._adapterPropertyOverride.internalValue = value;
  }
  public resetAdapterPropertyOverride() {
    this._adapterPropertyOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterPropertyOverrideInput() {
    return this._adapterPropertyOverride.internalValue;
  }

  // qos_policy_override - computed: false, optional: true, required: false
  private _qosPolicyOverride = new StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference(this, "qos_policy_override");
  public get qosPolicyOverride() {
    return this._qosPolicyOverride;
  }
  public putQosPolicyOverride(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride) {
    this._qosPolicyOverride.internalValue = value;
  }
  public resetQosPolicyOverride() {
    this._qosPolicyOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyOverrideInput() {
    return this._qosPolicyOverride.internalValue;
  }

  // virtual_switch_configuration_override - computed: false, optional: true, required: false
  private _virtualSwitchConfigurationOverride = new StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference(this, "virtual_switch_configuration_override");
  public get virtualSwitchConfigurationOverride() {
    return this._virtualSwitchConfigurationOverride;
  }
  public putVirtualSwitchConfigurationOverride(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride) {
    this._virtualSwitchConfigurationOverride.internalValue = value;
  }
  public resetVirtualSwitchConfigurationOverride() {
    this._virtualSwitchConfigurationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSwitchConfigurationOverrideInput() {
    return this._virtualSwitchConfigurationOverride.internalValue;
  }
}

export class StackHciDeploymentSettingScaleUnitHostNetworkIntentList extends cdktf.ComplexList {
  public internalValue? : StackHciDeploymentSettingScaleUnitHostNetworkIntent[] | cdktf.IResolvable

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
  public get(index: number): StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference {
    return new StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}
  */
  readonly networkAdapterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}
  */
  readonly vlanId: string;
}

export function stackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkToTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_adapter_name: cdktf.stringToTerraform(struct!.networkAdapterName),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function stackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_adapter_name: {
      value: cdktf.stringToHclTerraform(struct!.networkAdapterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkAdapterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAdapterName = this._networkAdapterName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._networkAdapterName = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._networkAdapterName = value.networkAdapterName;
      this._vlanId = value.vlanId;
    }
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

  // network_adapter_name - computed: false, optional: false, required: true
  private _networkAdapterName?: string; 
  public get networkAdapterName() {
    return this.getStringAttribute('network_adapter_name');
  }
  public set networkAdapterName(value: string) {
    this._networkAdapterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAdapterNameInput() {
    return this._networkAdapterName;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList extends cdktf.ComplexList {
  public internalValue? : StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[] | cdktf.IResolvable

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
  public get(index: number): StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference {
    return new StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackHciDeploymentSettingScaleUnitHostNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}
  */
  readonly storageAutoIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}
  */
  readonly storageConnectivitySwitchlessEnabled?: boolean | cdktf.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#intent StackHciDeploymentSetting#intent}
  */
  readonly intent: StackHciDeploymentSettingScaleUnitHostNetworkIntent[] | cdktf.IResolvable;
  /**
  * storage_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#storage_network StackHciDeploymentSetting#storage_network}
  */
  readonly storageNetwork: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[] | cdktf.IResolvable;
}

export function stackHciDeploymentSettingScaleUnitHostNetworkToTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkOutputReference | StackHciDeploymentSettingScaleUnitHostNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_auto_ip_enabled: cdktf.booleanToTerraform(struct!.storageAutoIpEnabled),
    storage_connectivity_switchless_enabled: cdktf.booleanToTerraform(struct!.storageConnectivitySwitchlessEnabled),
    intent: cdktf.listMapper(stackHciDeploymentSettingScaleUnitHostNetworkIntentToTerraform, true)(struct!.intent),
    storage_network: cdktf.listMapper(stackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkToTerraform, true)(struct!.storageNetwork),
  }
}


export function stackHciDeploymentSettingScaleUnitHostNetworkToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitHostNetworkOutputReference | StackHciDeploymentSettingScaleUnitHostNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_auto_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.storageAutoIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_connectivity_switchless_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.storageConnectivitySwitchlessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intent: {
      value: cdktf.listMapperHcl(stackHciDeploymentSettingScaleUnitHostNetworkIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitHostNetworkIntentList",
    },
    storage_network: {
      value: cdktf.listMapperHcl(stackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkToHclTerraform, true)(struct!.storageNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitHostNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitHostNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAutoIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAutoIpEnabled = this._storageAutoIpEnabled;
    }
    if (this._storageConnectivitySwitchlessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConnectivitySwitchlessEnabled = this._storageConnectivitySwitchlessEnabled;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    if (this._storageNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitHostNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAutoIpEnabled = undefined;
      this._storageConnectivitySwitchlessEnabled = undefined;
      this._intent.internalValue = undefined;
      this._storageNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAutoIpEnabled = value.storageAutoIpEnabled;
      this._storageConnectivitySwitchlessEnabled = value.storageConnectivitySwitchlessEnabled;
      this._intent.internalValue = value.intent;
      this._storageNetwork.internalValue = value.storageNetwork;
    }
  }

  // storage_auto_ip_enabled - computed: false, optional: true, required: false
  private _storageAutoIpEnabled?: boolean | cdktf.IResolvable; 
  public get storageAutoIpEnabled() {
    return this.getBooleanAttribute('storage_auto_ip_enabled');
  }
  public set storageAutoIpEnabled(value: boolean | cdktf.IResolvable) {
    this._storageAutoIpEnabled = value;
  }
  public resetStorageAutoIpEnabled() {
    this._storageAutoIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAutoIpEnabledInput() {
    return this._storageAutoIpEnabled;
  }

  // storage_connectivity_switchless_enabled - computed: false, optional: true, required: false
  private _storageConnectivitySwitchlessEnabled?: boolean | cdktf.IResolvable; 
  public get storageConnectivitySwitchlessEnabled() {
    return this.getBooleanAttribute('storage_connectivity_switchless_enabled');
  }
  public set storageConnectivitySwitchlessEnabled(value: boolean | cdktf.IResolvable) {
    this._storageConnectivitySwitchlessEnabled = value;
  }
  public resetStorageConnectivitySwitchlessEnabled() {
    this._storageConnectivitySwitchlessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConnectivitySwitchlessEnabledInput() {
    return this._storageConnectivitySwitchlessEnabled;
  }

  // intent - computed: false, optional: false, required: true
  private _intent = new StackHciDeploymentSettingScaleUnitHostNetworkIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: StackHciDeploymentSettingScaleUnitHostNetworkIntent[] | cdktf.IResolvable) {
    this._intent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }

  // storage_network - computed: false, optional: false, required: true
  private _storageNetwork = new StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList(this, "storage_network", false);
  public get storageNetwork() {
    return this._storageNetwork;
  }
  public putStorageNetwork(value: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[] | cdktf.IResolvable) {
    this._storageNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork.internalValue;
  }
}
export interface StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}
  */
  readonly endingAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}
  */
  readonly startingAddress: string;
}

export function stackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolToTerraform(struct?: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ending_address: cdktf.stringToTerraform(struct!.endingAddress),
    starting_address: cdktf.stringToTerraform(struct!.startingAddress),
  }
}


export function stackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ending_address: {
      value: cdktf.stringToHclTerraform(struct!.endingAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_address: {
      value: cdktf.stringToHclTerraform(struct!.startingAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endingAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endingAddress = this._endingAddress;
    }
    if (this._startingAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingAddress = this._startingAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endingAddress = undefined;
      this._startingAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endingAddress = value.endingAddress;
      this._startingAddress = value.startingAddress;
    }
  }

  // ending_address - computed: false, optional: false, required: true
  private _endingAddress?: string; 
  public get endingAddress() {
    return this.getStringAttribute('ending_address');
  }
  public set endingAddress(value: string) {
    this._endingAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endingAddressInput() {
    return this._endingAddress;
  }

  // starting_address - computed: false, optional: false, required: true
  private _startingAddress?: string; 
  public get startingAddress() {
    return this.getStringAttribute('starting_address');
  }
  public set startingAddress(value: string) {
    this._startingAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingAddressInput() {
    return this._startingAddress;
  }
}

export class StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList extends cdktf.ComplexList {
  public internalValue? : StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[] | cdktf.IResolvable

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
  public get(index: number): StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference {
    return new StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackHciDeploymentSettingScaleUnitInfrastructureNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}
  */
  readonly dhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}
  */
  readonly dnsServer: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#ip_pool StackHciDeploymentSetting#ip_pool}
  */
  readonly ipPool: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[] | cdktf.IResolvable;
}

export function stackHciDeploymentSettingScaleUnitInfrastructureNetworkToTerraform(struct?: StackHciDeploymentSettingScaleUnitInfrastructureNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_enabled: cdktf.booleanToTerraform(struct!.dhcpEnabled),
    dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServer),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_pool: cdktf.listMapper(stackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolToTerraform, true)(struct!.ipPool),
  }
}


export function stackHciDeploymentSettingScaleUnitInfrastructureNetworkToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitInfrastructureNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool: {
      value: cdktf.listMapperHcl(stackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolToHclTerraform, true)(struct!.ipPool),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackHciDeploymentSettingScaleUnitInfrastructureNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpEnabled = this._dhcpEnabled;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._ipPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPool = this._ipPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitInfrastructureNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpEnabled = undefined;
      this._dnsServer = undefined;
      this._gateway = undefined;
      this._subnetMask = undefined;
      this._ipPool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpEnabled = value.dhcpEnabled;
      this._dnsServer = value.dnsServer;
      this._gateway = value.gateway;
      this._subnetMask = value.subnetMask;
      this._ipPool.internalValue = value.ipPool;
    }
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpEnabled() {
    return this.getBooleanAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dns_server - computed: false, optional: false, required: true
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // ip_pool - computed: false, optional: false, required: true
  private _ipPool = new StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList(this, "ip_pool", false);
  public get ipPool() {
    return this._ipPool;
  }
  public putIpPool(value: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[] | cdktf.IResolvable) {
    this._ipPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolInput() {
    return this._ipPool.internalValue;
  }
}

export class StackHciDeploymentSettingScaleUnitInfrastructureNetworkList extends cdktf.ComplexList {
  public internalValue? : StackHciDeploymentSettingScaleUnitInfrastructureNetwork[] | cdktf.IResolvable

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
  public get(index: number): StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference {
    return new StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackHciDeploymentSettingScaleUnitOptionalService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}
  */
  readonly customLocation: string;
}

export function stackHciDeploymentSettingScaleUnitOptionalServiceToTerraform(struct?: StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference | StackHciDeploymentSettingScaleUnitOptionalService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_location: cdktf.stringToTerraform(struct!.customLocation),
  }
}


export function stackHciDeploymentSettingScaleUnitOptionalServiceToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference | StackHciDeploymentSettingScaleUnitOptionalService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_location: {
      value: cdktf.stringToHclTerraform(struct!.customLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitOptionalService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLocation = this._customLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitOptionalService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLocation = value.customLocation;
    }
  }

  // custom_location - computed: false, optional: false, required: true
  private _customLocation?: string; 
  public get customLocation() {
    return this.getStringAttribute('custom_location');
  }
  public set customLocation(value: string) {
    this._customLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLocationInput() {
    return this._customLocation;
  }
}
export interface StackHciDeploymentSettingScaleUnitPhysicalNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}
  */
  readonly name: string;
}

export function stackHciDeploymentSettingScaleUnitPhysicalNodeToTerraform(struct?: StackHciDeploymentSettingScaleUnitPhysicalNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function stackHciDeploymentSettingScaleUnitPhysicalNodeToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitPhysicalNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackHciDeploymentSettingScaleUnitPhysicalNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitPhysicalNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._name = value.name;
    }
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
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
}

export class StackHciDeploymentSettingScaleUnitPhysicalNodeList extends cdktf.ComplexList {
  public internalValue? : StackHciDeploymentSettingScaleUnitPhysicalNode[] | cdktf.IResolvable

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
  public get(index: number): StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference {
    return new StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackHciDeploymentSettingScaleUnitStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}
  */
  readonly configurationMode: string;
}

export function stackHciDeploymentSettingScaleUnitStorageToTerraform(struct?: StackHciDeploymentSettingScaleUnitStorageOutputReference | StackHciDeploymentSettingScaleUnitStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_mode: cdktf.stringToTerraform(struct!.configurationMode),
  }
}


export function stackHciDeploymentSettingScaleUnitStorageToHclTerraform(struct?: StackHciDeploymentSettingScaleUnitStorageOutputReference | StackHciDeploymentSettingScaleUnitStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_mode: {
      value: cdktf.stringToHclTerraform(struct!.configurationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackHciDeploymentSettingScaleUnitStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationMode = this._configurationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnitStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationMode = value.configurationMode;
    }
  }

  // configuration_mode - computed: false, optional: false, required: true
  private _configurationMode?: string; 
  public get configurationMode() {
    return this.getStringAttribute('configuration_mode');
  }
  public set configurationMode(value: string) {
    this._configurationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationModeInput() {
    return this._configurationMode;
  }
}
export interface StackHciDeploymentSettingScaleUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}
  */
  readonly activeDirectoryOrganizationalUnitPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}
  */
  readonly bitlockerBootVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}
  */
  readonly bitlockerDataVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}
  */
  readonly credentialGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}
  */
  readonly domainFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}
  */
  readonly driftControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}
  */
  readonly drtmProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}
  */
  readonly episodicDataUploadEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}
  */
  readonly euLocationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}
  */
  readonly hvciProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}
  */
  readonly secretsLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}
  */
  readonly sideChannelMitigationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}
  */
  readonly smbClusterEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}
  */
  readonly smbSigningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}
  */
  readonly streamingDataClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}
  */
  readonly wdacEnabled?: boolean | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#cluster StackHciDeploymentSetting#cluster}
  */
  readonly cluster: StackHciDeploymentSettingScaleUnitCluster;
  /**
  * host_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#host_network StackHciDeploymentSetting#host_network}
  */
  readonly hostNetwork: StackHciDeploymentSettingScaleUnitHostNetwork;
  /**
  * infrastructure_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#infrastructure_network StackHciDeploymentSetting#infrastructure_network}
  */
  readonly infrastructureNetwork: StackHciDeploymentSettingScaleUnitInfrastructureNetwork[] | cdktf.IResolvable;
  /**
  * optional_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#optional_service StackHciDeploymentSetting#optional_service}
  */
  readonly optionalService: StackHciDeploymentSettingScaleUnitOptionalService;
  /**
  * physical_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#physical_node StackHciDeploymentSetting#physical_node}
  */
  readonly physicalNode: StackHciDeploymentSettingScaleUnitPhysicalNode[] | cdktf.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#storage StackHciDeploymentSetting#storage}
  */
  readonly storage: StackHciDeploymentSettingScaleUnitStorage;
}

export function stackHciDeploymentSettingScaleUnitToTerraform(struct?: StackHciDeploymentSettingScaleUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_organizational_unit_path: cdktf.stringToTerraform(struct!.activeDirectoryOrganizationalUnitPath),
    bitlocker_boot_volume_enabled: cdktf.booleanToTerraform(struct!.bitlockerBootVolumeEnabled),
    bitlocker_data_volume_enabled: cdktf.booleanToTerraform(struct!.bitlockerDataVolumeEnabled),
    credential_guard_enabled: cdktf.booleanToTerraform(struct!.credentialGuardEnabled),
    domain_fqdn: cdktf.stringToTerraform(struct!.domainFqdn),
    drift_control_enabled: cdktf.booleanToTerraform(struct!.driftControlEnabled),
    drtm_protection_enabled: cdktf.booleanToTerraform(struct!.drtmProtectionEnabled),
    episodic_data_upload_enabled: cdktf.booleanToTerraform(struct!.episodicDataUploadEnabled),
    eu_location_enabled: cdktf.booleanToTerraform(struct!.euLocationEnabled),
    hvci_protection_enabled: cdktf.booleanToTerraform(struct!.hvciProtectionEnabled),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    secrets_location: cdktf.stringToTerraform(struct!.secretsLocation),
    side_channel_mitigation_enabled: cdktf.booleanToTerraform(struct!.sideChannelMitigationEnabled),
    smb_cluster_encryption_enabled: cdktf.booleanToTerraform(struct!.smbClusterEncryptionEnabled),
    smb_signing_enabled: cdktf.booleanToTerraform(struct!.smbSigningEnabled),
    streaming_data_client_enabled: cdktf.booleanToTerraform(struct!.streamingDataClientEnabled),
    wdac_enabled: cdktf.booleanToTerraform(struct!.wdacEnabled),
    cluster: stackHciDeploymentSettingScaleUnitClusterToTerraform(struct!.cluster),
    host_network: stackHciDeploymentSettingScaleUnitHostNetworkToTerraform(struct!.hostNetwork),
    infrastructure_network: cdktf.listMapper(stackHciDeploymentSettingScaleUnitInfrastructureNetworkToTerraform, true)(struct!.infrastructureNetwork),
    optional_service: stackHciDeploymentSettingScaleUnitOptionalServiceToTerraform(struct!.optionalService),
    physical_node: cdktf.listMapper(stackHciDeploymentSettingScaleUnitPhysicalNodeToTerraform, true)(struct!.physicalNode),
    storage: stackHciDeploymentSettingScaleUnitStorageToTerraform(struct!.storage),
  }
}


export function stackHciDeploymentSettingScaleUnitToHclTerraform(struct?: StackHciDeploymentSettingScaleUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_organizational_unit_path: {
      value: cdktf.stringToHclTerraform(struct!.activeDirectoryOrganizationalUnitPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bitlocker_boot_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bitlockerBootVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bitlocker_data_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bitlockerDataVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credential_guard_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.credentialGuardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.domainFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drift_control_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.driftControlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drtm_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.drtmProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    episodic_data_upload_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.episodicDataUploadEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eu_location_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.euLocationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hvci_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.hvciProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_location: {
      value: cdktf.stringToHclTerraform(struct!.secretsLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    side_channel_mitigation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sideChannelMitigationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smb_cluster_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.smbClusterEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smb_signing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.smbSigningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    streaming_data_client_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.streamingDataClientEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wdac_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.wdacEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster: {
      value: stackHciDeploymentSettingScaleUnitClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitClusterList",
    },
    host_network: {
      value: stackHciDeploymentSettingScaleUnitHostNetworkToHclTerraform(struct!.hostNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitHostNetworkList",
    },
    infrastructure_network: {
      value: cdktf.listMapperHcl(stackHciDeploymentSettingScaleUnitInfrastructureNetworkToHclTerraform, true)(struct!.infrastructureNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitInfrastructureNetworkList",
    },
    optional_service: {
      value: stackHciDeploymentSettingScaleUnitOptionalServiceToHclTerraform(struct!.optionalService),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitOptionalServiceList",
    },
    physical_node: {
      value: cdktf.listMapperHcl(stackHciDeploymentSettingScaleUnitPhysicalNodeToHclTerraform, true)(struct!.physicalNode),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitPhysicalNodeList",
    },
    storage: {
      value: stackHciDeploymentSettingScaleUnitStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "StackHciDeploymentSettingScaleUnitStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingScaleUnitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackHciDeploymentSettingScaleUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryOrganizationalUnitPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryOrganizationalUnitPath = this._activeDirectoryOrganizationalUnitPath;
    }
    if (this._bitlockerBootVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitlockerBootVolumeEnabled = this._bitlockerBootVolumeEnabled;
    }
    if (this._bitlockerDataVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitlockerDataVolumeEnabled = this._bitlockerDataVolumeEnabled;
    }
    if (this._credentialGuardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialGuardEnabled = this._credentialGuardEnabled;
    }
    if (this._domainFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainFqdn = this._domainFqdn;
    }
    if (this._driftControlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.driftControlEnabled = this._driftControlEnabled;
    }
    if (this._drtmProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.drtmProtectionEnabled = this._drtmProtectionEnabled;
    }
    if (this._episodicDataUploadEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.episodicDataUploadEnabled = this._episodicDataUploadEnabled;
    }
    if (this._euLocationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.euLocationEnabled = this._euLocationEnabled;
    }
    if (this._hvciProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hvciProtectionEnabled = this._hvciProtectionEnabled;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._secretsLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsLocation = this._secretsLocation;
    }
    if (this._sideChannelMitigationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideChannelMitigationEnabled = this._sideChannelMitigationEnabled;
    }
    if (this._smbClusterEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.smbClusterEncryptionEnabled = this._smbClusterEncryptionEnabled;
    }
    if (this._smbSigningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.smbSigningEnabled = this._smbSigningEnabled;
    }
    if (this._streamingDataClientEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingDataClientEnabled = this._streamingDataClientEnabled;
    }
    if (this._wdacEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.wdacEnabled = this._wdacEnabled;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._hostNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork?.internalValue;
    }
    if (this._infrastructureNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureNetwork = this._infrastructureNetwork?.internalValue;
    }
    if (this._optionalService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalService = this._optionalService?.internalValue;
    }
    if (this._physicalNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalNode = this._physicalNode?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingScaleUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectoryOrganizationalUnitPath = undefined;
      this._bitlockerBootVolumeEnabled = undefined;
      this._bitlockerDataVolumeEnabled = undefined;
      this._credentialGuardEnabled = undefined;
      this._domainFqdn = undefined;
      this._driftControlEnabled = undefined;
      this._drtmProtectionEnabled = undefined;
      this._episodicDataUploadEnabled = undefined;
      this._euLocationEnabled = undefined;
      this._hvciProtectionEnabled = undefined;
      this._namePrefix = undefined;
      this._secretsLocation = undefined;
      this._sideChannelMitigationEnabled = undefined;
      this._smbClusterEncryptionEnabled = undefined;
      this._smbSigningEnabled = undefined;
      this._streamingDataClientEnabled = undefined;
      this._wdacEnabled = undefined;
      this._cluster.internalValue = undefined;
      this._hostNetwork.internalValue = undefined;
      this._infrastructureNetwork.internalValue = undefined;
      this._optionalService.internalValue = undefined;
      this._physicalNode.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectoryOrganizationalUnitPath = value.activeDirectoryOrganizationalUnitPath;
      this._bitlockerBootVolumeEnabled = value.bitlockerBootVolumeEnabled;
      this._bitlockerDataVolumeEnabled = value.bitlockerDataVolumeEnabled;
      this._credentialGuardEnabled = value.credentialGuardEnabled;
      this._domainFqdn = value.domainFqdn;
      this._driftControlEnabled = value.driftControlEnabled;
      this._drtmProtectionEnabled = value.drtmProtectionEnabled;
      this._episodicDataUploadEnabled = value.episodicDataUploadEnabled;
      this._euLocationEnabled = value.euLocationEnabled;
      this._hvciProtectionEnabled = value.hvciProtectionEnabled;
      this._namePrefix = value.namePrefix;
      this._secretsLocation = value.secretsLocation;
      this._sideChannelMitigationEnabled = value.sideChannelMitigationEnabled;
      this._smbClusterEncryptionEnabled = value.smbClusterEncryptionEnabled;
      this._smbSigningEnabled = value.smbSigningEnabled;
      this._streamingDataClientEnabled = value.streamingDataClientEnabled;
      this._wdacEnabled = value.wdacEnabled;
      this._cluster.internalValue = value.cluster;
      this._hostNetwork.internalValue = value.hostNetwork;
      this._infrastructureNetwork.internalValue = value.infrastructureNetwork;
      this._optionalService.internalValue = value.optionalService;
      this._physicalNode.internalValue = value.physicalNode;
      this._storage.internalValue = value.storage;
    }
  }

  // active_directory_organizational_unit_path - computed: false, optional: false, required: true
  private _activeDirectoryOrganizationalUnitPath?: string; 
  public get activeDirectoryOrganizationalUnitPath() {
    return this.getStringAttribute('active_directory_organizational_unit_path');
  }
  public set activeDirectoryOrganizationalUnitPath(value: string) {
    this._activeDirectoryOrganizationalUnitPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryOrganizationalUnitPathInput() {
    return this._activeDirectoryOrganizationalUnitPath;
  }

  // bitlocker_boot_volume_enabled - computed: false, optional: true, required: false
  private _bitlockerBootVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get bitlockerBootVolumeEnabled() {
    return this.getBooleanAttribute('bitlocker_boot_volume_enabled');
  }
  public set bitlockerBootVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._bitlockerBootVolumeEnabled = value;
  }
  public resetBitlockerBootVolumeEnabled() {
    this._bitlockerBootVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitlockerBootVolumeEnabledInput() {
    return this._bitlockerBootVolumeEnabled;
  }

  // bitlocker_data_volume_enabled - computed: false, optional: true, required: false
  private _bitlockerDataVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get bitlockerDataVolumeEnabled() {
    return this.getBooleanAttribute('bitlocker_data_volume_enabled');
  }
  public set bitlockerDataVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._bitlockerDataVolumeEnabled = value;
  }
  public resetBitlockerDataVolumeEnabled() {
    this._bitlockerDataVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitlockerDataVolumeEnabledInput() {
    return this._bitlockerDataVolumeEnabled;
  }

  // credential_guard_enabled - computed: false, optional: true, required: false
  private _credentialGuardEnabled?: boolean | cdktf.IResolvable; 
  public get credentialGuardEnabled() {
    return this.getBooleanAttribute('credential_guard_enabled');
  }
  public set credentialGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._credentialGuardEnabled = value;
  }
  public resetCredentialGuardEnabled() {
    this._credentialGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialGuardEnabledInput() {
    return this._credentialGuardEnabled;
  }

  // domain_fqdn - computed: false, optional: false, required: true
  private _domainFqdn?: string; 
  public get domainFqdn() {
    return this.getStringAttribute('domain_fqdn');
  }
  public set domainFqdn(value: string) {
    this._domainFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFqdnInput() {
    return this._domainFqdn;
  }

  // drift_control_enabled - computed: false, optional: true, required: false
  private _driftControlEnabled?: boolean | cdktf.IResolvable; 
  public get driftControlEnabled() {
    return this.getBooleanAttribute('drift_control_enabled');
  }
  public set driftControlEnabled(value: boolean | cdktf.IResolvable) {
    this._driftControlEnabled = value;
  }
  public resetDriftControlEnabled() {
    this._driftControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftControlEnabledInput() {
    return this._driftControlEnabled;
  }

  // drtm_protection_enabled - computed: false, optional: true, required: false
  private _drtmProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get drtmProtectionEnabled() {
    return this.getBooleanAttribute('drtm_protection_enabled');
  }
  public set drtmProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._drtmProtectionEnabled = value;
  }
  public resetDrtmProtectionEnabled() {
    this._drtmProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drtmProtectionEnabledInput() {
    return this._drtmProtectionEnabled;
  }

  // episodic_data_upload_enabled - computed: false, optional: true, required: false
  private _episodicDataUploadEnabled?: boolean | cdktf.IResolvable; 
  public get episodicDataUploadEnabled() {
    return this.getBooleanAttribute('episodic_data_upload_enabled');
  }
  public set episodicDataUploadEnabled(value: boolean | cdktf.IResolvable) {
    this._episodicDataUploadEnabled = value;
  }
  public resetEpisodicDataUploadEnabled() {
    this._episodicDataUploadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get episodicDataUploadEnabledInput() {
    return this._episodicDataUploadEnabled;
  }

  // eu_location_enabled - computed: false, optional: true, required: false
  private _euLocationEnabled?: boolean | cdktf.IResolvable; 
  public get euLocationEnabled() {
    return this.getBooleanAttribute('eu_location_enabled');
  }
  public set euLocationEnabled(value: boolean | cdktf.IResolvable) {
    this._euLocationEnabled = value;
  }
  public resetEuLocationEnabled() {
    this._euLocationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get euLocationEnabledInput() {
    return this._euLocationEnabled;
  }

  // hvci_protection_enabled - computed: false, optional: true, required: false
  private _hvciProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get hvciProtectionEnabled() {
    return this.getBooleanAttribute('hvci_protection_enabled');
  }
  public set hvciProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._hvciProtectionEnabled = value;
  }
  public resetHvciProtectionEnabled() {
    this._hvciProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hvciProtectionEnabledInput() {
    return this._hvciProtectionEnabled;
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // secrets_location - computed: false, optional: false, required: true
  private _secretsLocation?: string; 
  public get secretsLocation() {
    return this.getStringAttribute('secrets_location');
  }
  public set secretsLocation(value: string) {
    this._secretsLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsLocationInput() {
    return this._secretsLocation;
  }

  // side_channel_mitigation_enabled - computed: false, optional: true, required: false
  private _sideChannelMitigationEnabled?: boolean | cdktf.IResolvable; 
  public get sideChannelMitigationEnabled() {
    return this.getBooleanAttribute('side_channel_mitigation_enabled');
  }
  public set sideChannelMitigationEnabled(value: boolean | cdktf.IResolvable) {
    this._sideChannelMitigationEnabled = value;
  }
  public resetSideChannelMitigationEnabled() {
    this._sideChannelMitigationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideChannelMitigationEnabledInput() {
    return this._sideChannelMitigationEnabled;
  }

  // smb_cluster_encryption_enabled - computed: false, optional: true, required: false
  private _smbClusterEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get smbClusterEncryptionEnabled() {
    return this.getBooleanAttribute('smb_cluster_encryption_enabled');
  }
  public set smbClusterEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._smbClusterEncryptionEnabled = value;
  }
  public resetSmbClusterEncryptionEnabled() {
    this._smbClusterEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbClusterEncryptionEnabledInput() {
    return this._smbClusterEncryptionEnabled;
  }

  // smb_signing_enabled - computed: false, optional: true, required: false
  private _smbSigningEnabled?: boolean | cdktf.IResolvable; 
  public get smbSigningEnabled() {
    return this.getBooleanAttribute('smb_signing_enabled');
  }
  public set smbSigningEnabled(value: boolean | cdktf.IResolvable) {
    this._smbSigningEnabled = value;
  }
  public resetSmbSigningEnabled() {
    this._smbSigningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbSigningEnabledInput() {
    return this._smbSigningEnabled;
  }

  // streaming_data_client_enabled - computed: false, optional: true, required: false
  private _streamingDataClientEnabled?: boolean | cdktf.IResolvable; 
  public get streamingDataClientEnabled() {
    return this.getBooleanAttribute('streaming_data_client_enabled');
  }
  public set streamingDataClientEnabled(value: boolean | cdktf.IResolvable) {
    this._streamingDataClientEnabled = value;
  }
  public resetStreamingDataClientEnabled() {
    this._streamingDataClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingDataClientEnabledInput() {
    return this._streamingDataClientEnabled;
  }

  // wdac_enabled - computed: false, optional: true, required: false
  private _wdacEnabled?: boolean | cdktf.IResolvable; 
  public get wdacEnabled() {
    return this.getBooleanAttribute('wdac_enabled');
  }
  public set wdacEnabled(value: boolean | cdktf.IResolvable) {
    this._wdacEnabled = value;
  }
  public resetWdacEnabled() {
    this._wdacEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wdacEnabledInput() {
    return this._wdacEnabled;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new StackHciDeploymentSettingScaleUnitClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: StackHciDeploymentSettingScaleUnitCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // host_network - computed: false, optional: false, required: true
  private _hostNetwork = new StackHciDeploymentSettingScaleUnitHostNetworkOutputReference(this, "host_network");
  public get hostNetwork() {
    return this._hostNetwork;
  }
  public putHostNetwork(value: StackHciDeploymentSettingScaleUnitHostNetwork) {
    this._hostNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork.internalValue;
  }

  // infrastructure_network - computed: false, optional: false, required: true
  private _infrastructureNetwork = new StackHciDeploymentSettingScaleUnitInfrastructureNetworkList(this, "infrastructure_network", false);
  public get infrastructureNetwork() {
    return this._infrastructureNetwork;
  }
  public putInfrastructureNetwork(value: StackHciDeploymentSettingScaleUnitInfrastructureNetwork[] | cdktf.IResolvable) {
    this._infrastructureNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureNetworkInput() {
    return this._infrastructureNetwork.internalValue;
  }

  // optional_service - computed: false, optional: false, required: true
  private _optionalService = new StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference(this, "optional_service");
  public get optionalService() {
    return this._optionalService;
  }
  public putOptionalService(value: StackHciDeploymentSettingScaleUnitOptionalService) {
    this._optionalService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalServiceInput() {
    return this._optionalService.internalValue;
  }

  // physical_node - computed: false, optional: false, required: true
  private _physicalNode = new StackHciDeploymentSettingScaleUnitPhysicalNodeList(this, "physical_node", false);
  public get physicalNode() {
    return this._physicalNode;
  }
  public putPhysicalNode(value: StackHciDeploymentSettingScaleUnitPhysicalNode[] | cdktf.IResolvable) {
    this._physicalNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalNodeInput() {
    return this._physicalNode.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new StackHciDeploymentSettingScaleUnitStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: StackHciDeploymentSettingScaleUnitStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

export class StackHciDeploymentSettingScaleUnitList extends cdktf.ComplexList {
  public internalValue? : StackHciDeploymentSettingScaleUnit[] | cdktf.IResolvable

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
  public get(index: number): StackHciDeploymentSettingScaleUnitOutputReference {
    return new StackHciDeploymentSettingScaleUnitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackHciDeploymentSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}
  */
  readonly read?: string;
}

export function stackHciDeploymentSettingTimeoutsToTerraform(struct?: StackHciDeploymentSettingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function stackHciDeploymentSettingTimeoutsToHclTerraform(struct?: StackHciDeploymentSettingTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackHciDeploymentSettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackHciDeploymentSettingTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackHciDeploymentSettingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting azurerm_stack_hci_deployment_setting}
*/
export class StackHciDeploymentSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stack_hci_deployment_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackHciDeploymentSetting to import
  * @param importFromId The id of the existing StackHciDeploymentSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackHciDeploymentSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_stack_hci_deployment_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stack_hci_deployment_setting azurerm_stack_hci_deployment_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackHciDeploymentSettingConfig
  */
  public constructor(scope: Construct, id: string, config: StackHciDeploymentSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stack_hci_deployment_setting',
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
    this._arcResourceIds = config.arcResourceIds;
    this._id = config.id;
    this._stackHciClusterId = config.stackHciClusterId;
    this._version = config.version;
    this._scaleUnit.internalValue = config.scaleUnit;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arc_resource_ids - computed: false, optional: false, required: true
  private _arcResourceIds?: string[]; 
  public get arcResourceIds() {
    return this.getListAttribute('arc_resource_ids');
  }
  public set arcResourceIds(value: string[]) {
    this._arcResourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arcResourceIdsInput() {
    return this._arcResourceIds;
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

  // stack_hci_cluster_id - computed: false, optional: false, required: true
  private _stackHciClusterId?: string; 
  public get stackHciClusterId() {
    return this.getStringAttribute('stack_hci_cluster_id');
  }
  public set stackHciClusterId(value: string) {
    this._stackHciClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackHciClusterIdInput() {
    return this._stackHciClusterId;
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

  // scale_unit - computed: false, optional: false, required: true
  private _scaleUnit = new StackHciDeploymentSettingScaleUnitList(this, "scale_unit", false);
  public get scaleUnit() {
    return this._scaleUnit;
  }
  public putScaleUnit(value: StackHciDeploymentSettingScaleUnit[] | cdktf.IResolvable) {
    this._scaleUnit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitInput() {
    return this._scaleUnit.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackHciDeploymentSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackHciDeploymentSettingTimeouts) {
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
      arc_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arcResourceIds),
      id: cdktf.stringToTerraform(this._id),
      stack_hci_cluster_id: cdktf.stringToTerraform(this._stackHciClusterId),
      version: cdktf.stringToTerraform(this._version),
      scale_unit: cdktf.listMapper(stackHciDeploymentSettingScaleUnitToTerraform, true)(this._scaleUnit.internalValue),
      timeouts: stackHciDeploymentSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arc_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arcResourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_hci_cluster_id: {
        value: cdktf.stringToHclTerraform(this._stackHciClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_unit: {
        value: cdktf.listMapperHcl(stackHciDeploymentSettingScaleUnitToHclTerraform, true)(this._scaleUnit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackHciDeploymentSettingScaleUnitList",
      },
      timeouts: {
        value: stackHciDeploymentSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackHciDeploymentSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
