// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#location PaloAltoNextGenerationFirewallVirtualNetworkPanorama#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#panorama_base64_config}
  */
  readonly panoramaBase64Config: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#tags PaloAltoNextGenerationFirewallVirtualNetworkPanorama#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * destination_nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#destination_nat PaloAltoNextGenerationFirewallVirtualNetworkPanorama#destination_nat}
  */
  readonly destinationNat?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat[] | cdktf.IResolvable;
  /**
  * dns_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#dns_settings PaloAltoNextGenerationFirewallVirtualNetworkPanorama#dns_settings}
  */
  readonly dnsSettings?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#network_profile PaloAltoNextGenerationFirewallVirtualNetworkPanorama#network_profile}
  */
  readonly networkProfile: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#timeouts PaloAltoNextGenerationFirewallVirtualNetworkPanorama#timeouts}
  */
  readonly timeouts?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts;
}
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama {
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_group_name - computed: true, optional: false, required: false
  public get deviceGroupName() {
    return this.getStringAttribute('device_group_name');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // panorama_server_1 - computed: true, optional: false, required: false
  public get panoramaServer1() {
    return this.getStringAttribute('panorama_server_1');
  }

  // panorama_server_2 - computed: true, optional: false, required: false
  public get panoramaServer2() {
    return this.getStringAttribute('panorama_server_2');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // virtual_machine_ssh_key - computed: true, optional: false, required: false
  public get virtualMachineSshKey() {
    return this.getStringAttribute('virtual_machine_ssh_key');
  }
}

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList extends cdktf.ComplexList {

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
  public get(index: number): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference {
    return new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#port PaloAltoNextGenerationFirewallVirtualNetworkPanorama#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address}
  */
  readonly publicIpAddress: string;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    public_ip_address: cdktf.stringToTerraform(struct!.publicIpAddress),
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig): any {
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

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig | undefined {
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

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig | undefined) {
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
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#port PaloAltoNextGenerationFirewallVirtualNetworkPanorama#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig): any {
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

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig | undefined {
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

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig | undefined) {
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
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#protocol PaloAltoNextGenerationFirewallVirtualNetworkPanorama#protocol}
  */
  readonly protocol: string;
  /**
  * backend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#backend_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#backend_config}
  */
  readonly backendConfig?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig;
  /**
  * frontend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#frontend_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#frontend_config}
  */
  readonly frontendConfig?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    backend_config: paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigToTerraform(struct!.backendConfig),
    frontend_config: paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigToTerraform(struct!.frontendConfig),
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat | cdktf.IResolvable): any {
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
      value: paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigToHclTerraform(struct!.backendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigList",
    },
    frontend_config: {
      value: paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigToHclTerraform(struct!.frontendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat | cdktf.IResolvable | undefined) {
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
  private _backendConfig = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference(this, "backend_config");
  public get backendConfig() {
    return this._backendConfig;
  }
  public putBackendConfig(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig) {
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
  private _frontendConfig = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference(this, "frontend_config");
  public get frontendConfig() {
    return this._frontendConfig;
  }
  public putFrontendConfig(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig) {
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

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList extends cdktf.ComplexList {
  public internalValue? : PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat[] | cdktf.IResolvable

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
  public get(index: number): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference {
    return new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#dns_servers PaloAltoNextGenerationFirewallVirtualNetworkPanorama#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#use_azure_dns PaloAltoNextGenerationFirewallVirtualNetworkPanorama#use_azure_dns}
  */
  readonly useAzureDns?: boolean | cdktf.IResolvable;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    use_azure_dns: cdktf.booleanToTerraform(struct!.useAzureDns),
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings): any {
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

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings | undefined {
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

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings | undefined) {
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
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#trusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#trusted_subnet_id}
  */
  readonly trustedSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#untrusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#untrusted_subnet_id}
  */
  readonly untrustedSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#virtual_network_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_subnet_id: cdktf.stringToTerraform(struct!.trustedSubnetId),
    untrusted_subnet_id: cdktf.stringToTerraform(struct!.untrustedSubnetId),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.trustedSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untrusted_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.untrustedSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSubnetId = this._trustedSubnetId;
    }
    if (this._untrustedSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedSubnetId = this._untrustedSubnetId;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedSubnetId = undefined;
      this._untrustedSubnetId = undefined;
      this._virtualNetworkId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedSubnetId = value.trustedSubnetId;
      this._untrustedSubnetId = value.untrustedSubnetId;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // ip_of_trust_for_user_defined_routes - computed: true, optional: false, required: false
  public get ipOfTrustForUserDefinedRoutes() {
    return this.getStringAttribute('ip_of_trust_for_user_defined_routes');
  }

  // trusted_subnet_id - computed: false, optional: true, required: false
  private _trustedSubnetId?: string; 
  public get trustedSubnetId() {
    return this.getStringAttribute('trusted_subnet_id');
  }
  public set trustedSubnetId(value: string) {
    this._trustedSubnetId = value;
  }
  public resetTrustedSubnetId() {
    this._trustedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSubnetIdInput() {
    return this._trustedSubnetId;
  }

  // untrusted_subnet_id - computed: false, optional: true, required: false
  private _untrustedSubnetId?: string; 
  public get untrustedSubnetId() {
    return this.getStringAttribute('untrusted_subnet_id');
  }
  public set untrustedSubnetId(value: string) {
    this._untrustedSubnetId = value;
  }
  public resetUntrustedSubnetId() {
    this._untrustedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedSubnetIdInput() {
    return this._untrustedSubnetId;
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkPanorama#egress_nat_ip_address_ids}
  */
  readonly egressNatIpAddressIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address_ids}
  */
  readonly publicIpAddressIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualNetworkPanorama#trusted_address_ranges}
  */
  readonly trustedAddressRanges?: string[];
  /**
  * vnet_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#vnet_configuration PaloAltoNextGenerationFirewallVirtualNetworkPanorama#vnet_configuration}
  */
  readonly vnetConfiguration: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_nat_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.egressNatIpAddressIds),
    public_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicIpAddressIds),
    trusted_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedAddressRanges),
    vnet_configuration: paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationToTerraform(struct!.vnetConfiguration),
  }
}


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference | PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile): any {
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
    vnet_configuration: {
      value: paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationToHclTerraform(struct!.vnetConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressNatIpAddressIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNatIpAddressIds = this._egressNatIpAddressIds;
    }
    if (this._publicIpAddressIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressIds = this._publicIpAddressIds;
    }
    if (this._trustedAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedAddressRanges = this._trustedAddressRanges;
    }
    if (this._vnetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetConfiguration = this._vnetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressNatIpAddressIds = undefined;
      this._publicIpAddressIds = undefined;
      this._trustedAddressRanges = undefined;
      this._vnetConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressNatIpAddressIds = value.egressNatIpAddressIds;
      this._publicIpAddressIds = value.publicIpAddressIds;
      this._trustedAddressRanges = value.trustedAddressRanges;
      this._vnetConfiguration.internalValue = value.vnetConfiguration;
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

  // vnet_configuration - computed: false, optional: false, required: true
  private _vnetConfiguration = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference(this, "vnet_configuration");
  public get vnetConfiguration() {
    return this._vnetConfiguration;
  }
  public putVnetConfiguration(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration) {
    this._vnetConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetConfigurationInput() {
    return this._vnetConfiguration.internalValue;
  }
}
export interface PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#create PaloAltoNextGenerationFirewallVirtualNetworkPanorama#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#delete PaloAltoNextGenerationFirewallVirtualNetworkPanorama#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#read PaloAltoNextGenerationFirewallVirtualNetworkPanorama#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#update PaloAltoNextGenerationFirewallVirtualNetworkPanorama#update}
  */
  readonly update?: string;
}

export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsToTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts | cdktf.IResolvable): any {
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


export function paloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsToHclTerraform(struct?: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts | cdktf.IResolvable): any {
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

export class PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama azurerm_palo_alto_next_generation_firewall_virtual_network_panorama}
*/
export class PaloAltoNextGenerationFirewallVirtualNetworkPanorama extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_palo_alto_next_generation_firewall_virtual_network_panorama";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualNetworkPanorama resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaloAltoNextGenerationFirewallVirtualNetworkPanorama to import
  * @param importFromId The id of the existing PaloAltoNextGenerationFirewallVirtualNetworkPanorama that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaloAltoNextGenerationFirewallVirtualNetworkPanorama to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_palo_alto_next_generation_firewall_virtual_network_panorama", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama azurerm_palo_alto_next_generation_firewall_virtual_network_panorama} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig
  */
  public constructor(scope: Construct, id: string, config: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_palo_alto_next_generation_firewall_virtual_network_panorama',
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
    this._location = config.location;
    this._name = config.name;
    this._panoramaBase64Config = config.panoramaBase64Config;
    this._resourceGroupName = config.resourceGroupName;
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

  // panorama - computed: true, optional: false, required: false
  private _panorama = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList(this, "panorama", false);
  public get panorama() {
    return this._panorama;
  }

  // panorama_base64_config - computed: false, optional: false, required: true
  private _panoramaBase64Config?: string; 
  public get panoramaBase64Config() {
    return this.getStringAttribute('panorama_base64_config');
  }
  public set panoramaBase64Config(value: string) {
    this._panoramaBase64Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaBase64ConfigInput() {
    return this._panoramaBase64Config;
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
  private _destinationNat = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList(this, "destination_nat", false);
  public get destinationNat() {
    return this._destinationNat;
  }
  public putDestinationNat(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat[] | cdktf.IResolvable) {
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
  private _dnsSettings = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference(this, "dns_settings");
  public get dnsSettings() {
    return this._dnsSettings;
  }
  public putDnsSettings(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings) {
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
  private _networkProfile = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      panorama_base64_config: cdktf.stringToTerraform(this._panoramaBase64Config),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      destination_nat: cdktf.listMapper(paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatToTerraform, true)(this._destinationNat.internalValue),
      dns_settings: paloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsToTerraform(this._dnsSettings.internalValue),
      network_profile: paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileToTerraform(this._networkProfile.internalValue),
      timeouts: paloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsToTerraform(this._timeouts.internalValue),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      panorama_base64_config: {
        value: cdktf.stringToHclTerraform(this._panoramaBase64Config),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destination_nat: {
        value: cdktf.listMapperHcl(paloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatToHclTerraform, true)(this._destinationNat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList",
      },
      dns_settings: {
        value: paloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsToHclTerraform(this._dnsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsList",
      },
      network_profile: {
        value: paloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileToHclTerraform(this._networkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileList",
      },
      timeouts: {
        value: paloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
