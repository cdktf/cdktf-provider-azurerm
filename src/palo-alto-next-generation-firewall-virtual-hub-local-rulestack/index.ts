// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#resource_group_name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#rulestack_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#rulestack_id}
  */
  readonly rulestackId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#tags PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * destination_nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#destination_nat PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#destination_nat}
  */
  readonly destinationNat?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat[] | cdktf.IResolvable;
  /**
  * dns_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_settings PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_settings}
  */
  readonly dnsSettings?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_profile PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_profile}
  */
  readonly networkProfile: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#timeouts PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#timeouts}
  */
  readonly timeouts?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts;
}
export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address}
  */
  readonly publicIpAddress: string;
}

export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    public_ip_address: cdktf.stringToTerraform(struct!.publicIpAddress),
  }
}


export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._publicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddress = this._publicIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._publicIpAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._publicIpAddress = value.publicIpAddress;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_ip_address - computed: false, optional: false, required: true
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
  }
}
export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#port PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
}

export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
  }
}


export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip_address_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._publicIpAddressId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._publicIpAddressId = value.publicIpAddressId;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }
}
export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#name PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#protocol PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#protocol}
  */
  readonly protocol: string;
  /**
  * backend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#backend_config PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#backend_config}
  */
  readonly backendConfig?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig;
  /**
  * frontend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#frontend_config PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#frontend_config}
  */
  readonly frontendConfig?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig;
}

export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    backend_config: paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigToTerraform(struct!.backendConfig),
    frontend_config: paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigToTerraform(struct!.frontendConfig),
  }
}


export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_config: {
      value: paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigToHclTerraform(struct!.backendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigList",
    },
    frontend_config: {
      value: paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigToHclTerraform(struct!.frontendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._backendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendConfig = this._backendConfig?.internalValue;
    }
    if (this._frontendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendConfig = this._frontendConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._backendConfig.internalValue = undefined;
      this._frontendConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._protocol = value.protocol;
      this._backendConfig.internalValue = value.backendConfig;
      this._frontendConfig.internalValue = value.frontendConfig;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // backend_config - computed: false, optional: true, required: false
  private _backendConfig = new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfigOutputReference(this, "backend_config");
  public get backendConfig() {
    return this._backendConfig;
  }
  public putBackendConfig(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatBackendConfig) {
    this._backendConfig.internalValue = value;
  }
  public resetBackendConfig() {
    this._backendConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigInput() {
    return this._backendConfig.internalValue;
  }

  // frontend_config - computed: false, optional: true, required: false
  private _frontendConfig = new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfigOutputReference(this, "frontend_config");
  public get frontendConfig() {
    return this._frontendConfig;
  }
  public putFrontendConfig(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatFrontendConfig) {
    this._frontendConfig.internalValue = value;
  }
  public resetFrontendConfig() {
    this._frontendConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendConfigInput() {
    return this._frontendConfig.internalValue;
  }
}

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList extends cdktf.ComplexList {
  public internalValue? : PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat[] | cdktf.IResolvable

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
  public get(index: number): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference {
    return new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#dns_servers PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#use_azure_dns PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#use_azure_dns}
  */
  readonly useAzureDns?: boolean | cdktf.IResolvable;
}

export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    use_azure_dns: cdktf.booleanToTerraform(struct!.useAzureDns),
  }
}


export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_azure_dns: {
      value: cdktf.booleanToHclTerraform(struct!.useAzureDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._useAzureDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAzureDns = this._useAzureDns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServers = undefined;
      this._useAzureDns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServers = value.dnsServers;
      this._useAzureDns = value.useAzureDns;
    }
  }

  // azure_dns_servers - computed: true, optional: false, required: false
  public get azureDnsServers() {
    return this.getListAttribute('azure_dns_servers');
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // use_azure_dns - computed: false, optional: true, required: false
  private _useAzureDns?: boolean | cdktf.IResolvable; 
  public get useAzureDns() {
    return this.getBooleanAttribute('use_azure_dns');
  }
  public set useAzureDns(value: boolean | cdktf.IResolvable) {
    this._useAzureDns = value;
  }
  public resetUseAzureDns() {
    this._useAzureDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAzureDnsInput() {
    return this._useAzureDns;
  }
}
export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#egress_nat_ip_address_ids}
  */
  readonly egressNatIpAddressIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#network_virtual_appliance_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#network_virtual_appliance_id}
  */
  readonly networkVirtualApplianceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#public_ip_address_ids}
  */
  readonly publicIpAddressIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#trusted_address_ranges}
  */
  readonly trustedAddressRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#virtual_hub_id PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#virtual_hub_id}
  */
  readonly virtualHubId: string;
}

export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_nat_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.egressNatIpAddressIds),
    network_virtual_appliance_id: cdktf.stringToTerraform(struct!.networkVirtualApplianceId),
    public_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicIpAddressIds),
    trusted_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedAddressRanges),
    virtual_hub_id: cdktf.stringToTerraform(struct!.virtualHubId),
  }
}


