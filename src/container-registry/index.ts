// https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}
  */
  readonly anonymousPullEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}
  */
  readonly dataEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}
  */
  readonly encryption?: ContainerRegistryEncryption[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}
  */
  readonly exportPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#id ContainerRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#location ContainerRegistry#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#name ContainerRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}
  */
  readonly networkRuleBypassOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}
  */
  readonly networkRuleSet?: ContainerRegistryNetworkRuleSet[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}
  */
  readonly quarantinePolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#retention_policy ContainerRegistry#retention_policy}
  */
  readonly retentionPolicy?: ContainerRegistryRetentionPolicy[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#sku ContainerRegistry#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#tags ContainerRegistry#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#trust_policy ContainerRegistry#trust_policy}
  */
  readonly trustPolicy?: ContainerRegistryTrustPolicy[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}
  */
  readonly zoneRedundancyEnabled?: boolean | cdktf.IResolvable;
  /**
  * georeplications block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#georeplications ContainerRegistry#georeplications}
  */
  readonly georeplications?: ContainerRegistryGeoreplications[] | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#identity ContainerRegistry#identity}
  */
  readonly identity?: ContainerRegistryIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}
  */
  readonly timeouts?: ContainerRegistryTimeouts;
}
export interface ContainerRegistryEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
}

export function containerRegistryEncryptionToTerraform(struct?: ContainerRegistryEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
    identity_client_id: struct!.identityClientId === undefined ? null : cdktf.stringToTerraform(struct!.identityClientId),
    key_vault_key_id: struct!.keyVaultKeyId === undefined ? null : cdktf.stringToTerraform(struct!.keyVaultKeyId),
  }
}

export class ContainerRegistryEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityClientId = this._identityClientId;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._identityClientId = undefined;
      this._keyVaultKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._identityClientId = value.identityClientId;
      this._keyVaultKeyId = value.keyVaultKeyId;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // identity_client_id - computed: true, optional: true, required: false
  private _identityClientId?: string; 
  public get identityClientId() {
    return this.getStringAttribute('identity_client_id');
  }
  public set identityClientId(value: string) {
    this._identityClientId = value;
  }
  public resetIdentityClientId() {
    this._identityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityClientIdInput() {
    return this._identityClientId;
  }

  // key_vault_key_id - computed: true, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }
}

export class ContainerRegistryEncryptionList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryEncryption[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryEncryptionOutputReference {
    return new ContainerRegistryEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryNetworkRuleSetIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#action ContainerRegistry#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}
  */
  readonly ipRange?: string;
}

export function containerRegistryNetworkRuleSetIpRuleToTerraform(struct?: ContainerRegistryNetworkRuleSetIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    ip_range: struct!.ipRange === undefined ? null : cdktf.stringToTerraform(struct!.ipRange),
  }
}

export class ContainerRegistryNetworkRuleSetIpRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryNetworkRuleSetIpRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryNetworkRuleSetIpRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ipRange = value.ipRange;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip_range - computed: true, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }
}