export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference | PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_nat_ip_address_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.egressNatIpAddressIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_virtual_appliance_id: {
      value: cdktf.stringToHclTerraform(struct!.networkVirtualApplianceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicIpAddressIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_address_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedAddressRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_hub_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualHubId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressNatIpAddressIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNatIpAddressIds = this._egressNatIpAddressIds;
    }
    if (this._networkVirtualApplianceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkVirtualApplianceId = this._networkVirtualApplianceId;
    }
    if (this._publicIpAddressIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressIds = this._publicIpAddressIds;
    }
    if (this._trustedAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedAddressRanges = this._trustedAddressRanges;
    }
    if (this._virtualHubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHubId = this._virtualHubId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressNatIpAddressIds = undefined;
      this._networkVirtualApplianceId = undefined;
      this._publicIpAddressIds = undefined;
      this._trustedAddressRanges = undefined;
      this._virtualHubId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressNatIpAddressIds = value.egressNatIpAddressIds;
      this._networkVirtualApplianceId = value.networkVirtualApplianceId;
      this._publicIpAddressIds = value.publicIpAddressIds;
      this._trustedAddressRanges = value.trustedAddressRanges;
      this._virtualHubId = value.virtualHubId;
    }
  }

  // egress_nat_ip_address_ids - computed: false, optional: true, required: false
  private _egressNatIpAddressIds?: string[]; 
  public get egressNatIpAddressIds() {
    return this.getListAttribute('egress_nat_ip_address_ids');
  }
  public set egressNatIpAddressIds(value: string[]) {
    this._egressNatIpAddressIds = value;
  }
  public resetEgressNatIpAddressIds() {
    this._egressNatIpAddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatIpAddressIdsInput() {
    return this._egressNatIpAddressIds;
  }

  // egress_nat_ip_addresses - computed: true, optional: false, required: false
  public get egressNatIpAddresses() {
    return this.getListAttribute('egress_nat_ip_addresses');
  }

  // ip_of_trust_for_user_defined_routes - computed: true, optional: false, required: false
  public get ipOfTrustForUserDefinedRoutes() {
    return this.getStringAttribute('ip_of_trust_for_user_defined_routes');
  }

  // network_virtual_appliance_id - computed: false, optional: false, required: true
  private _networkVirtualApplianceId?: string; 
  public get networkVirtualApplianceId() {
    return this.getStringAttribute('network_virtual_appliance_id');
  }
  public set networkVirtualApplianceId(value: string) {
    this._networkVirtualApplianceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkVirtualApplianceIdInput() {
    return this._networkVirtualApplianceId;
  }

  // public_ip_address_ids - computed: false, optional: false, required: true
  private _publicIpAddressIds?: string[]; 
  public get publicIpAddressIds() {
    return this.getListAttribute('public_ip_address_ids');
  }
  public set publicIpAddressIds(value: string[]) {
    this._publicIpAddressIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdsInput() {
    return this._publicIpAddressIds;
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // trusted_address_ranges - computed: false, optional: true, required: false
  private _trustedAddressRanges?: string[]; 
  public get trustedAddressRanges() {
    return this.getListAttribute('trusted_address_ranges');
  }
  public set trustedAddressRanges(value: string[]) {
    this._trustedAddressRanges = value;
  }
  public resetTrustedAddressRanges() {
    this._trustedAddressRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAddressRangesInput() {
    return this._trustedAddressRanges;
  }

  // trusted_subnet_id - computed: true, optional: false, required: false
  public get trustedSubnetId() {
    return this.getStringAttribute('trusted_subnet_id');
  }

  // untrusted_subnet_id - computed: true, optional: false, required: false
  public get untrustedSubnetId() {
    return this.getStringAttribute('untrusted_subnet_id');
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId;
  }
}
export interface PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#create PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#delete PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#read PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#update PaloAltoNextGenerationFirewallVirtualHubLocalRulestack#update}
  */
  readonly update?: string;
}

export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts | cdktf.IResolvable): any {
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


export function paloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts | cdktf.IResolvable): any {
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

export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack}
*/
export class PaloAltoNextGenerationFirewallVirtualHubLocalRulestack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualHubLocalRulestack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaloAltoNextGenerationFirewallVirtualHubLocalRulestack to import
  * @param importFromId The id of the existing PaloAltoNextGenerationFirewallVirtualHubLocalRulestack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaloAltoNextGenerationFirewallVirtualHubLocalRulestack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_local_rulestack azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig
  */
  public constructor(scope: Construct, id: string, config: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack',
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._rulestackId = config.rulestackId;
    this._tags = config.tags;
    this._destinationNat.internalValue = config.destinationNat;
    this._dnsSettings.internalValue = config.dnsSettings;
    this._networkProfile.internalValue = config.networkProfile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rulestack_id - computed: false, optional: false, required: true
  private _rulestackId?: string; 
  public get rulestackId() {
    return this.getStringAttribute('rulestack_id');
  }
  public set rulestackId(value: string) {
    this._rulestackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackIdInput() {
    return this._rulestackId;
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

  // destination_nat - computed: false, optional: true, required: false
  private _destinationNat = new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList(this, "destination_nat", false);
  public get destinationNat() {
    return this._destinationNat;
  }
  public putDestinationNat(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNat[] | cdktf.IResolvable) {
    this._destinationNat.internalValue = value;
  }
  public resetDestinationNat() {
    this._destinationNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNatInput() {
    return this._destinationNat.internalValue;
  }

  // dns_settings - computed: false, optional: true, required: false
  private _dnsSettings = new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsOutputReference(this, "dns_settings");
  public get dnsSettings() {
    return this._dnsSettings;
  }
  public putDnsSettings(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettings) {
    this._dnsSettings.internalValue = value;
  }
  public resetDnsSettings() {
    this._dnsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSettingsInput() {
    return this._dnsSettings.internalValue;
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile = new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rulestack_id: cdktf.stringToTerraform(this._rulestackId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      destination_nat: cdktf.listMapper(paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatToTerraform, true)(this._destinationNat.internalValue),
      dns_settings: paloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsToTerraform(this._dnsSettings.internalValue),
      network_profile: paloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileToTerraform(this._networkProfile.internalValue),
      timeouts: paloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      rulestack_id: {
        value: cdktf.stringToHclTerraform(this._rulestackId),
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
      destination_nat: {
        value: cdktf.listMapperHcl(paloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatToHclTerraform, true)(this._destinationNat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDestinationNatList",
      },
      dns_settings: {
        value: paloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsToHclTerraform(this._dnsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualHubLocalRulestackDnsSettingsList",
      },
      network_profile: {
        value: paloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileToHclTerraform(this._networkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualHubLocalRulestackNetworkProfileList",
      },
      timeouts: {
        value: paloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualHubLocalRulestackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