export class ContainerRegistryNetworkRuleSetIpRuleList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryNetworkRuleSetIpRule[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryNetworkRuleSetIpRuleOutputReference {
    return new ContainerRegistryNetworkRuleSetIpRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryNetworkRuleSetVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#action ContainerRegistry#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#subnet_id ContainerRegistry#subnet_id}
  */
  readonly subnetId?: string;
}

export function containerRegistryNetworkRuleSetVirtualNetworkToTerraform(struct?: ContainerRegistryNetworkRuleSetVirtualNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    subnet_id: struct!.subnetId === undefined ? null : cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryNetworkRuleSetVirtualNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryNetworkRuleSetVirtualNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._subnetId = value.subnetId;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ContainerRegistryNetworkRuleSetVirtualNetworkList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryNetworkRuleSetVirtualNetwork[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference {
    return new ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryNetworkRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}
  */
  readonly ipRule?: ContainerRegistryNetworkRuleSetIpRule[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#virtual_network ContainerRegistry#virtual_network}
  */
  readonly virtualNetwork?: ContainerRegistryNetworkRuleSetVirtualNetwork[] | cdktf.IResolvable;
}

export function containerRegistryNetworkRuleSetToTerraform(struct?: ContainerRegistryNetworkRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: struct!.defaultAction === undefined ? null : cdktf.stringToTerraform(struct!.defaultAction),
    ip_rule: struct!.ipRule === undefined ? null : cdktf.listMapper(containerRegistryNetworkRuleSetIpRuleToTerraform, false)(struct!.ipRule),
    virtual_network: struct!.virtualNetwork === undefined ? null : cdktf.listMapper(containerRegistryNetworkRuleSetVirtualNetworkToTerraform, false)(struct!.virtualNetwork),
  }
}

export class ContainerRegistryNetworkRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryNetworkRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRule = this._ipRule?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryNetworkRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._ipRule.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._ipRule.internalValue = value.ipRule;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rule - computed: true, optional: true, required: false
  private _ipRule = new ContainerRegistryNetworkRuleSetIpRuleList(this, "ip_rule", true);
  public get ipRule() {
    return this._ipRule;
  }
  public putIpRule(value: ContainerRegistryNetworkRuleSetIpRule[] | cdktf.IResolvable) {
    this._ipRule.internalValue = value;
  }
  public resetIpRule() {
    this._ipRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRuleInput() {
    return this._ipRule.internalValue;
  }

  // virtual_network - computed: true, optional: true, required: false
  private _virtualNetwork = new ContainerRegistryNetworkRuleSetVirtualNetworkList(this, "virtual_network", true);
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: ContainerRegistryNetworkRuleSetVirtualNetwork[] | cdktf.IResolvable) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}

export class ContainerRegistryNetworkRuleSetList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryNetworkRuleSet[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryNetworkRuleSetOutputReference {
    return new ContainerRegistryNetworkRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#days ContainerRegistry#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerRegistryRetentionPolicyToTerraform(struct?: ContainerRegistryRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: struct!.days === undefined ? null : cdktf.numberToTerraform(struct!.days),
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerRegistryRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._enabled = value.enabled;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class ContainerRegistryRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryRetentionPolicyOutputReference {
    return new ContainerRegistryRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryTrustPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerRegistryTrustPolicyToTerraform(struct?: ContainerRegistryTrustPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerRegistryTrustPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryTrustPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTrustPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class ContainerRegistryTrustPolicyList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryTrustPolicy[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryTrustPolicyOutputReference {
    return new ContainerRegistryTrustPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryGeoreplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#location ContainerRegistry#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#regional_endpoint_enabled ContainerRegistry#regional_endpoint_enabled}
  */
  readonly regionalEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#tags ContainerRegistry#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}
  */
  readonly zoneRedundancyEnabled?: boolean | cdktf.IResolvable;
}

export function containerRegistryGeoreplicationsToTerraform(struct?: ContainerRegistryGeoreplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    regional_endpoint_enabled: cdktf.booleanToTerraform(struct!.regionalEndpointEnabled),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    zone_redundancy_enabled: cdktf.booleanToTerraform(struct!.zoneRedundancyEnabled),
  }
}

export class ContainerRegistryGeoreplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRegistryGeoreplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._regionalEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalEndpointEnabled = this._regionalEndpointEnabled;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zoneRedundancyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneRedundancyEnabled = this._zoneRedundancyEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryGeoreplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._regionalEndpointEnabled = undefined;
      this._tags = undefined;
      this._zoneRedundancyEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._regionalEndpointEnabled = value.regionalEndpointEnabled;
      this._tags = value.tags;
      this._zoneRedundancyEnabled = value.zoneRedundancyEnabled;
    }
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

  // regional_endpoint_enabled - computed: false, optional: true, required: false
  private _regionalEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get regionalEndpointEnabled() {
    return this.getBooleanAttribute('regional_endpoint_enabled');
  }
  public set regionalEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._regionalEndpointEnabled = value;
  }
  public resetRegionalEndpointEnabled() {
    this._regionalEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalEndpointEnabledInput() {
    return this._regionalEndpointEnabled;
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

  // zone_redundancy_enabled - computed: false, optional: true, required: false
  private _zoneRedundancyEnabled?: boolean | cdktf.IResolvable; 
  public get zoneRedundancyEnabled() {
    return this.getBooleanAttribute('zone_redundancy_enabled');
  }
  public set zoneRedundancyEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneRedundancyEnabled = value;
  }
  public resetZoneRedundancyEnabled() {
    this._zoneRedundancyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundancyEnabledInput() {
    return this._zoneRedundancyEnabled;
  }
}

export class ContainerRegistryGeoreplicationsList extends cdktf.ComplexList {
  public internalValue? : ContainerRegistryGeoreplications[] | cdktf.IResolvable

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
  public get(index: number): ContainerRegistryGeoreplicationsOutputReference {
    return new ContainerRegistryGeoreplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRegistryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#type ContainerRegistry#type}
  */
  readonly type: string;
}

export function containerRegistryIdentityToTerraform(struct?: ContainerRegistryIdentityOutputReference | ContainerRegistryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerRegistryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRegistryIdentity | undefined {
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

  public set internalValue(value: ContainerRegistryIdentity | undefined) {
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface ContainerRegistryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#create ContainerRegistry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#delete ContainerRegistry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#read ContainerRegistry#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry#update ContainerRegistry#update}
  */
  readonly update?: string;
}

export function containerRegistryTimeoutsToTerraform(struct?: ContainerRegistryTimeouts | cdktf.IResolvable): any {
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

export class ContainerRegistryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerRegistryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerRegistryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry azurerm_container_registry}
*/
export class ContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/container_registry azurerm_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.53.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminEnabled = config.adminEnabled;
    this._anonymousPullEnabled = config.anonymousPullEnabled;
    this._dataEndpointEnabled = config.dataEndpointEnabled;
    this._encryption.internalValue = config.encryption;
    this._exportPolicyEnabled = config.exportPolicyEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._networkRuleBypassOption = config.networkRuleBypassOption;
    this._networkRuleSet.internalValue = config.networkRuleSet;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._quarantinePolicyEnabled = config.quarantinePolicyEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._sku = config.sku;
    this._tags = config.tags;
    this._trustPolicy.internalValue = config.trustPolicy;
    this._zoneRedundancyEnabled = config.zoneRedundancyEnabled;
    this._georeplications.internalValue = config.georeplications;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // anonymous_pull_enabled - computed: false, optional: true, required: false
  private _anonymousPullEnabled?: boolean | cdktf.IResolvable; 
  public get anonymousPullEnabled() {
    return this.getBooleanAttribute('anonymous_pull_enabled');
  }
  public set anonymousPullEnabled(value: boolean | cdktf.IResolvable) {
    this._anonymousPullEnabled = value;
  }
  public resetAnonymousPullEnabled() {
    this._anonymousPullEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousPullEnabledInput() {
    return this._anonymousPullEnabled;
  }

  // data_endpoint_enabled - computed: false, optional: true, required: false
  private _dataEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get dataEndpointEnabled() {
    return this.getBooleanAttribute('data_endpoint_enabled');
  }
  public set dataEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._dataEndpointEnabled = value;
  }
  public resetDataEndpointEnabled() {
    this._dataEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEndpointEnabledInput() {
    return this._dataEndpointEnabled;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new ContainerRegistryEncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: ContainerRegistryEncryption[] | cdktf.IResolvable) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // export_policy_enabled - computed: false, optional: true, required: false
  private _exportPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get exportPolicyEnabled() {
    return this.getBooleanAttribute('export_policy_enabled');
  }
  public set exportPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._exportPolicyEnabled = value;
  }
  public resetExportPolicyEnabled() {
    this._exportPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyEnabledInput() {
    return this._exportPolicyEnabled;
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

  // login_server - computed: true, optional: false, required: false
  public get loginServer() {
    return this.getStringAttribute('login_server');
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

  // network_rule_bypass_option - computed: false, optional: true, required: false
  private _networkRuleBypassOption?: string; 
  public get networkRuleBypassOption() {
    return this.getStringAttribute('network_rule_bypass_option');
  }
  public set networkRuleBypassOption(value: string) {
    this._networkRuleBypassOption = value;
  }
  public resetNetworkRuleBypassOption() {
    this._networkRuleBypassOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleBypassOptionInput() {
    return this._networkRuleBypassOption;
  }

  // network_rule_set - computed: true, optional: true, required: false
  private _networkRuleSet = new ContainerRegistryNetworkRuleSetList(this, "network_rule_set", false);
  public get networkRuleSet() {
    return this._networkRuleSet;
  }
  public putNetworkRuleSet(value: ContainerRegistryNetworkRuleSet[] | cdktf.IResolvable) {
    this._networkRuleSet.internalValue = value;
  }
  public resetNetworkRuleSet() {
    this._networkRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleSetInput() {
    return this._networkRuleSet.internalValue;
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // quarantine_policy_enabled - computed: false, optional: true, required: false
  private _quarantinePolicyEnabled?: boolean | cdktf.IResolvable; 
  public get quarantinePolicyEnabled() {
    return this.getBooleanAttribute('quarantine_policy_enabled');
  }
  public set quarantinePolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._quarantinePolicyEnabled = value;
  }
  public resetQuarantinePolicyEnabled() {
    this._quarantinePolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantinePolicyEnabledInput() {
    return this._quarantinePolicyEnabled;
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

  // retention_policy - computed: true, optional: true, required: false
  private _retentionPolicy = new ContainerRegistryRetentionPolicyList(this, "retention_policy", false);
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: ContainerRegistryRetentionPolicy[] | cdktf.IResolvable) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
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

  // trust_policy - computed: true, optional: true, required: false
  private _trustPolicy = new ContainerRegistryTrustPolicyList(this, "trust_policy", false);
  public get trustPolicy() {
    return this._trustPolicy;
  }
  public putTrustPolicy(value: ContainerRegistryTrustPolicy[] | cdktf.IResolvable) {
    this._trustPolicy.internalValue = value;
  }
  public resetTrustPolicy() {
    this._trustPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPolicyInput() {
    return this._trustPolicy.internalValue;
  }

  // zone_redundancy_enabled - computed: false, optional: true, required: false
  private _zoneRedundancyEnabled?: boolean | cdktf.IResolvable; 
  public get zoneRedundancyEnabled() {
    return this.getBooleanAttribute('zone_redundancy_enabled');
  }
  public set zoneRedundancyEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneRedundancyEnabled = value;
  }
  public resetZoneRedundancyEnabled() {
    this._zoneRedundancyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundancyEnabledInput() {
    return this._zoneRedundancyEnabled;
  }

  // georeplications - computed: false, optional: true, required: false
  private _georeplications = new ContainerRegistryGeoreplicationsList(this, "georeplications", false);
  public get georeplications() {
    return this._georeplications;
  }
  public putGeoreplications(value: ContainerRegistryGeoreplications[] | cdktf.IResolvable) {
    this._georeplications.internalValue = value;
  }
  public resetGeoreplications() {
    this._georeplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get georeplicationsInput() {
    return this._georeplications.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ContainerRegistryIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ContainerRegistryIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerRegistryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerRegistryTimeouts) {
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
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      anonymous_pull_enabled: cdktf.booleanToTerraform(this._anonymousPullEnabled),
      data_endpoint_enabled: cdktf.booleanToTerraform(this._dataEndpointEnabled),
      encryption: cdktf.listMapper(containerRegistryEncryptionToTerraform, false)(this._encryption.internalValue),
      export_policy_enabled: cdktf.booleanToTerraform(this._exportPolicyEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_rule_bypass_option: cdktf.stringToTerraform(this._networkRuleBypassOption),
      network_rule_set: cdktf.listMapper(containerRegistryNetworkRuleSetToTerraform, false)(this._networkRuleSet.internalValue),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      quarantine_policy_enabled: cdktf.booleanToTerraform(this._quarantinePolicyEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_policy: cdktf.listMapper(containerRegistryRetentionPolicyToTerraform, false)(this._retentionPolicy.internalValue),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trust_policy: cdktf.listMapper(containerRegistryTrustPolicyToTerraform, false)(this._trustPolicy.internalValue),
      zone_redundancy_enabled: cdktf.booleanToTerraform(this._zoneRedundancyEnabled),
      georeplications: cdktf.listMapper(containerRegistryGeoreplicationsToTerraform, true)(this._georeplications.internalValue),
      identity: containerRegistryIdentityToTerraform(this._identity.internalValue),
      timeouts: containerRegistryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
